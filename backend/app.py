import ssl,os,time,smtplib,logging
from pathlib import Path
from email.message import EmailMessage
from email.headerregistry import Address
from email.errors import HeaderParseError
from threading import Lock
from fastapi import FastAPI,HTTPException,Request
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel,Field,ConfigDict
app=FastAPI()
from . import rag
class Chat(BaseModel):
    question:str=Field(min_length=2,max_length=500)
class Contact(BaseModel):
    model_config=ConfigDict(str_strip_whitespace=True)
    subject:str=Field(min_length=1,max_length=150,pattern=r"^[^\r\n\x00-\x1f\x7f]+$")
    name:str=Field(min_length=1,max_length=100)
    email:str=Field(max_length=254)
    message:str=Field(min_length=5,max_length=4000)
    website:str=''
recent = {}
rate_lock = Lock()


def limit(request, kind, n):
    now = time.monotonic()
    key = (request.client.host, kind)
    with rate_lock:
        for old in [k for k, times in recent.items() if times[-1] <= now - 60]:
            del recent[old]
        times = [t for t in recent.get(key, []) if t > now - 60]
        if len(times) >= n:
            raise HTTPException(429, 'Please try again in a minute.')
        recent[key] = times + [now]


@app.post('/api/chat')
def chat(q:Chat,request:Request):
    limit(request,'chat',15)
    if not os.getenv('GEMINI_API_KEY'):
        raise HTTPException(503, 'Portfolio AI is not configured yet.')
    try:
        return rag.answer(q.question.strip())
    except Exception as exc:
        logging.getLogger(__name__).warning("Portfolio AI failed: %s", type(exc).__name__)
        raise HTTPException(502, 'Portfolio AI is temporarily unavailable. Please try again.')
@app.post('/api/contact')
def contact(c: Contact, request: Request):
    limit(request, 'contact', 3)
    if c.website:
        raise HTTPException(422, 'Please check the form.')
    try:
        sender = Address(addr_spec=c.email)
        if not sender.username or '.' not in sender.domain or any(ord(ch) < 33 or ord(ch) == 127 for ch in c.email):
            raise ValueError()
    except (ValueError, HeaderParseError):
        raise HTTPException(422, 'Check your email address.')

    required = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD', 'CONTACT_TO']
    if not all(os.getenv(key) for key in required):
        raise HTTPException(503, 'Email delivery is not configured yet.')

    msg = EmailMessage()
    msg['From'] = os.environ['SMTP_USER']
    msg['To'] = os.environ['CONTACT_TO']
    msg['Reply-To'] = sender
    msg['Subject'] = '[Portfolio] ' + c.subject
    msg.set_content(f'From {c.name} <{c.email}>\n\n{c.message}')
    try:
        port = int(os.getenv('SMTP_PORT', '587'))
        with smtplib.SMTP(os.environ['SMTP_HOST'], port, timeout=12) as server:
            server.starttls(context=ssl.create_default_context())
            server.login(os.environ['SMTP_USER'], os.environ['SMTP_PASSWORD'])
            server.send_message(msg)
    except (OSError, ValueError, smtplib.SMTPException):
        raise HTTPException(502, 'Delivery failed. Please try again later.')
    return {'text': 'Message accepted by the mail server.'}


app.mount('/',StaticFiles(directory=str(Path(__file__).resolve().parents[1]/'dist'),html=True))
