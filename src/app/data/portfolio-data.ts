// ============================================================================
// INTERFACES
// ============================================================================

export interface FocusItem {
    title: string;
    subtitle?: string;
    bullets: string[];
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    highlights: string[];
    demo?: string;
    repo?: string;
    videoUrl?: string;
    imageUrl?: string;
    archiUrl?: string;
    siteMapUrl?: string;
    flussdiagrammUrl?: string;
    erModellUrl?: string;
}

export interface Book {
    title: string;
    author?: string;
    takeaways: string[];
    appliedIn?: string;
}

export interface SkillGroup {
    group: string;
    items: string[];
}

// ============================================================================
// PROFIL & FOKUS
// ============================================================================

/**
 * Profilseite (Home):
 * - subtitle: Lösung für die aufgelisteten Probleme
 * - bullets: Herausforderungen und Probleme, die gelöst werden
 */
export const PROFILE = {
    name: 'Mohammad Taiba',
    role: 'AI Engineer │ Full-Stack Developer',
    location: 'Erfurt, Deutschland',
    email: 'mohammadtaiba55@gmail.com',
    photoUrl: 'assets/profile.png',
    pitchTags: ['Webanwendungen', 'RAG-Systeme', 'Automatisierung', 'KI-Webanwendungen', 'LLMs'],
    pitchDetail:
        'Mein Fokus liegt auf modularer Architektur, sauberen Datenpipelines, skalierbarer Backend-Entwicklung und produktionsreifer Integration in bestehende Systeme.',
    links: {
        github: 'https://github.com/mohammadtaiba',
        linkedin: 'https://www.linkedin.com/in/mohammad-taiba',
        website: 'https://mohammadtaiba.dev',
    },
    focus: [
        {
            title: 'KI-gestützte Anwendungen',
            subtitle:
                'Integration von LLMs, Automatisierung und intelligenter Datenverarbeitung in moderne Webanwendungen.',
            bullets: [],
        },
        {
            title: 'AI Agents & Automatisierung',
            subtitle:
                'Entwicklung strukturierter Workflows mit Tool-Nutzung, API-Integrationen und menschlicher Kontrolle.',
            bullets: [],
        },
        {
            title: 'RAG & Wissenssysteme',
            subtitle:
                'Aufbereitung, Suche und Nutzung verteilter Informationen aus Dokumenten, Webseiten und internen Quellen.',
            bullets: [],
        },
        {
            title: 'Moderne Webanwendungen',
            subtitle:
                'Entwicklung produktionsnaher Webanwendungen mit Backend-Architektur, Rollen- und Rechtesystemen, APIs, Logging und skalierbarer Umsetzung.',
            bullets: [],
        },
    ] as FocusItem[],
};

// ============================================================================
// PROJEKTE
// ============================================================================

