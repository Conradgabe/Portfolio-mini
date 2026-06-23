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

export type Project = {
  name: string;
  blurb: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "ClipN",
    blurb:
      "An AI pipeline that turns long videos into short, ready-to-post clips. It handles transcription, " +
      "highlight detection, and automatic reframing, and streams progress to the user in real time.",
    stack: ["Python", "FastAPI", "REST", "WebSockets", "FFmpeg", "Docker"],
  },
  {
    name: "Algome",
    blurb:
      "A platform for running and backtesting trading strategies against real market data, with async " +
      "data pipelines and a performance metrics dashboard, built with a focus on data integrity.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "React"],
  },
  {
    name: "PG-Tailor",
    blurb:
      "An AI career tool that tailors resumes to job descriptions and helps with job matching, with a " +
      "FastAPI backend and a clean React interface.",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Docker"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
