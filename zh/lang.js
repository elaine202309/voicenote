var LANG_KEY='voicenote_lang',LANGS=['en','fr','de','es','it','zh'];
var T={
'Home':{fr:'Accueil',de:'Start',es:'Inicio',it:'Home',zh:'首页'},
'Pricing':{fr:'Tarifs',de:'Preise',es:'Precios',it:'Prezzi',zh:'定价'},
'Download':{fr:'Telecharger',de:'Download',es:'Descargar',it:'Scarica',zh:'下载'},
'Contact':{fr:'Contact',de:'Kontakt',es:'Contacto',it:'Contatto',zh:'联系'},
'Try Free':{fr:'Essai Gratuit',de:'Testen',es:'Probar',it:'Prova',zh:'免费试用'},
// Hero
'Turn messy thoughts':{fr:'Pensees brouillonnes',de:'Chaotische Gedanken',es:'Pensamientos',it:'Pensieri confusi',zh:'混乱的想法'},
'into structured text':{fr:'en texte structure',de:'in Text',es:'en texto',it:'in testo',zh:'变成清晰文字'},
'Stop worrying about filler words, pauses, or grammar. Just speak naturally — VoiceNote\'s AI instantly rewrites your voice for any context.':{fr:'Arretez de vous soucier. Parlez, VoiceNote reecrit.',de:'Sorgen um Pausen? Sprechen Sie, VoiceNote schreibt um.',es:'No te preocupes. Habla, VoiceNote reescribe.',it:'Non preoccuparti. Parla, VoiceNote riscrive.',zh:'别再担心语气词。自然说，VoiceNote 即刻重写。'},
// Sections
'Simple & Fast':{fr:'Simple et Rapide',de:'Einfach & Schnell',es:'Simple y Rapido',it:'Semplice e Veloce',zh:'简单快速'},
'AI Smart Styles':{fr:'Styles IA',de:'KI Stile',es:'Estilos IA',it:'Stili IA',zh:'AI 智能风格'},
'46 Languages':{fr:'46 Langues',de:'46 Sprachen',es:'46 Idiomas',it:'46 Lingue',zh:'46 种语言'},
'Built for Thinkers':{fr:'Pour les Penseurs',de:'Fur Denker',es:'Para Pensadores',it:'Per Pensatori',zh:'为思考者而生'},
// How it works
'From voice to perfect text in 3 steps':{fr:'De la voix au texte parfait en 3 etapes',de:'Von Sprache zu perfektem Text in 3 Schritten',es:'De voz a texto perfecto en 3 pasos',it:'Dalla voce al testo perfetto in 3 passi',zh:'从语音到完美文字只需三步'},
'Speak Freely':{fr:'Parlez Librement',de:'Frei Sprechen',es:'Habla Libremente',it:'Parla Liberamente',zh:'自由说'},
'Tap the mic and talk without filtering. Um\'s, ah\'s, and pauses? Our AI ignores them.':{fr:'Appuyez et parlez sans filtre. Les hesitations? Notre IA les ignore.',de:'Tippen Sie und sprechen Sie. Unsere KI ignoriert Pausen.',es:'Toca y habla sin filtrar. Nuestra IA ignora las pausas.',it:'Tocca e parla senza filtri. La nostra IA ignora le pause.',zh:'点击麦克风自由说。语气词和停顿？AI 会忽略。'},
'Choose Your Style':{fr:'Choisissez votre style',de:'Stil wahlen',es:'Elige tu estilo',it:'Scegli lo stile',zh:'选择风格'},
'Select your context. Need an email, a tweet, or a structured summary?':{fr:'Choisissez votre contexte. Un email, un tweet ou un resume structure?',de:'Kontext wahlen. E-Mail, Tweet oder Zusammenfassung?',es:'Elige contexto. Email, tweet o resumen?',it:'Scegli il contesto. Email, tweet o riassunto?',zh:'选择场景。邮件、推文还是摘要？'},
'Ready to Use':{fr:'Pret a l\'emploi',de:'Einsatzbereit',es:'Listo para usar',it:'Pronto all\'uso',zh:'立即可用'},
'Get beautifully polished, ready-to-share text in seconds.':{fr:'Obtenez un texte parfait, pret a partager en quelques secondes.',de:'Erhalten Sie perfekt formatierten Text in Sekunden.',es:'Obten texto pulido listo para compartir en segundos.',it:'Ottieni testo perfetto, pronto da condividere in pochi secondi.',zh:'秒速获得润色精美的文字，立即可分享。'},
// Hero demo card
'Voice input':{fr:'Entree vocale',de:'Spracheingabe',es:'Entrada de voz',it:'Ingresso vocale',zh:'语音输入'},
'AI polished':{fr:'Peaufine par IA',de:'KI-verfeinert',es:'Pulido por IA',it:'Perfezionato dall\'IA',zh:'AI 润色后'},
'Download on the':{fr:'Telecharger sur l\'',de:'Laden im',es:'Descargar en',it:'Scarica su',zh:'在以下载'},
'App Store':{fr:'App Store',de:'App Store',es:'App Store',it:'App Store',zh:'App Store'},
// Smart Styles
'VOICE INPUT':{fr:'ENTREE VOCALE',de:'SPRACHEINGABE',es:'ENTRADA DE VOZ',it:'INGRESSO VOCALE',zh:'语音输入'},
'Plain & Direct':{fr:'Clair & Direct',de:'Klar & Direkt',es:'Claro & Directo',it:'Chiaro & Diretto',zh:'简洁直接'},
'Professional Email':{fr:'Email Professionnel',de:'E-Mail',es:'Email Profesional',it:'Email Professionale',zh:'正式邮件'},
'Key Takeaways':{fr:'Points Cles',de:'Kernpunkte',es:'Puntos Clave',it:'Punti Chiave',zh:'要点总结'},
'Casual / Slack':{fr:'Decontracte',de:'Locker',es:'Informal',it:'Informale',zh:'随意聊天'},
// Pricing
'Free':{fr:'Gratuit',de:'Kostenlos',es:'Gratis',it:'Gratis',zh:'免费'},
'Prime':{fr:'Prime',de:'Prime',es:'Prime',it:'Prime',zh:'Prime'},
'Start your free trial':{fr:'Essai gratuit',de:'Testversion',es:'Prueba gratuita',it:'Prova gratuita',zh:'开始免费试用'},
'Try Free Now':{fr:'Essayer',de:'Jetzt testen',es:'Probar ahora',it:'Prova ora',zh:'立即试用'},
'10 free notes':{fr:'10 notes gratuites',de:'10 Notizen',es:'10 notas gratis',it:'10 note gratis',zh:'10 条免费笔记'},
'2 min per recording':{fr:'2 min/enreg',de:'2 Min/Aufn',es:'2 min/grab',it:'2 min/reg',zh:'2 分钟/条'},
'Standard AI polish':{fr:'Polissage standard',de:'KI-Politur',es:'Pulido estandar',it:'Perfezionamento',zh:'标准 AI 润色'},
'46 languages':{fr:'46 langues',de:'46 Sprachen',es:'46 idiomas',it:'46 lingue',zh:'46 种语言'},
'No credit card needed':{fr:'Sans CB',de:'Keine Karte',es:'Sin tarjeta',it:'Nessuna carta',zh:'无需信用卡'},
'Everything in Free, plus unlimited':{fr:'Tout Free en illimite',de:'Alles von Free',es:'Todo Free ilimitado',it:'Tutto Free illimitato',zh:'Free 全部 + 无限'},
'Download & Try Free':{fr:'Telecharger et essayer',de:'Download & testen',es:'Descargar y probar',it:'Scarica e prova',zh:'下载试用'},
'Unlimited notes':{fr:'Notes illimitees',de:'Unbegrenzt',es:'Ilimitadas',it:'Illimitate',zh:'无限笔记'},
'15 min per recording':{fr:'15 min/enreg',de:'15 Min/Aufn',es:'15 min/grab',it:'15 min/reg',zh:'15 分钟/条'},
'Advanced AI + all styles':{fr:'IA avancee + styles',de:'KI + alle Stile',es:'IA avanzada + estilos',it:'IA avanzata + stili',zh:'高级 AI + 全风格'},
'Download on the App Store':{fr:'Telecharger',de:'Laden',es:'Descargar',it:'Scarica',zh:'在 App Store 下载'},
'Scan to download':{fr:'Scanner',de:'Scannen',es:'Escanear',it:'Scansiona',zh:'扫码下载'},
'Um... so I think this product idea is really good because... like, it helps people just talk and get text...':{fr:'Euh... donc je pense que ce produit est vraiment bien parce que... genre, il aide les gens a parler et obtenir du texte...',de:'Ah... also ich denke diese Produktidee ist wirklich gut weil... es hilft Leuten einfach zu reden und Text zu bekommen...',es:'Eh... creo que esta idea de producto es muy buena porque... ayuda a la gente a hablar y obtener texto...',it:'Um... quindi penso che questa idea di prodotto sia davvero buona perche... aiuta le persone a parlare e ottenere testo...',zh:'呃...我觉得这个产品想法很好因为...可以帮助大家说话直接变成文字...'},
'Um, so basically I think we should consider maybe extending the deadline for the project because, you know, like, we\'re still waiting on some feedback from the client and the design team hasn\'t finished their revisions yet and honestly we need more time to make it, like, actually good instead of rushing it out...':{fr:'Euh, donc en gros je pense qu\'on devrait peut-etre prolonger le delai du projet parce que, vous savez, on attend encore des retours du client et l\'equipe design n\'a pas fini ses revisions et honnetement on a besoin de plus de temps pour le faire bien au lieu de le bacler...',de:'Ah, also ich denke, wir sollten vielleicht die Frist verlangern, weil wir noch auf Feedback vom Kunden warten und das Designteam die Uberarbeitungen noch nicht fertig hat, und ehrlich gesagt brauchen wir mehr Zeit, um es richtig gut zu machen, statt es ubereilt rauszuhauen...',es:'Eh, basicamente creo que deberiamos considerar extender el plazo porque, ya sabes, todavia esperamos comentarios del cliente y el equipo de diseno no ha terminado sus revisiones, y la verdad necesitamos mas tiempo para hacerlo bien en vez de apresurarnos...',it:'Ehm, quindi in pratica penso che dovremmo considerare di estendere la scadenza perche, sai, stiamo ancora aspettando feedback dal cliente e il team di design non ha finito le revisioni, e onestamente abbiamo bisogno di piu tempo per farlo bene invece di farlo di fretta...',zh:'呃，所以我觉得我们应该考虑延长项目的截止日期，因为你知道的，我们还在等客户的反馈，设计团队也还没完成修改，说实话我们需要更多时间来把它做好，而不是匆忙交差...'},
'This product converts voice into text in real time, using AI to remove filler words, fix grammar, and restructure sentences for clarity.':{fr:'Ce produit convertit la voix en texte en temps reel, en utilisant l\'IA pour supprimer les hesitations, corriger la grammaire et restructurer les phrases.',de:'Dieses Produkt wandelt Sprache in Echtzeit in Text um und nutzt KI, um Fullworter zu entfernen, Grammatik zu korrigieren und Satze zu strukturieren.',es:'Este producto convierte voz en texto en tiempo real, usando IA para eliminar muletillas, corregir gramatica y reestructurar oraciones.',it:'Questo prodotto converte la voce in testo in tempo reale, usando l\'IA per rimuovere parole di riempimento, correggere la grammatica e ristrutturare le frasi.',zh:'这个产品将语音实时转换为文字，用 AI 去除冗余词汇，修正语法，优化句子结构。'},
// Comparison
'Compare':{fr:'Comparer',de:'Vergleichen',es:'Comparar',it:'Confronta',zh:'对比'},
'Feature':{fr:'Fonction',de:'Funktion',es:'Funcion',it:'Funzione',zh:'功能'},
'Notes':{fr:'Notes',de:'Notizen',es:'Notas',it:'Note',zh:'笔记数'},
'Recording length':{fr:'Duree',de:'Aufnahmelange',es:'Duracion',it:'Durata',zh:'录音时长'},
'AI polish quality':{fr:'Qualite IA',de:'KI-Qualitat',es:'Calidad IA',it:'Qualita IA',zh:'AI 润色'},
'AI writing styles':{fr:'Styles IA',de:'KI-Stile',es:'Estilos IA',it:'Stili IA',zh:'AI 风格'},
'History':{fr:'Historique',de:'Verlauf',es:'Historial',it:'Cronologia',zh:'历史'},
'Support':{fr:'Support',de:'Support',es:'Soporte',it:'Supporto',zh:'支持'},
'Standard':{fr:'Standard',de:'Standard',es:'Estandar',it:'Standard',zh:'标准'},
'Advanced':{fr:'Avance',de:'Erweitert',es:'Avanzado',it:'Avanzato',zh:'高级'},
'All styles':{fr:'Tous',de:'Alle',es:'Todos',it:'Tutti',zh:'全部'},
'3 styles':{fr:'3 styles',de:'3 Stile',es:'3 estilos',it:'3 stili',zh:'3 种'},
'15 min':{fr:'15 min',de:'15 Min',es:'15 min',it:'15 min',zh:'15 分钟'},
'2 min':{fr:'2 min',de:'2 Min',es:'2 min',it:'2 min',zh:'2 分钟'},
'First 10':{fr:'10 premieres',de:'Erste 10',es:'Primeras 10',it:'Prime 10',zh:'前 10 条'},
'Unlimited':{fr:'Illimite',de:'Unbegrenzt',es:'Ilimitado',it:'Illimitato',zh:'无限'},
'Forever':{fr:'Pour toujours',de:'Fur immer',es:'Para siempre',it:'Per sempre',zh:'永久'},
'7 days':{fr:'7 jours',de:'7 Tage',es:'7 dias',it:'7 giorni',zh:'7 天'},
'1 year':{fr:'1 an',de:'1 Jahr',es:'1 ano',it:'1 anno',zh:'1 年'},
// Users
'Students':{fr:'Etudiants',de:'Studenten',es:'Estudiantes',it:'Studenti',zh:'学生'},
'Busy Parents':{fr:'Parents Occupes',de:'Eltern',es:'Padres Ocupados',it:'Genitori',zh:'忙碌的父母'},
'Writers & Creators':{fr:'Ecrivains',de:'Autoren',es:'Escritores',it:'Scrittori',zh:'作家与创作者'},
'Professionals & Executives':{fr:'Professionnels',de:'Profis',es:'Profesionales',it:'Professionisti',zh:'职场人士'},
'Thinkers & Ideators':{fr:'Penseurs',de:'Denker',es:'Pensadores',it:'Pensatori',zh:'思考者'},
'Entrepreneurs & Ideators':{fr:'Entrepreneurs',de:'Unternehmer',es:'Emprendedores',it:'Imprenditori',zh:'创业者'},
'Journal Keepers & Thinkers':{fr:'Journaliers',de:'Journal Schreiber',es:'Diarios',it:'Diario',zh:'日记者'},
// Who It\'s For descriptions
'Dictate first drafts effortlessly. Never stare at a blank page again.':{fr:'Dictez vos brouillons sans effort.',de:'Diktieren Sie Entwurfe muhlos.',es:'Dicta borradores sin esfuerzo.',it:'Detta bozze senza sforzo.',zh:'轻松口述初稿，告别空白页。'},
'Turn walking thoughts into polished messages, emails, and memos on the go.':{fr:'Transformez vos pensees en messages soignes.',de:'Gedanken in Nachrichten verwandeln.',es:'Convierte pensamientos en mensajes.',it:'Trasforma pensieri in messaggi.',zh:'把随想变成精致的消息和邮件。'},
'Transcribe lectures, organise study notes, and brainstorm essays hands-free.':{fr:'Transcrivez les cours, organisez vos notes.',de:'Vorlesungen transkribieren, Notizen organisieren.',es:'Transcribe clases, organiza apuntes.',it:'Trascrivi lezioni, organizza appunti.',zh:'免提转录课程，整理笔记。'},
'Capture chaotic brainstorming sessions and instantly structure them into action plans.':{fr:'Structurez vos brainstormings en plans daction.',de:'Brainstorming in Aktionsplane umwandeln.',es:'Estructura ideas en planes de accion.',it:'Struttura il brainstorming in piani d\'azione.',zh:'把头脑风暴变成行动计划。'},
'Reflect out loud. Document your day with zero friction and clear insights.':{fr:'Reflechissez a voix haute. Documentez votre journee.',de:'Laut reflektieren. Dokumentieren Sie Ihren Tag.',es:'Reflexiona en voz alta. Documenta tu dia.',it:'Rifletti ad alta voce. Documenta la tua giornata.',zh:'大声回顾，零摩擦记录每一天。'},
'Capture ideas while cooking, driving, or chasing the kids. Totally hands-free.':{fr:'Capturez des idees en cuisinant ou conduisant.',de:'Ideen beim Kochen oder Fahren festhalten.',es:'Captura ideas mientras cocinas o conduces.',it:'Cattura idee mentre cucini o guidi.',zh:'做饭开车带娃时捕捉灵感，完全免提。'},
// Fragmented headings
'One voice note,':{fr:'Une note vocale,',de:'Eine Notiz,',es:'Una nota,',it:'Una nota,',zh:'一条语音，'},
'Speak your language,':{fr:'Parlez votre langue,',de:'Sprechen Sie Ihre Sprache,',es:'Habla tu idioma,',it:'Parla la tua lingua,',zh:'说你的语言，'},
'For minds that move':{fr:'Pour les esprits',de:'Fur Kopfe die',es:'Mentes que van',it:'Menti che vanno',zh:'为思维速度'},
'No matter your workflow, VoiceNote turns your spoken thoughts into action.':{fr:'VoiceNote transforme vos pensees en action.',de:'VoiceNote macht Gedanken zu Aktion.',es:'VoiceNote convierte pensamientos en accion.',it:'VoiceNote trasforma pensieri in azione.',zh:'VoiceNote 把你的想法变成行动。'},
'VoiceNote transcribes and polishes in 46 languages, right out of the box.':{fr:'VoiceNote transcrit en 46 langues.',de:'VoiceNote in 46 Sprachen.',es:'VoiceNote en 46 idiomas.',it:'VoiceNote in 46 lingue.',zh:'VoiceNote 支持 46 种语言。'},
// More fragments
// Smart Styles output examples
'Dictate once, rewrite for any platform. Watch how VoiceNote transforms the same voice input into different formats:':{fr:'Dictez une fois, reecrivez pour chaque plateforme. Regardez VoiceNote transformer la meme entree vocale en differents formats :',de:'Einmal diktieren, fur jede Plattform umschreiben. Sehen Sie, wie VoiceNote dieselbe Eingabe in verschiedene Formate umwandelt:',es:'Dicta una vez, reescribe para cada plataforma. Mira como VoiceNote transforma la misma entrada de voz en diferentes formatos:',it:'Detta una volta, riscrivi per ogni piattaforma. Guarda come VoiceNote trasforma lo stesso input vocale in diversi formati:',zh:'说一次，为任何平台重写。看看 VoiceNote 如何将同一语音转化为不同格式：'},
'We need to extend the project deadline by one week due to delayed client feedback and required design revisions.':{fr:'Nous devons prolonger le delai du projet d\'une semaine en raison du retard des retours clients et des revisions de conception necessaires.',de:'Wir mussen die Projektfrist um eine Woche verlangern, da Kundenfeedback und Designuberarbeitungen ausstehen.',es:'Necesitamos extender el plazo del proyecto una semana debido al retraso en los comentarios del cliente y las revisiones de diseno requeridas.',it:'Dobbiamo estendere la scadenza del progetto di una settimana a causa del ritardo nel feedback del cliente e delle revisioni di design necessarie.',zh:'由于客户反馈延迟和设计修改需要，我们需要将项目截止日期延长一周。'},
'I propose extending the project deadline due to outstanding client feedback and ongoing design revisions. Additional time will ensure we deliver work that meets our quality standards.':{fr:'Je propose de prolonger le delai en raison des retours clients en attente et des revisions de conception en cours. Ce temps supplementaire garantira un travail de qualite.',de:'Ich schlage vor, die Frist aufgrund ausstehenden Kundenfeedbacks und laufender Designuberarbeitungen zu verlangern. Zusatzliche Zeit sichert Qualitat.',es:'Propongo extender el plazo debido a los comentarios pendientes del cliente y las revisiones de diseno en curso. El tiempo adicional garantizara un trabajo de calidad.',it:'Propongo di estendere la scadenza a causa del feedback in sospeso e delle revisioni di design in corso. Il tempo aggiuntivo garantira un lavoro di qualita.',zh:'由于客户反馈和设计修改尚未完成，我建议延长项目截止日期。额外时间将确保我们交付符合质量标准的工作。'},
'Hey team! Let\'s push the deadline back a week. Still waiting on the client, plus it gives us some breathing room for design tweaks.':{fr:'He l\'equipe! Repoussons la date d\'une semaine. On attend encore le client, et ca nous laisse de la marge pour les ajustements design.',de:'Hey Team! Verschieben wir die Frist um eine Woche. Warten noch auf den Kunden, und es gibt uns Luft fur Design-Anpassungen.',es:'¡Oye equipo! Aplacemos la fecha una semana. Seguimos esperando al cliente, y nos da margen para ajustes de diseno.',it:'Ehi team! Rimandiamo la scadenza di una settimana. Aspettiamo ancora il cliente, e ci da respiro per le modifiche al design.',zh:'嘿团队！我们把截止日期推迟一周吧。还在等客户反馈，也给我们留点设计调整的空间。'},
'Extend project deadline by 7 days':{fr:'Prolonger le delai de 7 jours',de:'Frist um 7 Tage verlangern',es:'Extender el plazo 7 dias',it:'Estendere la scadenza di 7 giorni',zh:'项目延期 7 天'},
'Awaiting final client feedback':{fr:'En attente du feedback final du client',de:'Warten auf finales Kundenfeedback',es:'Esperando comentarios finales del cliente',it:'In attesa del feedback finale del cliente',zh:'等待客户最终反馈'},
'Conduct design revisions upon receipt':{fr:'Effectuer les revisions de conception a reception',de:'Design-Uberarbeitungen nach Erhalt durchfuhren',es:'Realizar revisiones de diseno al recibir',it:'Effettuare revisioni di design al ricevimento',zh:'收到反馈后进行设计修改'},
'Subject: ':{fr:'Objet : ',de:'Betreff: ',es:'Asunto: ',it:'Oggetto: ',zh:'主题：'},
'Project Timeline Extension':{fr:'Prolongation du delai',de:'Fristverlangerung',es:'Extension del plazo',it:'Estensione scadenza',zh:'项目延长期限'},
'Dear Team,':{fr:'Chere equipe,',de:'Liebes Team,',es:'Estimado equipo,',it:'Caro team,',zh:'各位团队成员，'},
'Best regards':{fr:'Cordialement',de:'Mit freundlichen Grussen',es:'Saludos cordiales',it:'Cordiali saluti',zh:'此致敬礼'},
'Action Item:':{fr:'Action : ',de:'Aufgabe: ',es:'Accion: ',it:'Azione: ',zh:'行动项：'},
'Next Steps:':{fr:'Prochaines etapes : ',de:'Nachste Schritte: ',es:'Proximos pasos: ',it:'Prossimi passi: ',zh:'下一步：'},
// FAQ
'FAQ':{fr:'FAQ',de:'FAQ',es:'FAQ',it:'FAQ',zh:'常见问题'},
'How does the free trial work?':{fr:'Comment fonctionne l\'essai?',de:'Wie funktioniert die Testversion?',es:'Como funciona la prueba?',it:'Come funziona la prova?',zh:'免费试用如何运作？'},
'How long can each recording be?':{fr:'Duree max?',de:'Max. Aufnahmedauer?',es:'Duracion max?',it:'Durata max?',zh:'每条录音可以多长？'},
'What languages does VoiceNote support?':{fr:'Quelles langues?',de:'Welche Sprachen?',es:'Que idiomas?',it:'Quali lingue?',zh:'支持哪些语言？'},
'Do you offer a refund guarantee?':{fr:'Offrez-vous une garantie?',de:'Ruckerstattung?',es:'Garantia de reembolso?',it:'Garanzia di rimborso?',zh:'有退款保证吗？'},
// Download page
'iOS App':{fr:'App iOS',de:'iOS App',es:'App iOS',it:'App iOS',zh:'iOS 应用'},
'Scan to get VoiceNote':{fr:'Scanner pour VoiceNote',de:'Scannen fur VoiceNote',es:'Escanear para VoiceNote',it:'Scansiona per VoiceNote',zh:'扫码获取 VoiceNote'},
'Inside the App':{fr:'Dans l\'App',de:'In der App',es:'Dentro de la App',it:'Dentro l\'App',zh:'应用预览'},
'Record in one tap':{fr:'Enregistrer en un clic',de:'Ein-Tipp-Aufnahme',es:'Grabar en un toque',it:'Registra in un tocco',zh:'一键录音'},
'AI-polished text':{fr:'Texte peaufine IA',de:'KI-verfeinerter Text',es:'Texto pulido IA',it:'Testo perfezionato IA',zh:'AI 润色文字'},
'Organise with tags':{fr:'Organisez avec tags',de:'Mit Tags organisieren',es:'Organiza con etiquetas',it:'Organizza con tag',zh:'标签整理'},
'Get Started':{fr:'Commencer',de:'Loslegen',es:'Empezar',it:'Inizia',zh:'开始'},
'Download the app':{fr:'Telecharger l\'app',de:'App herunterladen',es:'Descargar la app',it:'Scarica l\'app',zh:'下载 App'},
'Create your account':{fr:'Creer votre compte',de:'Konto erstellen',es:'Crea tu cuenta',it:'Crea account',zh:'创建账户'},
'Tap record & speak':{fr:'Enregistrer et parler',de:'Aufnehmen & sprechen',es:'Grabar y hablar',it:'Registra e parla',zh:'点击录音说话'},
'Read, copy, share':{fr:'Lire, copier, partager',de:'Lesen, Kopieren, Teilen',es:'Leer, copiar, compartir',it:'Leggi, copia, condividi',zh:'阅读、复制、分享'},
'Requirements':{fr:'Prerequis',de:'Anforderungen',es:'Requisitos',it:'Requisiti',zh:'系统要求'},
// Contact
'Get the App':{fr:'Obtenir l\'App',de:'App holen',es:'Obtener la App',it:'Ottieni l\'App',zh:'获取应用'},
// Footer
'Privacy Policy':{fr:'Confidentialite',de:'Datenschutz',es:'Privacidad',it:'Privacy',zh:'隐私政策'},
'Terms of Service':{fr:'Conditions',de:'Nutzungsbedingungen',es:'Terminos',it:'Termini',zh:'服务条款'},
'Cookie Policy':{fr:'Cookies',de:'Cookies',es:'Cookies',it:'Cookie',zh:'Cookie 政策'},
// Requirements
'iPhone or iPad running iOS 16.0 or later':{fr:'iPhone/iPad iOS 16+',de:'iPhone/iPad iOS 16+',es:'iPhone/iPad iOS 16+',it:'iPhone/iPad iOS 16+',zh:'iPhone/iPad iOS 16+'},
// Language names
'English':{fr:'English',de:'English',es:'English',it:'English',zh:'English'},
'Francais':{fr:'Francais',de:'Francais',es:'Francais',it:'Francais',zh:'Francais'},
'Deutsch':{fr:'Deutsch',de:'Deutsch',es:'Deutsch',it:'Deutsch',zh:'Deutsch'},
'Espanol':{fr:'Espanol',de:'Espanol',es:'Espanol',it:'Espanol',zh:'Espanol'},
'Italiano':{fr:'Italiano',de:'Italiano',es:'Italiano',it:'Italiano',zh:'Italiano'},
// Short labels
'iOS':{fr:'iOS',de:'iOS',es:'iOS',it:'iOS',zh:'iOS'},
'Coming soon':{fr:'Bientot',de:'Demnachst',es:'Proximamente',it:'Prossimamente',zh:'即将上线'},
'$9.99':{fr:'9,99$',de:'9,99$',es:'$9.99',it:'9,99$',zh:'$9.99'},
'$25':{fr:'25$',de:'25$',es:'$25',it:'25$',zh:'$25'},
'$69':{fr:'69$',de:'69$',es:'$69',it:'69$',zh:'$69'},
'/mo':{fr:'/mois',de:'/Monat',es:'/mes',it:'/mese',zh:'/月'},
'/qtr':{fr:'/trim',de:'/Quartal',es:'/trim',it:'/trim',zh:'/季'},
'/yr':{fr:'/an',de:'/Jahr',es:'/ano',it:'/anno',zh:'/年'},
'Save 28% with annual billing':{fr:'Economisez 28%/an',de:'28% sparen/Jahr',es:'Ahorra 28%/ano',it:'Risparmia 28%/anno',zh:'年付省 28%'},
'Cancel anytime':{fr:'Annulez a tout moment',de:'Jederzeit kundbar',es:'Cancela cuando quieras',it:'Annulla quando vuoi',zh:'随时取消'},
// Pricing FAQ
'Frequently':{fr:'Questions',de:'Haufig',es:'Preguntas',it:'Domande',zh:'常见'},
'asked questions':{fr:'frequentes',de:'gestellte Fragen',es:'frecuentes',it:'frequenti',zh:'问题解答'},
'Can I switch or cancel my plan anytime?':{fr:'Puis-je changer ou annuler mon plan?',de:'Kann ich wechseln oder kundigen?',es:'Puedo cambiar o cancelar?',it:'Posso cambiare o annullare?',zh:'可以随时切换方案吗？'},
'What happens to my notes if I cancel?':{fr:'Que deviennent mes notes si j\'annule?',de:'Was passiert mit meinen Notizen?',es:'Que pasa con mis notas si cancelo?',it:'Cosa succede alle mie note?',zh:'取消后我的笔记会怎样？'},
'Tags & folders':{fr:'Tags et dossiers',de:'Tags & Ordner',es:'Etiquetas y carpetas',it:'Tag e cartelle',zh:'标签和文件夹'},
// Download page
'Capture your ideas':{fr:'Capturez vos idees',de:'Ideen festhalten',es:'Captura tus ideas',it:'Cattura le idee',zh:'捕捉灵感'},
'anywhere, anytime':{fr:'partout, a tout moment',de:'uberall, jederzeit',es:'en cualquier lugar',it:'ovunque, in ogni momento',zh:'随时随地'},
'Available for iPhone and iPad. Download now and start turning your voice into polished text.':{fr:'Pour iPhone et iPad. Telechargez et transformez votre voix.',de:'Fur iPhone und iPad. Jetzt downloaden.',es:'Para iPhone y iPad. Descarga ahora.',it:'Per iPhone e iPad. Scarica ora.',zh:'适用于 iPhone 和 iPad。立即下载。'},
'Deepgram + GPT refine your words in seconds':{fr:'Deepgram + GPT peaufinent en secondes',de:'Deepgram + GPT verfeinern in Sekunden',es:'Deepgram + GPT refinan en segundos',it:'Deepgram + GPT perfezionano in secondi',zh:'Deepgram + GPT 秒速润色'},
'Folders, tags & full-text search':{fr:'Dossiers, tags et recherche',de:'Ordner, Tags & Volltextsuche',es:'Carpetas, etiquetas y busqueda',it:'Cartelle, tag e ricerca',zh:'文件夹、标签和全文搜索'},
'Get VoiceNote from the App Store. It\'s a free download.':{fr:'Depuis l\'App Store. Gratuit.',de:'Aus dem App Store. Kostenlos.',es:'Desde App Store. Gratis.',it:'Dall\'App Store. Gratis.',zh:'从 App Store 免费下载。'},
'Hit the big record button and start talking. VoiceNote handles the rest.':{fr:'Appuyez et parlez. VoiceNote fait le reste.',de:'Aufnehmen und sprechen. VoiceNote erledigt den Rest.',es:'Pulsa y habla. VoiceNote hace el resto.',it:'Premi e parla. VoiceNote fa il resto.',zh:'点击录音开始说话，VoiceNote 处理剩下的。'},
'Install in':{fr:'Installer en',de:'Installieren in',es:'Instalar en',it:'Installa in',zh:'安装只需'},
'seconds':{fr:'secondes',de:'Sekunden',es:'segundos',it:'secondi',zh:'秒'},
'Minimalist design,':{fr:'Design minimaliste,',de:'Minimalistisch,',es:'Diseno minimo,',it:'Design minimalista,',zh:'极简设计，'},
'maximum productivity':{fr:'productivite maximale',de:'maximale Produktivitat',es:'maxima productividad',it:'massima produttivita',zh:'极致效率'},
'Open your iPhone camera and scan the QR code to download instantly.':{fr:'Ouvrez lappareil photo et scannez.',de:'Kamera offnen und scannen.',es:'Abre la camara y escanea.',it:'Apri la fotocamera e scansiona.',zh:'打开相机扫码下载。'},
'Press the big mic button and start talking':{fr:'Appuyez sur le micro et parlez',de:'Grossen Mikro-Button drucken',es:'Pulsa el microfono y habla',it:'Premi il microfono e parla',zh:'按下麦克风按钮开始说话'},
'Sign up with email or Google. Takes less than 30 seconds.':{fr:'Inscrivez-vous en 30 secondes.',de:'In 30 Sekunden registriert.',es:'Registrate en 30 segundos.',it:'Registrati in 30 secondi.',zh:'邮箱注册，30 秒搞定。'},
'What you':{fr:'Ce dont vous',de:'Was Sie',es:'Lo que',it:'Cosa ti',zh:'你'},
'need':{fr:'avez besoin',de:'brauchen',es:'necesitas',it:'serve',zh:'所需要的'},
'Your polished text is ready. Copy it anywhere, share it, or export it.':{fr:'Votre texte est pret. Copiez, partagez, exportez.',de:'Ihr Text ist fertig. Kopieren, teilen, exportieren.',es:'Tu texto esta listo. Copia, comparte, exporta.',it:'Il tuo testo e pronto. Copia, condividi, esporta.',zh:'文字已就绪。复制、分享或导出。'},
// Contact
'We\'d love to':{fr:'Nous aimerions',de:'Wir wurden gerne',es:'Nos encantaria',it:'Ci piacerebbe',zh:'我们期待'},
'hear from you':{fr:'vous entendre',de:'von Ihnen horen',es:'saber de ti',it:'sentirti',zh:'收到你的消息'},
'Drop us a line anytime. We\'ll get back to you within 24 hours.':{fr:'Ecrivez-nous. Reponse sous 24h.',de:'Schreiben Sie uns. Antwort in 24h.',es:'Escribenos. Respondemos en 24h.',it:'Scrivici. Rispondiamo entro 24h.',zh:'联系我们，24 小时内回复。'},
};

