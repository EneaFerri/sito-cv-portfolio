import type { Localized } from "@/lib/i18n";

export type EducationItem = {
  period: string;
  institution: string;
  degree: Localized;
  description: Localized;
};

export type ExperienceItem = {
  period: string;
  role: Localized;
  company: string;
  location: string;
  description: Localized;
  tags: string[];
};

export type SkillGroup = {
  title: Localized;
  items: string[];
};

export type ProjectItem = {
  title: string;
  description: Localized;
  tags: string[];
  link?: string;
  repo?: string;
};

export const nav: { id: string; label: Localized }[] = [
  { id: "about", label: { it: "Chi sono", en: "About" } },
  { id: "education", label: { it: "Formazione", en: "Education" } },
  { id: "experience", label: { it: "Esperienze", en: "Experience" } },
  { id: "skills", label: { it: "Competenze", en: "Skills" } },
  { id: "projects", label: { it: "Progetti", en: "Projects" } },
  { id: "chess", label: { it: "Scacchi", en: "Chess" } },
  { id: "contact", label: { it: "Contatti", en: "Contact" } },
];

export const hero = {
  name: "Enea Ferri",
  role: {
    it: "Studente di Ingegneria Informatica",
    en: "Computer Engineering Student",
  } satisfies Localized,
  tagline: {
    it: "Studio al Politecnico di Milano e lavoro occasionalmente in ambito AI e Data Analytics. Mi appassionano lo sviluppo software e le soluzioni intelligenti per automatizzare processi.",
    en: "Studying at Politecnico di Milano, currently interning in AI and Data Analytics. Passionate about software development and smart automation.",
  } satisfies Localized,
  location: {
    it: "Milano, Italia",
    en: "Milan, Italy",
  } satisfies Localized,
  ctaPrimary: {
    it: "Scrivimi",
    en: "Get in touch",
  } satisfies Localized,
  ctaSecondary: {
    it: "Guarda le esperienze",
    en: "View experience",
  } satisfies Localized,
};

export const about = {
  title: { it: "Chi sono", en: "About me" } satisfies Localized,
  paragraphs: [
    {
      it: "Sono uno studente di Ingegneria Informatica al Politecnico di Milano, dove dopo la laurea triennale sto proseguendo con la magistrale in Computer Science and Engineering, indirizzo Cybersecurity. Il mio percorso è partito da studi tecnico-commerciali e si è poi orientato verso lo sviluppo software, l'AI, l'analisi dei dati e la sicurezza informatica.",
      en: "I'm a Computer Engineering student at Politecnico di Milano, currently pursuing a Master's in Computer Science and Engineering after my Bachelor's. My path started with a technical-commercial diploma and evolved into software development, AI, data analysis and Cybersecurity.",
    },
    {
      it: "Sto svolgendo esperienze in ambito AI e Data Analytics, dove sviluppo soluzioni per l'automazione di processi aziendali e l'analisi di dati industriali. Sono curioso, mi piace imparare cose nuove e sono aperto a nuove opportunità nel campo tech, fintech ed e-commerce.",
      en: "I'm currently gaining experience in AI and Data Analytics, building solutions for business process automation and industrial data analysis. I'm curious, enjoy learning new things, and I'm open to new opportunities in tech, fintech, and e-commerce.",
    },
  ] satisfies Localized[],
};

export const education: EducationItem[] = [
  {
    period: "2026 — in corso",
    institution: "Politecnico di Milano",
    degree: {
      it: "Laurea Magistrale in Computer Science and Engineering",
      en: "Master's Degree in Computer Science and Engineering",
    },
    description: {
      it: "Specializzazione magistrale in Cybersecurity e sviluppo software intelligente.",
      en: "Specialization in Cybersecurity and intelligent software development.",
    },
  },
  {
    period: "2023 — 2026",
    institution: "Politecnico di Milano",
    degree: {
      it: "Laurea Triennale in Ingegneria Informatica",
      en: "Bachelor's Degree in Computer Engineering",
    },
    description: {
      it: "Fondamenti di programmazione, basi di dati e sistemi informatici.",
      en: "Foundations in programming, databases, and information systems.",
    },
  },
  {
    period: "Diploma",
    institution: "Istituto Tecnico Comm.le G. Oberdan — Treviglio",
    degree: {
      it: "Ragioniere (diploma tecnico-commerciale)",
      en: "Accounting Technical Diploma",
    },
    description: {
      it: "Votazione finale: 98/100.",
      en: "Final grade: 98/100.",
    },
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2026 — in corso",
    role: { it: "Stagista Informatico", en: "IT Intern" },
    company: "Brofind S.p.A.",
    location: "Milano",
    description: {
      it: "Tirocinio in ambito AI e Data Analytics: sviluppo di un sistema AI per l'analisi di specifiche tecniche per offerte commerciali, sistemi di reporting automatizzato e valorizzazione di dati provenienti da PLC industriali, componenti database e interfacce utente. Collaborazione trasversale tra reparti su progetti di innovazione e sostenibilità, con configurazione e utilizzo attivo di agenti AI per l'automazione di task interne.",
      en: "Internship in AI and Data Analytics: built an AI-based system to analyze technical specifications for commercial offers, automated reporting systems, and data valorization from industrial PLCs, plus database components and user interfaces. Cross-team collaboration on innovation and sustainability projects, configuring and actively using AI agents to automate internal tasks.",
    },
    tags: ["Python", "SQL", "AI", "Data Analytics"],
  },
];

export const skills: SkillGroup[] = [
  {
    title: { it: "Competenze avanzate", en: "Advanced" },
    items: [
      "Python",
      "Java",
      "HTML",
      "SQL",
      "MySQL",
      "Excel",
      "JavaScript",
      "TypeScript",
      "Data Structures & Algorithms",
    ],
  },
  {
    title: { it: "Competenze intermedie", en: "Intermediate" },
    items: [
      "C#",
      "React",
      "PostgreSQL",
      "Machine Learning",
      "Cybersecurity",
      "Networking",
    ],
  },
  {
    title: { it: "Soft skills", en: "Soft skills" },
    items: ["Problem Solving", "Teamwork", "Communication"],
  },
  {
    title: { it: "Lingue", en: "Languages" },
    items: [
      "Italiano (C2)",
      "Inglese (C1)",
      "Spagnolo (B1)",
      "Francese (B1)",
    ],
  },
];

export const projects: ProjectItem[] = [];

export const chess = {
  title: { it: "Scacco matto!", en: "Checkmate!" } satisfies Localized,

  username: "IronsEnea",
  url: "https://www.chess.com/member/IronsEnea",
  cta: {
    it: "Sfidami su Chess.com!",
    en: "Challenge me on Chess.com!",
  } satisfies Localized,
};

export const contact = {
  title: { it: "Parliamone", en: "Let's talk" } satisfies Localized,
  subtitle: {
    it: "Sono aperto a opportunità, collaborazioni e a due chiacchiere.",
    en: "I'm open to opportunities, collaborations, and a chat.",
  } satisfies Localized,
  email: "enea.ferri@mail.polimi.it",
  linkedin: "https://www.linkedin.com/in/enea-ferri-00039839b/",
  github: "https://github.com/EneaFerri",
};
