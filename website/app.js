'use strict';
const menu = document.querySelector('#menu-dialog');
const contact = document.querySelector('#contact-dialog');
const header = document.querySelector('#site-header');
const form = document.querySelector('#contact-form');
const prepared = document.querySelector('#prepared');
const contactLine = document.querySelector('#contact-line');
const colors = [
  {name:'Rojo impulso',hex:'#EB4937'},
  {name:'Azul profundo',hex:'#3155AB'},
  {name:'Plata mineral',hex:'#B9B3A1'},
  {name:'Verde bosque',hex:'#345F4B'},
  {name:'Cobre cálido',hex:'#B88856'}
];
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#open-menu').addEventListener('click',()=>menu.showModal());
document.querySelector('[data-close-menu]').addEventListener('click',()=>menu.close());
menu.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>menu.close()));
document.querySelectorAll('[data-contact]').forEach(button=>button.addEventListener('click',()=>{
  if(button.dataset.line) contactLine.value=button.dataset.line;
  form.hidden=false;
  prepared.hidden=true;
  contact.showModal();
}));
document.querySelector('[data-close-contact]').addEventListener('click',()=>contact.close());
[menu,contact].forEach(dialog=>dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}}));
form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const name=document.querySelector('#contact-name').value.trim();
  const line=contactLine.value;
  const message=document.querySelector('#contact-message').value.trim();
  if(!name||!message)return;
  const subject='Consulta web · '+line;
  const body=`Hola, equipo de Pinturas JM.\n\nSoy ${name}.\nMe interesa: ${line}.\n\n${message}\n\nGracias.`;
  document.querySelector('#prepared-email').href='mailto:pedidosycotizaciones@pinturasjm.mx?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  form.hidden=true;
  prepared.hidden=false;
  document.querySelector('#prepared-email').focus();
});
document.querySelector('#edit-message').addEventListener('click',()=>{form.hidden=false;prepared.hidden=true;document.querySelector('#contact-message').focus()});
document.querySelectorAll('.line-item').forEach(detail=>detail.addEventListener('toggle',()=>{if(!detail.open)return;document.querySelectorAll('.line-item').forEach(other=>{if(other!==detail)other.open=false})}));
document.querySelectorAll('[data-color]').forEach(button=>button.addEventListener('click',()=>{
  const selected=colors[Number(button.dataset.color)];
  document.querySelector('#color-art').style.setProperty('--paint',selected.hex);
  document.querySelector('#color-name').textContent=selected.name;
  document.querySelector('#color-hex').textContent=selected.hex;
  document.querySelectorAll('[data-color]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button))});
  document.querySelector('.color-caption small').textContent='COLOR CONCEPTUAL / '+String(Number(button.dataset.color)+1).padStart(2,'0');
}));
document.querySelector('#light-angle').addEventListener('input',event=>{
  const angle=Number(event.target.value);
  document.querySelector('#light-value').textContent=angle+'°';
  document.querySelector('#color-art').style.setProperty('--angle',angle+'deg');
  document.querySelector('#shine').setAttribute('x1',String(angle/100));
  document.querySelector('#shine').setAttribute('x2',String(1-angle/150));
});
let scrollQueued=false;
function updateHeader(){header.classList.toggle('is-scrolled',window.scrollY>80);scrollQueued=false}
window.addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateHeader)}},{passive:true});
updateHeader();
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.body.classList.add('motion');
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:0.1});
  document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
}

