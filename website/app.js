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
