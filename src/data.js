// Edit everything about your portfolio from this one file.

export const profile = {
  name: "Ziad Essam",
  role: "MERN stack developer",
  tagline:
    "I build web apps from the interface down to the database. Front end first, now growing into Node.js and Express.",
  location: "Cairo & Alexandria, Egypt",
  email: "zizoessam2019@gmail.com",
  github: "https://github.com/zizoessam17",
  linkedin: "https://linkedin.com/in/ziad-essam-3a769331a",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Front end",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "DaisyUI" },
      {name: "HeroUI" },
      { name: "Bootstrap" },
      { name: "TypeScript" }
    ],
  },
  {
    title: "Back end",
    items: [
      { name: "Node.js", learning: true },
      { name: "Express.js", learning: true },
      { name: "MongoDB", learning: true },
      { name: "REST APIs", learning: true },
      { name: "PostgreSQL", learning: true },
      {name: "Docker", learning: true},
      {name: "jwt", learning: true},
      {name: "Next.js", learning: true},
      {name: "Authentication", learning: true},
      {name: "Postman", learning: true}
    ],
  },
  {
    title: "Tools",
    items: [{ name: "Git" }, { name: "GitHub" }, { name: "Vite" }],
  },
];

// Replace the descriptions with what each project really does.
export const projects = [
  {
    title: "DEPI sign-in",
    description: "A sign-in page built during the DEPI program.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/zizoessam17/depi-signin",
  },
  {
    title: "Calculator",
    description:
      "A calculator that handles everyday arithmetic in the browser.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/zizoessam17/calculator",
  },
  {
    title: "Translator",
    description:
      "A web translator app built during the DEPI program and deployed on Vercel.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    repo: "https://github.com/zizoessam17/translator-depi",
    live: "https://translator-depi-zeta.vercel.app",
  },
  {
    title: "Currency converter",
    description:
      "A currency converter app built during the DEPI program and deployed on Vercel.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    repo: "https://github.com/zizoessam17/currency-depi",
    live: "https://currency-depi.vercel.app",
  },
];
