type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "Interactive Portfolio",
    description: "A product-quality portfolio with animations, filters, and OAuth-based admin.",
    image: "/next.svg",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/your/repo",
    demo: "#",
  },
  {
    id: "project-2",
    title: "Design System Demo",
    description: "Reusable UI components and themeable tokens for consistent design.",
    image: "/vercel.svg",
    tags: ["Design System", "Accessibility"],
    github: "https://github.com/your/repo2",
    demo: "#",
  },
  {
    id: "project-3",
    title: "College Capstone",
    description: "A case-study style project showing product thinking and UX research.",
    image: "/file.svg",
    tags: ["Research", "UX"],
    github: "https://github.com/your/repo3",
    demo: "#",
  },
];

export default projects;