/** Webprojekte: Portfolio, Dashboards, Shops etc. */
export const WEBSITE_PROJECTS: Project[] = [
    {
        title: 'Portfolio │ Eigenes Projekt',
        description:
            'Professionelles Portfolio zur Präsentation von Projekten, Skills, Büchern und Lebenslauf.',
        tags: ['Angular', 'TypeScript', 'CSS', 'HTML', 'cloudflare'],
        highlights: [
            'Portfolio als Angular SPA mit Standalone-Komponenten und Router umgesetzt',
            'Routing-Struktur mit Lazy Loading pro Seite via Router `loadComponent` implementiert',
            'Datenmodell für Projekte/Skills/Bücher definiert und zentral gepflegt',
            'Projektübersicht mit Suche und Tag-Filter implementiert',
            'Responsives Layout, klare Navigation (Desktop + Mobile Menü)',
        ],
        demo: 'https://mohammad-taiba.de/',
        imageUrl: 'assets/projects/portfolio.png',
    },
    {
        title: 'Finance Dashboard │ FH-Projekt (selbstständig)',
        description:
            'Entwicklung einer Finanzverwaltungsanwendung, mit der Nutzer Transaktionen, Produkte und wichtige Leistungskennzahlen (KPIs) in einer modernen Weblösung mit Frontend und Backend verwalten können.',
        tags: [
            'MERN (MongoDB, Express, React, Node.js)',
            'GraphQL API',
            'RESTful API',
            'TypeScript',
            'Docker',
        ],
        highlights: [
            'Dashboard für KPIs, Produkte und Transaktionen mit Tabellen + Diagrammen umgesetzt',
            'REST Endpoints (/kpi, /product, /transaction) + GraphQL API für Transaktionen integriert',
            'Swagger UI /api-docs inkl. swagger-jsdoc Route-Annotierungen',
            'Data Layer mit MongoDB + Seed-Daten für reproduzierbare Demos',
            'Frontend: RTK Query für REST + Apollo Client für GraphQL (Queries/Mutations)',
        ],
        repo: 'https://github.com/mohammadtaiba/indexlive',
        imageUrl: 'assets/projects/indexlive.png',
        archiUrl: 'assets/projects/Architektur_indexlive.png',
    },
    {
        title: 'Fahrzeugverkauf & -vermietung │ FH-Teamprojekt',
        description: 'Backend für einen Autohandel mit Verkauf und Vermietung.',
        tags: [
            'Java',
            'Jakarta EE',
            'JPA/Hibernate',
            'H2',
            'JUnit',
            'OpenAPI',
            'RESTful API',
            'Docker',
        ],
        highlights: [
            'Backend-Schnittstellen für Kunden und Verträge umgesetzt.',
            'Kernfunktionen wie Anlegen, Ändern, Löschen und Filtern integriert.',
            'Datenhaltung stabil umgesetzt und für Demos/Tests schnell startbar gemacht.',
            'Anwendung containerisiert  und automatisiert bereitgestellt.',
            'Automatisierte Tests für zentrale Ressourcen mit JUnit und JPA',
        ],
        repo: 'https://github.com/mohammadtaiba/03_autoverwaltung',
        imageUrl: 'assets/projects/carhub360.png',
    },
    {
        title: 'Data‑Science-Projekt │ FH-Projekt (selbstständig)',
        description:
            'Das Projekt verfolgt das Ziel, das Preisverhalten und die Volatilität von Bitcoin im Vergleich zu Gold zu analysieren, um Rückschlüsse auf Stabilität, Risiko und Anlageverhalten zu ziehen.',
        tags: [
            'Python',
            'Jupyter',
            'Pandas',
            'NumPy',
            'Matplotlib',
            'Seaborn',
            'Scikit-learn',
            'Technical Analysis',
            'MkDocs',
        ],
        highlights: [
            'CRISP‑DM-basierte Analyse (Volatilität, Risiko, Muster) für BTC vs XAU',
            'Bewertung von Marktverhalten mithilfe technischer Indikatoren (Moving Averages, RSI, MACD, u.a.)',
            'Deskriptive Analyse und analytische Untersuchung ',
            'Statistische Hypothesentests',
            'Visualisierung von Mustern, Preisverläufen und technischen Signalen',
            'Dokumentations-Website mit MkDocs Material inkl. Export-Pipeline',
        ],
        repo: 'https://github.com/mohammadtaiba/DataVision',
        imageUrl: 'assets/projects/datavision.png',
    },
    {
        title: 'Online‑Shop für PC‑Games │ FH-Teamprojekt',
        description: 'Entwicklung eines Online-Shops für Videospiele, spezialisiert auf PC-Spiele.',
        tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'MVC'],
        highlights: [
            'Wunschliste, Warenkorb und Einkaufsverlauf',
            'Spiele hinzufügen, sortieren/filtern nach Kategorie',
            'Suchfunktion nach Name, Platform und Beschreibung',
            'Checkout mit verschiedenen Bezahloptionen',
            'Serverseitige Controller/Model-Struktur (MVC-orientiert) für Shop-Use-Cases',
            'Benutzerliste mit Löschfunktion',
            'UI: klare Navigation und Shop-Struktur als funktionsfähiger Prototype',
        ],
        repo: 'https://github.com/mohammadtaiba/Games-galaxy-store',
        imageUrl: 'assets/projects/games_galaxy.png',
        siteMapUrl: 'assets/projects/Sitemap_games_galaxy.png',
        erModellUrl: 'assets/projects/ER-Modell_games_galaxy.png',
        flussdiagrammUrl: 'assets/projects/Flussdiagramm_games_galaxy.png',
    },
];