// Original cursor-driven paint reveal. Screen colors are artistic, not formulas.
(()=>{
  const hero=document.querySelector('.hero'),canvas=document.querySelector('#paint-canvas');
  const ctx=canvas.getContext('2d');
  if(!ctx){document.querySelector('.paint-panel').hidden=true;return;}
  const mask=document.createElement('canvas'),maskCtx=mask.getContext('2d');
  const layer=document.createElement('canvas'),layerCtx=layer.getContext('2d');
  const image=new Image();
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const coarse=matchMedia('(pointer: coarse)');
  const preview=document.querySelector('#paint-preview'),touch=document.querySelector('#paint-touch');
  const hint=document.querySelector('#paint-hint');
  let w=0,h=0,scale=1,frame=0,previous=null,points=[],full=false,enabled=false,ready=false,visible=true,lastTime=0;
  let hue=115,paintUntil=0;
  function source(){
    if(!ready)return;
    layerCtx.clearRect(0,0,w,h);
    const fit=Math.max(w/image.width,h/image.height),iw=image.width*fit,ih=image.height*fit;
    const position=w<=480?.61:w<=1000?.68:.67;
    layerCtx.filter=`hue-rotate(${hue}deg) saturate(1.25)`;
    layerCtx.drawImage(image,(w-iw)*position,(h-ih)*.5,iw,ih);
    layerCtx.filter='none';
  }
  function size(){
    w=hero.clientWidth;h=hero.clientHeight;scale=Math.min(devicePixelRatio||1,1.5);
    [canvas,mask,layer].forEach(c=>{c.width=Math.round(w*scale);c.height=Math.round(h*scale);c.getContext('2d').setTransform(scale,0,0,scale,0,0)});
    source();wake();
  }
  function dab(x,y){
    const radius=Math.min(w*.17,120);
    // Overlapping soft lobes avoid the circular spotlight look.
    for(let k=0;k<5;k++){
      const a=k*2.399,ox=Math.cos(a)*radius*.26,oy=Math.sin(a)*radius*.22,r=radius*(.66+k*.045);
      const g=maskCtx.createRadialGradient(x+ox,y+oy,r*.36,x+ox,y+oy,r);
      g.addColorStop(0,'rgba(255,255,255,.94)');g.addColorStop(.7,'rgba(255,255,255,.82)');g.addColorStop(1,'rgba(255,255,255,0)');
      maskCtx.fillStyle=g;maskCtx.fillRect(x+ox-r,y+oy-r,r*2,r*2);
    }
  }
  function render(time){
    frame=0;
    if(!ready||!visible)return;
    const delta=Math.min(time-lastTime||16,64);lastTime=time;
    maskCtx.globalCompositeOperation='destination-out';
    maskCtx.fillStyle=`rgba(0,0,0,${1-Math.exp(-delta/850)})`;maskCtx.fillRect(0,0,w,h);
    maskCtx.globalCompositeOperation='source-over';
    points.forEach(p=>dab(p.x,p.y));points=[];
    ctx.clearRect(0,0,w,h);ctx.globalCompositeOperation='source-over';ctx.drawImage(layer,0,0,w,h);
    if(!full){ctx.globalCompositeOperation='destination-in';ctx.drawImage(mask,0,0,w,h);ctx.globalCompositeOperation='source-over'}
    if(!full&&time<(paintUntil)&&!reduced.matches)frame=requestAnimationFrame(render);
  }
  function wake(){if(!frame&&ready&&visible)frame=requestAnimationFrame(render)}
  function point(event){
    if(!ready||full||reduced.matches||(event.pointerType==='touch'&&!enabled))return;
    if(event.target.closest('button,a,.paint-panel')){previous=null;return}
    const r=hero.getBoundingClientRect(),p={x:event.clientX-r.left,y:event.clientY-r.top};
    if(previous){const distance=Math.hypot(p.x-previous.x,p.y-previous.y),steps=Math.min(30,Math.ceil(distance/15));for(let i=1;i<=steps;i++)points.push({x:previous.x+(p.x-previous.x)*i/steps,y:previous.y+(p.y-previous.y)*i/steps})}
    else points.push(p);
    previous=p;paintUntil=performance.now()+4000;wake();
  }
  function setFull(value){full=value;preview.setAttribute('aria-pressed',String(full));preview.textContent=full?'Volver al pincel ↗':'Ver acabado completo ↗';wake()}
  hero.addEventListener('pointermove',point,{passive:true});
  hero.addEventListener('pointerdown',event=>{previous=null;point(event)});
  hero.addEventListener('pointerleave',()=>{previous=null});
  hero.addEventListener('pointerup',()=>{previous=null});
  touch.addEventListener('click',()=>{enabled=!enabled;canvas.classList.toggle('touch-enabled',enabled);touch.setAttribute('aria-pressed',String(enabled));touch.textContent=enabled?'Desactivar pincel':'Activar pincel';hint.textContent=enabled?'Desliza sobre la imagen para pintar.':'Activa el pincel o mira el acabado.'});
  preview.addEventListener('click',()=>setFull(!full));
  document.querySelectorAll('[data-paint]').forEach(button=>button.addEventListener('click',()=>{
    hue=[115,0,155][Number(button.dataset.paint)];source();
    document.querySelectorAll('[data-paint]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    // A complete preview also makes the palette usable with keyboard and touch.
    setFull(true);
  }));
  if(coarse.matches)hint.textContent='Activa el pincel o mira el acabado.';
  if(reduced.matches)hint.textContent='Elige y explora un acabado sin movimiento.';
  new ResizeObserver(size).observe(hero);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)wake();else if(frame){cancelAnimationFrame(frame);frame=0}},{threshold:0}).observe(hero);
  document.addEventListener('visibilitychange',()=>{if(document.hidden){if(frame)cancelAnimationFrame(frame);frame=0}else wake()});
  image.onload=()=>{ready=true;hero.classList.add('paint-active');size()};
  image.onerror=()=>{document.querySelector('.paint-panel').hidden=true};
  image.src='assets/hero-color.png';
})();