function getLang(){var s=localStorage.getItem(LANG_KEY);return s&&LANGS.indexOf(s)>=0?s:(LANGS.indexOf(navigator.language.slice(0,2))>=0?navigator.language.slice(0,2):'en');}
function setLang(l){if(LANGS.indexOf(l)<0)return;localStorage.setItem(LANG_KEY,l);var p=location.pathname.replace(/^\/(en|fr|de|es|it|zh)\//,'/').replace(/^\//,'');location.href='/'+l+'/'+(p||'');}
function applyLang(){
  var lang=getLang();if(lang==='en')return;
  document.documentElement.lang=lang;
  var i,el,t,tag;
  // Leaf elements
  var all=document.querySelectorAll('p,span,h1,h2,h3,h4,h5,h6,li,a,button,td,th,label,div');
  for(i=0;i<all.length;i++){el=all[i];if(el.children.length>0)continue;if(el.closest&&el.closest('#langSwitcher'))continue;tag=el.tagName;if(tag==='SCRIPT'||tag==='STYLE'||tag==='NOSCRIPT'||tag==='INPUT'||tag==='TEXTAREA')continue;t=el.textContent.trim();if(!t||t.length<2)continue;if(T[t]&&T[t][lang])el.textContent=T[t][lang];}
  // Text nodes for fragmented content
  var walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);
  var nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  for(i=0;i<nodes.length;i++){var node=nodes[i];var p=node.parentElement;if(!p||p.tagName==='SCRIPT'||p.tagName==='STYLE'||p.tagName==='NOSCRIPT')continue;if(p.closest&&p.closest('#langSwitcher'))continue;t=node.textContent.trim();if(!t||t.length<2)continue;if(T[t]&&T[t][lang])node.textContent=T[t][lang];}
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
  if(l!=='en')applyLang();
});