/** KI-Projekte: RAG-Chatbots und LLM-basierte Systeme */
export const KI_PROJECTS: Project[] = [
    {
        title: 'Intelligenter Behörden-Chatbot │ topdev GmbH, Erfurt',
        description:
            'Entwicklung eines RAG-Chatbots für Schulministerium Hessen, der interne Informationen per semantischer Suche zuverlässig beantwortet.',
        tags: [
            'Python',
            'LangChain',
            'PyTorch',
            'Streamlit',
            'ChromaDB',
            'MS Azure',
            'MCP',
            'API',
            'Docker',
            'Monitoring',
            'Auth',
            'Tests',
        ],
        highlights: [
            'Aufbereitung von LLM-Trainingsdaten, Evaluation von Modellanpassungen',
            'Umsetzung von Chunking, Embeddings, Vektordatenbank-Anbindung und Retrieval-Strategien',
            'Aufbau automatisierter Pipelines ',
            'Zugriffsschutz durch Authentifizierung',
            'Konzeption MCP-basierter Agentic-AI-Workflows mit Microsoft Azure',
            'Interaktive Streamlit-Weboberfläche umgesetzt',
            'Qualitätssicherung durch Prompt Engineering, Tests, Logging, Monitoring',

        ],
        demo: 'https://lusd-ki-bot.topdev.de/',
        imageUrl: 'assets/projects/lusd_chatbot.png',
    },
    {
        title: 'Nachhaltigkeitsassistent│ Bachelorarbeit',
        description:
            'GPT-basierter RAG-Chatbot zur Analyse von Nachhaltigkeitsberichten – automatisierte Dokumentenaufnahme und aktuelle Vektor-Wissensbasis für präzises Retrieval.',
        tags: [
            'Python',
            'LangChain',
            'Streamlit (UI)',
            'ChromaDB',
            'Evaluation',
            'Pipeline-Automatisierung',
            'Web Scraping',
        ],
        highlights: [
            'Automatisierte Ingestion aus URLs und Uploads mit Umwandlung nach Markdown und Bereinigung.',
            'Inhalte werden sinnvoll in Abschnitte geteilt.',
            'Abschnitte werden vektorisiert und in einer stets aktuellen Wissensdatenbank gespeichert.',
            'Antwortqualität durch verschiedenen Strategien (Retrieval, Prompt, Chunking ...) verbessert.',
            'Interaktive Weboberfläche mit Streamlit umgesetzt.',
        ],
        imageUrl: 'assets/projects/bachelor_chatbot.png',
        archiUrl: 'assets/projects/bachelor_architektur.png',
    },
];

// ============================================================================
// BÜCHER & LEARNINGS
// ============================================================================

