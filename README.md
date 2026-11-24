# Oan Ali · The Creator’s League

## Run on Windows

Extract the whole ZIP, open the folder containing this README in VS Code, and open its PowerShell terminal. The compiled portfolio is included. Python 3.11 or newer is sufficient to run it.

~~~powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
Copy-Item .env.example .env
.\.venv\Scripts\python.exe -m uvicorn backend.app:app --env-file .env --port 8000
~~~

Open http://localhost:8000 in a current browser with hardware acceleration enabled. Create the .env file once. On subsequent runs use the last command.

## Connect your inbox

Edit the local .env file. Choose the SMTP submission settings for your email provider. The form uses authenticated STARTTLS, normally on port 587.

| Setting | Value |
| --- | --- |
| SMTP_HOST | Your provider’s SMTP hostname |
| SMTP_PORT | Its STARTTLS submission port |
| SMTP_USER | The sending mailbox address |
| SMTP_PASSWORD | The sending mailbox’s SMTP credential or app password |
| CONTACT_TO | The inbox where you want visitor messages |

Restart the server after saving. Open **Explore → Contact → Contact Oan**, fill in all four fields and send a distinctive subject. Look for **[Portfolio]** followed by that subject in the destination inbox, including the spam folder. Save a screenshot of the received message showing the subject and date for your submission. Replying to the message addresses the visitor. Keep the .env file private.

## Portfolio

## Module 4 — RAG portfolio assistant

Keep your existing SMTP settings in your private .env file and append
`GEMINI_API_KEY=your_key_here`. By default the backend uses
`gemini-embedding-001` for embeddings and `gemini-2.5-flash` for answers.
Optional GEMINI_EMBEDDING_MODEL and GEMINI_MODEL settings override those defaults.
Restart the backend with `py -m uvicorn backend.app:app --env-file .env --port 8000`.
Open Ask about Oan and ask a question. The first request builds the index.

The curated knowledge.json contains individually searchable topical chunks.
The Gemini embeddings endpoint converts each chunk to a dense vector, and
the backend normalizes and caches the vectors in backend/.rag-index.json.
The cache rebuilds automatically when the knowledge or embedding model changes.
Each question is embedded with the retrieval query task, ranked by cosine
similarity, and the five most relevant chunks are sent to Gemini with a
professional, context-only answering instruction. The UI displays the
retrieved topic names. Unsupported questions should receive an explicit
unknown response. The local vector index uses Python's standard library
and requires no heavy ML dependencies. API errors are shown to visitors
without exposing the key. The API key stays on the server.

Test questions: What is Oan's graduation year? What is his proudest project?
Where did he intern? Is he available for freelance work? What is his favourite
food? Record the actual answers after configuring Gemini. The last question
should be answered as unavailable.

Explore links to Oan’s profile, skills, projects, education and contact chapter. Scrolling moves the stadium camera. Project thumbnails open larger views. The screen reel is included in public/media. Source files are in src, and the ready-to-run version is in dist.

For frontend edits, install Node.js 22.12 or newer and run npm ci, then npm run dev in another terminal. Keep the Python backend running on port 8000. Run npm run build to update dist.

## Verification

The production build passed. Automated checks covered the six navigation targets, all six project images, the stadium reel, and the contact endpoint. A local SMTP receiver accepted a test submission over authenticated TLS. Open evidence/local-test-message.eml to inspect the received message and evidence/checks.txt for the results. The example addresses belong to the local test. A live inbox receipt requires the mailbox configuration above.

Desktop, tablet and phone styles are included. Visual and frame-rate checks on those devices remain pending. To check each layout, open Explore, jump to Projects, enlarge a screenshot, then visit Contact and check all four fields and the Send button.

## Oan's Blender avatar

Open **Explore → About Oan**. Click or tap Oan’s jersey or face to play his wave. The **Wave to Oan** button also works with a keyboard. The wave plays once, then his hands settle back over his lap. Click again to replay it.

The avatar comes from the supplied standing model.glb. Its mesh was simplified for the web, its textures were resized, and a 13-bone skeleton was added. The seated pose is the model’s default. The Wave clip animates the right upper arm, forearm and hand.

Open avatar-source/Oan-Matchday.blend to edit the character. Press Space to preview the Wave action. The textures are packed in the Blender file and embedded in public/models/Oan-Matchday.glb. The production build includes its own copy. avatar-source/Avatar-preview.png is a Blender render using the portfolio’s seat geometry and camera position.
