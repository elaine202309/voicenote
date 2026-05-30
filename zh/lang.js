var LANG_KEY='voicenote_lang',LANGS=['en','fr','de','es','it','zh'];
var T={
// Nav
'Home':{FR:'Accueil',DE:'Start',ES:'Inicio',IT:'Home',ZH:'首页'},
'Pricing':{FR:'Tarifs',DE:'Preise',ES:'Precios',IT:'Prezzi',ZH:'定价'},
'Download':{FR:'Telecharger',DE:'Download',ES:'Descargar',IT:'Scarica',ZH:'下载'},
'Contact':{FR:'Contact',DE:'Kontakt',ES:'Contacto',IT:'Contatto',ZH:'联系'},
'Try Free':{FR:'Essai Gratuit',DE:'Testen',ES:'Probar',IT:'Prova',ZH:'免费试用'},
'Try Free Now':{FR:'Essayer',DE:'Jetzt testen',ES:'Probar ahora',IT:'Prova ora',ZH:'立即试用'},
'Get the App':{FR:'Obtenir l\'App',DE:'App holen',ES:'Obtener la App',IT:'Ottieni l\'App',ZH:'获取应用'},
// Hero
'Your AI Voice Alchemist':{FR:'Votre Alchimiste Vocal IA',DE:'Ihr KI-Sprachalchemist',ES:'Tu Alquimista de Voz IA',IT:'Il Tuo Alchimista Vocale IA',ZH:'你的 AI 语音炼金师'},
'Turn messy thoughts':{FR:'Pensees brouillonnes',DE:'Chaotische Gedanken',ES:'Pensamientos',IT:'Pensieri confusi',ZH:'将混乱的想法'},
'into structured text':{FR:'en texte structure',DE:'in Text',ES:'en texto',IT:'in testo',ZH:'变成清晰的文字'},
'Voice input':{FR:'Entree vocale',DE:'Spracheingabe',ES:'Entrada de voz',IT:'Ingresso vocale',ZH:'语音输入'},
'AI polished':{FR:'Peaufine par IA',DE:'KI-verfeinert',ES:'Pulido por IA',IT:'Perfezionato IA',ZH:'AI 润色后'},
'Download on the':{FR:'Telecharger sur l\'',DE:'Laden im',ES:'Descargar en',IT:'Scarica su',ZH:'在 '},
'App Store':{FR:'App Store',DE:'App Store',ES:'App Store',IT:'App Store',ZH:'App Store'},
'Download on the App Store':{FR:'Telecharger sur l\'App Store',DE:'Im App Store laden',ES:'Descargar en App Store',IT:'Scarica su App Store',ZH:'在 App Store 下载'},
'Scan to download':{FR:'Scannez pour telecharger',DE:'Scannen zum Download',ES:'Escanear para descargar',IT:'Scansiona per scaricare',ZH:'扫码下载'},
'Scan to ':{FR:'Scannez pour ',DE:'Scannen fur ',ES:'Escanear para ',IT:'Scansiona per ',ZH:'扫码'},
'get VoiceNote':{FR:'obtenir VoiceNote',DE:'VoiceNote erhalten',ES:'obtener VoiceNote',IT:'ottenere VoiceNote',ZH:'获取 VoiceNote'},
// How it works
'Simple & Fast':{FR:'Simple et Rapide',DE:'Einfach & Schnell',ES:'Simple y Rapido',IT:'Semplice e Veloce',ZH:'简单快速'},
'From voice to perfect text ':{FR:'De la voix au texte parfait ',DE:'Von Sprache zu perfektem Text ',ES:'De voz a texto perfecto ',IT:'Dalla voce al testo perfetto ',ZH:'从语音到完美文字 '},
'in 3 steps':{FR:'en 3 etapes',DE:'in 3 Schritten',ES:'en 3 pasos',IT:'in 3 passi',ZH:'只需三步'},
'Speak Freely':{FR:'Parlez Librement',DE:'Frei Sprechen',ES:'Habla Libremente',IT:'Parla Liberamente',ZH:'自由说'},
'Tap the mic and talk without filtering. Um\'s, ah\'s, and pauses? Our AI ignores them.':{FR:'Parlez sans filtre. L\'IA ignore les hesitations.',DE:'Sprechen Sie. KI ignoriert Pausen.',ES:'Habla sin filtro. La IA ignora pausas.',IT:'Parla senza filtri. L\'IA ignora le pause.',ZH:'自由说不用顾虑。语气词和停顿？AI 会忽略。'},
'Choose Your Style':{FR:'Choisissez',DE:'Stil wahlen',ES:'Elige Estilo',IT:'Scegli Stile',ZH:'选择风格'},
'Select your context. Need an email, a tweet, or a structured summary?':{FR:'Email, tweet ou resume?',DE:'E-Mail, Tweet oder Zusammenfassung?',ES:'Email, tweet o resumen?',IT:'Email, tweet o riassunto?',ZH:'邮件、推文还是摘要？'},
'Ready to Use':{FR:'Pret a l\'emploi',DE:'Einsatzbereit',ES:'Listo para Usar',IT:'Pronto all\'Uso',ZH:'立即可用'},
'Get beautifully polished, ready-to-share text in seconds.':{FR:'Texte parfait en secondes.',DE:'Perfekter Text in Sekunden.',ES:'Texto perfecto en segundos.',IT:'Testo perfetto in secondi.',ZH:'秒速获得可分享的精美文字。'},
// Smart Styles
'AI Smart Styles':{FR:'Styles IA',DE:'KI Stile',ES:'Estilos IA',IT:'Stili IA',ZH:'AI 智能风格'},
'One voice note, ':{FR:'Une note vocale, ',DE:'Eine Notiz, ',ES:'Una nota, ',IT:'Una nota, ',ZH:'一条语音，'},
'endless possibilities':{FR:'possibilites infinies',DE:'endlose Moglichkeiten',ES:'infinitas posibilidades',IT:'infinite possibilita',ZH:'无限可能'},
'VOICE INPUT':{FR:'ENTREE VOCALE',DE:'SPRACHEINGABE',ES:'ENTRADA DE VOZ',IT:'INGRESSO VOCALE',ZH:'语音输入'},
'Plain & Direct':{FR:'Clair & Direct',DE:'Klar & Direkt',ES:'Claro & Directo',IT:'Chiaro & Diretto',ZH:'简洁直接'},
'Professional Email':{FR:'Email Professionnel',DE:'E-Mail',ES:'Email Profesional',IT:'Email Professionale',ZH:'正式邮件'},
'Key Takeaways':{FR:'Points Cles',DE:'Kernpunkte',ES:'Puntos Clave',IT:'Punti Chiave',ZH:'要点总结'},
'Casual / Slack':{FR:'Decontracte',DE:'Locker',ES:'Informal',IT:'Informale',ZH:'随意聊天'},
'Subject: ':{FR:'Objet : ',DE:'Betreff: ',ES:'Asunto: ',IT:'Oggetto: ',ZH:'主题：'},
'Project Timeline Extension':{FR:'Prolongation du delai',DE:'Fristverlangerung',ES:'Extension del plazo',IT:'Estensione scadenza',ZH:'项目延长期限'},
'Dear Team,':{FR:'Chere equipe,',DE:'Liebes Team,',ES:'Estimado equipo,',IT:'Caro team,',ZH:'各位团队成员，'},
'Best regards':{FR:'Cordialement',DE:'Mit freundlichen Grussen',ES:'Saludos cordiales',IT:'Cordiali saluti',ZH:'此致敬礼'},
'Action Item:':{FR:'Action : ',DE:'Aufgabe: ',ES:'Accion: ',IT:'Azione: ',ZH:'行动项：'},
'Blocker:':{FR:'Blocage : ',DE:'Blockade: ',ES:'Bloqueo: ',IT:'Blocco: ',ZH:'阻塞项：'},
'Next Steps:':{FR:'Prochaines etapes : ',DE:'Nachste Schritte: ',ES:'Proximos pasos: ',IT:'Prossimi passi: ',ZH:'下一步：'},
// 46 Languages
'46 Languages':{FR:'46 Langues',DE:'46 Sprachen',ES:'46 Idiomas',IT:'46 Lingue',ZH:'46 种语言'},
'46 languages':{FR:'46 langues',DE:'46 Sprachen',ES:'46 idiomas',IT:'46 lingue',ZH:'46 种语言'},
'Speak your language, ':{FR:'Parlez votre langue, ',DE:'Sprechen Sie Ihre Sprache, ',ES:'Habla tu idioma, ',IT:'Parla la tua lingua, ',ZH:'用你的语言说，'},
'write in any language':{FR:'ecrivez dans toute langue',DE:'schreiben in jeder Sprache',ES:'escribe en cualquier idioma',IT:'scrivi in qualsiasi lingua',ZH:'用任何语言写'},
'VoiceNote transcribes and polishes in 46 languages, right out of the box.':{FR:'VoiceNote transcrit en 46 langues.',DE:'VoiceNote in 46 Sprachen.',ES:'VoiceNote en 46 idiomas.',IT:'VoiceNote in 46 lingue.',ZH:'VoiceNote 支持 46 种语言。'},
// Language chips
'Nederlands':{FR:'Neerlandais',DE:'Niederlandisch',ES:'Holandes',IT:'Olandese',ZH:'荷兰语'},
'Polski':{FR:'Polonais',DE:'Polnisch',ES:'Polaco',IT:'Polacco',ZH:'波兰语'},
'Portugues':{FR:'Portugais',DE:'Portugiesisch',ES:'Portugues',IT:'Portoghese',ZH:'葡萄牙语'},
'Svenska':{FR:'Suedois',DE:'Schwedisch',ES:'Sueco',IT:'Svedese',ZH:'瑞典语'},
'Turkce':{FR:'Turc',DE:'Turkisch',ES:'Turco',IT:'Turco',ZH:'土耳其语'},
// Who It's For
'Built for Thinkers':{FR:'Pour les Penseurs',DE:'Fur Denker',ES:'Para Pensadores',IT:'Per Pensatori',ZH:'为思考者而生'},
'For minds that move ':{FR:'Pour les esprits ',DE:'Fur Kopfe ',ES:'Mentes que van ',IT:'Menti che vanno ',ZH:'为思维速度 '},
'faster than fingers':{FR:'plus rapides que les doigts',DE:'schneller als Finger',ES:'mas rapido que los dedos',IT:'piu veloci delle dita',ZH:'快过手指的人'},
'No matter your workflow, VoiceNote turns your spoken thoughts into action.':{FR:'VoiceNote transforme vos pensees en action.',DE:'VoiceNote macht Gedanken zu Aktion.',ES:'VoiceNote convierte pensamientos en accion.',IT:'VoiceNote trasforma pensieri in azione.',ZH:'VoiceNote 把你的想法变成行动。'},
'Writers & Creators':{FR:'Ecrivains & Createurs',DE:'Autoren & Kreative',ES:'Escritores & Creadores',IT:'Scrittori & Creativi',ZH:'作家与创作者'},
'Dictate first drafts effortlessly. Never stare at a blank page again.':{FR:'Dictez vos brouillons.',DE:'Diktieren Sie Entwurfe.',ES:'Dicta borradores sin esfuerzo.',IT:'Detta bozze senza sforzo.',ZH:'轻松口述初稿，告别空白页。'},
'Professionals & Executives':{FR:'Professionnels & Cadres',DE:'Profis & Fuhrungskrafte',ES:'Profesionales & Ejecutivos',IT:'Professionisti & Dirigenti',ZH:'职场人士'},
'Turn walking thoughts into polished messages, emails, and memos on the go.':{FR:'Transformez vos pensees en messages.',DE:'Gedanken in Nachrichten verwandeln.',ES:'Convierte pensamientos en mensajes.',IT:'Trasforma pensieri in messaggi.',ZH:'把随想变成精致的消息。'},
'Students':{FR:'Etudiants',DE:'Studenten',ES:'Estudiantes',IT:'Studenti',ZH:'学生'},
'Transcribe lectures, organise study notes, and brainstorm essays hands-free.':{FR:'Transcrivez les cours, organisez vos notes.',DE:'Vorlesungen transkribieren.',ES:'Transcribe clases, organiza apuntes.',IT:'Trascrivi lezioni, organizza appunti.',ZH:'免提转录课程，整理笔记。'},
'Entrepreneurs & Ideators':{FR:'Entrepreneurs & Ideateurs',DE:'Unternehmer & Ideengeber',ES:'Emprendedores & Ideadores',IT:'Imprenditori & Ideatori',ZH:'创业者'},
'Capture chaotic brainstorming sessions and instantly structure them into action plans.':{FR:'Structurez vos brainstormings.',DE:'Brainstorming in Aktionsplane umwandeln.',ES:'Estructura ideas en planes de accion.',IT:'Struttura il brainstorming in piani.',ZH:'把头脑风暴变成行动计划。'},
'Journal Keepers & Thinkers':{FR:'Journaliers & Penseurs',DE:'Tagebuch & Denker',ES:'Diarios & Pensadores',IT:'Diario & Pensatori',ZH:'日记者与思考者'},
'Reflect out loud. Document your day with zero friction and clear insights.':{FR:'Reflechissez a voix haute.',DE:'Laut reflektieren.',ES:'Reflexiona en voz alta.',IT:'Rifletti ad alta voce.',ZH:'大声回顾，零摩擦记录。'},
'Busy Parents':{FR:'Parents Occupes',DE:'Beschaftigte Eltern',ES:'Padres Ocupados',IT:'Genitori Impegnati',ZH:'忙碌的父母'},
'Capture ideas while cooking, driving, or chasing the kids. Totally hands-free.':{FR:'Capturez des idees en cuisinant.',DE:'Ideen beim Kochen oder Fahren.',ES:'Captura ideas mientras cocinas.',IT:'Cattura idee mentre cucini.',ZH:'做饭开车带娃时捕捉灵感，完全免提。'},
// Download CTA
'Ready to ':{FR:'Pret a ',DE:'Bereit zum ',ES:'Listo para ',IT:'Pronto per ',ZH:'准备好'},
'upgrade your workflow':{FR:'ameliorer votre flux?',DE:'Upgrade Ihres Workflows?',ES:'mejorar tu flujo?',IT:'migliorare il tuo flusso?',ZH:'升级工作流了吗？'},
'iOS':{FR:'iOS',DE:'iOS',ES:'iOS',IT:'iOS',ZH:'iOS'},
'iOS App':{FR:'App iOS',DE:'iOS App',ES:'App iOS',IT:'App iOS',ZH:'iOS 应用'},
'iPhone or iPad running iOS 16.0 or later':{FR:'iPhone ou iPad sous iOS 16+',DE:'iPhone oder iPad iOS 16+',ES:'iPhone o iPad iOS 16+',IT:'iPhone o iPad iOS 16+',ZH:'iPhone 或 iPad iOS 16+'},
'Capture your ideas ':{FR:'Capturez vos idees ',DE:'Ideen festhalten ',ES:'Captura tus ideas ',IT:'Cattura le idee ',ZH:'捕捉灵感 '},
'anywhere, anytime':{FR:'partout, a tout moment',DE:'uberall, jederzeit',ES:'en cualquier lugar, en cualquier momento',IT:'ovunque, in ogni momento',ZH:'随时随地'},
'Available for iPhone and iPad. Download now and start turning your voice into polished text.':{FR:'Pour iPhone et iPad. Telechargez.',DE:'Fur iPhone und iPad. Jetzt downloaden.',ES:'Para iPhone y iPad. Descarga ahora.',IT:'Per iPhone e iPad. Scarica ora.',ZH:'适用于 iPhone 和 iPad。立即下载。'},
'Scan to get VoiceNote':{FR:'Scanner pour VoiceNote',DE:'Scannen fur VoiceNote',ES:'Escanear para VoiceNote',IT:'Scansiona per VoiceNote',ZH:'扫码获取 VoiceNote'},
'Open your iPhone camera and scan the QR code to download instantly.':{FR:'Ouvrez l\'appareil photo et scannez.',DE:'Kamera offnen und scannen.',ES:'Abre la camara y escanea.',IT:'Apri la fotocamera e scansiona.',ZH:'打开相机扫码下载。'},
'Inside the App':{FR:'Dans l\'App',DE:'In der App',ES:'Dentro de la App',IT:'Dentro l\'App',ZH:'应用预览'},
'Minimalist design, ':{FR:'Design minimaliste, ',DE:'Minimalistisch, ',ES:'Diseno minimo, ',IT:'Design minimalista, ',ZH:'极简设计，'},
'maximum productivity':{FR:'productivite maximale',DE:'maximale Produktivitat',ES:'maxima productividad',IT:'massima produttivita',ZH:'极致效率'},
'Record in one tap':{FR:'Enregistrer en un clic',DE:'Ein-Tipp-Aufnahme',ES:'Grabar en un toque',IT:'Registra in un tocco',ZH:'一键录音'},
'Press the big mic button and start talking':{FR:'Appuyez sur le micro et parlez',DE:'Mikrofon drucken und sprechen',ES:'Pulsa el microfono y habla',IT:'Premi il microfono e parla',ZH:'按下麦克风按钮开始说话'},
'AI-polished text':{FR:'Texte peaufine IA',DE:'KI-verfeinerter Text',ES:'Texto pulido IA',IT:'Testo perfezionato IA',ZH:'AI 润色文字'},
'Deepgram + GPT refine your words in seconds':{FR:'Deepgram + GPT peaufinent en secondes',DE:'Deepgram + GPT verfeinern in Sekunden',ES:'Deepgram + GPT refinan en segundos',IT:'Deepgram + GPT perfezionano in secondi',ZH:'Deepgram + GPT 秒速润色'},
'Organise with tags':{FR:'Organisez avec des tags',DE:'Mit Tags organisieren',ES:'Organiza con etiquetas',IT:'Organizza con tag',ZH:'标签整理'},
'Folders, tags & full-text search':{FR:'Dossiers, tags et recherche',DE:'Ordner, Tags & Volltextsuche',ES:'Carpetas, etiquetas y busqueda',IT:'Cartelle, tag e ricerca',ZH:'文件夹、标签和全文搜索'},
'Get Started':{FR:'Commencer',DE:'Loslegen',ES:'Empezar',IT:'Inizia',ZH:'开始'},
'Install in ':{FR:'Installer en ',DE:'Installieren in ',ES:'Instalar en ',IT:'Installa in ',ZH:'安装只需'},
'seconds':{FR:'secondes',DE:'Sekunden',ES:'segundos',IT:'secondi',ZH:'秒'},
'Download the app':{FR:'Telecharger l\'app',DE:'App herunterladen',ES:'Descargar la app',IT:'Scarica l\'app',ZH:'下载 App'},
'Get VoiceNote from the App Store. It\'s a free download.':{FR:'Depuis l\'App Store. Gratuit.',DE:'Aus dem App Store. Kostenlos.',ES:'Desde App Store. Gratis.',IT:'Dall\'App Store. Gratis.',ZH:'从 App Store 免费下载。'},
'Create your account':{FR:'Creer votre compte',DE:'Konto erstellen',ES:'Crea tu cuenta',IT:'Crea il tuo account',ZH:'创建账户'},
'Sign up with email or Google. Takes less than 30 seconds.':{FR:'Inscrivez-vous en 30 secondes.',DE:'In 30 Sekunden registriert.',ES:'Registrate en 30 segundos.',IT:'Registrati in 30 secondi.',ZH:'邮箱注册，30 秒搞定。'},
'Tap record & speak':{FR:'Enregistrer et parler',DE:'Aufnehmen & sprechen',ES:'Grabar y hablar',IT:'Registra e parla',ZH:'点击录音说话'},
'Hit the big record button and start talking. VoiceNote handles the rest.':{FR:'Appuyez et parlez. VoiceNote fait le reste.',DE:'Aufnehmen und sprechen. VoiceNote erledigt den Rest.',ES:'Pulsa y habla. VoiceNote hace el resto.',IT:'Premi e parla. VoiceNote fa il resto.',ZH:'点击录音，VoiceNote 处理剩下的。'},
'Read, copy, share':{FR:'Lire, copier, partager',DE:'Lesen, Kopieren, Teilen',ES:'Leer, copiar, compartir',IT:'Leggi, copia, condividi',ZH:'阅读、复制、分享'},
'Your polished text is ready. Copy it anywhere, share it, or export it.':{FR:'Votre texte est pret. Copiez, partagez, exportez.',DE:'Ihr Text ist fertig. Kopieren, teilen, exportieren.',ES:'Tu texto esta listo. Copia, comparte, exporta.',IT:'Il tuo testo e pronto. Copia, condividi, esporta.',ZH:'文字已就绪。复制、分享或导出。'},
'Requirements':{FR:'Prerequis',DE:'Anforderungen',ES:'Requisitos',IT:'Requisiti',ZH:'系统要求'},
'What you ':{FR:'Ce dont vous ',DE:'Was Sie ',ES:'Lo que ',IT:'Cosa ti ',ZH:'你'},
'need':{FR:'avez besoin',DE:'brauchen',ES:'necesitas',IT:'serve',ZH:'所需要的'},
// Pricing
'Free':{FR:'Gratuit',DE:'Kostenlos',ES:'Gratis',IT:'Gratuito',ZH:'免费版'},
'Prime':{FR:'Premium',DE:'Prime',ES:'Premium',IT:'Premium',ZH:'高级版'},
'Try it ':{FR:'Essayez ',DE:'Testen Sie ',ES:'Pruebalo ',IT:'Provalo ',ZH:'免费'},
'free.':{FR:'gratuitement.',DE:'kostenlos.',ES:'gratis.',IT:'gratis.',ZH:'试用。'},
'Start your free trial':{FR:'Essai gratuit',DE:'Testversion',ES:'Prueba gratuita',IT:'Prova gratuita',ZH:'开始免费试用'},
'Everything in Free, plus unlimited':{FR:'Tout Gratuit en illimite',DE:'Alles Kostenlos unbegrenzt',ES:'Todo Gratis ilimitado',IT:'Tutto Gratuito illimitato',ZH:'免费版全部 + 无限'},
'Download & Try Free':{FR:'Telecharger et essayer',DE:'Download & testen',ES:'Descargar y probar',IT:'Scarica e prova',ZH:'下载试用'},
'10 free notes':{FR:'10 notes gratuites',DE:'10 Notizen',ES:'10 notas gratis',IT:'10 note gratis',ZH:'10 条免费笔记'},
'2 min per recording':{FR:'2 min/enreg',DE:'2 Min/Aufn',ES:'2 min/grab',IT:'2 min/reg',ZH:'2 分钟/条'},
'Standard AI polish':{FR:'Polissage IA standard',DE:'KI-Politur Standard',ES:'Pulido IA estandar',IT:'Perfezionamento standard',ZH:'标准 AI 润色'},
'No credit card needed':{FR:'Sans CB',DE:'Keine Karte',ES:'Sin tarjeta',IT:'Nessuna carta',ZH:'无需信用卡'},
'Unlimited notes':{FR:'Notes illimitees',DE:'Unbegrenzt',ES:'Ilimitadas',IT:'Illimitate',ZH:'无限笔记'},
'15 min per recording':{FR:'15 min/enreg',DE:'15 Min/Aufn',ES:'15 min/grab',IT:'15 min/reg',ZH:'15 分钟/条'},
'Advanced AI + all styles':{FR:'IA avancee + tous styles',DE:'KI + alle Stile',ES:'IA avanzada + estilos',IT:'IA avanzata + stili',ZH:'高级 AI + 全风格'},
'Cancel anytime':{FR:'Annulez a tout moment',DE:'Jederzeit kundbar',ES:'Cancela cuando quieras',IT:'Annulla quando vuoi',ZH:'随时取消'},
'$9.99':{FR:'9,99$',DE:'9,99$',ES:'$9.99',IT:'9,99$',ZH:'$9.99'},
'$25':{FR:'25$',DE:'25$',ES:'$25',IT:'25$',ZH:'$25'},
'$69':{FR:'69$',DE:'69$',ES:'$69',IT:'69$',ZH:'$69'},
'/mo':{FR:'/mois',DE:'/Monat',ES:'/mes',IT:'/mese',ZH:'/月'},
'/qtr':{FR:'/trim',DE:'/Quartal',ES:'/trim',IT:'/trim',ZH:'/季'},
'/yr':{FR:'/an',DE:'/Jahr',ES:'/ano',IT:'/anno',ZH:'/年'},
'Save 28% with annual billing':{FR:'Economisez 28%/an',DE:'28% sparen',ES:'Ahorra 28%/ano',IT:'Risparmia 28%/anno',ZH:'年付省 28%'},
'Start Here':{FR:'Commencez ici',DE:'Hier starten',ES:'Empieza aqui',IT:'Inizia qui',ZH:'从这里开始'},
// Compare
'Compare':{FR:'Comparer',DE:'Vergleichen',ES:'Comparar',IT:'Confronta',ZH:'对比'},
'Free vs ':{FR:'Gratuit vs ',DE:'Kostenlos vs ',ES:'Gratis vs ',IT:'Gratuito vs ',ZH:'免费版 vs '},
'Feature':{FR:'Fonction',DE:'Funktion',ES:'Funcion',IT:'Funzione',ZH:'功能'},
'Notes':{FR:'Notes',DE:'Notizen',ES:'Notas',IT:'Note',ZH:'笔记数'},
'Recording length':{FR:'Duree',DE:'Aufnahmelange',ES:'Duracion',IT:'Durata',ZH:'录音时长'},
'AI polish quality':{FR:'Qualite IA',DE:'KI-Qualitat',ES:'Calidad IA',IT:'Qualita IA',ZH:'AI 润色'},
'AI writing styles':{FR:'Styles IA',DE:'KI-Stile',ES:'Estilos IA',IT:'Stili IA',ZH:'AI 风格'},
'History':{FR:'Historique',DE:'Verlauf',ES:'Historial',IT:'Cronologia',ZH:'历史'},
'Support':{FR:'Support',DE:'Support',ES:'Soporte',IT:'Supporto',ZH:'支持'},
'Standard':{FR:'Standard',DE:'Standard',ES:'Estandar',IT:'Standard',ZH:'标准'},
'Advanced':{FR:'Avance',DE:'Erweitert',ES:'Avanzado',IT:'Avanzato',ZH:'高级'},
'All styles':{FR:'Tous',DE:'Alle',ES:'Todos',IT:'Tutti',ZH:'全部'},
'3 styles':{FR:'3 styles',DE:'3 Stile',ES:'3 estilos',IT:'3 stili',ZH:'3 种'},
'15 min':{FR:'15 min',DE:'15 Min',ES:'15 min',IT:'15 min',ZH:'15 分钟'},
'2 min':{FR:'2 min',DE:'2 Min',ES:'2 min',IT:'2 min',ZH:'2 分钟'},
'First 10':{FR:'10 premieres',DE:'Erste 10',ES:'Primeras 10',IT:'Prime 10',ZH:'前 10 条'},
'Unlimited':{FR:'Illimite',DE:'Unbegrenzt',ES:'Ilimitado',IT:'Illimitato',ZH:'无限'},
'Forever':{FR:'Pour toujours',DE:'Fur immer',ES:'Para siempre',IT:'Per sempre',ZH:'永久'},
'7 days':{FR:'7 jours',DE:'7 Tage',ES:'7 dias',IT:'7 giorni',ZH:'7 天'},
'1 year':{FR:'1 an',DE:'1 Jahr',ES:'1 ano',IT:'1 anno',ZH:'1 年'},
// FAQ
'FAQ':{FR:'FAQ',DE:'FAQ',ES:'FAQ',IT:'FAQ',ZH:'常见问题'},
'Frequently ':{FR:'Questions ',DE:'Haufig ',ES:'Preguntas ',IT:'Domande ',ZH:'常见'},
'asked questions':{FR:'frequentes',DE:'gestellte Fragen',ES:'frecuentes',IT:'frequenti',ZH:'问题解答'},
'How does the free trial work?':{FR:'Comment fonctionne l\'essai?',DE:'Wie funktioniert die Testversion?',ES:'Como funciona la prueba?',IT:'Come funziona la prova?',ZH:'免费试用如何运作？'},
'What languages does VoiceNote support?':{FR:'Quelles langues?',DE:'Welche Sprachen?',ES:'Que idiomas?',IT:'Quali lingue?',ZH:'支持哪些语言？'},
'How long can each recording be?':{FR:'Duree max?',DE:'Max. Aufnahmedauer?',ES:'Duracion max?',IT:'Durata max?',ZH:'每条录音可以多长？'},
'Do you offer a refund guarantee?':{FR:'Offrez-vous une garantie?',DE:'Ruckerstattung?',ES:'Garantia de reembolso?',IT:'Garanzia di rimborso?',ZH:'有退款保证吗？'},
'Can I switch or cancel my plan anytime?':{FR:'Puis-je changer ou annuler?',DE:'Kann ich wechseln oder kundigen?',ES:'Puedo cambiar o cancelar?',IT:'Posso cambiare o annullare?',ZH:'可以随时切换方案吗？'},
// Footer
'Privacy Policy':{FR:'Confidentialite',DE:'Datenschutz',ES:'Privacidad',IT:'Privacy',ZH:'隐私政策'},
'Terms of Service':{FR:'Conditions',DE:'Nutzungsbedingungen',ES:'Terminos',IT:'Termini',ZH:'服务条款'},
'Cookie Policy':{FR:'Cookies',DE:'Cookies',ES:'Cookies',IT:'Cookie',ZH:'Cookie 政策'},
// Contact
'We\'d love to ':{FR:'Nous aimerions ',DE:'Wir wurden gerne ',ES:'Nos encantaria ',IT:'Ci piacerebbe ',ZH:'我们期待 '},
'hear from you':{FR:'vous entendre',DE:'von Ihnen horen',ES:'saber de ti',IT:'sentirti',ZH:'收到你的消息'},
'Drop us a line anytime. We\'ll get back to you within 24 hours.':{FR:'Ecrivez-nous. Reponse sous 24h.',DE:'Schreiben Sie uns. Antwort in 24h.',ES:'Escribenos. Respondemos en 24h.',IT:'Scrivici. Rispondiamo entro 24h.',ZH:'联系我们，24 小时内回复。'},
'support@voicenote.uk':{FR:'support@voicenote.uk',DE:'support@voicenote.uk',ES:'support@voicenote.uk',IT:'support@voicenote.uk',ZH:'support@voicenote.uk'},
'Coming soon':{FR:'Bientot',DE:'Demnachst',ES:'Proximamente',IT:'Prossimamente',ZH:'即将上线'},
// Legal
'Legal':{FR:'Juridique',DE:'Rechtliches',ES:'Legal',IT:'Legale',ZH:'法律'},
'Last updated: May 2026':{FR:'Derniere mise a jour: Mai 2026',DE:'Aktualisiert: Mai 2026',ES:'Actualizado: Mayo 2026',IT:'Aggiornato: Maggio 2026',ZH:'最近更新：2026年5月'},
'1. Information We Collect':{FR:'1. Informations collectees',DE:'1. Erfasste Daten',ES:'1. Informacion recopilada',IT:'1. Informazioni raccolte',ZH:'1. 我们收集的信息'},
'We collect information that you provide directly to us:':{FR:'Nous collectons les informations que vous fournissez :',DE:'Wir erfassen Daten, die Sie bereitstellen:',ES:'Recopilamos la informacion que proporcionas:',IT:'Raccogliamo le informazioni che fornisci:',ZH:'我们收集你直接提供的信息：'},
'Account Information:':{FR:'Informations du compte :',DE:'Kontoinformationen:',ES:'Informacion de cuenta:',IT:'Informazioni account:',ZH:'账户信息：'},
'Voice Recordings:':{FR:'Enregistrements vocaux :',DE:'Sprachaufnahmen:',ES:'Grabaciones de voz:',IT:'Registrazioni vocali:',ZH:'语音录音：'},
'Usage Data:':{FR:'Donnees d\'utilisation :',DE:'Nutzungsdaten:',ES:'Datos de uso:',IT:'Dati di utilizzo:',ZH:'使用数据：'},
'Device Information:':{FR:'Informations appareil :',DE:'Geratteinformationen:',ES:'Informacion del dispositivo:',IT:'Informazioni dispositivo:',ZH:'设备信息：'},
'2. How We Use Your Information':{FR:'2. Utilisation des informations',DE:'2. Nutzung der Daten',ES:'2. Uso de la informacion',IT:'2. Utilizzo dei dati',ZH:'2. 如何使用你的信息'},
'To provide, maintain, and improve our services':{FR:'Fournir et ameliorer nos services',DE:'Bereitstellung und Verbesserung',ES:'Proporcionar y mejorar servicios',IT:'Fornire e migliorare i servizi',ZH:'提供和改进我们的服务'},
'To process your voice recordings into text using AI':{FR:'Traiter les enregistrements vocaux en texte',DE:'Aufnahmen mit KI in Text umwandeln',ES:'Procesar grabaciones en texto con IA',IT:'Elaborare registrazioni in testo con IA',ZH:'用 AI 将语音处理为文字'},
'To respond to your comments, questions, and support requests':{FR:'Repondre aux commentaires et demandes',DE:'Auf Kommentare und Anfragen antworten',ES:'Responder a comentarios y solicitudes',IT:'Rispondere a commenti e richieste',ZH:'回复评论和支持请求'},
'To analyze usage patterns and improve user experience':{FR:'Analyser l\'utilisation et ameliorer l\'experience',DE:'Nutzung analysieren und verbessern',ES:'Analizar uso y mejorar experiencia',IT:'Analizzare l\'uso e migliorare',ZH:'分析使用并改善体验'},
'3. AI Processing & Data Storage':{FR:'3. Traitement IA et stockage',DE:'3. KI-Verarbeitung & Speicherung',ES:'3. Procesamiento IA y almacenamiento',IT:'3. Elaborazione IA e archiviazione',ZH:'3. AI 处理与数据存储'},
'4. Data Sharing':{FR:'4. Partage des donnees',DE:'4. Datenweitergabe',ES:'4. Comparticion de datos',IT:'4. Condivisione dei dati',ZH:'4. 数据共享'},
'We do not sell, trade, or rent your personal information to third parties. We may share data with:':{FR:'Nous ne vendons pas vos donnees. Partage possible avec :',DE:'Kein Verkauf Ihrer Daten. Weitergabe an:',ES:'No vendemos tus datos. Compartimos con:',IT:'Non vendiamo i tuoi dati. Condivisione con:',ZH:'我们不出售你的数据。可能与以下方共享：'},
'AI service providers solely for the purpose of processing your recordings':{FR:'Fournisseurs IA pour le traitement des enregistrements',DE:'KI-Dienstleister zur Verarbeitung',ES:'Proveedores IA para procesar grabaciones',IT:'Fornitori IA per elaborare registrazioni',ZH:'AI 服务提供商仅用于处理录音'},
'Law enforcement when required by applicable law':{FR:'Forces de l\'ordre si la loi l\'exige',DE:'Strafverfolgung wenn gesetzlich',ES:'Autoridades cuando lo exija la ley',IT:'Forze dell\'ordine se richiesto',ZH:'法律要求时的执法机构'},
'5. Data Security':{FR:'5. Securite des donnees',DE:'5. Datensicherheit',ES:'5. Seguridad de datos',IT:'5. Sicurezza dei dati',ZH:'5. 数据安全'},
'6. Your Rights':{FR:'6. Vos droits',DE:'6. Ihre Rechte',ES:'6. Tus derechos',IT:'6. I tuoi diritti',ZH:'6. 你的权利'},
'7. Contact':{FR:'7. Contact',DE:'7. Kontakt',ES:'7. Contacto',IT:'7. Contatto',ZH:'7. 联系方式'},
'9. Contact':{FR:'9. Contact',DE:'9. Kontakt',ES:'9. Contacto',IT:'9. Contatto',ZH:'9. 联系方式'},
'1. Acceptance of Terms':{FR:'1. Acceptation des conditions',DE:'1. Annahme der Bedingungen',ES:'1. Aceptacion de terminos',IT:'1. Accettazione dei termini',ZH:'1. 接受条款'},
'2. Account Registration':{FR:'2. Creation de compte',DE:'2. Kontoregistrierung',ES:'2. Registro de cuenta',IT:'2. Registrazione account',ZH:'2. 账户注册'},
'3. Use of Services':{FR:'3. Utilisation des services',DE:'3. Nutzung der Dienste',ES:'3. Uso de servicios',IT:'3. Utilizzo dei servizi',ZH:'3. 服务使用'},
'You agree to use VoiceNote only for lawful purposes. You may not:':{FR:'Utilisation a des fins licites uniquement. Interdit de :',DE:'Nur rechtmassige Nutzung. Verboten:',ES:'Solo para fines licitos. Prohibido:',IT:'Solo scopi leciti. Vietato:',ZH:'仅限合法使用。禁止：'},
'Use the service to create, store, or distribute illegal content':{FR:'Creer ou distribuer du contenu illegal',DE:'Illegale Inhalte erstellen',ES:'Contenido ilegal',IT:'Contenuti illegali',ZH:'创建或传播非法内容'},
'Violate any applicable laws or regulations':{FR:'Violer les lois applicables',DE:'Gesetze verletzen',ES:'Violar leyes',IT:'Violare leggi',ZH:'违反法律法规'},
'Attempt to gain unauthorized access to our systems':{FR:'Acces non autorise a nos systemes',DE:'Unbefugter Zugriff',ES:'Acceso no autorizado',IT:'Accesso non autorizzato',ZH:'未经授权访问系统'},
'Resell or redistribute the service without authorization':{FR:'Revendre sans autorisation',DE:'Unbefugter Weiterverkauf',ES:'Revender sin autorizacion',IT:'Rivendere senza autorizzazione',ZH:'未经授权转售'},
'Use the service to harass, abuse, or harm others':{FR:'Harcelement ou nuisance',DE:'Belastigung oder Schadigung',ES:'Acoso o dano',IT:'Molestie o danni',ZH:'骚扰或伤害他人'},
'4. Subscriptions & Payments':{FR:'4. Abonnements et paiements',DE:'4. Abos & Zahlungen',ES:'4. Suscripciones y pagos',IT:'4. Abbonamenti e pagamenti',ZH:'4. 订阅与支付'},
'5. Intellectual Property':{FR:'5. Propriete intellectuelle',DE:'5. Geistiges Eigentum',ES:'5. Propiedad intelectual',IT:'5. Proprieta intellettuale',ZH:'5. 知识产权'},
'6. Limitation of Liability':{FR:'6. Limitation de responsabilite',DE:'6. Haftungsbeschrankung',ES:'6. Limitacion de responsabilidad',IT:'6. Limitazione di responsabilita',ZH:'6. 责任限制'},
'7. Termination':{FR:'7. Resiliation',DE:'7. Kundigung',ES:'7. Terminacion',IT:'7. Cessazione',ZH:'7. 终止'},
'8. Changes to Terms':{FR:'8. Modifications des conditions',DE:'8. Anderungen der Bedingungen',ES:'8. Cambios en los terminos',IT:'8. Modifiche ai termini',ZH:'8. 条款变更'},
'What Are Cookies':{FR:'Que sont les cookies',DE:'Was sind Cookies',ES:'Que son las cookies',IT:'Cosa sono i cookie',ZH:'什么是 Cookie'},
'How We Use Cookies':{FR:'Comment nous utilisons les cookies',DE:'Wie wir Cookies verwenden',ES:'Como usamos las cookies',IT:'Come usiamo i cookie',ZH:'如何使用 Cookie'},
'VoiceNote uses cookies for the following purposes:':{FR:'VoiceNote utilise des cookies pour :',DE:'VoiceNote verwendet Cookies fur:',ES:'VoiceNote usa cookies para:',IT:'VoiceNote utilizza i cookie per:',ZH:'VoiceNote 将 Cookie 用于：'},
'Category':{FR:'Categorie',DE:'Kategorie',ES:'Categoria',IT:'Categoria',ZH:'类别'},
'Purpose':{FR:'Objectif',DE:'Zweck',ES:'Proposito',IT:'Scopo',ZH:'用途'},
'Duration':{FR:'Duree',DE:'Dauer',ES:'Duracion',IT:'Durata',ZH:'有效期'},
'Essential':{FR:'Essentiel',DE:'Notwendig',ES:'Esencial',IT:'Essenziale',ZH:'必要'},
'Preferences':{FR:'Preferences',DE:'Einstellungen',ES:'Preferencias',IT:'Preferenze',ZH:'偏好'},
'Analytics':{FR:'Analyse',DE:'Analyse',ES:'Analitica',IT:'Analitica',ZH:'分析'},
'Functional':{FR:'Fonctionnel',DE:'Funktional',ES:'Funcional',IT:'Funzionale',ZH:'功能'},
'Session':{FR:'Session',DE:'Sitzung',ES:'Sesion',IT:'Sessione',ZH:'会话'},
'2 years':{FR:'2 ans',DE:'2 Jahre',ES:'2 anos',IT:'2 anni',ZH:'2 年'},
'Third-Party Cookies':{FR:'Cookies tiers',DE:'Cookies von Drittanbietern',ES:'Cookies de terceros',IT:'Cookie di terze parti',ZH:'第三方 Cookie'},
'Some cookies are placed by third-party services we use:':{FR:'Certains cookies sont places par des services tiers :',DE:'Einige Cookies von Drittanbietern:',ES:'Algunas cookies de servicios de terceros:',IT:'Alcuni cookie da servizi di terze parti:',ZH:'部分 Cookie 由第三方服务设置：'},
'Stripe:':{FR:'Stripe :',DE:'Stripe:',ES:'Stripe:',IT:'Stripe:',ZH:'Stripe：'},
'Cloudflare:':{FR:'Cloudflare :',DE:'Cloudflare:',ES:'Cloudflare:',IT:'Cloudflare:',ZH:'Cloudflare：'},
'Your Choices':{FR:'Vos choix',DE:'Ihre Wahlmoglichkeiten',ES:'Tus opciones',IT:'Le tue scelte',ZH:'你的选择'},
'You can control cookies through your browser settings. Most browsers allow you to:':{FR:'Vous pouvez controler les cookies via votre navigateur :',DE:'Cookie-Einstellungen im Browser:',ES:'Puedes controlar las cookies desde el navegador:',IT:'Puoi controllare i cookie dal browser:',ZH:'你可以通过浏览器管理 Cookie：'},
'View and delete existing cookies':{FR:'Voir et supprimer les cookies',DE:'Cookies anzeigen und loschen',ES:'Ver y eliminar cookies',IT:'Visualizzare ed eliminare i cookie',ZH:'查看和删除 Cookie'},
'Block third-party cookies':{FR:'Bloquer les cookies tiers',DE:'Drittanbieter-Cookies blockieren',ES:'Bloquear cookies de terceros',IT:'Bloccare cookie di terze parti',ZH:'阻止第三方 Cookie'},
'Block all cookies':{FR:'Bloquer tous les cookies',DE:'Alle Cookies blockieren',ES:'Bloquear todas las cookies',IT:'Bloccare tutti i cookie',ZH:'阻止所有 Cookie'},
'Clear cookies when you close the browser':{FR:'Supprimer les cookies a la fermeture',DE:'Cookies beim Schliessen loschen',ES:'Eliminar cookies al cerrar',IT:'Cancellare i cookie alla chiusura',ZH:'关闭浏览器时清除 Cookie'},
'Cookie Consent':{FR:'Consentement aux cookies',DE:'Cookie-Zustimmung',ES:'Consentimiento de cookies',IT:'Consenso cookie',ZH:'Cookie 同意'},
'Changes to This Policy':{FR:'Modifications de cette politique',DE:'Anderungen dieser Richtlinie',ES:'Cambios en esta politica',IT:'Modifiche a questa politica',ZH:'政策变更'},
// Service & Security
'Service':{FR:'Service',DE:'Dienst',ES:'Servicio',IT:'Servizio',ZH:'服务'},
'Policy':{FR:'Politique',DE:'Richtlinie',ES:'Politica',IT:'Politica',ZH:'政策'},
'Cookie ':{FR:'Cookie ',DE:'Cookie ',ES:'Cookie ',IT:'Cookie ',ZH:'Cookie '},
'Privacy ':{FR:'Confidentialite ',DE:'Datenschutz ',ES:'Privacidad ',IT:'Privacy ',ZH:'隐私'},
'Terms of ':{FR:'Conditions d\'',DE:'Nutzungs',ES:'Terminos de ',IT:'Termini di ',ZH:'服务'},
'Email':{FR:'E-mail',DE:'E-Mail',ES:'Email',IT:'Email',ZH:'邮件'},
'Priority':{FR:'Prioritaire',DE:'Prioritat',ES:'Prioritario',IT:'Prioritario',ZH:'优先'},
// Help & misc
'Remember your settings such as language and theme preferences':{FR:'Memoriser vos preferences de langue',DE:'Sprach- und Designeinstellungen',ES:'Recordar idioma y preferencias',IT:'Ricordare lingua e preferenze',ZH:'记住语言和主题偏好'},
'Help us understand how visitors use our site so we can improve it':{FR:'Comprendre l\'utilisation du site',DE:'Nutzung verstehen und verbessern',ES:'Entender uso del sitio',IT:'Capire l\'uso del sito',ZH:'了解网站使用情况'},
'Enable additional features like audio recording and playback':{FR:'Fonctionnalites d\'enregistrement audio',DE:'Audioaufnahme und Wiedergabe',ES:'Grabacion y reproduccion de audio',IT:'Registrazione e riproduzione audio',ZH:'启用录音和播放功能'},
// Language names
'English':{FR:'Anglais',DE:'Englisch',ES:'Ingles',IT:'Inglese',ZH:'英语'},
'Francais':{FR:'Francais',DE:'Franzosisch',ES:'Frances',IT:'Francese',ZH:'法语'},
'Deutsch':{FR:'Allemand',DE:'Deutsch',ES:'Aleman',IT:'Tedesco',ZH:'德语'},
'Espanol':{FR:'Espagnol',DE:'Spanisch',ES:'Espanol',IT:'Spagnolo',ZH:'西班牙语'},
'Italiano':{FR:'Italien',DE:'Italienisch',ES:'Italiano',IT:'Italiano',ZH:'意大利语'},
'VoiceNote':{FR:'VoiceNote',DE:'VoiceNote',ES:'VoiceNote',IT:'VoiceNote',ZH:'VoiceNote'},
// data-t keys
'hero.sub':{FR:'Arretez de vous soucier des hesitations. Parlez, VoiceNote reecrit pour chaque contexte.',DE:'Keine Sorge um Pausen. Sprechen Sie, VoiceNote schreibt fur jeden Kontext um.',ES:'No te preocupes por las pausas. Habla, VoiceNote reescribe al instante.',IT:'Non preoccuparti delle pause. Parla, VoiceNote riscrive per ogni contesto.',ZH:'别再担心语气词和停顿。自然地说，VoiceNote 即刻为任何场景重写。'},
'lng.title':{FR:'Parlez votre langue,',DE:'Sprechen Sie Ihre Sprache,',ES:'Habla tu idioma,',IT:'Parla la tua lingua,',ZH:'用你的语言说，'},
'lng.sub2':{FR:'ecrivez dans toute langue',DE:'schreiben in jeder Sprache',ES:'escribe en cualquier idioma',IT:'scrivi in qualsiasi lingua',ZH:'用任何语言写'},
'how.title1':{FR:'De la voix au texte parfait ',DE:'Von Sprache zu perfektem Text ',ES:'De voz a texto perfecto ',IT:'Dalla voce al testo perfetto ',ZH:'从语音到完美文字 '},
'how.title2':{FR:'en 3 etapes',DE:'in 3 Schritten',ES:'en 3 pasos',IT:'in 3 passi',ZH:'只需三步'},
};

