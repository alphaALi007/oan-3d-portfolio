const dialog=document.createElement('dialog');document.body.append(dialog);
for(const button of document.querySelectorAll('[data-panel]'))button.onclick=()=>{
 const chat=button.dataset.panel==='chat';
 dialog.innerHTML='<button aria-label="Close">×</button><h2 style="font-size:30px">'+(chat?'Ask about Oan':'Contact Oan')+'</h2><form>'+(chat?'<label>What would you like to know about Oan?<input name="question" required maxlength="500"></label>':'<label>Name<input name="name" autocomplete="name" maxlength="100" required></label><label>Email<input name="email" type="email" autocomplete="email" maxlength="254" required></label><label>Subject<input name="subject" maxlength="150" required></label><label>Message<textarea name="message" required minlength="5" maxlength="4000"></textarea></label><input name="website" tabindex="-1" autocomplete="off">')+'<button>Send</button></form><output aria-live="polite"></output>';
 dialog.querySelector('button').onclick=()=>dialog.close();dialog.setAttribute('aria-label',chat?'Ask about Oan':'Contact Oan');dialog.showModal();
 const form = dialog.querySelector('form');
 const output = dialog.querySelector('output');
 const send = form.querySelector('button');
 form.addEventListener('input', event => event.target.setCustomValidity(''));
 form.addEventListener('submit', async event => {
   event.preventDefault();
   const values = Object.fromEntries(new FormData(form));
   for (const field of form.querySelectorAll('[required]')) {
     values[field.name] = field.value.trim();
     if (values[field.name].length < Math.max(1, field.minLength)) {
       field.setCustomValidity('Please enter more detail.');
       field.reportValidity();
       return;
     }
   }
   send.disabled = true;
   output.textContent = 'Sending…';
   try {
     const response = await fetch(chat ? '/api/chat' : '/api/contact', {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(values)
     });
     const data = await response.json();
     if (response.ok) {
       if (!chat) form.reset();
       output.textContent = data.text;
       if (chat && data.sources?.length) {
         const sources = document.createElement('small');
         sources.style.display = 'block';
         sources.style.marginTop = '12px';
         sources.textContent = 'Knowledge retrieved: ' + data.sources.join(' · ');
         output.append(sources);
       }
     } else {
       output.textContent = typeof data.detail === 'string' ? data.detail : 'Please check the form.';
     }
   } catch {
     output.textContent = 'The portfolio server is unavailable. Please try again.';
   } finally {
     send.disabled = false;
   }
 });
};
const menu = document.querySelector('.chapter-menu');
menu.querySelector('nav').addEventListener('click', () => { menu.open = false; });
document.addEventListener('pointerdown', e => { if (!menu.contains(e.target)) menu.open = false; });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
});
