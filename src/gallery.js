const viewer=document.createElement('dialog');
viewer.className='capture-view';
viewer.setAttribute('aria-labelledby','capture-caption');
viewer.innerHTML='<img alt=""><footer><span id="capture-caption"></span><button type="button">Close</button></footer>';
document.body.append(viewer);
for(const link of document.querySelectorAll('.capture')){
  link.addEventListener('click',event=>{
    if(event.ctrlKey||event.metaKey||event.shiftKey)return;
    event.preventDefault();
    const image=viewer.querySelector('img');
    image.src=link.href;
    image.alt=link.querySelector('img').alt;
    viewer.querySelector('span').textContent=image.alt;
    viewer.showModal();
  });
}
viewer.querySelector('button').onclick=()=>viewer.close();
