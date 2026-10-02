import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "ai-tourism-planner",
    title: "AI Tourism & Itinerary Planner",
    year: "2024",
    summary: "Intelligent travel itinerary generator leveraging RAG pipelines and LLMs.",
    description:
      "An AI-driven tourism planner designed to generate personalized travel itineraries using Retrieval-Augmented Generation (RAG) and conversational AI.",
    techStack: ["Next.js", "Python", "LangChain", "FastAPI", "Tailwind CSS"],
    // TODO: Add GitHub URL once provided in links.txt
    githubUrl: undefined,
    // TODO: Add Live URL once provided in links.txt
    liveUrl: undefined,
    featured: true,
    highlights: [
      "Integrated RAG pipelines for real-time contextual location recommendations.",
      "Engineered automated itinerary generation based on user budget and duration constraints.",
    ],
    screenshots: [],
  },
  {
    slug: "qa-automation-framework",
    title: "QA Test Automation Framework",
    year: "2024",
    summary: "Comprehensive end-to-end testing suite for web services and APIs.",
    description:
      "Automated testing suite leveraging Selenium, Playwright, and PyTest for robust regression testing, API validation, and UI test coverage.",
    techStack: ["Python", "Selenium", "Playwright", "PyTest", "Postman"],
    // TODO: Add GitHub URL once provided in links.txt
    githubUrl: undefined,
    // TODO: Add Live URL once provided in links.txt
    liveUrl: undefined,
    featured: true,
    highlights: [
      "Implemented modular POM (Page Object Model) structure reducing script maintenance by 40%.",
      "Configured automated API assertion tests and CI test execution reports.",
    ],
    screenshots: [],
  },
  {
    slug: "house-price-prediction",
    title: "Sri Lanka House Price Predictor",
    year: "2023",
    summary: "Machine learning regression model for real estate valuation.",
    description:
      "Predictive machine learning model analyzing real estate features to estimate housing market prices accurately across Sri Lanka.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
    // TODO: Add GitHub URL once provided in links.txt
    githubUrl: undefined,
    // TODO: Add Live URL once provided in links.txt
    liveUrl: undefined,
    featured: true,
    highlights: [
      "Preprocessed multi-variable property datasets and built optimized Random Forest regression models.",
      "Deployed interactive Streamlit web dashboard for real-time price estimation.",
    ],
    screenshots: [],
  },
];
