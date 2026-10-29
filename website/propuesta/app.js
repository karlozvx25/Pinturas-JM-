'use strict';
const $=selector=>document.querySelector(selector);
const money=value=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(value);
const flows=[
 {kicker:'RECEPCIÓN CONTRA LO SOLICITADO',title:'Primero validar.<br>Después, disponer.',description:'Registrar los bultos al llegar y contrastar su contenido contra la orden de compra. Diferencias, lotes y evidencia quedan vinculados a la recepción.',result:'La entrada de mercancía tiene un origen, una validación y un responsable.',nodes:[['OC','SOLICITADO'],['SCAN','VALIDADO'],['STOCK','DISPONIBLE']],caption:'FLUJO PROPUESTO DE RECEPCIÓN',alert:'Diferencias visibles · Ajustes autorizados'},
 {kicker:'TRÁNSITO Y RECEPCIÓN CIEGA',title:'Lo enviado se rastrea.<br>Lo recibido se acredita.',description:'El inventario recorre reserva, despacho, tránsito y recepción. La sucursal confirma lo que físicamente descarga; los faltantes conservan su expediente hasta resolverse.',result:'Una diferencia de entrega no se convierte en inventario disponible de la tienda.',nodes:[['10','DESPACHADAS'],['8','RECIBIDAS'],['2','POR RESOLVER']],caption:'EJEMPLO ILUSTRATIVO · NO SON DATOS REALES',alert:'Disponible en sucursal: 8 piezas'},
 {kicker:'CONOCIMIENTO QUE PERMANECE',title:'Cada fórmula,<br>una historia recuperable.',description:'Componentes en gramos, línea, presentación, versión y muestra fotográfica se vinculan al ticket. El conocimiento del igualador se conserva para la siguiente preparación.',result:'Fórmulas trazables para recompra, con ajustes autorizados y consumo de insumos.',nodes:[['g','FÓRMULA'],['V.02','AJUSTE'],['FOLIO','TICKET']],caption:'GRAMAJES + VERSIÓN + VENTA VINCULADA',alert:'RGB es referencia visual, no formulación física'},
 {kicker:'MOSTRADOR ASISTIDO',title:'Una venta simple.<br>Un proceso completo.',description:'Escanear, elegir presentación, resolver el kit y cobrar. Los componentes se descuentan por separado. Los cortes muestran diferencias y cada autorización deja rastro.',result:'Menos decisiones improvisadas, con claridad para la cajera y control para la dirección.',nodes:[['SKU','ESCANEAR'],['KIT','VALIDAR'],['VENTA','REGISTRAR']],caption:'VENTA ASISTIDA · PERMISOS POR ROL',alert:'Sin duplicados al sincronizar el POS'}
];
function chooseFlow(index){
 const item=flows[index];$('#flow-kicker').textContent=item.kicker;$('#flow-title').innerHTML=item.title;$('#flow-description').textContent=item.description;$('#flow-result').textContent=item.result;
 $('#flow-visual').innerHTML='<div class="flow-track">'+item.nodes.map((n,i)=>`${i?'<span class="flow-arrow">→</span>':''}<div class="flow-node"><strong>${n[0]}</strong><span>${n[1]}</span></div>`).join('')+'</div><span class="flow-visual-caption">'+item.caption+'</span><span class="flow-caption-alert">'+item.alert+'</span>';
 $('#flow-panel').setAttribute('aria-labelledby','flow-tab-'+index);
 document.querySelectorAll('[data-flow]').forEach((button,i)=>{button.setAttribute('aria-selected',String(i===index));button.tabIndex=i===index?0:-1});
}
function tabsKeyboard(event,buttons,select){
 const current=buttons.indexOf(event.target);if(current<0)return;let next=current;
 if(event.key==='ArrowRight'||event.key==='ArrowDown')next=(current+1)%buttons.length;
 else if(event.key==='ArrowLeft'||event.key==='ArrowUp')next=(current-1+buttons.length)%buttons.length;
 else if(event.key==='Home')next=0;else if(event.key==='End')next=buttons.length-1;else return;
 event.preventDefault();select(next);buttons[next].focus({preventScroll:true});buttons[next].scrollIntoView({block:'nearest',inline:'nearest'});
}
const flowButtons=[...document.querySelectorAll('[data-flow]')];flowButtons.forEach(button=>button.addEventListener('click',()=>chooseFlow(Number(button.dataset.flow))));$('.journey-tabs').addEventListener('keydown',event=>tabsKeyboard(event,flowButtons,chooseFlow));chooseFlow(0);
$('#module-list').innerHTML=proposalModules.map((item,i)=>`<button role="tab" id="module-tab-${i}" data-module="${i}" aria-controls="module-detail" aria-selected="${i===0}" tabindex="${i===0?0:-1}"><small>${String(i+1).padStart(2,'0')}</small>${item.title}<span aria-hidden="true">↗</span></button>`).join('');
const symbols=['⌗','↙','◇','⇄','◉','⊞','↗','≋','▤','✳','⌘','◎','⊙'];
function chooseModule(index){
 renderModuleArchitecture(index);
 const item=proposalModules[index];$('#module-number').textContent=String(index+1).padStart(2,'0')+' / 13';$('#module-title').textContent=item.title;$('#module-description').textContent=item.description;$('#module-symbol').innerHTML='<span>'+symbols[index]+'</span>';$('#module-detail').setAttribute('aria-labelledby','module-tab-'+index);
 document.querySelectorAll('[data-module]').forEach((button,i)=>{button.setAttribute('aria-selected',String(i===index));button.tabIndex=i===index?0:-1});
}
const moduleButtons=[...document.querySelectorAll('[data-module]')];moduleButtons.forEach(button=>button.addEventListener('click',()=>{chooseModule(Number(button.dataset.module));if(matchMedia('(max-width:560px)').matches)$('#module-detail').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})}));$('#module-list').addEventListener('keydown',event=>tabsKeyboard(event,moduleButtons,chooseModule));chooseModule(0);
const narrow=matchMedia('(max-width:560px)');const updateOrientation=()=>$('#module-list').setAttribute('aria-orientation',narrow.matches?'horizontal':'vertical');narrow.addEventListener('change',updateOrientation);updateOrientation();
const phases=[
 {title:'Levantamiento y diseño',from:1,to:5,description:'Mapa de procesos, alcance detallado, roles y permisos, criterios de aceptación, arquitectura, revisión de datos SAE, inventario de equipos y prototipo validado con usuarios.'},
 {title:'Base operativa y CEDIS',from:6,to:18,description:'Catálogo y códigos de barras, compras, recepción, inventarios, producción JM, roles y trazabilidad. Una base consistente para controlar el movimiento de la mercancía.'},
 {title:'Color y distribución',from:15,to:23,description:'Fórmulas, kits, consumo de insumos, reabasto, tránsito y recepción en sucursal. Servicio mínimo de tickets para probar igualados vinculados a la venta.'},
 {title:'Venta y control',from:19,to:29,description:'POS, mayoreo, cortes, crédito, facturación, tableros y asistencia operativa. Las pruebas incluyen continuidad de venta y sincronización sin duplicados.'},
 {title:'Integración y despliegue',from:27,to:34,description:'Web vinculada al portal, catálogo y pedidos, seguimiento comercial, migración validada y capacitación. Piloto en CEDIS y una sucursal, seguido de despliegue a las restantes y entrega documental.'}
];
$('#roadmap-chart').innerHTML=phases.map((phase,i)=>`<button class="phase-row" data-phase="${i}" aria-pressed="${i===0}" aria-controls="phase-detail"><span class="phase-name"><small>${String(i).padStart(2,'0')}</small>${phase.title}</span><span class="phase-track" aria-hidden="true"><i style="grid-column:${phase.from}/${phase.to+1}"></i></span><span class="phase-range">SEM ${phase.from}—${phase.to}</span></button>`).join('');
function choosePhase(index){const phase=phases[index];$('#phase-window').textContent='ETAPA '+index+' / SEMANAS '+phase.from+'–'+phase.to;$('#phase-title').textContent=phase.title;$('#phase-description').textContent=phase.description;document.querySelectorAll('[data-phase]').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)))}
document.querySelectorAll('[data-phase]').forEach(button=>button.addEventListener('click',()=>choosePhase(Number(button.dataset.phase))));choosePhase(0);
const moneyCents=value=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',minimumFractionDigits:2,maximumFractionDigits:2}).format(value);
function setTax(included){
 const factor=included?1.16:1;
 document.querySelectorAll('[data-price]').forEach(node=>{const [key,field]=node.dataset.price.split(':');node.textContent=money(Math.round(commercialOptions[key][field]*factor))});
 document.querySelectorAll('[data-monthly]').forEach(node=>{const c=commercialOptions[node.dataset.monthly];node.textContent='≈ '+moneyCents((c.base-c.deposit)/c.months*factor)});
 document.querySelectorAll('.commercial-tax').forEach(node=>node.textContent=included?'MXN · IVA INCLUIDO':'MXN + IVA');
 $('#payments-tax-label').textContent=included?'IMPORTES CON IVA · MXN':'IMPORTES SIN IVA · MXN';
 $('#payments').innerHTML=Object.entries(commercialOptions).map(([key,c])=>{const schedule=displayedSchedule(key,included);return `<article class="schedule-card"><h4>Opción ${key} · ${c.months} mensualidades</h4><p>Anticipo: <b>${moneyCents(c.deposit*factor)}</b></p><p>Primera mensualidad: <b>${c.delay} días después del anticipo</b></p><p>${c.months-1} mensualidades de <b>${moneyCents(schedule[0])}</b><br>Última mensualidad: <b>${moneyCents(schedule.at(-1))}</b></p><small>${included?'IVA incluido; redondeos finales se concilian en facturación.':'Cada pago más IVA.'} Sin intereses adicionales.</small></article>`}).join('');
 document.querySelectorAll('[data-tax]').forEach(button=>button.setAttribute('aria-pressed',String((button.dataset.tax==='true')===included)));
}
document.querySelectorAll('[data-tax]').forEach(button=>button.addEventListener('click',()=>setTax(button.dataset.tax==='true')));setTax(false);
let isLight=false;try{isLight=localStorage.getItem('syborx-pjm-proposal-theme')==='light'}catch{}
function renderTheme(){document.body.classList.toggle('light',isLight);$('#theme').setAttribute('aria-label',isLight?'Activar modo oscuro':'Activar modo claro');$('#theme').setAttribute('aria-pressed',String(isLight));document.querySelector('meta[name="theme-color"]').content=isLight?'#f4f3ed':'#121414'}
$('#theme').addEventListener('click',()=>{isLight=!isLight;renderTheme();try{localStorage.setItem('syborx-pjm-proposal-theme',isLight?'light':'dark')}catch{}});renderTheme();
let scheduled=false;const nav=[...document.querySelectorAll('.masthead nav a')];
function updateScroll(){
 $('.masthead').classList.toggle('scrolled',scrollY>40);const available=document.documentElement.scrollHeight-innerHeight;$('#reading-bar').style.transform=`scaleX(${available>0?Math.min(1,scrollY/available):0})`;
 let active='';nav.forEach(link=>{const section=document.querySelector(link.getAttribute('href'));if(section.getBoundingClientRect().top<=innerHeight*.35)active=link.getAttribute('href')});nav.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===active));scheduled=false;
}
addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateScroll)}},{passive:true});addEventListener('resize',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateScroll)}});updateScroll();
