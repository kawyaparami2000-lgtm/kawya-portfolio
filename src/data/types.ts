export interface Profile {
  name: string;
  headline: string;
  shortBio: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl?: string; // TODO: Add LinkedIn URL once available in source material
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
  githubUrl?: string; // TODO: Add GitHub URL once provided in links.txt
  liveUrl?: string;   // TODO: Add Live URL once provided in links.txt
  featured: boolean;
  highlights: string[];
  screenshots: string[];
  // Optional extended case study fields (only rendered if defined)
  role?: string;         // TODO: Add detailed role if missing in source material
  problem?: string;      // TODO: Add detailed problem statement if missing in source material
  architecture?: string; // TODO: Add detailed architecture overview if missing in source material
  lessons?: string[];    // TODO: Add key takeaways/lessons if missing in source material
  gallery?: string[];    // TODO: Add gallery screenshot paths if missing in source material
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
  bullets?: string[];
  type: "education" | "work" | "leadership";
}
