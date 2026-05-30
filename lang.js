// VoiceNote Language System — 6 Languages
const LANG_KEY='voicenote_lang',LANGS=['en','fr','de','es','it','zh'];

const T={
'Home':{fr:'Accueil',de:'Start',es:'Inicio',it:'Home',zh:'首页'},
'Pricing':{fr:'Tarifs',de:'Preise',es:'Precios',it:'Prezzi',zh:'定价'},
'Download':{fr:'Télécharger',de:'Download',es:'Descargar',it:'Scarica',zh:'下载'},
'Contact':{fr:'Contact',de:'Kontakt',es:'Contacto',it:'Contatto',zh:'联系'},
'Try Free':{fr:'Essai Gratuit',de:'Kostenlos testen',es:'Probar Gratis',it:'Prova Gratis',zh:'免费试用'},
'Your AI Voice Alchemist':{fr:'Votre Alchimiste Vocal IA',de:'Ihr KI-Sprachalchemist',es:'Tu Alquimista de Voz IA',it:'Il Tuo Alchimista Vocale IA',zh:'你的 AI 语音炼金师'},
'Simple & Fast':{fr:'Simple et Rapide',de:'Einfach & Schnell',es:'Simple y Rápido',it:'Semplice e Veloce',zh:'简单快速'},
'AI Smart Styles':{fr:'Styles IA Intelligents',de:'KI Smarte Stile',es:'Estilos IA Inteligentes',it:'Stili IA Intelligenti',zh:'AI 智能风格'},
'46 Languages':{fr:'46 Langues',de:'46 Sprachen',es:'46 Idiomas',it:'46 Lingue',zh:'46 种语言'},
'Speak your language, write in any language':{fr:'Parlez votre langue',de:'Ihre Sprache sprechen',es:'Habla tu idioma',it:'Parla la tua lingua',zh:'说你的语言'},
'VoiceNote transcribes and polishes in 46 languages, right out of the box.':{fr:'VoiceNote transcrit et peaufine en 46 langues.',de:'VoiceNote in 46 Sprachen.',es:'VoiceNote en 46 idiomas.',it:'VoiceNote in 46 lingue.',zh:'VoiceNote 支持 46 种语言。'},
'Built for Thinkers':{fr:'Pour les Penseurs',de:'Für Denker',es:'Para Pensadores',it:'Per Pensatori',zh:'为思考者而生'},
'One Voice Note. Endless Possibilities.':{fr:'Une Note. Possibilités Infinies.',de:'Eine Notiz. Endlose Formate.',es:'Una Nota. Infinitas Posibilidades.',it:'Una Nota. Infinite Possibilità.',zh:'一条语音，无限可能。'},
'Speak once. VoiceNote rewrites your words for any context.':{fr:'Dictez une fois. VoiceNote réécrit.',de:'Einmal sprechen. VoiceNote schreibt um.',es:'Dicta una vez. VoiceNote reescribe.',it:'Detta una volta. VoiceNote riscrive.',zh:'说一次，为任何场景重写。'},
'Dictate once, rewrite for any platform. Watch how VoiceNote transforms the same voice input into different formats:':{fr:'Dictez une fois, réécrivez pour chaque plateforme.',de:'Einmal diktieren, für jede Plattform umschreiben.',es:'Dicta una vez, reescribe para cada plataforma.',it:'Detta una volta, riscrivi per ogni piattaforma.',zh:'说一次，为任何平台重写。看看 VoiceNote 如何将同一语音转化为不同格式：'},
'VOICE INPUT':{fr:'ENTRÉE VOCALE',de:'SPRACHEINGABE',es:'ENTRADA DE VOZ',it:'INGRESSO VOCALE',zh:'语音输入'},
'Plain & Direct':{fr:'Clair & Direct',de:'Klar & Direkt',es:'Claro & Directo',it:'Chiaro & Diretto',zh:'简洁直接'},
'Professional Email':{fr:'Email Professionnel',de:'Professionelle E-Mail',es:'Email Profesional',it:'Email Professionale',zh:'正式邮件'},
'Key Takeaways':{fr:'Points Clés',de:'Kernpunkte',es:'Puntos Clave',it:'Punti Chiave',zh:'要点总结'},
'Casual / Slack':{fr:'Décontracté',de:'Locker',es:'Informal',it:'Informale',zh:'随意聊天'},
'Speak Freely':{fr:'Parlez Librement',de:'Frei Sprechen',es:'Habla Libremente',it:'Parla Liberamente',zh:'自由说'},
'Choose Your Style':{fr:'Choisissez Votre Style',de:'Stil Wählen',es:'Elige Tu Estilo',it:'Scegli lo Stile',zh:'选择风格'},
'Ready to Use':{fr:'Prêt à l\'Emploi',de:'Einsatzbereit',es:'Listo para Usar',it:'Pronto all\'Uso',zh:'立即可用'},
'Tap the mic and talk naturally.':{fr:'Appuyez et parlez naturellement.',de:'Mikrofon antippen und sprechen.',es:'Toca el micrófono y habla.',it:'Tocca il microfono e parla.',zh:'点击麦克风，自然说话。'},
'Select your context. Need an email, a tweet, or a structured summary?':{fr:'Sélectionnez votre contexte.',de:'Kontext wählen.',es:'Elige tu contexto.',it:'Scegli il contesto.',zh:'选择场景——邮件、推文或摘要。'},
'Get beautifully polished, ready-to-share text in seconds.':{fr:'Texte peaufiné, prêt à partager.',de:'Verfeinerter Text in Sekunden.',es:'Texto pulido listo para compartir.',it:'Testo perfezionato pronto.',zh:'即刻获得润色精美的文字。'},
'Speak your drafts instead of staring at a blank page.':{fr:'Parlez vos brouillons.',de:'Sprechen Sie Ihre Entwürfe.',es:'Habla tus borradores.',it:'Parla le tue bozze.',zh:'说出来，代替盯空白页。'},
'Dictate emails and reports. Sound polished effortlessly.':{fr:'Dictez emails et rapports.',de:'Diktieren Sie E-Mails und Berichte.',es:'Dicta correos e informes.',it:'Detta email e report.',zh:'轻松口述邮件和报告。'},
'Summarise lectures and dictate notes hands-free.':{fr:'Résumez les cours, dictez vos notes.',de:'Vorlesungen zusammenfassen.',es:'Resume clases, dicta apuntes.',it:'Riassumi lezioni, detta appunti.',zh:'免提总结课程和口述笔记。'},
'Capture ideas while cooking, driving, or on the go.':{fr:'Capturez des idées en cuisinant.',de:'Ideen beim Kochen oder Fahren.',es:'Captura ideas mientras cocinas.',it:'Cattura idee mentre cucini.',zh:'做饭、开车时捕捉灵感。'},
'Brainstorm out loud. Let VoiceNote organise the chaos.':{fr:'Brainstorming à voix haute. VoiceNote organise.',de:'Laut brainstormen. VoiceNote organisiert.',es:'Lluvia de ideas en voz alta.',it:'Brainstorming ad alta voce.',zh:'大声头脑风暴，VoiceNote 整理。'},
'End each day with a voice reflection. Zero friction.':{fr:'Terminez la journée par une réflexion vocale.',de:'Tagesrückblick per Sprache.',es:'Reflexiona en voz al final del día.',it:'Rifletti a voce ogni sera.',zh:'每天用语音回顾，零摩擦。'},
'Writers & Creators':{fr:'Écrivains & Créateurs',de:'Autoren & Kreative',es:'Escritores & Creadores',it:'Scrittori & Creativi',zh:'作家与创作者'},
'Professionals & Executives':{fr:'Professionnels & Cadres',de:'Profis & Führungskräfte',es:'Profesionales & Ejecutivos',it:'Professionisti & Dirigenti',zh:'职场人士与管理层'},
'Students':{fr:'Étudiants',de:'Studenten',es:'Estudiantes',it:'Studenti',zh:'学生'},
'Busy Parents':{fr:'Parents Occupés',de:'Beschäftigte Eltern',es:'Padres Ocupados',it:'Genitori Impegnati',zh:'忙碌的父母'},
'Thinkers & Ideators':{fr:'Penseurs & Idéateurs',de:'Denker & Ideengeber',es:'Pensadores & Ideadores',it:'Pensatori & Ideatori',zh:'思考者与创意人'},
'No matter what you do, if you have ideas, VoiceNote is for you.':{fr:'Quoi que vous fassiez, VoiceNote est pour vous.',de:'Was Sie tun, VoiceNote ist für Sie.',es:'Hagas lo que hagas, VoiceNote es para ti.',it:'Qualsiasi cosa tu faccia, VoiceNote è per te.',zh:'无论做什么，VoiceNote 都适合你。'},
'Ready to Upgrade Your Workflow?':{fr:'Prêt à Améliorer Votre Flux ?',de:'Bereit fürs Upgrade?',es:'¿Listo para Mejorar?',it:'Pronto a Migliorare?',zh:'准备好升级了吗？'},
'iOS':{fr:'iOS',de:'iOS',es:'iOS',it:'iOS',zh:'iOS'},
'iPhone & iPad':{fr:'iPhone et iPad',de:'iPhone & iPad',es:'iPhone y iPad',it:'iPhone e iPad',zh:'iPhone 和 iPad'},
'Download on the App Store':{fr:'Télécharger sur l\'App Store',de:'Im App Store laden',es:'Descargar en App Store',it:'Scarica su App Store',zh:'在 App Store 下载'},
'Scan to download':{fr:'Scannez pour télécharger',de:'Scannen zum Download',es:'Escanear para descargar',it:'Scansiona per scaricare',zh:'扫码下载'},

// Pricing
'Try it free.':{fr:'Essayez gratuitement.',de:'Kostenlos testen.',es:'Pruébalo gratis.',it:'Provalo gratis.',zh:'免费试用。'},
'Free':{fr:'Gratuit',de:'Kostenlos',es:'Gratis',it:'Gratis',zh:'免费'},
'Start your free trial':{fr:'Commencez votre essai gratuit',de:'Kostenlose Testversion starten',es:'Comienza tu prueba gratuita',it:'Inizia la prova gratuita',zh:'开始免费试用'},
'Try Free Now':{fr:'Essayer Gratuitement',de:'Jetzt Testen',es:'Probar Ahora',it:'Prova Ora',zh:'立即试用'},
'10 free notes':{fr:'10 notes gratuites',de:'10 kostenlose Notizen',es:'10 notas gratis',it:'10 note gratis',zh:'10 条免费笔记'},
'2 min per recording':{fr:'2 min par enregistrement',de:'2 Min pro Aufnahme',es:'2 min por grabación',it:'2 min per registrazione',zh:'2 分钟/条'},
'Standard AI polish':{fr:'Polissage IA standard',de:'Standard KI-Politur',es:'Pulido IA estándar',it:'Perfezionamento IA standard',zh:'标准 AI 润色'},
'46 languages':{fr:'46 langues',de:'46 Sprachen',es:'46 idiomas',it:'46 lingue',zh:'46 种语言'},
'No credit card needed':{fr:'Pas de carte bancaire',de:'Keine Kreditkarte nötig',es:'Sin tarjeta de crédito',it:'Nessuna carta di credito',zh:'无需信用卡'},
'Prime':{fr:'Prime',de:'Prime',es:'Prime',it:'Prime',zh:'Prime'},
'Everything in Free, plus unlimited':{fr:'Tout ce qui est dans Free, en illimité',de:'Alles von Free, plus unbegrenzt',es:'Todo lo de Free, más ilimitado',it:'Tutto Free, più illimitato',zh:'Free 全部功能 + 无限使用'},
'Download & Try Free':{fr:'Télécharger et Essayer',de:'Download & Testen',es:'Descargar y Probar',it:'Scarica e Prova',zh:'下载试用'},
'Unlimited notes':{fr:'Notes illimitées',de:'Unbegrenzte Notizen',es:'Notas ilimitadas',it:'Note illimitate',zh:'无限笔记'},
'15 min per recording':{fr:'15 min par enregistrement',de:'15 Min pro Aufnahme',es:'15 min por grabación',it:'15 min per registrazione',zh:'15 分钟/条'},
'Advanced AI + all styles':{fr:'IA avancée + tous les styles',de:'Erweiterte KI + alle Stile',es:'IA avanzada + todos los estilos',it:'IA avanzata + tutti gli stili',zh:'高级 AI + 全风格'},
'All AI styles + 46 languages':{fr:'Tous les styles IA + 46 langues',de:'Alle KI-Stile + 46 Sprachen',es:'Todos los estilos + 46 idiomas',it:'Tutti gli stili + 46 lingue',zh:'全 AI 风格 + 46 语言'},
'Tags & folders':{fr:'Tags et dossiers',de:'Tags & Ordner',es:'Etiquetas y carpetas',it:'Tag e cartelle',zh:'标签和文件夹'},
'Cancel anytime':{fr:'Annulez à tout moment',de:'Jederzeit kündbar',es:'Cancela cuando quieras',it:'Annulla quando vuoi',zh:'随时取消'},
'Compare':{fr:'Comparer',de:'Vergleichen',es:'Comparar',it:'Confronta',zh:'对比'},
'Feature':{fr:'Fonctionnalité',de:'Funktion',es:'Función',it:'Funzione',zh:'功能'},
'Notes':{fr:'Notes',de:'Notizen',es:'Notas',it:'Note',zh:'笔记数'},
'Recording length':{fr:'Durée d\'enregistrement',de:'Aufnahmelänge',es:'Duración de grabación',it:'Durata registrazione',zh:'录音时长'},
'AI polish quality':{fr:'Qualité du polissage IA',de:'KI-Politur Qualität',es:'Calidad de pulido IA',it:'Qualità perfezionamento IA',zh:'AI 润色质量'},
'AI writing styles':{fr:'Styles d\'écriture IA',de:'KI-Schreibstile',es:'Estilos de escritura IA',it:'Stili di scrittura IA',zh:'AI 写作风格'},
'History':{fr:'Historique',de:'Verlauf',es:'Historial',it:'Cronologia',zh:'历史记录'},
'Support':{fr:'Support',de:'Support',es:'Soporte',it:'Supporto',zh:'支持'},
'FAQ':{fr:'FAQ',de:'FAQ',es:'FAQ',it:'FAQ',zh:'常见问题'},

// FAQ
'How does the free trial work?':{fr:'Comment fonctionne l\'essai gratuit ?',de:'Wie funktioniert die Testversion?',es:'¿Cómo funciona la prueba gratuita?',it:'Come funziona la prova gratuita?',zh:'免费试用如何运作？'},
'Your first 10 notes are completely free (up to 2 minutes each). No credit card required. After that, choose a Prime plan to keep recording.':{fr:'Vos 10 premières notes sont gratuites (2 min max). Sans CB. Ensuite, choisissez Prime.',de:'Ihre ersten 10 Notizen sind kostenlos. Keine Kreditkarte. Danach Prime wählen.',es:'Tus 10 primeras notas son gratis. Sin tarjeta. Luego, elige Prime.',it:'Le tue prime 10 note sono gratis. Nessuna carta. Poi scegli Prime.',zh:'前 10 条笔记完全免费（每条 2 分钟）。无需信用卡。之后选择 Prime 继续。'},
'Can I switch or cancel my plan anytime?':{fr:'Puis-je changer ou annuler mon plan ?',de:'Kann ich jederzeit wechseln oder kündigen?',es:'¿Puedo cambiar o cancelar mi plan?',it:'Posso cambiare o annullare il piano?',zh:'可以随时切换或取消方案吗？'},
'Absolutely. You can upgrade, downgrade, or cancel your subscription at any time directly through the app store.':{fr:'Absolument. Mettez à niveau ou annulez depuis l\'App Store.',de:'Sie können jederzeit upgraden oder kündigen.',es:'Puedes cambiar o cancelar desde la App Store.',it:'Puoi aggiornare o annullare dall\'app store.',zh:'当然。可以直接通过 App Store 升级、降级或取消。'},
'What happens to my notes if I cancel?':{fr:'Qu\'arrive-t-il à mes notes si j\'annule ?',de:'Was passiert mit meinen Notizen bei Kündigung?',es:'¿Qué pasa con mis notas si cancelo?',it:'Cosa succede alle mie note se annullo?',zh:'取消后我的笔记会怎样？'},
'Your notes belong to you forever. If you cancel, you will still be able to access, read, and export all your existing notes on the Free plan.':{fr:'Vos notes sont à vous. Accès en lecture seule conservé.',de:'Ihre Notizen bleiben. Lesezugriff erhalten.',es:'Tus notas son tuyas. Acceso de solo lectura.',it:'Le tue note sono tue. Accesso in lettura.',zh:'笔记永远属于你。取消后仍可访问、阅读和导出已有笔记。'},
'Do you offer a refund guarantee?':{fr:'Offrez-vous une garantie de remboursement ?',de:'Gibt es eine Geld-zurück-Garantie?',es:'¿Ofrecen garantía de reembolso?',it:'Offrite una garanzia di rimborso?',zh:'有退款保证吗？'},
'Yes, we back our paid plans with a 7-day money-back guarantee. If you\'re not satisfied, just contact our support.':{fr:'Oui, garantie de remboursement de 7 jours. Contactez le support.',de:'Ja, 7-Tage-Geld-zurück-Garantie. Kontaktieren Sie den Support.',es:'Sí, garantía de 7 días. Contacta con soporte.',it:'Sì, garanzia di rimborso di 7 giorni. Contatta il supporto.',zh:'是的，7 天退款保证。不满意联系支持即可。'},
'What languages does VoiceNote support?':{fr:'Quelles langues VoiceNote prend-il en charge ?',de:'Welche Sprachen unterstützt VoiceNote?',es:'¿Qué idiomas admite VoiceNote?',it:'Quali lingue supporta VoiceNote?',zh:'VoiceNote 支持哪些语言？'},
'VoiceNote supports 46 languages for both transcription and AI polishing, covering major languages across Europe, Asia, the Middle East, and the Americas.':{fr:'46 langues en Europe, Asie, Moyen-Orient et Amériques.',de:'46 Sprachen in Europa, Asien, Nahost und Amerika.',es:'46 idiomas en Europa, Asia, Oriente Medio y América.',it:'46 lingue in Europa, Asia, Medio Oriente e Americhe.',zh:'覆盖欧洲、亚洲、中东和美洲的 46 种语言。'},
'How long can each recording be?':{fr:'Quelle est la durée maximale d\'un enregistrement ?',de:'Wie lang kann eine Aufnahme sein?',es:'¿Cuánto dura cada grabación?',it:'Quanto può durare una registrazione?',zh:'每条录音可以多长？'},
'Up to 15 minutes per recording on Prime. That\'s more than enough for meeting recaps, journal entries, brain dumps, and detailed briefs.':{fr:'Jusqu\'à 15 min sur Prime.',de:'Bis zu 15 Min auf Prime.',es:'Hasta 15 min en Prime.',it:'Fino a 15 min su Prime.',zh:'Prime 最长 15 分钟，足以应对会议、日记和头脑风暴。'},

// Download page
'iOS App':{fr:'App iOS',de:'iOS App',es:'App iOS',it:'App iOS',zh:'iOS 应用'},
'Capture your ideas anywhere, anytime':{fr:'Capturez vos idées partout',de:'Ideen überall festhalten',es:'Captura ideas en cualquier lugar',it:'Cattura idee ovunque',zh:'随时随地捕捉灵感'},
'Available for iPhone and iPad. Download now and start turning your voice into polished text.':{fr:'Pour iPhone et iPad. Téléchargez.',de:'Für iPhone und iPad. Jetzt downloaden.',es:'Para iPhone y iPad. Descarga ahora.',it:'Per iPhone e iPad. Scarica ora.',zh:'适用于 iPhone 和 iPad。立即下载。'},
'Scan to get VoiceNote':{fr:'Scannez pour VoiceNote',de:'Für VoiceNote scannen',es:'Escanea para VoiceNote',it:'Scansiona per VoiceNote',zh:'扫码获取 VoiceNote'},
'Open your iPhone camera and scan the QR code to download instantly.':{fr:'Ouvrez l\'appareil photo et scannez.',de:'iPhone-Kamera öffnen und scannen.',es:'Abre la cámara y escanea.',it:'Apri la fotocamera e scansiona.',zh:'打开 iPhone 相机扫码下载。'},
'Inside the App':{fr:'Dans l\'App',de:'In der App',es:'Dentro de la App',it:'Dentro l\'App',zh:'应用预览'},
'Minimalist design, maximum productivity':{fr:'Design minimaliste, productivité max',de:'Minimalistisch, maximale Produktivität',es:'Diseño mínimo, máxima productividad',it:'Design minimalista, massima produttività',zh:'极简设计，极致效率'},
'Record in one tap':{fr:'Enregistrer en un clic',de:'Ein-Tipp-Aufnahme',es:'Grabar en un toque',it:'Registra in un tocco',zh:'一键录音'},
'Press the big mic button and start talking':{fr:'Appuyez sur le micro et parlez',de:'Großen Mikro-Button drücken',es:'Pulsa el micrófono y habla',it:'Premi il microfono e parla',zh:'按下大麦克风按钮开始说话'},
'AI-polished text':{fr:'Texte peaufiné par IA',de:'KI-verfeinerter Text',es:'Texto pulido por IA',it:'Testo perfezionato dall\'IA',zh:'AI 润色文字'},
'Deepgram + GPT refine your words in seconds':{fr:'Deepgram + GPT peaufinent en secondes',de:'Deepgram + GPT verfeinern in Sekunden',es:'Deepgram + GPT refinan en segundos',it:'Deepgram + GPT perfezionano in secondi',zh:'Deepgram + GPT 秒速润色'},
'Organise with tags':{fr:'Organisez avec des tags',de:'Mit Tags organisieren',es:'Organiza con etiquetas',it:'Organizza con tag',zh:'标签整理'},
'Folders, tags & full-text search':{fr:'Dossiers, tags et recherche',de:'Ordner, Tags & Volltextsuche',es:'Carpetas, etiquetas y búsqueda',it:'Cartelle, tag e ricerca full-text',zh:'文件夹、标签和全文搜索'},
'Get Started':{fr:'Commencer',de:'Loslegen',es:'Empezar',it:'Inizia',zh:'开始'},
'Install in seconds':{fr:'Installer en secondes',de:'In Sekunden installiert',es:'Instalar en segundos',it:'Installa in secondi',zh:'秒速安装'},
'Download the app':{fr:'Télécharger l\'app',de:'App herunterladen',es:'Descargar la app',it:'Scarica l\'app',zh:'下载 App'},
'Get VoiceNote from the App Store. It\'s a free download.':{fr:'Depuis l\'App Store. Gratuit.',de:'Aus dem App Store. Kostenlos.',es:'Desde la App Store. Gratis.',it:'Dall\'App Store. Gratis.',zh:'从 App Store 免费下载。'},
'Create your account':{fr:'Créez votre compte',de:'Konto erstellen',es:'Crea tu cuenta',it:'Crea il tuo account',zh:'创建账户'},
'Sign up with email or Google. Takes less than 30 seconds.':{fr:'Inscrivez-vous en 30 secondes.',de:'In 30 Sekunden registriert.',es:'Regístrate en 30 segundos.',it:'Registrati in 30 secondi.',zh:'邮箱或 Google 注册，30 秒内完成。'},
'Tap record & speak':{fr:'Appuyez et parlez',de:'Aufnehmen & Sprechen',es:'Toca y habla',it:'Tocca e parla',zh:'点击录音说话'},
'Hit the big record button and start talking. VoiceNote handles the rest.':{fr:'Appuyez et parlez. VoiceNote fait le reste.',de:'Aufnehmen und sprechen. VoiceNote erledigt den Rest.',es:'Pulsa y habla. VoiceNote hace el resto.',it:'Premi e parla. VoiceNote fa il resto.',zh:'点击录音开始说话，VoiceNote 处理剩下的。'},
'Read, copy, share':{fr:'Lire, copier, partager',de:'Lesen, Kopieren, Teilen',es:'Leer, copiar, compartir',it:'Leggi, copia, condividi',zh:'阅读、复制、分享'},
'Your polished text is ready. Copy it anywhere, share it, or export it.':{fr:'Votre texte est prêt. Copiez, partagez, exportez.',de:'Ihr Text ist fertig. Kopieren, teilen, exportieren.',es:'Tu texto está listo. Copia, comparte, exporta.',it:'Il tuo testo è pronto. Copia, condividi, esporta.',zh:'润色后的文字已就绪，复制、分享或导出。'},
'Requirements':{fr:'Prérequis',de:'Anforderungen',es:'Requisitos',it:'Requisiti',zh:'系统要求'},
'What you need':{fr:'Ce dont vous avez besoin',de:'Was Sie brauchen',es:'Lo que necesitas',it:'Cosa ti serve',zh:'你需要什么'},
'iPhone or iPad running iOS 16.0 or later':{fr:'iPhone ou iPad sous iOS 16.0+',de:'iPhone oder iPad mit iOS 16.0+',es:'iPhone o iPad con iOS 16.0+',it:'iPhone o iPad con iOS 16.0+',zh:'iPhone 或 iPad，iOS 16.0 以上'},

// Contact
'Support':{fr:'Assistance',de:'Support',es:'Soporte',it:'Supporto',zh:'支持'},
'We\'d love to hear from you':{fr:'Nous aimerions vous entendre',de:'Wir freuen uns auf Sie',es:'Nos encantaría saber de ti',it:'Ci piacerebbe sentirti',zh:'我们期待你的来信'},
'Got a question, found a bug, or want to suggest a new AI style? Drop us a line and our team will get back to you within 24 hours.':{fr:'Une question ? Écrivez-nous, réponse sous 24h.',de:'Fragen? Schreiben Sie uns, Antwort in 24h.',es:'¿Preguntas? Escríbenos, respondemos en 24h.',it:'Domande? Scrivici, rispondiamo entro 24h.',zh:'有问题？联系我们，24 小时内回复。'},
'Get the App':{fr:'Obtenir l\'App',de:'App holen',es:'Obtener la App',it:'Ottieni l\'App',zh:'获取应用'},

// Footer
'Privacy Policy':{fr:'Confidentialité',de:'Datenschutz',es:'Privacidad',it:'Privacy',zh:'隐私政策'},
'Terms of Service':{fr:'Conditions',de:'Nutzungsbedingungen',es:'Términos',it:'Termini',zh:'服务条款'},
'Cookie Policy':{fr:'Cookies',de:'Cookies',es:'Cookies',it:'Cookie',zh:'Cookie 政策'},
'Your pocket voice assistant.':{fr:'Votre assistant vocal de poche.',de:'Ihr Taschen-Sprachassistent.',es:'Tu asistente de voz de bolsillo.',it:'Il tuo assistente vocale tascabile.',zh:'你的口袋语音助手。'},

// Voice input sample
'Um, so basically I think we should consider maybe extending the deadline for the project because, you know, like, we\'re still waiting on some feedback from the client and the design team hasn\'t finished their revisions yet and honestly we need more time to make it, like, actually good instead of rushing it out...':{fr:'Euh, donc en gros je pense qu\'on devrait peut-être prolonger le délai du projet parce que, vous savez, on attend encore des retours du client et l\'équipe design n\'a pas fini ses révisions...',de:'Ähm, also ich denke wir sollten vielleicht die Frist verlängern, weil wir noch auf Feedback warten und das Design-Team noch nicht fertig ist...',es:'Eh, básicamente creo que deberíamos extender el plazo porque todavía esperamos comentarios del cliente y el equipo de diseño no ha terminado...',it:'Ehm, quindi fondamentalmente penso che dovremmo estendere la scadenza perché stiamo ancora aspettando feedback dal cliente e il team di design non ha finito...',zh:'呃，所以我觉得我们应该考虑延长项目的截止日期，因为我们还在等客户的反馈，设计团队还没完成修改，说实话我们需要更多时间来把它做好而不是匆忙交差...'},
};

