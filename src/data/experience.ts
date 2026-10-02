import { ExperienceItem } from "./types";

export const experiences: ExperienceItem[] = [
  // Work Experience
  {
    id: "software-dev-qa-intern-target",
    title: "Software & QA Engineering Candidate",
    organization: "Seeking Internship Opportunities",
    startDate: "2024",
    endDate: "Present",
    bullets: [
      "Developing full-stack applications with Next.js, TypeScript, Python, and microservice architectures.",
      "Building and testing RAG-based AI applications and end-to-end automated QA test suites.",
    ],
    type: "work",
  },
  // Education
  {
    id: "horizon-campus",
    title: "BSc (Hons) in Information Technology",
    organization: "Horizon Campus, Sri Lanka",
    startDate: "2021",
    endDate: "Present",
    bullets: [
      "Fourth-year undergraduate specializing in Software Engineering, AI/ML, and Quality Assurance.",
      "Maintained strong academic performance while leading group software and research projects.",
    ],
    type: "education",
  },
  // Leadership & Extracurricular Roles
  {
    id: "horizon-tech-society",
    title: "IT Student Community Member & Group Leader",
    organization: "Horizon Campus IT Society",
    startDate: "2022",
    endDate: "Present",
    bullets: [
      "Led undergraduate team projects in web development, database management, and software testing.",
      "Organized peer knowledge-sharing sessions on modern web tech and testing tools.",
    ],
    type: "leadership",
  },
  {
    id: "ieee-student-member",
    title: "Student Member",
    organization: "IEEE / Campus Tech Communities",
    startDate: "2023",
    endDate: "Present",
    // Short entry without bullets (renders as a compact one-line item)
    bullets: undefined,
    type: "leadership",
  },
];
