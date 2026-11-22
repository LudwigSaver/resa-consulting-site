'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const css=fs.readFileSync(path.join(root,'styles.css'),'utf8');

test('RESA website no longer advertises legacy brand or links',()=>{
 assert.doesNotMatch(html,/kontelio/i);
 assert.doesNotMatch(css,/kontelio/i);
 assert.match(html,/Savrento Bokföring ingår första året/);
 assert.match(html,/href="https:\/\/www\.savrento\.se\//);
 assert.match(html,/href="https:\/\/www\.savrento\.se\/priser\.html"/);
 assert.match(html,/<meta name="description" content="[^"]*Savrento/);
 assert.match(html,/<meta property="og:description" content="[^"]*Savrento/);
 assert.match(html,/id="savrento"/);
 assert.match(html,/href="#savrento"/);
 assert.match(css,/\.savrento-shell/);
});

test('approved RESA service fees remain unchanged',()=>{
 for(const n of ['772','880','5 400','10 800','16 200','21 600','32 400','43 200','108 000','1 000']) {
   assert.ok(html.includes(n),'RESA fee missing: '+n);
 }
 assert.match(html,/RESA:s konsultpriser gäller redovisningsarbetet/);
 assert.match(html,/Alla belopp är exklusive moms/);
});

test('Savrento software and RESA-customer prices are accurate and distinct',()=>{
 const expected=['119 kr\/mån','189 kr\/mån','99 kr\/mån \+ 15 kr\/anställd',
  '249 kr\/mån \+ 15 kr\/anställd','349 kr\/mån',
  '399 kr\/mån eller 3 990 kr\/år',
  '299 kr\/mån eller 2 990 kr\/år'];
 for(const text of expected){assert.ok(html.includes(text.replaceAll('\\/','/')),'Missing software price: '+text);}
 assert.match(html,/Fakturering som tillval/);
 assert.match(html,/99 kr\/mån/);
 assert.match(html,/12 månaderna/);
 assert.match(html,/separat godkännande/);
 assert.match(html,/preliminära månads- och årsavgifter för programmet/);
 assert.match(html,/inte priser för att RESA ska utföra bokföring/);
 assert.match(html,/inte aktiva köpbara abonnemang/);
 assert.match(html,/Bokslutspriset avser endast programlicensen/);
});

test('responsive page contains the new offer and pricing layouts without missing classes',()=>{
 for(const className of ['savrento-section','savrento-shell','savrento-actions',
    'software-pricing','software-pricing-head','software-pricing-grid','software-resa',
    'software-standalone','software-table','software-footnote']){
   assert.ok(html.includes('class="'+className)||html.includes(' '+className+'"'),
     'HTML class missing '+className);
   assert.ok(css.includes('.'+className), 'CSS class missing '+className);
 }
 assert.match(css,/@media\(max-width:800px\).*\.software-pricing-grid\{grid-template-columns:1fr\}/s);
 assert.match(html,/<th scope="col">Program \/ paket<\/th>/);
 assert.match(html,/rel="noopener noreferrer"/);
});

test('public website only uses existing local assets',()=>{
 for(const filename of ['styles.css','script.js','assets/favicon.svg','assets/kontorsmiljo.webp']){
   assert.ok(fs.existsSync(path.join(root,filename)),filename);
 }
});
