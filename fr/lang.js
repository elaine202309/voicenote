var LANG_KEY='voicenote_lang',LANGS=['en','fr','de','es','it','zh'];
var T={
'Home':{fr:'Accueil',de:'Start',es:'Inicio',it:'Home',zh:'首页'},
'Pricing':{fr:'Tarifs',de:'Preise',es:'Precios',it:'Prezzi',zh:'定价'},
'Download':{fr:'Telecharger',de:'Download',es:'Descargar',it:'Scarica',zh:'下载'},
'Contact':{fr:'Contact',de:'Kontakt',es:'Contacto',it:'Contatto',zh:'联系'},
'Try Free':{fr:'Essai Gratuit',de:'Testen',es:'Probar',it:'Prova',zh:'免费试用'},
'Simple & Fast':{fr:'Simple et Rapide',de:'Einfach & Schnell',es:'Simple y Rapido',it:'Semplice e Veloce',zh:'简单快速'},
'AI Smart Styles':{fr:'Styles IA',de:'KI Stile',es:'Estilos IA',it:'Stili IA',zh:'AI 智能风格'},
'46 Languages':{fr:'46 Langues',de:'46 Sprachen',es:'46 Idiomas',it:'46 Lingue',zh:'46 种语言'},
'Built for Thinkers':{fr:'Pour les Penseurs',de:'Fur Denker',es:'Para Pensadores',it:'Per Pensatori',zh:'为思考者而生'},
'Speak Freely':{fr:'Parlez Librement',de:'Frei Sprechen',es:'Habla Libremente',it:'Parla Liberamente',zh:'自由说'},
'Choose Your Style':{fr:'Choisissez',de:'Stil wahlen',es:'Elige Estilo',it:'Scegli Stile',zh:'选择风格'},
'Ready to Use':{fr:'Pret a lemploi',de:'Einsatzbereit',es:'Listo para Usar',it:'Pronto allUso',zh:'立即可用'},
'VOICE INPUT':{fr:'ENTREE VOCALE',de:'SPRACHEINGABE',es:'ENTRADA DE VOZ',it:'INGRESSO VOCALE',zh:'语音输入'},
'Plain & Direct':{fr:'Clair & Direct',de:'Klar & Direkt',es:'Claro & Directo',it:'Chiaro & Diretto',zh:'简洁直接'},
'Professional Email':{fr:'Email Professionnel',de:'E-Mail',es:'Email Profesional',it:'Email Professionale',zh:'正式邮件'},
'Key Takeaways':{fr:'Points Cles',de:'Kernpunkte',es:'Puntos Clave',it:'Punti Chiave',zh:'要点总结'},
'Casual / Slack':{fr:'Decontracte',de:'Locker',es:'Informal',it:'Informale',zh:'随意聊天'},
'Free':{fr:'Gratuit',de:'Kostenlos',es:'Gratis',it:'Gratis',zh:'免费'},
'Prime':{fr:'Prime',de:'Prime',es:'Prime',it:'Prime',zh:'Prime'},
'Start your free trial':{fr:'Essai gratuit',de:'Testversion',es:'Prueba gratuita',it:'Prova gratuita',zh:'开始免费试用'},
'Try Free Now':{fr:'Essayer',de:'Jetzt testen',es:'Probar ahora',it:'Prova ora',zh:'立即试用'},
'10 free notes':{fr:'10 notes gratuites',de:'10 Notizen',es:'10 notas gratis',it:'10 note gratis',zh:'10 条免费笔记'},
'Download on the App Store':{fr:'Telecharger',de:'Laden',es:'Descargar',it:'Scarica',zh:'在 App Store 下载'},
'Scan to download':{fr:'Scanner',de:'Scannen',es:'Escanear',it:'Scansiona',zh:'扫码下载'},
'FAQ':{fr:'FAQ',de:'FAQ',es:'FAQ',it:'FAQ',zh:'常见问题'},
'Compare':{fr:'Comparer',de:'Vergleichen',es:'Comparar',it:'Confronta',zh:'对比'},
'Students':{fr:'Etudiants',de:'Studenten',es:'Estudiantes',it:'Studenti',zh:'学生'},
'Busy Parents':{fr:'Parents Occupes',de:'Eltern',es:'Padres Ocupados',it:'Genitori',zh:'忙碌的父母'},
'Writers & Creators':{fr:'Ecrivains',de:'Autoren',es:'Escritores',it:'Scrittori',zh:'作家与创作者'},
'Professionals & Executives':{fr:'Professionnels',de:'Profis',es:'Profesionales',it:'Professionisti',zh:'职场人士'},
'Thinkers & Ideators':{fr:'Penseurs',de:'Denker',es:'Pensadores',it:'Pensatori',zh:'思考者'},
'Entrepreneurs & Ideators':{fr:'Entrepreneurs',de:'Unternehmer',es:'Emprendedores',it:'Imprenditori',zh:'创业者'},
'Journal Keepers & Thinkers':{fr:'Journaliers',de:'Journal',es:'Diarios',it:'Diario',zh:'日记者'},
'iPhone or iPad running iOS 16.0 or later':{fr:'iPhone/iPad iOS 16+',de:'iPhone/iPad iOS 16+',es:'iPhone/iPad iOS 16+',it:'iPhone/iPad iOS 16+',zh:'iPhone/iPad iOS 16+'},
'Privacy Policy':{fr:'Confidentialite',de:'Datenschutz',es:'Privacidad',it:'Privacy',zh:'隐私政策'},
'Terms of Service':{fr:'Conditions',de:'Nutzungsbedingungen',es:'Terminos',it:'Termini',zh:'服务条款'},
'Cookie Policy':{fr:'Cookies',de:'Cookies',es:'Cookies',it:'Cookie',zh:'Cookie 政策'},
'English':{fr:'English',de:'English',es:'English',it:'English',zh:'English'},
'Francais':{fr:'Francais',de:'Francais',es:'Francais',it:'Francais',zh:'Francais'},
'Deutsch':{fr:'Deutsch',de:'Deutsch',es:'Deutsch',it:'Deutsch',zh:'Deutsch'},
'Espanol':{fr:'Espanol',de:'Espanol',es:'Espanol',it:'Espanol',zh:'Espanol'},
'Italiano':{fr:'Italiano',de:'Italiano',es:'Italiano',it:'Italiano',zh:'Italiano'}
};

