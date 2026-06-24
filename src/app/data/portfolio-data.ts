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
    role: 'Full-Stack Softwareentwickler',
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
            title: 'Webanwendungen',
            subtitle:
                'Entwicklung praxisnaher Webanwendungen, die Daten übersichtlich erfassen, verwalten und für Nutzer verständlich darstellen.',
            bullets: [],
        },
        {
            title: 'Backend & APIs',
            subtitle:
                'Umsetzung von Anwendungslogik, Schnittstellen, Datenverarbeitung und rollenbasierten Funktionen.',
            bullets: [],
        },
        {
            title: 'Datenbanken',
            subtitle:
                'Modellierung, Speicherung und Abfrage von Daten für Geschäftsprozesse und Webanwendungen.',
            bullets: [],
        },
        {
            title: 'KI-gestützte Funktionen',
            subtitle:
                'Integration von dokumentenbasierter Suche, automatisierter Analyse und unterstützenden Assistenzfunktionen.',
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
        title: 'EnergyFlow-Dashboard │ Eigenes Projekt · In Entwicklung',
        description:
            'Webanwendung zur Erfassung, Verwaltung und Auswertung von Energieverbrauchsdaten für Standorte, Energiezähler, Messwerte und Grenzwerte.',
        tags: [
            'Vue 3',
            'TypeScript',
            'Java 21',
            'Spring Boot',
            'Spring Data JPA',
            'RESTful API',
            'PostgreSQL',
            'Docker',
            'CI/CD'
        ],
        highlights: [
            'Vue-Frontend für die Standortverwaltung mit angebundener Spring-Boot-REST-API umgesetzt',
            'CRUD-Funktionen für Standorte implementiert: Anzeigen, Abrufen, Erstellen, Bearbeiten und Löschen',
            'Spring-Boot-Backend mit klarer Layer-Struktur aus Controller, Service, Repository, Entity und DTO aufgebaut',
            'PostgreSQL-Datenbank über Docker Compose eingerichtet und mit dem Backend verbunden',
            'REST-Endpunkte für Standortdaten entwickelt und getestet',
            'Grundstruktur für Energiezähler, Messwerte, Grenzwertlogik und Dashboard-Auswertungen vorbereitet',
            'Lokales Entwicklungssetup mit getrenntem Frontend, Backend und Datenbank dokumentiert',
        ],
        repo: 'https://github.com/mohammadtaiba/EnergyFlow-Dashboard',
        imageUrl: 'assets/projects/site-management.png',
    },
    {
        title: 'Prüfprotokoll-App │ Eigenes Projekt',
        description:
            'Fullstack-Anwendung zur Erstellung, Anzeige, Bearbeitung und Verwaltung von Prüfprotokollen mit moderner Weboberfläche und REST-API.',
        tags: [
            'Angular',
            '.NET',
            'C#',
            'TypeScript',
            'HTML',
            'CSS',
            'Entity Framework Core',
            'PostgreSQL',
            'Unit Tests',
            'Docker',
            'CI/CD',
        ],
        highlights: [
            'Angular-App mit Routing für Liste, Detailansicht sowie Erstellen/Bearbeiten von Prüfprotokollen umgesetzt',
            'REST-API mit ASP.NET Core Web API für CRUD-Endpunkte entwickelt',
            'Klare Backend-Struktur mit Controller, Service und Repository implementiert',
            'SQLite-Datenbank über Entity Framework Core angebunden und Seed-Daten integriert',
            'Formularvalidierung für Pflichtfelder und Statusauswahl umgesetzt',
            'Responsives, schlichtes UI ohne externe UI-Bibliothek erstellt',
            'Einfache Unit-Tests für Backend-Service und Angular-Formularvalidierung ergänzt',
        ],
        repo: 'https://github.com/mohammadtaiba/mini-pruefprotokoll-app',
        imageUrl: 'assets/projects/pruefprotokoll-app.png',
    },
    {
        title: 'Portfolio │ Eigenes Projekt',
        description:
            'Professionelles Portfolio als Angular SPA zur Präsentation von eigenen Projekten und Skills.',
        tags: ['Angular', 'TypeScript', 'CSS', 'HTML', 'cloudflare', 'CI/CD'],
        highlights: [
            'Portfolio als Angular SPA mit Standalone-Komponenten und Router umgesetzt',
            'Routing-Struktur mit Lazy Loading pro Seite via Router `loadComponent` implementiert',
            'Datenmodell für Projekte/Skills/Bücher definiert und zentral gepflegt',
            'Projektübersicht mit Suche und Tag-Filter implementiert',
            'Responsives Layout, klare Navigation (Desktop + Mobile Menü)',
        ],
        repo: 'https://github.com/mohammadtaiba/portfolio',
        demo: 'https://mohammad-taiba.de/',
        imageUrl: 'assets/projects/portfolio.png',
    },
    {
        title: 'Finance Dashboard │ FH-Projekt',
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
        title: 'Fahrzeugverkauf & -vermietung │ FH-Projekt',
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
        title: 'Data‑Science-Projekt │ FH-Projekt',
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
        title: 'Online‑Shop für PC‑Games │ FH-Projekt',
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
        title: 'documentsAI.APP │ Eigenes Projekt · In Entwicklung',
        description:
            'Eine produktionsnahe RAG-SaaS-Chatbot-Plattform für sicheres Dokumenten-Q&A.',
        tags: [
            'Python',
            'LangChain',
            'Streamlit',
            'ChromaDB',
            'API',
            'FastAPI',
            'Docker',
            'Monitoring',
            'OAuth2',
            'Tests',
            'Cloudflare',
        ],
        highlights: [
            'Benutzerfreundliche KI-Plattform für sicheres Chatten mit eigenen Dokumenten.',
            'Nutzer erstellen unbegrenzte Arbeitsbereiche, laden unbegrenzt Dateien hoch und chatten gezielt mit ihrem Wissen.',
            'Einfaches Rollen- und Zugriffsmanagement für den Einsatz im Unternehmen.',
            'DSGVO-orientierte Datenverarbeitung für den professionellen Einsatz.',
            'Spart Zeit durch schnelle, präzise Antworten auf interne Inhalte.',
            'Stabile, skalierbare Architektur.',
        ],
        videoUrl: 'assets/projects/documentsAI-App.mp4',
    },
    {
        title: 'Intelligenter Behörden-Chatbot │ Projekt für topdev GmbH',
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
            'FastAPI',
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
        title: 'Bachelorarbeit │ FH-Projekt',
        description:
            'GPT-basierter RAG-Chatbot zur Analyse von Nachhaltigkeitsberichten, der sein Wissen automatisch aktualisiert, indexiert und bereitstellt.',
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
        repo: 'https://github.com/mohammadtaiba/bachelorarbeit-rag-app',
        imageUrl: 'assets/projects/bachelor_chatbot.png',
        archiUrl: 'assets/projects/bachelor_architektur.png',
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
