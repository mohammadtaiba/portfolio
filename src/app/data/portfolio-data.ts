export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links: { demo?: string; repo?: string };
  highlights: string[];
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
    role: 'Junior Full-Stack Developer (Web & AI)',
    location: 'Erfurt, Deutschland',
    email: 'mohammadtaiba55@gmail.com',
    shortPitch:
        'Ich entwickle robuste Web- und Desktop-Anwendungen sowie RAG-Chatbots, die sauber integriert, performant und wartbar im Alltagseinsatz funktionieren.',
    links: {
        github: 'https://github.com/mohammadtaiba',
        linkedin: 'https://www.linkedin.com/in/mohammad-taiba/',
        website: 'https://mohammadtaiba.dev',
    },
    focus: [
        'RAG-Chatbots: LangChain, ChromaDB, Embeddings, Chunking, Prompt Engineering',
        'Full-Stack Web: React/Next.js, Node.js/Express, Java (Spring Boot)',
        'Desktop-Entwicklung: C/C++, Java',
        'APIs & Deployment: Docker, GitLab CI/CD, Logging, Testing',
    ],
};

export const PROJECTS: Project[] = [
  {
    title: 'Praktikum als KI-Entwickler (RAG) fur interne Dokumente',
    subtitle: 'RAG-Chat entwickelt für die Lehrer- und Schülerdatenbank (LUSD) bei der Firma topdev GmbH in Erfurt',
    description: 'Ein RAG-System mit semantischer Suche, Vektordatenbank und LLM-Anbindung fur domanenspezifische Antworten.',
    tags: ['AI', 'RAG', 'ChromaDB', 'Embeddings', 'TypeScript'],
    links: { repo: 'https://github.com/your-handle/rag-chatbot' },
    highlights: [
      'Chunking verbessert (Quellen + Overlap + Grobe)',
      'Embedding-Modell gewechselt und Indexierung optimiert',
      'Dokumente (auch Excel) sauber konvertiert und eingebettet',
    ],
  },
  {
    title: 'Portfolio-Webseite (Angular)',
    subtitle: 'Eigenes Projekt',
    description:
      'Portfolio mit Angular Standalone + Router, modular aufgebaut und datengetrieben (Projekte/Skills/Bücher) inklusive CV-Download und Legal-Seiten.',
    tags: ['Angular', 'Standalone', 'Router', 'TypeScript', 'UI'],
    links: { repo: 'https://github.com/your-handle/portfolio' },
    highlights: [
      'Standalone-Architektur mit Lazy Loading der Seiten (Router loadComponent)',
      'Datenmodell + zentrale Content-Datei für einfache Pflege',
      'Responsives UI, klare Navigation, Impressum & Datenschutz integriert',
    ],
  },
  {
    title: 'Projekt 3 (Platzhalter)',
    subtitle: 'Web / UX',
    description: 'Ersetze das durch dein drittes starkes Projekt (mit Impact und Ergebnissen).',
    tags: ['Web', 'UX', 'Performance'],
    links: { demo: 'https://example.com' },
    highlights: [
      'Problem -> Losung -> Ergebnis (mit Metriken)',
      'Technische Entscheidungen kurz begrunden',
      'Screenshots / GIFs / Demo Link',
    ],
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
  { group: 'Sprachen', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { group: 'Frontend', items: ['Angular', 'HTML', 'CSS', 'Responsive UI', 'Accessibility'] },
  { group: 'AI / LLM', items: ['RAG', 'Embeddings', 'Prompt-Engineering', 'Vector DB (ChromaDB)', 'Retrieval'] },
  { group: 'Tools', items: ['Git', 'Docker', 'Linux', 'REST APIs'] },
];

export const CV = {
  summary: 'Kurzprofil: 3-5 Zeilen uber deinen Fokus und was du lieferst.',
  experience: [
    {
      title: 'Praktikum - Software / AI',
      company: 'Firma (Platzhalter)',
      period: 'MM/YYYY - MM/YYYY',
      bullets: [
        'KI-Chatbot mit RAG-Architektur umgesetzt',
        'Dokumenten-Pipeline (Chunking + Embeddings) verbessert',
        'UI/UX verfeinert und Fehler behoben',
      ],
    },
  ],
  education: [
    {
      title: 'Bachelor of Science in Angewandter Informatik - Medieninformatik',
      school: 'Fachhochschule Erfurt',
      period: '10/2022 - 03/2026',
      bullets: ['Schwerpunkte: Medieninformatik, Web, KI-nahe Themen'],
    },
    {
      title: 'Fachoberschule Informationstechnik',
      school: 'Andreas-Gordon-Schule, Erfurt',
      period: '08/2020 - 07/2022',
      bullets: ['Schwerpunkte: Informationstechnik'],
    },
  ],
};