function getLang(){var s=localStorage.getItem(LANG_KEY);return s&&LANGS.indexOf(s)>=0?s:(LANGS.indexOf(navigator.language.slice(0,2))>=0?navigator.language.slice(0,2):'en');}
function setLang(l){if(LANGS.indexOf(l)<0)return;localStorage.setItem(LANG_KEY,l);location.reload();}
function applyLang(){
  var lang=getLang();if(lang==='en')return;var lc=lang.toUpperCase();
  document.documentElement.lang=lang;
  var dt=document.title;if(T[dt]&&T[dt][lc])document.title=T[dt][lc];
  var md=document.querySelector('meta[name="description"]');if(md){var dc=md.getAttribute('content');if(T[dc]&&T[dc][lc])md.setAttribute('content',T[dc][lc]);}
  var all=document.querySelectorAll('p,span,h1,h2,h3,h4,h5,h6,li,a,button,td,th,label,div');
  for(var i=0;i<all.length;i++){var el=all[i];if(el.children.length>0)continue;if(el.closest&&el.closest('#langSwitcher'))continue;var tag=el.tagName;if(tag==='SCRIPT'||tag==='STYLE'||tag==='NOSCRIPT'||tag==='INPUT'||tag==='TEXTAREA')continue;var t=el.textContent.trim();if(!t||t.length<2)continue;if(T[t]&&T[t][lc])el.textContent=T[t][lc];}
  var walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);
  var nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  for(var j=0;j<nodes.length;j++){var node=nodes[j];var p=node.parentElement;if(!p||p.tagName==='SCRIPT'||p.tagName==='STYLE'||p.tagName==='NOSCRIPT')continue;if(p.closest&&p.closest('#langSwitcher'))continue;var tx=node.textContent.trim();if(!tx||tx.length<2)continue;if(T[tx]&&T[tx][lc])node.textContent=T[tx][lc];}
  var dts=document.querySelectorAll('[data-t]');
  for(var k=0;k<dts.length;k++){var dt=dts[k];if(dt.children.length>0)continue;var key=dt.getAttribute('data-t');if(T[key]&&T[key][lc])dt.textContent=T[key][lc];}
}

