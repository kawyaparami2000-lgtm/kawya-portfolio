export interface Profile {
  name: string;
  headline: string;
  shortBio: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl?: string; // TODO: Add LinkedIn URL if available
  cvPath: string;
  seekingRole: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  summary: string;
  description: string;
  techStack: string[];
  githubUrl?: string; // TODO: Add GitHub URL if available
  liveUrl?: string;   // TODO: Add Live URL if available
  featured: boolean;
  highlights: string[];
  screenshots: string[];
}

export interface SkillCategory {
  category: "Programming" | "Data and AI" | "Testing" | "Databases and tools" | "Design";
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  type: "education" | "work" | "leadership";
}
