import { SkillCategory } from "./types";

// Note: Stray "D" token from CV source text was dropped as requested.
export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C#", "HTML5/CSS3"],
  },
  {
    category: "Data and AI",
    skills: [
      "Data Analysis",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "LangChain",
      "RAG Pipelines",
      "Machine Learning",
    ],
  },
  {
    category: "Testing",
    skills: [
      "Automated QA Testing",
      "Selenium",
      "Playwright",
      "PyTest",
      "Postman",
      "API Testing",
      "Regression Testing",
    ],
  },
  {
    category: "Databases and tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "VS Code",
      "Vercel",
    ],
  },
  {
    category: "Design",
    skills: ["Figma", "UI/UX Prototyping", "Responsive Web Design"],
  },
];