function getLang(){var s=localStorage.getItem(LANG_KEY);return s&&LANGS.indexOf(s)>=0?s:(LANGS.indexOf(navigator.language.slice(0,2))>=0?navigator.language.slice(0,2):'en');}
function setLang(l){if(LANGS.indexOf(l)<0)return;localStorage.setItem(LANG_KEY,l);var p=location.pathname.replace(/^\/(en|fr|de|es|it|zh)\//,'/').replace(/^\//,'');location.href='/'+l+'/'+(p||'');}
function applyLang(){var lang=getLang();if(lang==='en')return;document.documentElement.lang=lang;var all=document.querySelectorAll('p,span,h1,h2,h3,h4,h5,h6,li,a,button,td,th,label,div');for(var i=0;i<all.length;i++){var el=all[i];if(el.children.length>0)continue;if(el.closest&&el.closest('#langSwitcher'))continue;var tag=el.tagName;if(tag==='SCRIPT'||tag==='STYLE'||tag==='NOSCRIPT'||tag==='INPUT'||tag==='TEXTAREA')continue;var t=el.textContent.trim();if(!t||t.length<2)continue;if(T[t]&&T[t][lang])el.textContent=T[t][lang];}}

document.addEventListener('DOMContentLoaded',function(){
  var names={en:'English',fr:'Francais',de:'Deutsch',es:'Espanol',it:'Italiano',zh:'中文'};
  var shorts={en:'EN',fr:'FR',de:'DE',es:'ES',it:'IT',zh:'中文'};
  var l=getLang();
  var w=document.getElementById('langSwitcher');
  if(!w)return;
  w.innerHTML='';
  var c=document.createElement('span');
  c.id='langCurrent';
  c.className='text-xs font-medium text-gray-500 cursor-pointer hover:text-gray-700 flex items-center gap-1';
  c.innerHTML=shorts[l]+' <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';
  w.appendChild(c);
  var d=document.createElement('div');
  d.id='langDropdown';
  d.className='absolute top-full right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg py-1 hidden z-50 min-w-[140px]';
  for(var i=0;i<LANGS.length;i++){(function(x){
    var o=document.createElement('button');
    o.textContent=names[x];
    o.className='lang-option block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 '+(x===l?'font-semibold text-brand-600':'');
    o.onclick=function(){setLang(x);d.classList.add('hidden');};
    d.appendChild(o);
  })(LANGS[i]);}
  w.appendChild(d);
  c.addEventListener('click',function(e){e.stopPropagation();d.classList.toggle('hidden');});
  document.addEventListener('click',function(){d.classList.add('hidden');});
  if(l!=='en')applyLang();
});
