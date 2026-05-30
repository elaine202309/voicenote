// VoiceNote Language System — 6 Languages
const LANG_KEY='voicenote_lang';
const LANGS=['en','fr','de','es','it','zh'];

const T={
'nav.home':{en:'Home',fr:'Accueil',de:'Start',es:'Inicio',it:'Home',zh:'首页'},
'nav.pricing':{en:'Pricing',fr:'Tarifs',de:'Preise',es:'Precios',it:'Prezzi',zh:'定价'},
'nav.download':{en:'Download',fr:'Télécharger',de:'Download',es:'Descargar',it:'Scarica',zh:'下载'},
'nav.contact':{en:'Contact',fr:'Contact',de:'Kontakt',es:'Contacto',it:'Contatto',zh:'联系'},
'nav.cta':{en:'Try Free',fr:'Essai Gratuit',de:'Testen',es:'Probar',it:'Prova',zh:'免费试用'},

// index — Hero
'hero.badge':{en:'Your AI Voice Alchemist',fr:'Votre Alchimiste Vocal IA',de:'Ihr KI-Sprachalchemist',es:'Tu Alquimista de Voz IA',it:'Il Tuo Alchimista Vocale IA',zh:'你的 AI 语音炼金师'},
'hero.title':{en:'Turn messy voice into clear text',fr:'Transformez une voix brouillonne en texte clair',de:'Chaotische Sprache in klaren Text',es:'Convierte voz confusa en texto claro',it:'Voce confusa in testo chiaro',zh:'把混乱的语音变成清晰的文字'},
'hero.subtitle':{en:'Speak naturally. VoiceNote polishes every word with AI.',fr:'Parlez naturellement. VoiceNote peaufine chaque mot.',de:'Sprechen Sie. VoiceNote verfeinert jedes Wort.',es:'Habla. VoiceNote pule cada palabra.',it:'Parla. VoiceNote perfeziona ogni parola.',zh:'自然地说，VoiceNote 用 AI 润色每一句话。'},

// index — How It Works
'how.tag':{en:'Simple & Fast',fr:'Simple et Rapide',de:'Einfach & Schnell',es:'Simple y Rápido',it:'Semplice e Veloce',zh:'简单快速'},
'how.title':{en:'From Voice to Perfect Text in 3 Steps',fr:'De la voix au texte parfait en 3 étapes',de:'Von Sprache zu perfektem Text in 3 Schritten',es:'De voz a texto perfecto en 3 pasos',it:'Dalla voce al testo perfetto in 3 passi',zh:'三步从语音到完美文字'},
'how.step1':{en:'Speak Freely',fr:'Parlez Librement',de:'Frei Sprechen',es:'Habla Libremente',it:'Parla Liberamente',zh:'自由说'},
'how.step1.d':{en:'Tap the mic and talk naturally.',fr:'Appuyez et parlez.',de:'Mikro antippen und sprechen.',es:'Toca el micrófono y habla.',it:'Tocca e parla.',zh:'点击麦克风，自然说话。'},
'how.step2':{en:'Choose Your Style',fr:'Choisissez Votre Style',de:'Stil Wählen',es:'Elige Tu Estilo',it:'Scegli lo Stile',zh:'选择风格'},
'how.step2.d':{en:'Select context — email, summary, social, or formal.',fr:'Sélectionnez — email, résumé, social.',de:'Kontext wählen — E-Mail, Zusammenfassung.',es:'Elige contexto — email, resumen, social.',it:'Scegli — email, riassunto, social.',zh:'选场景 — 邮件、摘要、社交媒体。'},
'how.step3':{en:'Ready to Use',fr:'Prêt à l\'Emploi',de:'Einsatzbereit',es:'Listo para Usar',it:'Pronto all\'Uso',zh:'立即可用'},
'how.step3.d':{en:'Get polished, ready-to-share text instantly.',fr:'Texte peaufiné, prêt à partager.',de:'Verfeinerter Text, bereit zum Teilen.',es:'Texto pulido, listo para compartir.',it:'Testo perfezionato, pronto.',zh:'即刻获得润色好的文字。'},

// index — Smart Styles
'styles.tag':{en:'AI Smart Styles',fr:'Styles IA Intelligents',de:'KI Smarte Stile',es:'Estilos IA Inteligentes',it:'Stili IA Intelligenti',zh:'AI 智能风格'},
'styles.title':{en:'One Voice Note. Endless Possibilities.',fr:'Une Note Vocale. Possibilités Infinies.',de:'Eine Sprachnotiz. Endlose Möglichkeiten.',es:'Una Nota. Infinitas Posibilidades.',it:'Una Nota. Infinite Possibilità.',zh:'一条语音，无限可能。'},
'styles.sub':{en:'Dictate once, rewrite for any platform.',fr:'Dictez une fois, réécrivez partout.',de:'Einmal diktieren, überall umschreiben.',es:'Dicta una vez, reescribe en todas partes.',it:'Detta una volta, riscrivi ovunque.',zh:'说一次，为任何平台重写。'},
'styles.voice':{en:'VOICE INPUT',fr:'ENTRÉE VOCALE',de:'SPRACHEINGABE',es:'ENTRADA DE VOZ',it:'INGRESSO VOCALE',zh:'语音输入'},
'styles.plain':{en:'Plain & Direct',fr:'Clair & Direct',de:'Klar & Direkt',es:'Claro & Directo',it:'Chiaro & Diretto',zh:'简洁直接'},
'styles.email':{en:'Professional Email',fr:'Email Professionnel',de:'Professionelle E-Mail',es:'Email Profesional',it:'Email Professionale',zh:'正式邮件'},
'styles.key':{en:'Key Takeaways',fr:'Points Clés',de:'Kernpunkte',es:'Puntos Clave',it:'Punti Chiave',zh:'要点总结'},
'styles.casual':{en:'Casual / Slack',fr:'Décontracté',de:'Locker',es:'Informal',it:'Informale',zh:'随意聊天'},

// index — 46 Languages
'lang.tag':{en:'46 Languages',fr:'46 Langues',de:'46 Sprachen',es:'46 Idiomas',it:'46 Lingue',zh:'46 种语言'},
'lang.title':{en:'Speak your language, write in any language',fr:'Parlez votre langue, écrivez dans toutes',de:'Sprechen Sie Ihre Sprache',es:'Habla tu idioma, escribe en cualquiera',it:'Parla la tua lingua, scrivi in qualsiasi',zh:'说你的语言，写任何语言'},
'lang.sub':{en:'VoiceNote transcribes and polishes in 46 languages.',fr:'VoiceNote transcrit et peaufine en 46 langues.',de:'VoiceNote in 46 Sprachen.',es:'VoiceNote en 46 idiomas.',it:'VoiceNote in 46 lingue.',zh:'VoiceNote 支持 46 种语言转录润色。'},

// index — Who It's For
'who.tag':{en:'Built for Thinkers',fr:'Pour les Penseurs',de:'Für Denker',es:'Para Pensadores',it:'Per Pensatori',zh:'为思考者而生'},
'who.title':{en:'For Minds That Move Faster Than Fingers',fr:'Pour les esprits plus rapides que les doigts',de:'Für Köpfe, die schneller als Finger sind',es:'Mentes más rápidas que los dedos',it:'Menti più veloci delle dita',zh:'为思考比打字快的人'},
'who.sub':{en:'No matter what you do, VoiceNote is for you.',fr:'Quoi que vous fassiez, VoiceNote est pour vous.',de:'Egal was Sie tun, VoiceNote ist für Sie.',es:'Hagas lo que hagas, VoiceNote es para ti.',it:'Qualsiasi cosa tu faccia, VoiceNote è per te.',zh:'无论做什么，VoiceNote 都适合你。'},
'who.writers':{en:'Writers & Creators',fr:'Écrivains & Créateurs',de:'Autoren & Kreative',es:'Escritores & Creadores',it:'Scrittori & Creativi',zh:'作家与创作者'},
'who.writers.d':{en:'Speak drafts instead of staring at blank pages.',fr:'Parlez vos brouillons.',de:'Sprechen Sie Ihre Entwürfe.',es:'Habla tus borradores.',it:'Parla le tue bozze.',zh:'说出来代替盯空白页。'},
'who.pros':{en:'Professionals & Executives',fr:'Professionnels & Cadres',de:'Profis & Führungskräfte',es:'Profesionales & Ejecutivos',it:'Professionisti & Dirigenti',zh:'职场人士与管理层'},
'who.pros.d':{en:'Dictate emails and reports effortlessly.',fr:'Dictez emails et rapports.',de:'Diktieren Sie E-Mails und Berichte.',es:'Dicta correos e informes.',it:'Detta email e report.',zh:'轻松口述邮件和报告。'},
'who.students':{en:'Students',fr:'Étudiants',de:'Studenten',es:'Estudiantes',it:'Studenti',zh:'学生'},
'who.students.d':{en:'Summarise lectures and dictate notes.',fr:'Résumez les cours, dictez vos notes.',de:'Vorlesungen zusammenfassen.',es:'Resume clases, dicta apuntes.',it:'Riassumi lezioni, detta appunti.',zh:'总结课程，口述笔记。'},
'who.parents':{en:'Busy Parents',fr:'Parents Occupés',de:'Beschäftigte Eltern',es:'Padres Ocupados',it:'Genitori Impegnati',zh:'忙碌的父母'},
'who.parents.d':{en:'Capture ideas while cooking or driving.',fr:'Capturez des idées en cuisinant.',de:'Ideen beim Kochen oder Fahren.',es:'Captura ideas mientras cocinas.',it:'Cattura idee mentre cucini.',zh:'做饭开车时捕捉灵感。'},
'who.thinkers':{en:'Thinkers & Ideators',fr:'Penseurs & Idéateurs',de:'Denker & Ideengeber',es:'Pensadores & Ideadores',it:'Pensatori & Ideatori',zh:'思考者与创意人'},
'who.thinkers.d':{en:'Brainstorm out loud. VoiceNote organises it.',fr:'Brainstorming à voix haute.',de:'Brainstorming laut aussprechen.',es:'Lluvia de ideas en voz alta.',it:'Brainstorming ad alta voce.',zh:'大声头脑风暴，VoiceNote 整理。'},

// index — Download CTA
'dl.tag':{en:'Try Free',fr:'Essai Gratuit',de:'Kostenlos Testen',es:'Probar Gratis',it:'Prova Gratis',zh:'免费试用'},
'dl.title':{en:'Ready to Upgrade Your Workflow?',fr:'Prêt à Améliorer Votre Flux ?',de:'Bereit für Upgrade?',es:'¿Listo para Mejorar?',it:'Pronto a Migliorare?',zh:'准备好升级工作流了吗？'},
'dl.ios':{en:'iOS',fr:'iOS',de:'iOS',es:'iOS',it:'iOS',zh:'iOS'},
'dl.ios.d':{en:'iPhone & iPad',fr:'iPhone et iPad',de:'iPhone & iPad',es:'iPhone y iPad',it:'iPhone e iPad',zh:'iPhone 和 iPad'},
'dl.btn':{en:'Download on the App Store',fr:'Télécharger sur l\'App Store',de:'Im App Store laden',es:'Descargar en App Store',it:'Scarica su App Store',zh:'在 App Store 下载'},
'dl.soon':{en:'Coming soon',fr:'Bientôt disponible',de:'Demnächst',es:'Próximamente',it:'Prossimamente',zh:'即将上线'},

// Pricing page
'pricing.tag':{en:'Pricing',fr:'Tarifs',de:'Preise',es:'Precios',it:'Prezzi',zh:'定价'},
'pricing.title':{en:'Try it free.',fr:'Essayez gratuitement.',de:'Kostenlos testen.',es:'Pruébalo gratis.',it:'Provalo gratis.',zh:'免费试用。'},
'pricing.free':{en:'Free',fr:'Gratuit',de:'Kostenlos',es:'Gratis',it:'Gratis',zh:'免费'},
'pricing.free.desc':{en:'Start your free trial',fr:'Commencez votre essai',de:'Testversion starten',es:'Comienza tu prueba',it:'Inizia la prova',zh:'开始免费试用'},
'pricing.free.cta':{en:'Try Free Now',fr:'Essayer Gratuitement',de:'Jetzt Testen',es:'Probar Ahora',it:'Prova Ora',zh:'立即试用'},
'pricing.prime':{en:'Prime',fr:'Prime',de:'Prime',es:'Prime',it:'Prime',zh:'Prime'},
'pricing.prime.desc':{en:'Everything in Free, plus unlimited',fr:'Tout Free, plus illimité',de:'Alles von Free, plus unbegrenzt',es:'Todo Free, más ilimitado',it:'Tutto Free, più illimitato',zh:'Free 全部功能 + 无限使用'},
'pricing.prime.cta':{en:'Download & Try Free',fr:'Télécharger et Essayer',de:'Download & Testen',es:'Descargar y Probar',it:'Scarica e Prova',zh:'下载试用'},
'pricing.notes':{en:'10 free notes',fr:'10 notes gratuites',de:'10 kostenlose Notizen',es:'10 notas gratis',it:'10 note gratis',zh:'10 条免费笔记'},
'pricing.rec':{en:'2 min per recording',fr:'2 min par enregistrement',de:'2 Min pro Aufnahme',es:'2 min por grabación',it:'2 min per registrazione',zh:'2 分钟/条'},
'pricing.polish':{en:'Standard AI polish',fr:'Polissage IA standard',de:'Standard KI-Politur',es:'Pulido IA estándar',it:'Perfezionamento IA standard',zh:'标准 AI 润色'},
'pricing.langs':{en:'46 languages',fr:'46 langues',de:'46 Sprachen',es:'46 idiomas',it:'46 lingue',zh:'46 种语言'},
'pricing.nocc':{en:'No credit card needed',fr:'Pas de carte bancaire',de:'Keine Kreditkarte',es:'Sin tarjeta',it:'Nessuna carta',zh:'无需信用卡'},
'pricing.unlim':{en:'Unlimited notes',fr:'Notes illimitées',de:'Unbegrenzte Notizen',es:'Notas ilimitadas',it:'Note illimitate',zh:'无限笔记'},
'pricing.f15min':{en:'15 min per recording',fr:'15 min par enregistrement',de:'15 Min pro Aufnahme',es:'15 min por grabación',it:'15 min per registrazione',zh:'15 分钟/条'},
'pricing.advai':{en:'Advanced AI + all styles',fr:'IA avancée + tous styles',de:'Erweiterte KI + alle Stile',es:'IA avanzada + todos estilos',it:'IA avanzata + tutti stili',zh:'高级 AI + 全风格'},
'pricing.tags':{en:'Tags & folders',fr:'Tags & dossiers',de:'Tags & Ordner',es:'Etiquetas y carpetas',it:'Tag & cartelle',zh:'标签和文件夹'},
'pricing.cancel':{en:'Cancel anytime',fr:'Annulez à tout moment',de:'Jederzeit kündbar',es:'Cancela cuando quieras',it:'Annulla quando vuoi',zh:'随时取消'},
'pricing.mo':{en:'$9.99/mo',fr:'9,99$/mois',de:'9,99$/Monat',es:'$9.99/mes',it:'9,99$/mese',zh:'$9.99/月'},
'pricing.qtr':{en:'$25/qtr',fr:'25$/trim',de:'25$/Quartal',es:'$25/trim',it:'25$/trim',zh:'$25/季'},
'pricing.yr':{en:'$69/yr',fr:'69$/an',de:'69$/Jahr',es:'$69/año',it:'69$/anno',zh:'$69/年'},
'pricing.save':{en:'Save 28% with annual billing',fr:'Économisez 28% en facturation annuelle',de:'28% sparen bei jährlicher Zahlung',es:'Ahorra 28% con facturación anual',it:'Risparmia 28% con fatturazione annuale',zh:'年付省 28%'},

// Pricing — Compare
'compare.tag':{en:'Compare',fr:'Comparer',de:'Vergleichen',es:'Comparar',it:'Confronta',zh:'对比'},
'compare.title':{en:'Free vs Prime',fr:'Gratuit vs Prime',de:'Kostenlos vs Prime',es:'Gratis vs Prime',it:'Gratis vs Prime',zh:'免费 vs Prime'},
'compare.feature':{en:'Feature',fr:'Fonctionnalité',de:'Funktion',es:'Función',it:'Funzione',zh:'功能'},
'compare.notes':{en:'Notes',fr:'Notes',de:'Notizen',es:'Notas',it:'Note',zh:'笔记数'},
'compare.length':{en:'Recording length',fr:'Durée',de:'Aufnahmelänge',es:'Duración',it:'Durata',zh:'录音时长'},
'compare.polish':{en:'AI polish quality',fr:'Qualité IA',de:'KI-Qualität',es:'Calidad IA',it:'Qualità IA',zh:'AI 润色质量'},
'compare.styles':{en:'AI writing styles',fr:'Styles d\'écriture',de:'Schreibstile',es:'Estilos',it:'Stili',zh:'写作风格'},
'compare.history':{en:'History',fr:'Historique',de:'Verlauf',es:'Historial',it:'Cronologia',zh:'历史记录'},
'compare.support':{en:'Support',fr:'Support',de:'Support',es:'Soporte',it:'Supporto',zh:'支持'},

// Pricing — FAQ
'faq.tag':{en:'FAQ',fr:'FAQ',de:'FAQ',es:'FAQ',it:'FAQ',zh:'常见问题'},
'faq.title':{en:'Frequently asked questions',fr:'Questions fréquentes',de:'Häufige Fragen',es:'Preguntas frecuentes',it:'Domande frequenti',zh:'常见问题解答'},
'faq.q1':{en:'How does the free trial work?',fr:'Comment fonctionne l\'essai gratuit ?',de:'Wie funktioniert die Testversion?',es:'¿Cómo funciona la prueba?',it:'Come funziona la prova?',zh:'免费试用如何运作？'},
'faq.a1':{en:'Your first 10 notes are completely free (up to 2 minutes each). No credit card required. After that, choose a Prime plan to keep recording.',fr:'Vos 10 premières notes sont gratuites. Pas de CB. Ensuite, choisissez Prime.',de:'Ihre ersten 10 Notizen sind kostenlos. Keine Kreditkarte. Danach Prime wählen.',es:'Tus 10 primeras notas son gratis. Sin tarjeta. Luego elige Prime.',it:'Le prime 10 note sono gratis. Nessuna carta. Poi scegli Prime.',zh:'前 10 条笔记完全免费（每条 2 分钟）。无需信用卡。之后选择 Prime 继续。'},
'faq.q2':{en:'Can I switch or cancel anytime?',fr:'Puis-je changer ou annuler ?',de:'Kann ich wechseln oder kündigen?',es:'¿Puedo cambiar o cancelar?',it:'Posso cambiare o annullare?',zh:'可以随时切换或取消吗？'},
'faq.a2':{en:'Absolutely. Upgrade, downgrade, or cancel directly from the app.',fr:'Absolument. Mettez à niveau ou annulez depuis l\'app.',de:'Ja. Upgrade oder Kündigung direkt in der App.',es:'Sí. Cambia o cancela desde la app.',it:'Sì. Aggiorna o annulla dall\'app.',zh:'当然。直接从 App 内升级、降级或取消。'},
'faq.q3':{en:'What happens to my notes if I cancel?',fr:'Qu\'arrive-t-il à mes notes ?',de:'Was passiert mit meinen Notizen?',es:'¿Qué pasa con mis notas?',it:'Cosa succede alle mie note?',zh:'取消后笔记怎么办？'},
'faq.a3':{en:'Your notes are yours forever. Read-only access remains.',fr:'Vos notes sont à vous. Accès en lecture seule conservé.',de:'Ihre Notizen bleiben. Lesezugriff erhalten.',es:'Tus notas son tuyas. Acceso de solo lectura.',it:'Le tue note sono tue. Accesso in lettura.',zh:'笔记永远属于你。保留只读访问权限。'},
'faq.q4':{en:'Do you offer a refund guarantee?',fr:'Offrez-vous une garantie de remboursement ?',de:'Gibt es eine Geld-zurück-Garantie?',es:'¿Ofrecen garantía de reembolso?',it:'Offrite una garanzia di rimborso?',zh:'有退款保证吗？'},
'faq.a4':{en:'Yes, 7-day money-back guarantee. Contact support for a full refund.',fr:'Oui, garantie 7 jours. Contactez le support.',de:'Ja, 7-Tage-Garantie. Support kontaktieren.',es:'Sí, 7 días de garantía. Contacta soporte.',it:'Sì, garanzia 7 giorni. Contatta il supporto.',zh:'是的，7 天退款保证。联系支持全额退款。'},
'faq.q5':{en:'What languages does VoiceNote support?',fr:'Quelles langues VoiceNote prend-il en charge ?',de:'Welche Sprachen unterstützt VoiceNote?',es:'¿Qué idiomas admite?',it:'Quali lingue supporta?',zh:'VoiceNote 支持哪些语言？'},
'faq.a5':{en:'46 languages across Europe, Asia, the Middle East, and the Americas.',fr:'46 langues en Europe, Asie, Moyen-Orient et Amériques.',de:'46 Sprachen in Europa, Asien, Nahost und Amerika.',es:'46 idiomas en Europa, Asia, Oriente Medio y América.',it:'46 lingue in Europa, Asia, Medio Oriente e Americhe.',zh:'覆盖欧洲、亚洲、中东和美洲的 46 种语言。'},
'faq.q6':{en:'How long can each recording be?',fr:'Quelle est la durée max par enregistrement ?',de:'Wie lang kann eine Aufnahme sein?',es:'¿Cuánto dura cada grabación?',it:'Quanto può durare una registrazione?',zh:'每条录音可以多长？'},
'faq.a6':{en:'Up to 15 minutes on Prime. Enough for meetings, journals, and brain dumps.',fr:'Jusqu\'à 15 min sur Prime.',de:'Bis zu 15 Min auf Prime.',es:'Hasta 15 min en Prime.',it:'Fino a 15 min su Prime.',zh:'Prime 最长 15 分钟。'},

// Download page
'dpage.tag':{en:'iOS App',fr:'App iOS',de:'iOS App',es:'App iOS',it:'App iOS',zh:'iOS 应用'},
'dpage.title':{en:'Capture your ideas anywhere, anytime',fr:'Capturez vos idées partout',de:'Ideen überall festhalten',es:'Captura ideas en cualquier lugar',it:'Cattura idee ovunque',zh:'随时随地捕捉灵感'},
'dpage.sub':{en:'Available for iPhone and iPad. Download now.',fr:'Disponible pour iPhone et iPad.',de:'Für iPhone und iPad.',es:'Para iPhone y iPad.',it:'Per iPhone e iPad.',zh:'适用于 iPhone 和 iPad。'},
'dpage.qr':{en:'Scan to download',fr:'Scannez pour télécharger',de:'Scannen zum Download',es:'Escanear para descargar',it:'Scansiona per scaricare',zh:'扫码下载'},
'dpage.scan':{en:'Scan to get VoiceNote',fr:'Scannez pour obtenir VoiceNote',de:'Scannen für VoiceNote',es:'Escanea para VoiceNote',it:'Scansiona per VoiceNote',zh:'扫码获取 VoiceNote'},
'dpage.scan.d':{en:'Open your iPhone camera and scan.',fr:'Ouvrez l\'appareil photo et scannez.',de:'iPhone-Kamera öffnen und scannen.',es:'Abre la cámara y escanea.',it:'Apri la fotocamera e scansiona.',zh:'打开 iPhone 相机扫码下载。'},
'dpage.inside':{en:'Inside the App',fr:'Dans l\'App',de:'In der App',es:'Dentro de la App',it:'Dentro l\'App',zh:'应用预览'},
'dpage.inside.title':{en:'Minimalist design, maximum productivity',fr:'Design minimaliste, productivité max',de:'Minimalistisch, maximale Produktivität',es:'Diseño mínimo, máxima productividad',it:'Design minimalista, massima produttività',zh:'极简设计，极致效率'},
'dpage.step1':{en:'Record in one tap',fr:'Enregistrer en un clic',de:'Ein-Tipp-Aufnahme',es:'Grabar en un toque',it:'Registra in un tocco',zh:'一键录音'},
'dpage.step1.d':{en:'Press the big mic button and start talking',fr:'Appuyez sur le micro et parlez',de:'Großen Mikrofon-Button drücken',es:'Pulsa el micrófono y habla',it:'Premi il microfono e parla',zh:'按下大麦克风按钮开始说话'},
'dpage.step2':{en:'AI-polished text',fr:'Texte peaufiné par IA',de:'KI-verfeinerter Text',es:'Texto pulido por IA',it:'Testo perfezionato dall\'IA',zh:'AI 润色文字'},
'dpage.step2.d':{en:'Deepgram + GPT refine your words',fr:'Deepgram + GPT peaufinent vos mots',de:'Deepgram + GPT verfeinern',es:'Deepgram + GPT refinan',it:'Deepgram + GPT perfezionano',zh:'Deepgram + GPT 润色你的话'},
'dpage.step3':{en:'Organise with tags',fr:'Organisez avec des tags',de:'Mit Tags organisieren',es:'Organiza con etiquetas',it:'Organizza con tag',zh:'标签整理'},
'dpage.step3.d':{en:'Folders, tags & full-text search',fr:'Dossiers, tags & recherche',de:'Ordner, Tags & Volltextsuche',es:'Carpetas, etiquetas y búsqueda',it:'Cartelle, tag e ricerca',zh:'文件夹、标签和全文搜索'},
'dpage.getstarted':{en:'Get Started',fr:'Commencer',de:'Loslegen',es:'Empezar',it:'Inizia',zh:'开始使用'},
'dpage.install':{en:'Install in seconds',fr:'Installer en quelques secondes',de:'In Sekunden installiert',es:'Instalar en segundos',it:'Installa in pochi secondi',zh:'秒速安装'},
'dpage.install1':{en:'Download the app',fr:'Téléchargez l\'app',de:'App herunterladen',es:'Descarga la app',it:'Scarica l\'app',zh:'下载 App'},
'dpage.install1.d':{en:'Get VoiceNote from the App Store.',fr:'Depuis l\'App Store.',de:'Aus dem App Store.',es:'Desde la App Store.',it:'Dall\'App Store.',zh:'从 App Store 下载。'},
'dpage.install2':{en:'Create your account',fr:'Créez votre compte',de:'Konto erstellen',es:'Crea tu cuenta',it:'Crea il tuo account',zh:'创建账户'},
'dpage.install2.d':{en:'Sign up in under 30 seconds.',fr:'Inscrivez-vous en 30 secondes.',de:'In 30 Sekunden registrieren.',es:'Regístrate en 30 segundos.',it:'Registrati in 30 secondi.',zh:'30 秒内注册。'},
'dpage.install3':{en:'Tap record & speak',fr:'Appuyez et parlez',de:'Aufnehmen & Sprechen',es:'Toca y habla',it:'Tocca e parla',zh:'点击录音说话'},
'dpage.install3.d':{en:'Hit record and start talking.',fr:'Appuyez et commencez.',de:'Aufnehmen und lossprechen.',es:'Pulsa y empieza a hablar.',it:'Premi e inizia a parlare.',zh:'点击录音开始说话。'},
'dpage.install4':{en:'Read, copy, share',fr:'Lisez, copiez, partagez',de:'Lesen, Kopieren, Teilen',es:'Lee, copia, comparte',it:'Leggi, copia, condividi',zh:'阅读、复制、分享'},
'dpage.install4.d':{en:'Your polished text is ready.',fr:'Votre texte est prêt.',de:'Ihr Text ist fertig.',es:'Tu texto está listo.',it:'Il tuo testo è pronto.',zh:'润色后的文字已就绪。'},
'dpage.req':{en:'Requirements',fr:'Prérequis',de:'Anforderungen',es:'Requisitos',it:'Requisiti',zh:'系统要求'},
'dpage.req.title':{en:'What you need',fr:'Ce dont vous avez besoin',de:'Was Sie brauchen',es:'Lo que necesitas',it:'Cosa ti serve',zh:'你需要什么'},
'dpage.req.ios':{en:'iPhone or iPad running iOS 16.0 or later',fr:'iPhone ou iPad sous iOS 16.0+',de:'iPhone oder iPad mit iOS 16.0+',es:'iPhone o iPad con iOS 16.0+',it:'iPhone o iPad con iOS 16.0+',zh:'iPhone 或 iPad，iOS 16.0 以上'},

// Contact page
'contact.tag':{en:'Support',fr:'Assistance',de:'Support',es:'Soporte',it:'Supporto',zh:'支持'},
'contact.title':{en:'We\'d love to hear from you',fr:'Nous aimerions vous entendre',de:'Wir freuen uns auf Sie',es:'Nos encantaría saber de ti',it:'Ci piacerebbe sentirti',zh:'我们期待你的来信'},
'contact.sub':{en:'Drop us a line. We\'ll get back within 24 hours.',fr:'Écrivez-nous. Réponse sous 24h.',de:'Schreiben Sie uns. Antwort in 24h.',es:'Escríbenos. Respondemos en 24h.',it:'Scrivici. Rispondiamo entro 24h.',zh:'联系我们，24 小时内回复。'},
'contact.email':{en:'support@voicenote.uk',fr:'support@voicenote.uk',de:'support@voicenote.uk',es:'support@voicenote.uk',it:'support@voicenote.uk',zh:'support@voicenote.uk'},
'contact.getapp':{en:'Get the App',fr:'Obtenir l\'App',de:'App holen',es:'Obtener la App',it:'Ottieni l\'App',zh:'获取应用'},
'contact.scan':{en:'Scan to get VoiceNote',fr:'Scannez pour VoiceNote',de:'Scannen für VoiceNote',es:'Escanea para VoiceNote',it:'Scansiona per VoiceNote',zh:'扫码获取 VoiceNote'},
'contact.scan.d':{en:'Open your iPhone camera and scan.',fr:'Ouvrez l\'appareil photo et scannez.',de:'iPhone-Kamera öffnen und scannen.',es:'Abre la cámara y escanea.',it:'Apri la fotocamera e scansiona.',zh:'打开 iPhone 相机扫码。'},

// Footer
'footer.tagline':{en:'Your pocket voice assistant.',fr:'Votre assistant vocal de poche.',de:'Ihr Taschen-Sprachassistent.',es:'Tu asistente de voz.',it:'Il tuo assistente vocale.',zh:'你的口袋语音助手。'},
'footer.privacy':{en:'Privacy Policy',fr:'Confidentialité',de:'Datenschutz',es:'Privacidad',it:'Privacy',zh:'隐私政策'},
'footer.terms':{en:'Terms of Service',fr:'Conditions',de:'Nutzungsbedingungen',es:'Términos',it:'Termini',zh:'服务条款'},
'footer.cookies':{en:'Cookie Policy',fr:'Cookies',de:'Cookies',es:'Cookies',it:'Cookie',zh:'Cookie 政策'},
};

