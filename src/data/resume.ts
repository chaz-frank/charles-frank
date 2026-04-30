export type ExperienceEntry = {
  role: string;
  org: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export type ProjectEntry = {
  name: string;
  url: string | null;
  tagline: string;
  stack: string[];
  bullets: string[];
};

export type Resume = {
  name: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  githubHandle: string;
  linkedin: string;
  linkedinHandle: string;
  taglines: {
    general: string;
    technical: string;
  };
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  skills: Record<string, string[]>;
  interests: Record<string, string[]>;
  education: {
    school: string;
    degree: string;
    location: string;
    graduation: string;
    coursework: string[];
  };
};

export const resume: Resume = {
  name: "Charles Frank",
  location: "New York City, NY 10003",
  phone: "+1 (323) 252-4396",
  email: "cjf8333@nyu.edu",
  github: "github.com/chaz-frank",
  githubHandle: "chaz-frank",
  linkedin: "linkedin.com/in/charles-frank-a354802a9",
  linkedinHandle: "charles-frank-a354802a9",

  taglines: {
    general:
      "Engineer-writer building agentic systems. Solo-shipped products at the intersection of AI, productivity, and play.",
    technical:
      "Agentic-systems engineer. Multi-agent orchestration, retrieval, and prompt infrastructure — solo-shipped to production.",
  },

  experience: [
    {
      role: "Agentic AI Consultant",
      org: "Independent",
      location: "Remote",
      start: "Jan 2026",
      end: "Present",
      bullets: [
        "Coach individuals and teams on Claude Code, OpenCode, n8n, and adjacent agentic tooling.",
        "Build custom automations spanning software development, business ops, and productivity workflows.",
        "Translate model capabilities into shippable internal tooling for non-technical stakeholders.",
      ],
    },
    {
      role: "AI Intern",
      org: "Sizzle-Reel",
      location: "Remote",
      start: "Aug 2025",
      end: "Nov 2025",
      bullets: [
        "Unblocked the roadmap for a fine-tuned agentic micro-drama script analyzer and writer.",
        "Built a text-file annotator with NextAuth sign-in and MongoDB persistence; deployed on Vercel.",
        "Owned the feature end-to-end: schema, API, UI, auth, and deploy.",
      ],
    },
    {
      role: "Web3 Intern",
      org: "Wildcard Alliance",
      location: "Remote",
      start: "May 2024",
      end: "Aug 2024",
      bullets: [
        "Researched emerging tech and bot-prevention tooling.",
        "Joined startup strike-team meetings; gained hands-on exposure to early-stage product development and cross-functional collaboration.",
        "Surveyed AI tools to streamline internal processes and reduce manual review load.",
      ],
    },
  ],

  projects: [
    {
      name: "Sigil",
      url: "si9il.com",
      tagline: "Gamified personal-development platform",
      stack: ["React", "Next.js", "Express", "OpenAI", "Claude", "MongoDB", "Vector Search"],
      bullets: [
        "Solo-founded and shipped a gamified personal-development platform.",
        "Combines a life-organization system with a generative progression layer to make productivity addictive.",
        "Freeform AI chat plans and coordinates daily tasks, habits, projects, and long-term areas of responsibility.",
        "MongoDB vector search powers semantic recall across the user's history.",
      ],
    },
    {
      name: "letsbefrank",
      url: "letsbefrank.fyi",
      tagline: "Digital garden & Zettelkasten",
      stack: ["Next.js", "Markdown", "Zettelkasten"],
      bullets: [
        "A digital garden and Zettelkasten system to organize my notes and publicize my learning.",
        "Built on the digital-garden ethos: ideas and thoughts don't need to be fully complete before you can share them.",
      ],
    },
    {
      name: "Four Feathers",
      url: "stayfourfeathers.com",
      tagline: "Static Airbnb listing site",
      stack: ["HTML", "CSS", "JS"],
      bullets: [
        "Designed and deployed a static booking site with clear visual rules and a single primary CTA.",
      ],
    },
  ],

  skills: {
    Languages: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "Solidity", "Bash", "HTML/CSS"],
    "Frameworks & Tools": [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Pinecone",
      "Git",
      "Vim",
      "tmux",
      "OpenAI API",
      "Anthropic API",
    ],
    Concepts: [
      "Multi-agent systems",
      "AI integrations",
      "MCP servers",
      "RESTful APIs",
      "Data structures",
      "NLP",
      "Smart contracts",
      "Systems programming",
      "Multi-threading",
    ],
  },

  interests: {
    Writing: ["Prompt engineering", "Fiction", "Academic writing", "Editing"],
    Other: ["Emerging tech", "Magic (Junior Member, Magic Castle)", "Running", "Reading", "Lifting"],
  },

  education: {
    school: "New York University — Gallatin",
    degree: "B.A., Computer Science & Creative Writing",
    location: "New York, NY",
    graduation: "Expected May 2026",
    coursework: [
      "Operating Systems",
      "Computer Systems Organization",
      "Data Structures",
      "Web Development",
      "Computer Security",
      "Artificial Intelligence",
      "Natural Language Processing",
    ],
  },
};
