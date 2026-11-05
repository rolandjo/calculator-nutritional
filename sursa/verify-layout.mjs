import { Browser } from 'file:///C:/Users/ROLAN/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
const version=process.argv[2]||'v19';
const out=resolve('../.taste-skill/verification-'+version); mkdirSync(out,{recursive:true});
const browser=await Browser.launch();
const report=[];
function check(condition,message){ if(!condition) throw new Error(message); report.push(message); }
try {
  const page=await browser.newPage({reducedMotion:true});
  const url=pathToFileURL(resolve('../calculator_nutritional_'+version+'.html')).href;
  const before=await browser.newPage({reducedMotion:true});
  await before.goto(pathToFileURL(resolve('../calculator_nutritional_v18.html')).href);
  const original=await before.eval(()=>{localStorage.clear();loadSavedState();syncFormWithState();calculate({instant:true});return lastResult;});
  await page.goto(url);
  const current=await page.eval(()=>{localStorage.clear();loadSavedState();syncFormWithState();calculate({instant:true});return lastResult;});
  check(JSON.stringify(original)===JSON.stringify(current),`V18 and ${version.toUpperCase()} return identical default calculations`);
  check(page.consoleErrors.length===0,'No JavaScript errors on initial load');
  for(const width of [1440,768,390]) {
    await page.setViewport({width,height:width===768?1024:900});
    for(const theme of ['light','dark']) {
      await page.eval(theme=>applyTheme(theme),theme);
      check(await page.eval(()=>document.documentElement.scrollWidth<=innerWidth),`No horizontal overflow at ${width}px (${theme})`);
      await page.screenshot({path:resolve(out,`${width}-${theme}.jpg`)});
    }
  }
  await page.eval(()=>{const el=document.getElementById('activity-select');el.value='1.55';el.dispatchEvent(new Event('change',{bubbles:true}));calculate({instant:true});});
  check(await page.eval(()=>state.activity===1.55&&Math.round(lastResult.tdee)===3069),'Compact activity control updates the original calculation');
  for(const mode of ['maintain','surplus','deficit']) {
    await page.eval(mode=>{document.querySelector(`[data-goal="${mode}"]`).click();calculate({instant:true});},mode);
    check(await page.eval(()=>Number.isFinite(lastResult.targetKcal)),`${mode} goal calculates successfully`);
  }
  for(const count of [1,2,3,4,5]) {
    await page.eval(count=>document.querySelector(`[data-meals="${count}"]`).click(),count);
    check(await page.eval(count=>document.getElementById('meals-breakdown').children.length===count,count),`${count} meal distribution renders`);
  }
  await page.eval(()=>applyLang('en',false));
  check(await page.eval(()=>document.querySelector('#goal-section h2').textContent==='Goal'),'New UI translates into English');
  await page.screenshot({path:resolve(out,'390-english.jpg')});
  await page.eval(()=>applyLang('ro',false));
  check(await page.eval(()=>document.querySelector('#goal-section h2').textContent==='Obiectiv'),'Romanian restored after language switch');
  await page.eval(()=>{const el=document.getElementById('input-age');el.value='5';el.dispatchEvent(new Event('input',{bubbles:true}));calculate({instant:true});});
  check(await page.eval(()=>document.body.classList.contains('invalid-inputs')),'Invalid input remains validated');
  await page.eval(()=>{document.getElementById('input-age').value='30';document.getElementById('input-age').dispatchEvent(new Event('input',{bubbles:true}));calculate({instant:true});document.querySelector('[data-mode="target"]').click();calculate({instant:true});});
  check(await page.eval(()=>!document.getElementById('target-plan-card').classList.contains('hidden')),'Target weight and deadline mode remains available');
  await page.eval(()=>document.querySelector('[data-mode="percent"]').click());
  const print=await page.eval(()=>{const html=buildPrintableDocument();return {projection:html.includes('id="projection-details" open'),meals:html.includes('class="meal-macros')&&html.includes(' open=""')};});
  check(print.projection&&print.meals,'Printable document expands projection and meal details');
  const duplicates=await page.eval(()=>{const ids=[...document.querySelectorAll('[id]')].map(el=>el.id);return ids.filter((id,i)=>ids.indexOf(id)!==i);});
  check(duplicates.length===0,'All element IDs remain unique');
  check(page.consoleErrors.length===0,'No JavaScript errors after interaction checks');
  if(version==='v20'){
    await page.setViewport({width:390,height:900});
    await page.eval(()=>document.getElementById('mobile-menu').click());
    check(await page.eval(()=>document.getElementById('mobile-menu').getAttribute('aria-expanded')==='true'&&getComputedStyle(document.getElementById('header-controls')).display!=='none'),'Mobile menu exposes language and theme controls');
    await page.eval(()=>document.querySelector('[data-language="en"]').click());
    check(await page.eval(()=>document.documentElement.lang==='en'&&document.getElementById('pace-summary').textContent.includes('Estimated pace')),'Segmented language controls translate the new overview');
    await page.eval(()=>document.querySelector('[data-appearance="dark"]').click());
    check(await page.eval(()=>document.documentElement.classList.contains('dark')),'Segmented theme control changes the appearance');
    await page.eval(()=>{document.querySelector('[data-language="ro"]').click();document.getElementById('mobile-menu').click();document.querySelector('.activity-help > summary').click();});
    check(await page.eval(()=>document.querySelector('.activity-help').open&&document.querySelectorAll('.activity-help li').length===5),'Activity help opens all five detailed levels');
    await page.eval(()=>document.querySelector('.activity-help > summary').click());
    await page.eval(()=>document.querySelector('#explanation-links a[href="#projection-details"]').click());
    check(await page.eval(()=>document.getElementById('projection-details').open),'Explanation link opens the projection details');
    await page.eval(()=>{document.getElementById('compare-model').click();});
    check(await page.eval(()=>document.body.classList.contains('show-chart-comparison')),'Simple model comparison remains selectable');
    await page.eval(()=>document.getElementById('compare-model').click());
  }
  await page.eval(()=>{applyLang('ro',false);applyTheme('light');window.scrollTo(0,0);});
  await page.setViewport({width:1440,height:1000});
  await new Promise(r=>setTimeout(r,250));
  await page.screenshot({path:resolve(out,'desktop-final.jpg')});
  console.log(report.join('\n'));
  writeFileSync(resolve(out,'checks.json'),JSON.stringify(report,null,2));
} finally { await browser.close(); }
