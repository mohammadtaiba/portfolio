export type FocusItem = {
    title: string;
    subtitle?: string;
    bullets: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  demo?: string;
  repo?: string;
  imageUrl?: string;
  archiUrl?: string;
};

export type Book = {
  title: string;
  author?: string;
  takeaways: string[];
  appliedIn?: string;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export const PROFILE = {
    name: 'Mohammad Taiba',
    role: 'Junior Softwareentwickler (Full-Stack)',
    location: 'Erfurt, Deutschland',
    email: 'mohammadtaiba55@gmail.com',
    photoUrl: 'assets/profile.jpg',
    shortPitch:
        'Ich entwickle skalierbare Web- und Desktop-Anwendungen und integriere RAG-Chatbots in produktive Workflows – mit Fokus auf sauberer Architektur, Performance und Wartbarkeit.',
    links: {
        github: 'https://github.com/mohammadtaiba',
        linkedin: 'https://www.linkedin.com/in/mohammad-taiba/',
        website: 'https://mohammadtaiba.dev',
    },
    focus: <FocusItem[]>[
        {
            title: 'Webanwendungen',
            subtitle: 'Moderne Frontends und Full-Stack-Webapps mit sauberer UI und robuster Architektur.',
            bullets: [
                'MERN-Full-Stack: MongoDB, Express, React, Node.js',
                'Framework: Angular',
                'Webentwicklung: PHP, JavaScript, MySQL, HTML & CSS',
            ],
        },
        {
            title: 'KI-Agents',
            subtitle: 'RAG-Chatbots für lokale Wissenssuche und domänenspezifische Q&A (Retrieval-Augmented Generation).',
            bullets: [
                'Python',
                'LangChain',
                'ChromaDB',
                'Streamlit',
            ],
        },
        {
            title: 'Backend-Services',
            subtitle: 'Service-Entwicklung und API-Integration mit Fokus auf Stabilität, Wartbarkeit und Erweiterbarkeit.',
            bullets: [
                'Java · Spring Boot',
                'REST-APIs',
                'Docker',
            ],
        },
    ],
};

export const PROJECTS: Project[] = [
    {
        title: 'RAG-Chatbot │ topdev GmbH, Erufrt',
        description: 'KI-Agent, der internes Wissen per semantischer Suche zuverlässig als Antworten bereitstellt.',
        tags: ['Python', 'Streamlit (UI)', 'ChromaDB',],
        highlights: [
          'RAG-Chatbot für die LUSD (Lehrer- und Schülerdatenbank) zur Beantwortung von Fach- und Anwenderfragen entwickelt',
          'Interaktive Weboberfläche mit Streamlit umgesetzt',
          'Ingestion- und Update-Pipeline auf Basis von LangChain automatisiert',
          'Dokumentquellen (Word, Excel, PDF, HTML) konsolidiert, nach Markdown überführt und in einer Vektordatenbank für Retrieval indexiert',
          'Qualitätssicherung durch automatisierte Tests mit Pytest',
          'Logging und Monitoring zur Nachvollziehbarkeit und Stabilität integriert',
          'Zugriffsschutz über Authentifizierung realisiert',
        ],
        demo: 'https://lusd-ki-bot.topdev.de/',
        imageUrl: 'assets/projects/lusd_chatbot.png',
    },
    {
        title: 'Persönliche Webseite │ Eigenes Projekt',
        description: 'Professionelles Portfolio zur Präsentation von Projekten, Skills, Büchern und Lebenslauf.',
        tags: ['Angular', 'TypeScript', 'CSS', 'HTML'],
        highlights: [
            'Portfolio als Angular SPA mit Standalone-Komponenten und Router umgesetzt',
            'Routing-Struktur mit Lazy Loading pro Seite via Router `loadComponent` implementiert',
            'Datenmodell für Projekte/Skills/Bücher definiert und zentral gepflegt (eine Content-Datei)',
            'Projektübersicht mit Suche und Tag-Filter implementiert',
            'Responsives Layout, klare Navigation (Desktop + Mobile Menü) und konsistentes UI-Styling umgesetzt',
        ],
        demo: 'https://mohammad-taiba.netlify.app/',
        imageUrl: 'assets/projects/portfolio.png',
    }
,
    {
        title: 'RAG-Chatbot │ Bachelorarbeit',
        description: 'Ersetze das durch dein drittes starkes Projekt (mit Impact und Ergebnissen).',
        tags: ['Python', 'Streamlit (UI)', 'ChromaDB',],
        highlights: [
          'Problem -> Losung -> Ergebnis (mit Metriken)',
          'Technische Entscheidungen kurz begrunden',
          'Screenshots / GIFs / Demo Link',
        ],
        imageUrl: 'assets/projects/bachelor_chatbot.png',
        archiUrl: 'assets/projects/bachelor_architektur.png',
    },
];

export const BOOKS: Book[] = [
    {
        title: 'A Philosophy of Software Design',
        author: 'John Ousterhout',
        takeaways: [
            'Komplexität reduzieren durch klare Abstraktionen und stabile Schnittstellen',
            'Information Hiding als Standardprinzip',
            'Deep Modules: hoher Nutzen bei kleiner API-Oberfläche',
        ],
        appliedIn: 'Modularisierung & saubere Schnittstellen',
    },
    {
        title: 'The Clean Coder',
        author: 'Robert C. Martin',
        takeaways: [
            'Professionalität: verlässlich liefern, klar kommunizieren, Verantwortung übernehmen',
            'Realistische Schätzungen und sauberes Task-Splitting',
            'Tests und Refactoring als Routine',
        ],
        appliedIn: 'Wartbarer Code, stabile Releases, klare Arbeitsweise im Projektalltag',
    },
    {
        title: 'Lean Startup',
        author: 'Eric Ries',
        takeaways: [
            'Build–Measure–Learn: iterativ liefern und anhand echter Nutzung verbessern',
            'MVP: Risiken früh testen statt spät optimieren',
            'Fokus auf messbare Ergebnisse statt Vanity Metrics',
        ],
        appliedIn: 'Schnelle Prototypen, strukturierte Iterationen und messbare Verbesserungen in Projekten',
    },
    {
        title: 'Mastering CI/CD',
        author: 'Tom Waller',
        takeaways: [
            'Automatisierte Pipelines: Build, Test, Deploy als Standardprozess',
            'Reproduzierbare Builds durch Versionierung und Artefakte',
            'Qualitätssicherung durch Checks, Logs und Fail-fast',
        ],
        appliedIn: 'GitLab CI/CD + Docker: reproduzierbare Builds, Tests und Deployments',
    },
    {
        title: 'Building LLMs for Production',
        author: 'Louis-François Bouchard',
        takeaways: [
            'Produktionsanforderungen: Latenz, Kosten, Skalierung, Zuverlässigkeit',
            'Monitoring & Evaluation: Qualität messbar machen (Logs, Feedback-Loops)',
            'Guardrails: robuste Fehlerpfade und Fallback-Strategien',
        ],
        appliedIn: 'RAG-Chatbot: Retrieval-Tuning, Logging, stabile Antwortpfade und Halluzinationsreduktion',
    },
    {
        title: 'AI Prompt Engineering Bible',
        author: 'Tomasz Dylik',
        takeaways: [
            'Prompt-Patterns: Kontext, Constraints und Output-Formate konsistent definieren',
            'Few-shot Beispiele für stabilere Ergebnisse',
            'Prompts systematisch testen statt “nach Gefühl”',
        ],
        appliedIn: 'Prompt-Templates, Relevanzprüfung und „No-Answer“-Fallback im RAG-System',
    },
];

export const SKILL_GROUPS: SkillGroup[] = [
    { group: 'Programmiersprachen', items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C#', 'C/C++', 'PHP'] },

    { group: 'Frontend', items: ['Angular', 'React', 'Next.js', 'HTML', 'CSS'] },
    { group: 'Backend', items: ['Node.js', 'Express', 'Spring Boot', 'REST APIs'] },

    { group: 'Datenbanken', items: ['MySQL', 'MariaDB', 'MongoDB', 'ChromaDB'] },
    { group: 'KI & LLM', items: ['RAG', 'LangChain', 'Prompt Engineering', 'Streamlit'] },

    { group: 'Tools', items: ['Git', 'Docker', 'GitLab CI/CD', 'Jira', 'MS Office'] },
    { group: 'Softskills', items: ['Eigenverantwortung', 'Proaktivität', 'Problemlösung', 'Selbstorganisation', 'Teamarbeit'] },
    { group: 'Sprachen', items: ['Deutsch (C1, fließend)', 'Englisch (B2)', 'Arabisch (Muttersprache)'] },
];

export const CV = {
    education: [
        {
            title: 'B.Sc. Angewandte Informatik',
            school: 'Fachhochschule Erfurt',
            period: '10/2022 – 03/2026',
            bullets: [
                { label: 'Vertiefungsrichtung', text: 'Medieninformatik' },
                { label: 'Bachelorarbeit', text: 'Entwicklung eines RAG-Systems mit automatisierter Ingestion- und Aktualisierungspipeline' },
                { label: 'Praktikum', text: 'Entwicklung eines RAG-Systems mit UI, automatisierter Ingestion-/Aktualisierungspipeline und Testautomatisierung (topdev GmbH)' },
            ],
        },
        {
            title: 'Fachoberschule Informationstechnik',
            school: 'Andreas-Gordon-Schule, Erfurt',
            period: '08/2020 – 07/2022',
            bullets: [
                { label: 'Schwerpunkt', text: 'Informationstechnik' },
                { label: 'Praktikum', text: 'Mitarbeit an IT-Projekten, Tests, Support und technischer Dokumentation (Bechtle IT-Systemhaus)' },
            ],
        },
    ],

    experience: [
        {
            title: 'Praktikum als KI-Entwickler',
            company: 'topdev GmbH, Erfurt',
            period: '10/2025 – 02/2026',
            bullets: [
                { label: 'Entwicklung', text: 'RAG-Chatbot für Lehrer- und Schülerdatenbank (LUSD) zur Beantwortung von Fach- und Anwenderfragen' },
                { label: 'RAG-Pipeline', text: 'Automatisierte Ingestion von Word-, Excel-, PDF- und HTML-Quellen inkl. Konvertierung nach Markdown' },
                { label: 'Retrieval', text: 'Chunking/Embeddings und Aufbau einer Vektordatenbank für semantische Suche' },
                { label: 'Qualitätssicherung', text: 'Prompt-Engineering sowie Logging/Monitoring und Evaluation (Testfälle, Review-Sets, Testautomatisierung) zur Ergebnisprüfung' },            ],
        },
        {
            title: 'Studentische Hilfskraft im Sachverständigenbüro',
            company: 'Sachverständigenbüro Torsten Peuckert, Erfurt',
            period: '09/2024 – 12/2024',
            bullets: [
                { label: 'Organisation', text: 'Unterstützung bei administrativen und organisatorischen Aufgaben im Tagesgeschäft' },
                { label: 'Dokumente', text: 'Dokumentenmanagement und strukturierte Ablage von Unterlagen' },
                { label: 'Koordination', text: 'Termin- und Auftragskoordination sowie Datenpflege' },
            ],
        },
        {
            title: 'Studentische Hilfskraft im Service Order Desk',
            company: 'Carrier Refrigeration eServices GmbH, Erfurt',
            period: '09/2023 – 09/2024',
            bullets: [
                { label: 'Datenmanagement', text: 'Erfassung und strukturierte Aufbereitung von Kunden- und Auftragsdaten' },
                { label: 'SAP MM', text: 'Verwaltung von Bestellanforderungen im SAP R/3 MM-Modul' },
                { label: 'Auftragsabwicklung', text: 'Fristgerechte Abwicklung und buchhalterische Verbuchung von Aufträgen' },
            ],
        },
        {
            title: 'Aushilfe als IT-Administrator',
            company: 'Beck + Heun GmbH, Erfurt',
            period: '07/2021 – 08/2021',
            bullets: [
                { label: 'Automatisierung', text: 'Automatisierung administrativer Prozesse mittels PowerShell-Skripten' },
                { label: 'Deployments', text: 'Unterstützung bei Planung und Durchführung von Software-Deployments' },
                { label: 'Troubleshooting', text: 'Systematische Fehleranalyse und technisches Troubleshooting' },
            ],
        },
        {
            title: 'Praktikum als Systemadministrator',
            company: 'Bechtle IT-Systemhaus Weimar',
            period: '08/2020 – 07/2021',
            bullets: [
                { label: 'Rollouts', text: 'Mitwirkung bei IT-Projekten und Rollouts inkl. technischer Umsetzung' },
                { label: 'Testing', text: 'Durchführung von Tests und Sicherstellung der Qualitätsstandards' },
                { label: 'Support & Doku', text: 'Endanwender-Support und Erstellung technischer Dokumentationen' },
            ],
        },
    ],
};
