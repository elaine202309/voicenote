// VoiceNote Language System
const LANG_KEY = 'voicenote_lang';
const SUPPORTED_LANGS = ['en','fr','de','es','it','zh'];

const t = {
  // Navbar
  'nav.home':{en:'Home',fr:'Accueil',de:'Start',es:'Inicio',it:'Home',zh:'首页'},
  'nav.pricing':{en:'Pricing',fr:'Tarifs',de:'Preise',es:'Precios',it:'Prezzi',zh:'定价'},
  'nav.download':{en:'Download',fr:'Télécharger',de:'Download',es:'Descargar',it:'Scarica',zh:'下载'},
  'nav.contact':{en:'Contact',fr:'Contact',de:'Kontakt',es:'Contacto',it:'Contatto',zh:'联系'},
  'nav.cta':{en:'Try Free',fr:'Essai Gratuit',de:'Kostenlos testen',es:'Probar Gratis',it:'Prova Gratis',zh:'免费试用'},

  // Hero
  'hero.badge':{en:'Your pocket voice assistant',fr:'Votre assistant vocal de poche',de:'Ihr Taschen-Sprachassistent',es:'Tu asistente de voz de bolsillo',it:'Il tuo assistente vocale tascabile',zh:'你的口袋语音助手'},
  'hero.title':{en:'Turn messy voice into clear text',fr:'Transformez une voix brouillonne en texte clair',de:'Chaotische Sprache in klaren Text verwandeln',es:'Convierte voz confusa en texto claro',it:'Trasforma la voce confusa in testo chiaro',zh:'把混乱的语音变成清晰的文字'},
  'hero.subtitle':{en:'Speak naturally. VoiceNote polishes every word with AI.',fr:'Parlez naturellement. VoiceNote peaufine chaque mot avec l\'IA.',de:'Sprechen Sie natürlich. VoiceNote verfeinert jedes Wort mit KI.',es:'Habla con naturalidad. VoiceNote pule cada palabra con IA.',it:'Parla in modo naturale. VoiceNote perfeziona ogni parola con l\'IA.',zh:'自然地说。VoiceNote 用 AI 润色你的每一句话。'},

  // How It Works
  'how.tag':{en:'How It Works',fr:'Comment ça marche',de:'So funktioniert\'s',es:'Cómo funciona',it:'Come funziona',zh:'使用流程'},
  'how.title':{en:'Three steps from voice to text',fr:'Trois étapes de la voix au texte',de:'Drei Schritte von Sprache zu Text',es:'Tres pasos de voz a texto',it:'Tre passi dalla voce al testo',zh:'从语音到文字只需三步'},
  'how.step1':{en:'Record',fr:'Enregistrer',de:'Aufnehmen',es:'Grabar',it:'Registra',zh:'录音'},
  'how.step1.desc':{en:'Tap the mic and speak naturally.',fr:'Appuyez sur le micro et parlez.',de:'Tippen Sie aufs Mikro und sprechen Sie.',es:'Toca el micrófono y habla.',it:'Tocca il microfono e parla.',zh:'点击麦克风，自然地说。'},
  'how.step2':{en:'AI Processing',fr:'Traitement IA',de:'KI-Verarbeitung',es:'Procesamiento IA',it:'Elaborazione IA',zh:'AI 处理'},
  'how.step2.desc':{en:'Deepgram + GPT transcribe and polish in seconds.',fr:'Deepgram + GPT transcrivent et peaufinent en quelques secondes.',de:'Deepgram + GPT transkribieren und verfeinern in Sekunden.',es:'Deepgram + GPT transcriben y pulen en segundos.',it:'Deepgram + GPT trascrivono e perfezionano in pochi secondi.',zh:'Deepgram + GPT 秒速转录和润色。'},
  'how.step3':{en:'Get Clear Text',fr:'Texte clair obtenu',de:'Klaren Text erhalten',es:'Obtén texto claro',it:'Ottieni testo chiaro',zh:'获得清晰文字'},
  'how.step3.desc':{en:'Copy, share, or export. Ready to use.',fr:'Copiez, partagez ou exportez. Prêt à l\'emploi.',de:'Kopieren, teilen oder exportieren. Einsatzbereit.',es:'Copia, comparte o exporta. Listo para usar.',it:'Copia, condividi o esporta. Pronto all\'uso.',zh:'复制、分享或导出。立即可用。'},

  // Smart Styles
  'styles.tag':{en:'Smart Styles',fr:'Styles intelligents',de:'Intelligente Stile',es:'Estilos inteligentes',it:'Stili intelligenti',zh:'智能风格'},
  'styles.title':{en:'One voice note, endless formats',fr:'Une note vocale, des formats infinis',de:'Eine Sprachnotiz, endlose Formate',es:'Una nota de voz, infinitos formatos',it:'Una nota vocale, infiniti formati',zh:'一条语音，无限格式'},
  'styles.subtitle':{en:'Speak once. VoiceNote rewrites your words for any context.',fr:'Parlez une fois. VoiceNote réécrit vos mots pour tout contexte.',de:'Einmal sprechen. VoiceNote schreibt für jeden Kontext um.',es:'Habla una vez. VoiceNote reescribe para cualquier contexto.',it:'Parla una volta. VoiceNote riscrive per ogni contesto.',zh:'说一次。VoiceNote 为任何场景重写你的文字。'},
  'styles.voice':{en:'VOICE INPUT',fr:'ENTRÉE VOCALE',de:'SPRACHEINGABE',es:'ENTRADA DE VOZ',it:'INGRESSO VOCALE',zh:'语音输入'},
  'styles.plain':{en:'Plain & Direct',fr:'Clair et direct',de:'Klar & Direkt',es:'Claro y directo',it:'Chiaro e diretto',zh:'简洁直接'},
  'styles.email':{en:'Professional Email',fr:'Email professionnel',de:'Professionelle E-Mail',es:'Email profesional',it:'Email professionale',zh:'正式邮件'},
  'styles.key':{en:'Key Takeaways',fr:'Points clés',de:'Kernpunkte',es:'Puntos clave',it:'Punti chiave',zh:'要点总结'},
  'styles.casual':{en:'Casual / Slack',fr:'Décontracté / Slack',de:'Locker / Slack',es:'Informal / Slack',it:'Informale / Slack',zh:'随意 / 聊天'},

  // Languages section
  'lang.tag':{en:'46 Languages',fr:'46 Langues',de:'46 Sprachen',es:'46 Idiomas',it:'46 Lingue',zh:'46 种语言'},
  'lang.title':{en:'Speak your language, write in any language',fr:'Parlez votre langue, écrivez dans toutes',de:'Sprechen Sie Ihre Sprache',es:'Habla tu idioma',it:'Parla la tua lingua',zh:'说你的语言'},
  'lang.subtitle':{en:'VoiceNote transcribes and polishes in 46 languages, right out of the box.',fr:'VoiceNote transcrit et peaufine dans 46 langues, prêt à l\'emploi.',de:'VoiceNote transkribiert und verfeinert in 46 Sprachen.',es:'VoiceNote transcribe y pule en 46 idiomas.',it:'VoiceNote trascrive e perfeziona in 46 lingue.',zh:'VoiceNote 支持 46 种语言的转录和润色。'},

  // Who It's For
  'who.tag':{en:'Who It\'s For',fr:'Pour qui',de:'Für wen',es:'Para quién',it:'Per chi',zh:'适合谁用'},
  'who.title':{en:'Made for people who think faster than they type',fr:'Fait pour ceux qui pensent plus vite qu\'ils ne tapent',de:'Für Menschen, die schneller denken als tippen',es:'Para personas que piensan más rápido de lo que escriben',it:'Per chi pensa più velocemente di quanto scrive',zh:'为思考比打字快的人而生'},
  'who.subtitle':{en:'No matter what you do, if you have ideas, VoiceNote is for you.',fr:'Peu importe ce que vous faites, si vous avez des idées, VoiceNote est pour vous.',de:'Egal was Sie tun, wenn Sie Ideen haben, ist VoiceNote für Sie.',es:'No importa lo que hagas, si tienes ideas, VoiceNote es para ti.',it:'Non importa cosa fai, se hai idee, VoiceNote è per te.',zh:'无论你做什么，只要有想法，VoiceNote 就是为你准备的。'},

  // Download CTA
  'dl.tag':{en:'Try Free',fr:'Essai Gratuit',de:'Kostenlos testen',es:'Probar Gratis',it:'Prova Gratis',zh:'免费试用'},
  'dl.title':{en:'Ready to get started?',fr:'Prêt à commencer ?',de:'Bereit loszulegen?',es:'¿Listo para empezar?',it:'Pronto per iniziare?',zh:'准备好开始了吗？'},
  'dl.ios':{en:'iOS',fr:'iOS',de:'iOS',es:'iOS',it:'iOS',zh:'iOS'},
  'dl.ios.desc':{en:'iPhone & iPad',fr:'iPhone et iPad',de:'iPhone & iPad',es:'iPhone y iPad',it:'iPhone e iPad',zh:'iPhone 和 iPad'},
  'dl.btn':{en:'Download on the App Store',fr:'Télécharger sur l\'App Store',de:'Im App Store laden',es:'Descargar en la App Store',it:'Scarica sull\'App Store',zh:'在 App Store 下载'},

  // Footer
  'footer.tagline':{en:'Your pocket voice assistant.',fr:'Votre assistant vocal de poche.',de:'Ihr Taschen-Sprachassistent.',es:'Tu asistente de voz de bolsillo.',it:'Il tuo assistente vocale tascabile.',zh:'你的口袋语音助手。'},
  'footer.privacy':{en:'Privacy Policy',fr:'Politique de confidentialité',de:'Datenschutz',es:'Privacidad',it:'Privacy',zh:'隐私政策'},
  'footer.terms':{en:'Terms of Service',fr:'Conditions d\'utilisation',de:'Nutzungsbedingungen',es:'Términos',it:'Termini',zh:'服务条款'},
  'footer.cookies':{en:'Cookie Policy',fr:'Politique de cookies',de:'Cookie-Richtlinie',es:'Cookies',it:'Cookie',zh:'Cookie 政策'},
};