// ---- Engine ----
function getLang(){const s=localStorage.getItem(LANG_KEY);return s&&LANGS.includes(s)?s:(LANGS.includes(navigator.language.slice(0,2))?navigator.language.slice(0,2):'en');}
function setLang(l){if(!LANGS.includes(l))return;localStorage.setItem(LANG_KEY,l);applyLang();updateBadge();}
function applyLang(){const l=getLang();document.documentElement.lang=l;document.querySelectorAll('[data-t]').forEach(el=>{const k=el.getAttribute('data-t');if(T[k]&&T[k][l])el.textContent=T[k][l];});}
function updateBadge(){const l=getLang();const m={en:'EN',fr:'FR',de:'DE',es:'ES',it:'IT',zh:'中文'};const b=document.getElementById('langCurrent');if(b)b.innerHTML=m[l]+' <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';}
document.addEventListener('DOMContentLoaded',()=>{applyLang();const m={en:'English',fr:'Français',de:'Deutsch',es:'Español',it:'Italiano',zh:'中文'};const s={en:'EN',fr:'FR',de:'DE',es:'ES',it:'IT',zh:'中文'};const l=getLang();const w=document.getElementById('langSwitcher');if(!w)return;w.innerHTML='';const c=document.createElement('span');c.id='langCurrent';c.className='text-xs font-medium text-gray-500 cursor-pointer hover:text-gray-700 flex items-center gap-1';c.innerHTML=s[l]+' <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';w.appendChild(c);const d=document.createElement('div');d.id='langDropdown';d.className='absolute top-full right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg py-1 hidden z-50 min-w-[140px]';LANGS.forEach(x=>{const o=document.createElement('button');o.textContent=m[x];o.className='lang-option block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 '+(x===l?'font-semibold text-brand-600':'');o.setAttribute('data-lang',x);o.onclick=()=>{setLang(x);d.classList.add('hidden');};d.appendChild(o);});w.appendChild(d);c.addEventListener('click',e=>{e.stopPropagation();d.classList.toggle('hidden');});document.addEventListener('click',()=>d.classList.add('hidden'));});
