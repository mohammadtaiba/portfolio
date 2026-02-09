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
  name: 'ABU OMAR',
  role: 'AI / Full-Stack Developer',
  location: 'Thüringen, Deutschland',
  email: 'you@example.com',
  shortPitch: 'Ich baue robuste Web-Apps und KI-Chatbots, die in echten Workflows funktionieren - klar, schnell und wartbar.',
  links: {
    github: 'https://github.com/your-handle',
    linkedin: 'https://www.linkedin.com/in/your-handle/',
    website: 'https://your-domain.dev',
  },
  focus: [
    'RAG-Chatbots (Embedding, Chunking, Vector DB)',
    'Angular / TypeScript Frontend',
    'Saubere UI/UX und klare Architektur',
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
  { group: 'AI / LLM', items: ['RAG', 'Embeddings', 'Prompting', 'Vector DB (z. B. ChromaDB)'] },
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
      title: 'B.Sc. Angewandte Informatik (Medieninformatik)',
      school: 'Hochschule (Platzhalter)',
      period: 'MM/YYYY - MM/YYYY',
      bullets: ['Schwerpunkte: Medieninformatik, Web, KI-nahe Themen'],
    },
  ],
};