// Get current language
function getLang() {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const browser = navigator.language.slice(0,2);
  if (SUPPORTED_LANGS.includes(browser)) return browser;
  return 'en';
}

// Set language
function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  localStorage.setItem(LANG_KEY, lang);
  applyLang();
  updateSwitcherUI(lang);
}

// Apply translations
function applyLang() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (t[key] && t[key][lang]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key][lang];
      } else {
        el.textContent = t[key][lang];
      }
    }
  });
  // Update meta title/desc if data attributes exist
  const metaTitle = document.querySelector('meta[data-t="meta.title"]');
  const metaDesc = document.querySelector('meta[name="description"][data-t="meta.desc"]');
  if (metaTitle) metaTitle.content = t['meta.title']?.[lang] || metaTitle.content;
}

// Update language switcher UI
function updateSwitcherUI(lang) {
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('font-semibold', opt.getAttribute('data-lang') === lang);
    opt.classList.toggle('text-brand-600', opt.getAttribute('data-lang') === lang);
    opt.classList.toggle('text-gray-500', opt.getAttribute('data-lang') !== lang);
  });
}

// Init on page load
document.addEventListener('DOMContentLoaded', () => {
  applyLang();
  // Create language switcher
  const langLabels = {en:'English',fr:'Français',de:'Deutsch',es:'Español',it:'Italiano',zh:'中文'};
  const langShort = {en:'EN',fr:'FR',de:'DE',es:'ES',it:'IT',zh:'中文'};
  const currentLang = getLang();
  const switcher = document.getElementById('langSwitcher');
  if (switcher) {
    // Current language display
    const current = document.createElement('span');
    current.id = 'langCurrent';
    current.className = 'text-xs font-medium text-gray-500 cursor-pointer hover:text-gray-700 flex items-center gap-1';
    current.innerHTML = langShort[currentLang] + ' <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';
    switcher.appendChild(current);

    // Dropdown
    const dropdown = document.createElement('div');
    dropdown.id = 'langDropdown';
    dropdown.className = 'absolute top-full right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg py-1 hidden z-50';
    SUPPORTED_LANGS.forEach(l => {
      const opt = document.createElement('button');
      opt.textContent = langLabels[l];
      opt.className = 'lang-option block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 ' + (l === currentLang ? 'font-semibold text-brand-600' : '');
      opt.setAttribute('data-lang', l);
      opt.onclick = () => { setLang(l); dropdown.classList.add('hidden'); };
      dropdown.appendChild(opt);
    });
    switcher.appendChild(dropdown);

    // Toggle dropdown
    current.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', () => dropdown.classList.add('hidden'));
  }

  // Update UI after lang change
  const origSetLang = setLang;
  setLang = function(lang) {
    origSetLang(lang);
    const cur = document.getElementById('langCurrent');
    if (cur) cur.innerHTML = langShort[lang] + ' <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';
  };
});
