/**
 * All site content lives here. Framing: a solid backend developer with
 * around three years of hands-on experience (junior-to-mid), not senior.
 */

export const profile = {
  name: "Gabriel Isuekebho",
  title: "Backend Developer",
  location: "Lagos, Nigeria",
  email: "gisuekebho5880@gmail.com",
  phone: "+234 808 589 5880",
  github: "https://github.com/conradgabe",
  githubUser: "conradgabe",
  linkedin: "https://linkedin.com/in/gabrielisuekebho",
  tagline: "I build reliable APIs and backend services with clean, well-tested code.",
  summary:
    "I'm a backend developer with around three years of hands-on experience building APIs and " +
    "server-side services across fintech and SaaS. I work mostly with Node.js, Python, and C#, and I " +
    "care about writing clean, well-tested code, collaborating with the team, and shipping features " +
    "that hold up in production. I enjoy learning from experienced engineers and growing with every project.",
};

/** Object rendered as the syntax-highlighted hero code snippet. */
export const code = {
  role: "Backend Developer",
  location: "Lagos, Nigeria",
  experience: "~3 years",
  stack: ["Node.js", "Python", "C#"],
  focus: ["APIs", "databases", "clean code"],
  status: "open to backend roles",
};

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "C#"] },
  { label: "Backend & APIs", items: ["Node.js (Express)", "REST APIs", "FastAPI", "ASP.NET Core"] },
  { label: "Databases", items: ["MySQL", "PostgreSQL", "Redis"] },
  { label: "Cloud & Tools", items: ["AWS", "Docker", "Git & GitHub", "CI/CD", "Linux"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
];

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Backend Developer",
    company: "Lustrew Dynamics",
    location: "Remote",
    period: "Dec 2025 - Present",
    points: [
      "Build and maintain backend services and REST APIs for a production SaaS platform.",
      "Integrate third-party services and AI features, and help keep the deployment pipeline running smoothly.",
      "Write clean, tested code and take part in code reviews with the team.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Codeware",
    location: "Lagos, Nigeria",
    period: "Feb 2025 - Dec 2025",
    points: [
      "Built and maintained server-side features and APIs for a multi-industry SaaS product.",
      "Designed database schemas and improved query performance.",
      "Containerized services with Docker for consistent, repeatable releases.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Carbonnote",
    location: "Remote (United States)",
    period: "Dec 2024 - Apr 2025",
    points: [
      "Built backend services within a microservices setup for an AI research platform.",
      "Added monitoring to improve reliability and wrote API documentation for the team.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Ajay Tech",
    location: "Remote",
    period: "Dec 2023 - Jun 2024",
    points: [
      "Built an AI-powered fintech chatbot and the REST APIs connecting it to financial systems.",
      "Tested and debugged carefully to keep transactions reliable.",
    ],
  },
  {
    role: "Backend Engineer Intern",
    company: "HNG Internship",
    location: "Remote",
    period: "2022",
    points: [
      "Built backend features for a fintech application and learned engineering fundamentals across the full SDLC.",
    ],
  },
];

export type ProjectImage = { src: string; alt: string; w: number; h: number; label: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  summary: string;
  problem: string;
  approach: string[];
  highlights: string[];
  stack: string[];
  images: ProjectImage[];
  /** key into openApiSpecs / rawSpecs for the API reference + download */
  apiSlug?: string;
};

export const projects: Project[] = [
  {
    slug: "clipn",
    name: "ClipN",
    tagline: "AI that turns long videos into ready-to-post short clips",
    category: "AI · Media Pipeline",
    year: "2026",
    role: "Design & build (solo)",
    summary:
      "An AI pipeline that ingests long-form video (upload or a YouTube/Twitch URL), finds the best moments, reframes them vertical with face-tracking, burns in animated captions, and exports platform-ready Shorts, Reels, and TikToks.",
    problem:
      "Creators spend hours manually scrubbing long videos to cut shorts: finding moments, reframing to 9:16, and captioning by hand.",
    approach: [
      "Word-level transcription with faster-whisper, cached and reused across regenerations",
      "Highlight detection via LLM scoring (Claude) fused with audio features, tuned per content vertical",
      "Smart 9:16 reframing: center-crop, MediaPipe face-tracking, split-screen, or letterbox",
      "Single-pass FFmpeg: clip + reframe + caption in one encode (~60% faster than chained encodes)",
      "Parallel clip processing and SSE streaming so clips appear in the UI as each finishes",
    ],
    highlights: [
      "Single-pass FFmpeg: ~60% faster than chained encodes",
      "7 caption styles incl. word-by-word karaoke",
      "Prompt-guided clipping (\"find the funny moments\")",
      "Multi-tenant studio with per-client workspaces",
    ],
    stack: ["Python", "faster-whisper", "Claude", "MediaPipe", "FFmpeg", "SSE"],
    apiSlug: "clipn",
    images: [
      { src: "/projects/clipn/hero.png", alt: "ClipN landing page", w: 1387, h: 738, label: "landing" },
      { src: "/projects/clipn/workspace.png", alt: "ClipN workspace with an imported video ready to clip", w: 1919, h: 929, label: "workspace" },
      { src: "/projects/clipn/pipeline.png", alt: "ClipN live processing pipeline", w: 1919, h: 936, label: "processing pipeline" },
      { src: "/projects/clipn/brand-kit.png", alt: "ClipN brand kit: watermark, intro/outro, brand colours", w: 1919, h: 939, label: "brand kit" },
      { src: "/projects/clipn/clients.png", alt: "ClipN multi-tenant studio: per-client workspaces", w: 1919, h: 941, label: "clients" },
    ],
  },
  {
    slug: "quant-platform",
    name: "Algome",
    tagline: "Algorithmic trading SaaS: custom strategy execution & backtesting",
    category: "Fintech · Backtesting Engine",
    year: "2026",
    role: "Design & build (solo)",
    summary:
      "A quant platform for systematic Forex and equities traders: event-driven backtesting with realistic execution, Docker-sandboxed strategy code, survivorship-bias-aware data, and immutable, auditable results.",
    problem:
      "Backtests lie when execution is unrealistic, data is biased, or results can't be reproduced. Serious systematic trading needs an auditable, reproducible engine.",
    approach: [
      "Event-driven backtest engine with proper execution / fill modeling",
      "Code-first Python strategies with strict versioning",
      "Untrusted strategy code executed in Docker sandboxes",
      "Survivorship-bias-aware market data with corporate actions",
      "Immutable results with full lineage tracing for auditability",
    ],
    highlights: [
      "Event-driven engine with realistic fills",
      "Docker-sandboxed strategy execution",
      "Immutable, auditable backtest lineage",
      "Sharpe / Sortino / drawdown analytics",
    ],
    stack: ["FastAPI", "PostgreSQL", "TimescaleDB", "Redis", "SQLAlchemy", "Docker", "React"],
    apiSlug: "quant-platform",
    images: [
      { src: "/projects/algome/dashboard.png", alt: "Algome dashboard: portfolio value, backtests, strategies, win rate", w: 1919, h: 944, label: "dashboard" },
      { src: "/projects/algome/strategy-editor.png", alt: "Algome strategy editor: code-first Python MACD strategy", w: 1919, h: 944, label: "strategy editor" },
      { src: "/projects/algome/backtest-config.png", alt: "Algome backtest configuration terminal", w: 1919, h: 942, label: "backtest config" },
      { src: "/projects/algome/backtest-terminal.png", alt: "Algome backtest terminal during a guided run", w: 1919, h: 947, label: "backtest terminal" },
      { src: "/projects/algome/results.png", alt: "Algome results and analytics by market conditions", w: 1919, h: 940, label: "results & analytics" },
      { src: "/projects/algome/market-data.png", alt: "Algome market data: forex pairs across timeframes", w: 1919, h: 942, label: "market data" },
    ],
  },
  {
    slug: "pg-tailor",
    name: "PG-Tailor",
    tagline: "AI career platform: résumé tailoring, job-matching & a career assistant",
    category: "AI · Career Platform",
    year: "2026",
    role: "Design & build (solo)",
    summary:
      "A full-stack AI career platform built on Next.js route handlers. It parses a résumé, tailors it to any job description token-by-token over Server-Sent Events, and exports PDF/DOCX in seven templates. A cached SerpAPI job board feeds an Autopilot that scores every listing against your profile with Gemini.",
    problem:
      "Tailoring a CV to every role, tracking applications, and judging which jobs are worth chasing by hand is slow, and generic AI output doesn't hold up under real job-hunt volume.",
    approach: [
      "Next.js App Router route handlers serving a typed API on the same origin as the UI",
      "Streamed résumé tailoring over Server-Sent Events; PDF/DOCX export across seven templates",
      "Cached SerpAPI job board plus a Gemini-scored Autopilot that ranks jobs against your profile",
      "Application history with status tracking and a career-assistant chat grounded in a tailored résumé",
    ],
    highlights: [
      "Streamed (SSE) résumé tailoring",
      "Gemini job-match scoring (Autopilot)",
      "PDF/DOCX export · 7 templates",
      "SerpAPI job board + history",
    ],
    stack: ["Next.js", "TypeScript", "React", "Gemini", "SerpAPI", "Prisma", "SSE", "Docker"],
    apiSlug: "pg-tailor",
    images: [
      { src: "/projects/pg-tailor/tailor.png", alt: "PG-Tailor tailoring view with live résumé preview", w: 1919, h: 944, label: "tailor a résumé" },
      { src: "/projects/pg-tailor/classic.png", alt: "PG-Tailor classic serif template", w: 1919, h: 941, label: "classic template" },
      { src: "/projects/pg-tailor/two-column.png", alt: "PG-Tailor two-column template with skills sidebar", w: 1919, h: 947, label: "two-column template" },
      { src: "/projects/pg-tailor/jobs.png", alt: "PG-Tailor job listings with filters", w: 1919, h: 941, label: "job listings" },
      { src: "/projects/pg-tailor/autopilot.png", alt: "PG-Tailor autopilot ranking job matches", w: 1919, h: 943, label: "autopilot" },
    ],
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const focus: { title: string; desc: string }[] = [
  {
    title: "Backend APIs",
    desc: "Designing and building REST APIs with clear contracts, validation, auth, and sensible error handling.",
  },
  {
    title: "Databases",
    desc: "Modeling schemas and writing queries across SQL (PostgreSQL, MySQL) and Redis, with an eye on performance.",
  },
  {
    title: "Cloud & DevOps",
    desc: "Containerizing services with Docker and shipping through CI/CD pipelines on AWS and Oracle Cloud.",
  },
  {
    title: "AI integration",
    desc: "Wiring LLMs and AI services into real products, from prompt design to streaming responses over SSE.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Focus", href: "#focus" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