// ---- Engine ----
function getLang(){const s=localStorage.getItem(LANG_KEY);return s&&LANGS.includes(s)?s:(LANGS.includes(navigator.language.slice(0,2))?navigator.language.slice(0,2):'en');}
function setLang(l){if(!LANGS.includes(l))return;localStorage.setItem(LANG_KEY,l);applyLang();updateBadge();}
function applyLang(){
  const lang=getLang();if(lang==='en')return restoreEN();
  document.documentElement.lang=lang;
  // Walk all text nodes and translate
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    const text=node.textContent.trim();
    if(!text||text.length<2)return;
    // Skip script/style/noscript
    const parent=node.parentElement;
    if(!parent||['SCRIPT','STYLE','NOSCRIPT'].includes(parent.tagName))return;
    // Skip lang switcher and inputs
    if(parent.closest('#langSwitcher'))return;
    if(parent.tagName==='INPUT'||parent.tagName==='TEXTAREA')return;
    // Look up translation
    if(T[text]&&T[text][lang]){
      node.textContent=T[text][lang];
    }
  });
  // Also handle data-t elements
  document.querySelectorAll('[data-t]').forEach(el=>{
    const k=el.getAttribute('data-t');
    if(T[k]&&T[k][lang])el.textContent=T[k][lang];
  });
}
let _enCache=null;
function restoreEN(){
  document.documentElement.lang='en';
  if(!_enCache)return;
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    const text=node.textContent.trim();
    if(!text||text.length<2)return;
    const p=node.parentElement;
    if(!p||['SCRIPT','STYLE','NOSCRIPT'].includes(p.tagName))return;
    if(p.closest('#langSwitcher'))return;
    if(Object.values(T).some(t=>Object.values(t).includes(text))){
      for(const [en,tr] of Object.entries(T)){
        if(Object.values(tr).includes(text)){node.textContent=en;break;}
      }
    }
  });
  document.querySelectorAll('[data-t]').forEach(el=>{
    const k=el.getAttribute('data-t');
    if(T[k])el.textContent=T[k].en||k;
  });
}
function updateBadge(){
  const l=getLang();const m={en:'EN',fr:'FR',de:'DE',es:'ES',it:'IT',zh:'中文'};
  const b=document.getElementById('langCurrent');
  if(b)b.innerHTML=m[l]+' <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';
}
document.addEventListener('DOMContentLoaded',()=>{
  const m={en:'English',fr:'Français',de:'Deutsch',es:'Español',it:'Italiano',zh:'中文'};
  const s={en:'EN',fr:'FR',de:'DE',es:'ES',it:'IT',zh:'中文'};
  const l=getLang();const w=document.getElementById('langSwitcher');
  if(!w)return;w.innerHTML='';
  const c=document.createElement('span');c.id='langCurrent';
  c.className='text-xs font-medium text-gray-500 cursor-pointer hover:text-gray-700 flex items-center gap-1';
  c.innerHTML=s[l]+' <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';
  w.appendChild(c);
  const d=document.createElement('div');d.id='langDropdown';
  d.className='absolute top-full right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg py-1 hidden z-50 min-w-[140px]';
  LANGS.forEach(x=>{const o=document.createElement('button');o.textContent=m[x];
    o.className='lang-option block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 '+(x===l?'font-semibold text-brand-600':'');
    o.onclick=()=>{setLang(x);d.classList.add('hidden');};d.appendChild(o);});
  w.appendChild(d);c.addEventListener('click',e=>{e.stopPropagation();d.classList.toggle('hidden');});
  document.addEventListener('click',()=>d.classList.add('hidden'));
  // Cache English text nodes on first load
  if(l==='en'){const w2=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);const arr=[];while(w2.nextNode())arr.push({node:w2.currentNode,text:w2.currentNode.textContent});_enCache=arr;}
  else applyLang();
});