/** Fachliteratur mit praktischen Erkenntnissen und Anwendungsbezug */
export const BOOKS: Book[] = [
    {
        title: 'Full Stack Development with Spring Boot 3 and React',
        author: 'Juha Hinkula',
        takeaways: [
            'Aufbau moderner Full-Stack-Anwendungen mit Spring Boot Backend und React Frontend',
            'Entwicklung und Nutzung von REST APIs mit JPA, Hibernate und relationalen Datenbanken',
            'Einsatz moderner React-Techniken (Hooks, TypeScript, API-Integration)',
        ],
        appliedIn: 'Verständnis für moderne Full-Stack-Architektur mit Spring Boot und React vertieft.',
    },
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
        appliedIn:
            'Schnelle Prototypen, strukturierte Iterationen und messbare Verbesserungen in Projekten',
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
        appliedIn:
            'RAG-Chatbot: Retrieval-Tuning, Logging, stabile Antwortpfade und Halluzinationsreduktion',
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

// ============================================================================
// FÄHIGKEITEN
// ============================================================================

/** Gruppierte Skill-Kategorien: Sprachen, Frameworks, Tools, Soft Skills */
export const SKILL_GROUPS: SkillGroup[] = [
    {
        group: 'Programmiersprachen',
        items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C#', 'C/C++', 'PHP'],
    },

    { group: 'Frontend', items: ['Angular', 'React', 'Next.js', 'HTML', 'CSS'] },
    { group: 'Backend', items: ['Node.js', 'Express', 'Spring Boot', 'REST APIs'] },

    { group: 'Datenbanken', items: ['MySQL', 'MariaDB', 'MongoDB', 'ChromaDB'] },
    {
        group: 'KI & Automatisierung',
        items: ['RAG', 'LangChain', 'PyTorch', 'MCP', 'Prompt Engineering', 'Streamlit', 'Low-Code'],
    },

    { group: 'Tools', items: ['Git', 'Docker', 'GitHub CI/CD', 'Jira', 'MS Office', 'MS Azure'] },
    {
        group: 'Softskills',
        items: [
            'Eigenverantwortung',
            'Proaktivität',
            'Problemlösung',
            'Selbstorganisation',
            'Teamarbeit',
        ],
    },
    {
        group: 'Sprachen',
        items: ['Deutsch (C1, fließend)', 'Englisch (B2)', 'Arabisch (Muttersprache)'],
    },
];

// ============================================================================
// LEBENSLAUF
// ============================================================================

/**
 * CV-Daten: Bildung und berufliche Erfahrung
 * - education: Schulausbildung und Studium
 * - experience: Praktika, Hilfskrafttätigkeiten und relevante Berufserfahrung
 */
export const CV = {
    education: [
        {
            title: 'B.Sc. Angewandte Informatik',
            school: 'Fachhochschule Erfurt',
            period: '10/2022 – 03/2026',
            bullets: [
                { label: 'Vertiefungsrichtung', text: 'Medieninformatik' },
                {
                    label: 'Bachelorarbeit',
                    text: 'Entwicklung eines RAG-Systems mit automatisierter Ingestion- und Aktualisierungspipeline',
                },
                {
                    label: 'Praktikum',
                    text: 'Entwicklung eines RAG-Systems mit UI, automatisierter Ingestion-/Aktualisierungspipeline und Testautomatisierung (topdev GmbH)',
                },
            ],
        },
        {
            title: 'Fachoberschule Informationstechnik',
            school: 'Andreas-Gordon-Schule, Erfurt',
            period: '08/2020 – 07/2022',
            bullets: [
                { label: 'Schwerpunkt', text: 'Informationstechnik' },
                {
                    label: 'Praktikum',
                    text: 'Mitarbeit an IT-Projekten, Tests, Support und technischer Dokumentation (Bechtle IT-Systemhaus)',
                },
            ],
        },
    ],

    experience: [
        {
            title: 'Praktikum als AI Engineer',
            company: 'topdev GmbH, Erfurt',
            period: '10/2025 – 02/2026',
            bullets: [
                {
                    label: 'Entwicklung',
                    text: 'RAG-Chatbot für Lehrer- und Schülerdatenbank (LUSD) zur Beantwortung von Fach- und Anwenderfragen',
                },
                {
                    label: 'RAG-Pipeline',
                    text: 'Automatisierte Ingestion von Word-, Excel-, PDF- und HTML-Quellen inkl. Konvertierung nach Markdown',
                },
                {
                    label: 'Retrieval',
                    text: 'Chunking/Embeddings und Aufbau einer Vektordatenbank für semantische Suche',
                },
                {
                    label: 'Qualitätssicherung',
                    text: 'Prompt-Engineering sowie Logging/Monitoring und Evaluation (Testfälle, Review-Sets, Testautomatisierung) zur Ergebnisprüfung',
                },
            ],
        },
        {
            title: 'Studentische Hilfskraft im Sachverständigenbüro',
            company: 'Sachverständigenbüro Torsten Peuckert, Erfurt',
            period: '09/2024 – 12/2024',
            bullets: [
                {
                    label: 'Organisation',
                    text: 'Unterstützung bei administrativen und organisatorischen Aufgaben im Tagesgeschäft',
                },
                {
                    label: 'Dokumente',
                    text: 'Dokumentenmanagement und strukturierte Ablage von Unterlagen',
                },
                {
                    label: 'Koordination',
                    text: 'Termin- und Auftragskoordination sowie Datenpflege',
                },
            ],
        },
        {
            title: 'Studentische Hilfskraft im Service Order Desk',
            company: 'Carrier Refrigeration eServices GmbH, Erfurt',
            period: '09/2023 – 09/2024',
            bullets: [
                {
                    label: 'Datenmanagement',
                    text: 'Erfassung und strukturierte Aufbereitung von Kunden- und Auftragsdaten',
                },
                {
                    label: 'SAP MM',
                    text: 'Verwaltung von Bestellanforderungen im SAP R/3 MM-Modul',
                },
                {
                    label: 'Auftragsabwicklung',
                    text: 'Fristgerechte Abwicklung und buchhalterische Verbuchung von Aufträgen',
                },
            ],
        },
        {
            title: 'Aushilfe als IT-Administrator',
            company: 'Beck + Heun GmbH, Erfurt',
            period: '07/2021 – 08/2021',
            bullets: [
                {
                    label: 'Automatisierung',
                    text: 'Automatisierung administrativer Prozesse mittels PowerShell-Skripten',
                },
                {
                    label: 'Deployments',
                    text: 'Unterstützung bei Planung und Durchführung von Software-Deployments',
                },
                {
                    label: 'Troubleshooting',
                    text: 'Systematische Fehleranalyse und technisches Troubleshooting',
                },
            ],
        },
        {
            title: 'Praktikum als Systemadministrator',
            company: 'Bechtle IT-Systemhaus Weimar',
            period: '08/2020 – 07/2021',
            bullets: [
                {
                    label: 'Rollouts',
                    text: 'Mitwirkung bei IT-Projekten und Rollouts inkl. technischer Umsetzung',
                },
                {
                    label: 'Testing',
                    text: 'Durchführung von Tests und Sicherstellung der Qualitätsstandards',
                },
                {
                    label: 'Support & Doku',
                    text: 'Endanwender-Support und Erstellung technischer Dokumentationen',
                },
            ],
        },
    ],
};
