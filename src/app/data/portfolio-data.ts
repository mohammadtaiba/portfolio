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
    role: 'Junior Full-Stack Developer (RAG-Chatbots)',
    location: 'Erfurt, Deutschland',
    email: 'mohammadtaiba55@gmail.com',
    shortPitch:
        'Ich baue robuste Web- und Desktop-Apps sowie KI-Chatbots, die in echten Workflows funktionieren - klar, schnell und wartbar.',
    links: {
        github: 'https://github.com/mohammadtaiba',
        linkedin: 'https://www.linkedin.com/in/mohammad-taiba/',
        website: 'https://mohammadtaiba.dev',
    },

    focus: [
        'RAG-Chatbots (LangChain, Embeddings, Chunking, ChromaDB, Prompt Engineering)',
        'Full-Stack Web (React/Next.js, Node.js/Express, Java Spring Boot)',
        'Desktop-Apps (C/C++, Java)',
        'APIs & Deployment (Docker, Git/GitLab CI/CD, Logging/Testing)',
    ],
};

export const PROJECTS: Project[] = [
  {
    title: 'KI-Chatbot (RAG) fur interne Dokumente',
    subtitle: 'Bachelorarbeit / Praktikum',
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
    title: 'Portfolio Website (Angular)',
    subtitle: 'Dieses Projekt',
    description: 'Recruiter-freundliches Portfolio mit Case Studies, Skills, Bucher und CV Download.',
    tags: ['Angular', 'Standalone', 'Router', 'UI'],
    links: { repo: 'https://github.com/your-handle/portfolio' },
    highlights: [
      'Klare Navigation, schnelle Performance, responsives Design',
      'Saubere Datenstruktur fur Projekte / Skills / Bucher',
      'Impressum und Datenschutz als Seiten integriert',
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
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    takeaways: [
      'Trade-offs: Konsistenz, Verfugbarkeit, Latenz',
      'Denken in Workflows, nicht nur in Features',
    ],
    appliedIn: 'Architekturentscheidungen bei Chatbot-Systemen (Indexierung, Latenz, Zuverlassigkeit)',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    takeaways: [
      'Kleine Funktionen, klare Namen, weniger Komplexitat',
      'Tests und Refactoring als Routine',
    ],
    appliedIn: 'Strukturierung von Komponenten und Services, lesbarer Code fur Teams',
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