document.addEventListener('DOMContentLoaded',function(){
  var names={en:'English',fr:'Francais',de:'Deutsch',es:'Espanol',it:'Italiano',zh:'中文'};
  var shorts={en:'EN',fr:'FR',de:'DE',es:'ES',it:'IT',zh:'中文'};
  var l=getLang();
  var w=document.getElementById('langSwitcher');
  if(!w)return;
  w.innerHTML='';
  var c=document.createElement('span');c.id='langCurrent';
  c.className='text-xs font-medium text-gray-500 cursor-pointer hover:text-gray-700 flex items-center gap-1';
  c.innerHTML=shorts[l]+' <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';
  w.appendChild(c);
  var d=document.createElement('div');d.id='langDropdown';
  d.className='absolute top-full right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg py-1 hidden z-50 min-w-[140px]';
  for(var i=0;i<LANGS.length;i++){(function(x){var o=document.createElement('button');o.textContent=names[x];
    o.className='lang-option block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 '+(x===l?'font-semibold text-brand-600':'');
    o.onclick=function(){setLang(x);d.classList.add('hidden');};d.appendChild(o);})(LANGS[i]);}
  w.appendChild(d);
  c.addEventListener('click',function(e){e.stopPropagation();d.classList.toggle('hidden');});
  document.addEventListener('click',function(){d.classList.add('hidden');});
  var htmlLang=document.documentElement.lang;
  if(htmlLang&&htmlLang!=='en'&&LANGS.indexOf(htmlLang)>=0){localStorage.setItem(LANG_KEY,htmlLang);applyLang();}
});
