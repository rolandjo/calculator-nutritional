// Move the existing controls, never copy them: calculations, listeners and IDs stay intact.
Object.assign(I18N, {
  'Macronutrienți':'Macronutrients', 'Vârstă (ani)':'Age (years)', 'Înălțime (cm)':'Height (cm)', 'Greutate (kg)':'Weight (kg)',
  'Vârstă':'Age', 'Înălțime':'Height', 'Greutate':'Weight', 'Sex':'Sex', 'ani':'years',
  'Ce înseamnă nivelurile?':'What do the levels mean?', 'Factor de activitate':'Activity factor',
  'Birou, mult timp așezat și puțină mișcare.':'Desk work, mostly sitting and little movement.',
  '1–3 antrenamente pe săptămână sau mers lejer.':'1–3 workouts per week or light walking.',
  '3–5 antrenamente pe săptămână sau efort zilnic mediu.':'3–5 workouts per week or moderate daily effort.',
  'Antrenamente intense zilnice sau muncă fizică.':'Daily intense workouts or physical work.',
  'Muncă fizică grea și antrenamente.':'Heavy physical work and workouts.',
  'Alege după mișcarea din întreaga zi: serviciu, mers și antrenamente. Factorul multiplică metabolismul bazal pentru a estima necesarul zilnic.':'Choose based on movement throughout the day: work, walking and workouts. The factor multiplies basal metabolism to estimate daily needs.',
  'Profilul tău':'Your profile', 'Datele folosite pentru calcule':'Your calculation inputs',
  'Obiectiv':'Goal', 'Plan nutrițional':'Nutrition plan', 'Profil':'Profile',
  'Plan':'Plan', 'Detalii':'Details',
  'Indicatori corporali și greutate de referință':'Body metrics and reference weight',
  'Setări și detalii ale proiecției':'Projection settings and details',
  'Cum se calculează?':'How is it calculated?',
  'Necesarul zilnic pornește de la metabolismul bazal și nivelul de activitate. Obiectivul ales stabilește bugetul caloric, apoi distribuția macronutrienților.':'Daily needs start from basal metabolism and activity level. Your goal sets the calorie budget and macronutrient distribution.',
  'Nivel de activitate':'Activity level', 'Mai multe opțiuni':'More options'
});
let syncWellnessActivity = () => {};
function arrangeWellnessLayout() {
  const layout = $('layout'), content = $('content-col'), inputs = $('inputs-section');
  const header = content.querySelector('header'); header.id = 'app-header';
  layout.before(header);
  header.querySelector('h1').innerHTML = 'Nutriție';
  header.querySelector('p').textContent = 'Calculator nutrițional';
  I18N['Calculator nutrițional']='Nutrition calculator';
  header.firstElementChild.innerHTML = '<svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true"><path fill="#2F6755" d="M25 30C17 18 24 7 38 2c5 14 0 25-13 28Z"/><path fill="#7D9D60" d="M20 39C6 38 2 27 4 15c13 3 20 11 16 24Z"/><path fill="#A6BD87" d="M25 44c0-11 7-17 20-18-1 12-8 19-20 18Z"/></svg>';
  const nav = h('nav', {id:'primary-nav', 'aria-label':T('Secțiuni')});
  for (const [id,label,ico] of [['inputs-section','Profil','user'],['goal-section','Obiectiv','flag-checkered'],['results-section','Plan nutrițional','utensils'],['projection-section','Evoluție','chart-line']]) {
    nav.append(h('a',{href:'#'+id,class:'nav-jump', 'data-target':id},icon(ico),h('span',null,label)));
  }
  header.insertBefore(nav, header.lastElementChild);
  const mobileNav = h('nav',{id:'mobile-tabs','aria-label':T('Secțiuni')});
  for (const [target,label] of [['results-section','Plan'],['inputs-section','Profil'],['projection-section','Evoluție'],['formulas','Detalii']]) {
    mobileNav.append(h('a',{href:'#'+target,class:'nav-jump nav-link'},label));
  }
  header.after(mobileNav);
  // The sidebar and mobile tabs always clear the actual header, including zoom and translations.
  const measureHeader=()=>document.documentElement.style.setProperty('--app-header-height',Math.ceil(header.getBoundingClientRect().height)+'px');
  new ResizeObserver(measureHeader).observe(header);
  measureHeader();

  const kids = [...inputs.children], toolbar = kids[0].lastElementChild;
  const profileFields = kids[1], bmi = $('bmi-panel'), activity = $('activity-cards').parentElement;
  const reference = kids[3], goal = $('mode-target-panel').parentElement, advanced = $('toggle-advanced').parentElement;
  const sidebar = h('div',{id:'profile-sidebar',class:'no-print'});
  content.before(sidebar); sidebar.append(inputs);
  kids[0].remove();
  inputs.prepend(h('div',{class:'panel-heading'},icon('user'),h('div',null,h('h2',null,'Profilul tău'),h('p',null,'Datele folosite pentru calcule'))));
  profileFields.classList.add('profile-fields');
  profileFields.firstElementChild.firstElementChild.textContent='Sex';
  for(const [id,label,unit] of [['input-age','Vârstă','ani'],['input-height','Înălțime','cm'],['input-weight','Greutate','kg']]) {
    document.querySelector(`label[for="${id}"]`).textContent=label;
    const input=$(id), wrap=h('div',{class:'profile-value'});
    input.before(wrap); wrap.append(input,h('span',{class:'profile-unit','aria-hidden':'true'},unit));
  }
  // The select delegates to the existing activity radios, including their original listeners.
  const activityLabel = h('label',{for:'activity-select'},'Nivel de activitate');
  const select = h('select',{id:'activity-select',class:'w-full','aria-describedby':'activity-description activity-help'});
  const activityLevels=[];
  const activityDescriptions={
    '1.2':'Birou, mult timp așezat și puțină mișcare.',
    '1.375':'1–3 antrenamente pe săptămână sau mers lejer.',
    '1.55':'3–5 antrenamente pe săptămână sau efort zilnic mediu.',
    '1.725':'Antrenamente intense zilnice sau muncă fizică.',
    '1.9':'Muncă fizică grea și antrenamente.'
  };
  for (const radio of activity.querySelectorAll('input')) {
    const label = radio.parentElement;
    const spans=[...label.querySelectorAll('span')];
    const name=spans[0].textContent.trim(), description=activityDescriptions[radio.value];
    activityLevels.push({value:radio.value,name,description});
    const optionText=name+' · '+description;
    // Construct the English combined label even when the current language is Romanian.
    I18N[optionText]=(I18N[name]||name)+' · '+(I18N[description]||description);
    select.append(h('option',{value:radio.value},optionText));
  }
  // Placeholder (first use): any real choice then fires 'change', even for the pre-set level.
  select.prepend(h('option',{value:'',disabled:'',hidden:''},'Alege nivelul de activitate'));
  const selectedName=h('strong',{id:'activity-name'});
  const selectedDescription=h('span',{id:'activity-description'});
  const selectedView=h('div',{class:'activity-selected','aria-hidden':'true'},icon('person-running'),h('div',null,selectedName,selectedDescription),h('span',{class:'activity-chevron'},'⌄'));
  const picker=h('div',{class:'activity-picker'},selectedView,select);
  const help=h('details',{class:'activity-help'},h('summary',null,'Ce înseamnă nivelurile?'),h('p',{id:'activity-help'},'Alege după mișcarea din întreaga zi: serviciu, mers și antrenamente. Factorul multiplică metabolismul bazal pentru a estima necesarul zilnic.'));
  help.append(h('ul',null,...activityLevels.map(level=>h('li',null,h('strong',null,level.name),h('span',null,level.description),h('span',{class:'activity-factor'},h('span',null,'Factor de activitate'),' × '+level.value)))));
  select.addEventListener('change',()=>{
    const radio=activity.querySelector(`input[value="${select.value}"]`);
    radio.checked=true; radio.dispatchEvent(new Event('change',{bubbles:true}));
  });
  activity.before(h('div',{class:'activity-select-wrap'},activityLabel,picker,help));
  activity.hidden=true;
  const bodyDetails=h('details',{class:'body-details'},h('summary',null,'Indicatori corporali și greutate de referință'));
  bodyDetails.append(bmi,reference); inputs.append(bodyDetails);
  const goalPanel=h('section',{id:'goal-section',class:'wellness-panel scroll-target'},h('div',{class:'panel-heading'},icon('flag-checkered'),h('h2',null,'Obiectiv')));
  goalPanel.append(goal,advanced);
  sidebar.append(goalPanel);
  toolbar.id='document-actions'; content.append(toolbar);
  const rail=layout.querySelector('aside'); rail.classList.add('legacy-rail');

  const results=$('results-section'), energy=$('energy-cards');
  const hero=energy.lastElementChild; hero.id='plan-hero';
  hero.querySelector('.uppercase').childNodes.forEach(n=>{if(n.nodeType===3&&n.textContent.trim()) n.textContent='Plan nutrițional';});
  results.prepend(hero);
  const macros=$('macro-display-section'), macroGrid=macros.children[1];
  const donut=macros.lastElementChild;
  for(const key of ['prot','fat','carb']) {
    const bar=h('div',{class:'macro-bar', 'aria-hidden':'true'},h('span',{id:'bar-'+key}));
    $('val-'+key+'-g').parentElement.parentElement.append(bar);
  }
  macroGrid.classList.add('macro-cards'); donut.id='macro-donut';
  macroGrid.append(donut);
  macros.querySelector('h3').classList.add('sr-only');
  energy.classList.add('metabolic-strip');
  // Preserve every result block; only the overview order changes.
  macros.after(energy);
  const projection=$('projection-section'), meals=$('meals-section');
  const pair=h('div',{id:'overview-pair'}); energy.after(pair); pair.append(projection,meals);
  const chart=$('proj-chart-wrap').parentElement;
  const projectionKids=[...projection.children];
  const details=h('details',{id:'projection-details'},h('summary',null,'Setări și detalii ale proiecției'));
  const metrics=projectionKids[2];
  metrics.classList.add('projection-metrics');
  projection.insertBefore(chart,projection.children[1]);
  for(const child of projectionKids.slice(1)) if(child!==chart) details.append(child);
  projection.append(details);
  const intro=h('section',{id:'calculation-intro',class:'wellness-panel'},icon('square-root-variable'),h('div',null,h('h2',null,'Cum se calculează?'),h('p',null,'Necesarul zilnic pornește de la metabolismul bazal și nivelul de activitate. Obiectivul ales stabilește bugetul caloric, apoi distribuția macronutrienților.')));
  pair.after(intro);
  // Re-synchronize the compact select after saved state, reset, or language changes.
  const syncActivity=()=>{
    const checked=document.querySelector('input[name="activity"]:checked').value;
    select.value=document.documentElement.classList.contains('activity-unchosen')?'':checked;
    const level=activityLevels.find(item=>item.value===checked);
    selectedName.replaceChildren(T(level.name));
    selectedDescription.replaceChildren(T(level.description));
  };
  syncWellnessActivity=syncActivity;
  new MutationObserver(syncActivity).observe(activity,{attributes:true,subtree:true});
  document.addEventListener('change',syncActivity);
  $('btn-reset').addEventListener('click',()=>queueMicrotask(syncActivity));
  queueMicrotask(syncActivity);
}
arrangeWellnessLayout();
function updateWellnessOverview() {
  syncWellnessActivity();
  const m=lastResult?.macros;
  for(const [key,value] of [['prot',m?.pctProt],['fat',m?.pctFat],['carb',m?.pctCarb]]) {
    $('bar-'+key).style.width=Math.max(0,Math.min(100,value||0))+'%';
  }
  if (typeof updateReferenceOverview === 'function') updateReferenceOverview();
}
