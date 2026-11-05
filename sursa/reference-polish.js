// V20: the supplied reference governs hierarchy, colour and visual detail.
Object.assign(I18N,{
  'Planul tău nutrițional':'Your nutrition plan', 'Ce vrei să obții?':'What would you like to achieve?',
  'Deficit caloric':'Calorie deficit','Surplus caloric':'Calorie surplus',
  'Ritm estimat':'Estimated pace','medie pe perioada afișată':'average over the displayed period',
  'Țintă și setări avansate':'Target and advanced settings','Intervale și precauții':'Ranges and precautions',
  'Distribuția meselor':'Meal distribution','Detalii și formule':'Details and formulas',
  'Interpretarea rezultatelor':'Understanding the results','Surse științifice':'Scientific sources',
  'Setări pentru proiecție':'Projection settings','Detalii despre mese':'Meal details',
  'Date suplimentare':'Additional data','Meniu':'Menu','Închide meniul':'Close menu',
  'Alege tema':'Choose theme','Automat':'Automatic','Deficit':'Deficit','Surplus':'Surplus',
  'BMR (Metabolism bazal)':'BMR (Basal metabolism)','TDEE (Necesar total)':'TDEE (Daily needs)',
  'Detalii de calcul':'Calculation details'
  ,'Compară modelul simplu':'Compare the simple model'
  ,'Fibre, lichide și monitorizare':'Fibre, fluids and monitoring'
  ,'(Metabolism bazal)':'(Basal metabolism)', '(Necesar total)':'(Daily needs)'
});
const OUTLINE_PATHS={
 user:'<circle cx="12" cy="7" r="4"/><path d="M3.5 21v-2c0-4 17-4 17 0v2c-5 2-12 2-17 0Z"/>',
 target:'<circle cx="11" cy="13" r="8"/><circle cx="11" cy="13" r="4"/><path d="m11 13 9-10m-4 1h5v5"/>',
 heart:'<path d="M12 20s-9-5-9-11c0-6 7-7 9-2 2-5 9-4 9 2 0 6-9 11-9 11Z"/><path d="M9 23h6"/>',
 utensils:'<path d="M3 3v7c0 3 6 3 6 0V3M6 3v19M18 3c-4 3-4 9 0 9h2V3h-2Zm2 9v10"/>',
 chart:'<path d="m2 18 7-8 5 4 8-10m-6 0h6v6"/>',
 runner:'<circle cx="15" cy="4" r="2"/><path d="m3 12 5-4 5 2 4 5h5M13 10l-3 7-5 1m5-1 5 3-2 5M18 9l-3 1"/>',
 protein:'<path d="m7 9 2-6c1-2 5-1 5 1l-1 3-3-1M7 9c-1 3-1 5-1 7 2-1 4-1 6 0 1-5 7-5 8 0l1 4c-6 3-12 2-18-1l2-8 2-2Z"/>',
 fat:'<path d="M12 2C9 7 4 12 4 16a8 8 0 0 0 16 0c0-4-5-9-8-14Z"/>',
 carb:'<path d="m7 22 9-20M12 15c-6 1-8-2-8-6 5 0 8 2 8 6Zm2-5c-3-4-2-7 1-9 3 4 3 7-1 9Zm-5 9c-5 1-7-1-8-5 5-1 8 1 8 5Zm7-5c0-5 3-7 7-6-1 5-3 7-7 6Zm-3 6c2-4 5-5 9-3-3 4-6 5-9 3Z"/>',
 flame:'<path d="M13 2c2 6-2 7 1 11 3-1 4-3 4-5 8 9 2 16-6 16S-1 18 6 8c0 5 2 7 4 6-2-6 2-7 3-12Z"/>',
 bolt:'<path d="m14 1-11 13h8L9 25l12-15h-9l2-9Z"/>',
 down:'<path d="M12 3v18m-7-7 7 7 7-7"/>',
 up:'<path d="M12 21V3m-7 7 7-7 7 7"/>',
 equal:'<path d="M4 8h16M4 16h16"/>',
 leaf:'<path d="M5 22C2 10 5 6 11 5c1 7-2 10-6 17ZM7 20C9 8 16 4 23 6c0 9-6 14-16 14Z"/>',
 breakfast:'<path d="M2 21h20M5 19a7 7 0 0 1 14 0M12 2v4M3 6l3 3m15-3-3 3M1 14h3m16 0h3"/>',
 bowl:'<path d="M3 10h18c0 8-4 11-9 11S3 18 3 10Zm15-4 3-4M6 23h12"/>',
 apple:'<path d="M12 7c3-4 9-2 9 4 0 8-5 12-9 9-4 3-9-1-9-9 0-6 6-8 9-4Zm0 0c-1-5 1-7 5-7 0 4-2 6-5 7Z"/>',
 dinner:'<path d="M2 21h20M4 18a8 8 0 0 1 16 0H4ZM12 3v3m-2-3h4"/>',
 flask:'<path d="M8 2h8M10 2v8L3 22c5 2 13 2 18 0l-7-12V2M7 17h10"/>',
 book:'<path d="M12 5c-4-3-7-3-10-2v17c4-1 7 0 10 2 3-2 6-3 10-2V3c-3-1-6-1-10 2Zm0 0v17"/>',
 layers:'<path d="m1 8 11-6 11 6-11 6-11-6Zm0 5 11 6 11-6M1 18l11 6 11-6"/>',
 external:'<path d="M14 2h8v8m0-8L10 14M9 4H3v18h18v-6"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>',
 moon:'<path d="M20 16A10 10 0 0 1 8 4a10 10 0 1 0 12 12Z"/>',
 menu:'<path d="M3 5h18M3 12h18M3 19h18"/>',
 chevron:'<path d="m9 4 8 8-8 8"/>'
 ,info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-11v1"/>'
 ,settings:'<path d="M3 6h18M3 13h18M3 20h18"/><circle cx="8" cy="6" r="2" fill="var(--wellness-surface)"/><circle cx="16" cy="13" r="2" fill="var(--wellness-surface)"/><circle cx="9" cy="20" r="2" fill="var(--wellness-surface)"/>'
};
function outlineIcon(name,cls='') {
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
 for(const [key,value] of Object.entries({viewBox:'0 0 24 26',fill:'none',stroke:'currentColor','stroke-width':'1.6','stroke-linecap':'round','stroke-linejoin':'round','aria-hidden':'true',class:'outline-icon '+cls})) svg.setAttribute(key,value);
 svg.innerHTML=OUTLINE_PATHS[name]||OUTLINE_PATHS.leaf;
 return svg;
}
function replaceOutline(root,name) { const old=root?.querySelector('svg'); if(old) old.replaceWith(outlineIcon(name)); }
function setupReferencePolish(){
 const header=$('app-header'), controls=header.lastElementChild; controls.id='header-controls';
 $('btn-lang').classList.add('legacy-language'); $('btn-theme').classList.add('legacy-theme');
 const languages=h('div',{class:'language-switch','aria-label':'Language'},...['ro','en'].map(lang=>{
  const button=h('button',{type:'button','data-language':lang,lang},lang.toUpperCase());
  button.addEventListener('click',()=>applyLang(lang,true)); return button;
 }));
 const themes=h('div',{class:'theme-switch',role:'group','aria-label':'Alege tema'});
 for(const [theme,name,label] of [['light','sun','Luminos'],['dark','moon','Întunecat'],['auto',null,'Automat']]) {
  const button=h('button',{type:'button','data-appearance':theme,'aria-label':label,title:label},name?outlineIcon(name):h('span',{class:'auto-theme'},'A'));
  button.addEventListener('click',()=>{applyTheme(theme);try{localStorage.setItem('nutri_theme',theme);}catch{} syncReferenceControls();}); themes.append(button);
 }
 controls.append(languages,themes);
 const menu=h('button',{id:'mobile-menu',type:'button','aria-label':'Meniu','aria-expanded':'false','aria-controls':'header-controls'},outlineIcon('menu'));
 menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));header.classList.toggle('menu-open',open);});
 header.append(menu);
 [...$('primary-nav').children].forEach((a,i)=>replaceOutline(a,['user','heart','utensils','chart'][i]));
 // Top navigation: Profile/Goal live in the sticky sidebar, so they scroll the sidebar (not the page);
 // the clicked item becomes current and the target panel is briefly highlighted.
 const primaryNav=$('primary-nav'), navLinks=[...primaryNav.querySelectorAll('a')], navSidebar=$('profile-sidebar');
 let navLock=0;
 const setCurrent=id=>navLinks.forEach(a=>a.getAttribute('href')==='#'+id?a.setAttribute('aria-current','location'):a.removeAttribute('aria-current'));
 primaryNav.addEventListener('click',e=>{
  const a=e.target.closest('a'); if(!a) return;
  e.preventDefault(); e.stopPropagation();
  const id=a.getAttribute('href').slice(1), target=$(id); if(!target) return;
  const behavior=matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';
  if(navSidebar&&navSidebar.contains(target)&&getComputedStyle(navSidebar).position==='sticky'&&navSidebar.scrollHeight>navSidebar.clientHeight+1){
   navSidebar.scrollTo({top:target.getBoundingClientRect().top-navSidebar.getBoundingClientRect().top+navSidebar.scrollTop-12,behavior});
  } else if(!(navSidebar&&navSidebar.contains(target)&&getComputedStyle(navSidebar).position==='sticky')) {
   target.scrollIntoView({behavior,block:'start'});
  }
  if(!target.hasAttribute('tabindex')) target.setAttribute('tabindex','-1');
  target.focus({preventScroll:true});
  setCurrent(id); navLock=Date.now();
  target.classList.remove('nav-flash'); void target.offsetWidth; target.classList.add('nav-flash');
  setTimeout(()=>target.classList.remove('nav-flash'),1300);
 });
 let spyQueued=false;
 const spy=()=>{spyQueued=false; if(Date.now()-navLock<1200) return;
  const proj=$('projection-section'), atEnd=scrollY+innerHeight>=document.documentElement.scrollHeight-2;
  setCurrent(proj&&(atEnd&&scrollY>0||proj.getBoundingClientRect().top<innerHeight*0.45)?'projection-section':'results-section');};
 addEventListener('scroll',()=>{if(!spyQueued){spyQueued=true;requestAnimationFrame(spy);}},{passive:true});
 spy();
 replaceOutline($('inputs-section').querySelector('.panel-heading'),'user');
 replaceOutline($('goal-section').querySelector('.panel-heading'),'target');
 replaceOutline(document.querySelector('.activity-selected'),'runner');
 document.querySelector('.body-details > summary').textContent='Date suplimentare';
 const goal=$('goal-section');
 goal.querySelector('.panel-heading').lastElementChild.replaceWith(h('div',null,h('h2',null,'Obiectiv'),h('p',null,'Ce vrei să obții?')));
 const modeHeader=$('mode-target-panel').previousElementSibling;
 modeHeader.firstElementChild.remove();
 const options=h('details',{id:'goal-options'},h('summary',{'aria-label':'Țintă și setări avansate',title:'Țintă și setări avansate'},outlineIcon('settings'),h('span',{class:'goal-options-label'},'Țintă și setări avansate')));
 const advanced=$('toggle-advanced').parentElement;
 options.append(modeHeader,advanced);
 options.append(document.querySelector('.body-details'));
 const activityHelp=document.querySelector('.activity-help');
 activityHelp.querySelector('summary').replaceChildren(outlineIcon('info'),h('span',{class:'sr-only'},'Ce înseamnă nivelurile?'));
 // The info and settings triggers stay in the same place with the same icon when open; only their state changes.
 const disclosureTrigger=(details,id,name,label)=>{
  details.id=details.id||id; details.querySelector(':scope > summary').hidden=true;
  const button=h('button',{type:'button',class:'disclosure-trigger','aria-expanded':'false','aria-controls':details.id,'aria-label':label,title:label},outlineIcon(name));
  button.addEventListener('click',()=>{details.open=!details.open;});
  details.addEventListener('toggle',()=>button.setAttribute('aria-expanded',String(details.open)));
  return button;
 };
 activityHelp.before(disclosureTrigger(activityHelp,'activity-help-panel','info','Ce înseamnă nivelurile?'));
 goal.append(disclosureTrigger(options,'goal-options','settings','Țintă și setări avansate'));
 const slider=$('goal-slider-wrapper');
 const guide=h('details',{class:'slider-guide'},h('summary',null,'Intervale și precauții'));
 guide.append($('zone-safe').parentElement.parentElement,$('goal-slider-hint'));
 options.append(guide);
 const pace=h('div',{id:'pace-summary'},h('p',null,'Ritm estimat'),h('div',null,outlineIcon('leaf'),h('div',null,h('strong',{id:'pace-value'}),h('span',null,'medie pe perioada afișată'))));
 goal.append(pace,options);
 [...document.querySelectorAll('.btn-goal')].forEach((b,i)=>replaceOutline(b,['down','equal','up'][i]));
 const hero=$('plan-hero'), heroLabel=hero.firstElementChild.firstElementChild;
 heroLabel.childNodes.forEach(n=>{if(n.nodeType===3&&n.textContent.trim())n.textContent='Planul tău nutrițional';});
 hero.children[1].append($('target-badge'));
 const rows=[['prot','Proteine','protein'],['fat','Grăsimi','fat'],['carb','Carbohidrați','carb']];
 for(const [key,label,name] of rows) {
  const card=$('val-'+key+'-g').parentElement.parentElement;
  card.classList.add('reference-macro','macro-'+key);
  const number=$('val-'+key+'-g').parentElement;
  number.lastElementChild.textContent='g';
  const pct=$('val-'+key+'-pct'), kcal=$('val-'+key+'-kcal');
  const ratio=card.firstElementChild.lastElementChild; ratio.classList.add('macro-ratio');
  const head=h('div',{class:'macro-title'},h('strong',null,label),ratio);
  const fraction=h('div',{class:'macro-fraction'},pct,kcal);
  card.replaceChildren(outlineIcon(name,'macro-symbol'),head,number,fraction,$('bar-'+key).parentElement);
  const legendPct=$('lg-'+key+'-pct'), legendRow=legendPct.parentElement;
  const dot=legendRow.firstElementChild, labelEl=legendRow.children[1], legendKcal=$('lg-'+key+'-kcal');
  dot.classList.add('legend-dot',key); legendKcal.classList.add('legend-kcal');
  legendRow.replaceChildren(dot,h('div',{class:'legend-copy'},labelEl,h('div',null,h('span',{id:'legend-'+key+'-g'}),' (',legendPct,')')),legendKcal);
 }
 const energy=$('energy-cards');
 [...energy.children].forEach((card,i)=>{
  const label=card.firstElementChild, info=label.querySelector('button');label.classList.add('metabolic-label');
  label.replaceChildren(outlineIcon(i?'bolt':'flame'),h('span',{class:'metabolic-title'},h('strong',null,i?'TDEE':'BMR'),' ',h('span',{class:'metabolic-detail'},i?'(Necesar total)':'(Metabolism bazal)')),info);
 });
 const projection=$('projection-section'), heading=projection.firstElementChild;
 replaceOutline(heading,'chart');
 const subtitle=heading.firstElementChild.querySelector('p'); subtitle.classList.add('projection-original-caption');
 subtitle.after(h('p',{id:'projection-caption'}));
 const projectionOptions=h('details',{id:'projection-options'},h('summary',null,'Setări pentru proiecție'));
 projectionOptions.append($('horizon-group')); $('projection-details').insertBefore(projectionOptions,$('projection-details').children[1]);
 const compare=h('input',{type:'checkbox',id:'compare-model'});
 compare.addEventListener('change',()=>document.body.classList.toggle('show-chart-comparison',compare.checked));
 projectionOptions.append(h('label',{class:'comparison-toggle'},compare,h('span',null,'Compară modelul simplu')));
 const chart=$('proj-chart-wrap').parentElement;
 const guideNodes=[...chart.children].slice(1);
 $('projection-details').append(...guideNodes);
 $('proj-chart-wrap').append(h('div',{id:'projection-delta','aria-hidden':'true'},h('strong',{id:'projection-delta-value'}),h('span',{id:'projection-delta-period'})));
 const meals=$('meals-section'); replaceOutline(meals,'utensils');
 const mealsTitle=meals.querySelector('h3');mealsTitle.childNodes.forEach(n=>{if(n.nodeType===3&&n.textContent.trim())n.textContent='Distribuția meselor';});
 mealsTitle.after(h('p',{id:'meal-caption'}));
 // Meal count stays visible above the meals; the split note stays below them.
 const mealCount=meals.querySelector('[role="group"]'); mealCount.id='meal-count';
 $('meals-breakdown').before(mealCount); $('meals-breakdown').after($('meals-note'));
 const intro=$('calculation-intro');replaceOutline(intro,'flask');
 const links=h('nav',{id:'explanation-links','aria-label':'Detalii de calcul'});
 for(const [id,label,name] of [['formulas','Detalii și formule','book'],['projection-details','Interpretarea rezultatelor','layers'],['references','Surse științifice','external']]) {
  links.append(h('a',{href:'#'+id,class:'nav-jump nav-link'},outlineIcon(name),h('span',null,label),outlineIcon('chevron')));
 }
 intro.append(links);
 const extra=h('details',{id:'wellness-extras',class:'scientific-details scroll-target'},h('summary',null,outlineIcon('leaf'),h('span',null,'Fibre, lichide și monitorizare')));
 const fibre=$('val-fiber').closest('.print-card').parentElement;
 const monitor=[...$('results-section').children].find(el=>el.textContent.includes('Recomandare practică de monitorizare:'));
 intro.before(extra);extra.append(fibre);if(monitor)extra.append(monitor);
 // The scientific detail stays on the page, below the reference dashboard.
 for(const [id,label,name] of [['formulas','Detalii și formule','book'],['references','Surse științifice','external']]) {
  const details=$(id);details.classList.add('scientific-details');
  const heading=details.querySelector('summary h2');heading.replaceChildren(outlineIcon(name),h('span',null,label));
 }
 const watchTheme=new MutationObserver(syncReferenceControls);watchTheme.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme','lang']});
 syncReferenceControls();
}
function syncReferenceControls(){
 document.querySelectorAll('[data-language]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.language===LANG)));
 document.querySelectorAll('[data-appearance]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.appearance===document.documentElement.getAttribute('data-theme'))));
}
function updateReferenceOverview(){
 syncReferenceControls();
 const r=lastResult;if(!r)return;
 const m=r.macros;
 for(const [key,grams] of [['prot',m?.protG],['fat',m?.fatG],['carb',m?.carbG]]) {
  $('legend-'+key+'-g').textContent=grams==null?'—':fmt(grams)+' g';
  $('val-'+key+'-pct').dataset.percent=String(Math.round(m?.[{prot:'pctProt',fat:'pctFat',carb:'pctCarb'}[key]]||0))+'%';
 }
 const pct=Math.abs(r.effectivePct).toLocaleString(LOC(),{maximumFractionDigits:1});
 const kind=Math.abs(r.effectivePct)<.5?'maintain':r.effectivePct<0?'deficit':'surplus';
 $('target-badge').dataset.kind=kind;
 $('target-badge').replaceChildren(outlineIcon(kind==='deficit'?'down':kind==='surplus'?'up':'equal'),tl(kind==='deficit'?'Deficit':kind==='surplus'?'Surplus':'Menținere',kind==='deficit'?'Deficit':kind==='surplus'?'Surplus':'Maintenance')+' '+pct+'%');
 $('goal-slider-label').textContent=tl(state.goalType==='deficit'?'Deficit caloric':state.goalType==='surplus'?'Surplus caloric':'Menținere',state.goalType==='deficit'?'Calorie deficit':state.goalType==='surplus'?'Calorie surplus':'Maintenance');
 $('goal-slider-val').textContent=state.goalPct+'%';
 const slider=$('input-goal-pct'); const progress=(Number(slider.value)-Number(slider.min))/(Number(slider.max)-Number(slider.min)||1)*100;
 slider.style.setProperty('--range-progress',Math.max(0,Math.min(100,progress))+'%');
 const weeks=state.planMode==='target'?state.targetDays/7:state.horizonWeeks;
 const delta=r.projection.endWeight-state.weight;
 const period=weeks.toLocaleString(LOC(),{maximumFractionDigits:1});
 $('pace-value').textContent='≈ '+fmt1(Math.abs(delta/weeks))+tl(' kg / săptămână',' kg / week');
 $('projection-caption').textContent=tl(`La aportul actual · ${fmt(r.targetKcal)} kcal/zi`,`At current intake · ${fmt(r.targetKcal)} kcal/day`);
 $('projection-delta-value').textContent=(delta<0?'↓ −':delta>0?'↑ +':'')+fmt1(Math.abs(delta))+' kg';
 $('projection-delta-period').textContent=tl(`în ${period} săptămâni`,`in ${period} weeks`);
 $('meal-caption').textContent=tl(`Exemplu orientativ (${fmt(r.targetKcal)} kcal)`,`Illustrative split (${fmt(r.targetKcal)} kcal)`);
 document.querySelectorAll('#meals-breakdown > div').forEach((row,i)=>{
  row.classList.add('reference-meal');
  replaceOutline(row,{'mug-hot':'breakfast','bowl-food':'bowl','apple-whole':'apple','moon':'dinner','fire':'dinner'}[MEAL_PLANS[state.mealsCount][i].icon]||'bowl');
  const detail=row.querySelector('.meal-macros');
  detail.querySelector('summary').replaceChildren(h('span',{class:'sr-only'},T('Macronutrienți')));
 });
 // Keep the source chart, its daily samples, hover, target and comparison data intact.
}
setupReferencePolish();
function decorateReferenceChart(){
 if(!chartCtx)return;
 const chart=$('proj-chart');
 const label=chart.querySelector('text.fill-indigo-700');if(!label)return;
 const start=chart.querySelector('text.fill-slate-600');if(start)start.classList.add('chart-start-label');
 const endX=chartCtx.x(chartCtx.horizonDays), endY=chartCtx.y(chartCtx.pts[chartCtx.horizonDays]);
 const width=Math.max(58,label.textContent.length*6.5+16), y=Math.max(5,endY-34);
 const rect=svgEl('rect',{x:endX-width+4,y,width,height:25,rx:6,fill:'#245b3e',class:'chart-end-badge'});
 label.setAttribute('x',endX-width/2+4);label.setAttribute('y',y+17);label.setAttribute('text-anchor','middle');
 label.classList.add('chart-end-label');label.before(rect);
}
