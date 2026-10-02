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
    // Extended fields (TODO markers for non-CV facts)
    role: "Lead Full-Stack & AI Developer",
    problem:
      "Travelers spend hours manually researching tourist spots and budgeting itineraries. Existing tools lack dynamic contextual awareness for Sri Lankan destinations.",
    architecture:
      "Next.js frontend communicating with a FastAPI backend. LangChain orchestrates vector searches over curated tourism datasets.",
    lessons: [
      "Optimized vector embedding retrieval latency for real-time prompt responses.",
      "Structured prompt templates to prevent hallucination in location recommendations.",
    ],
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
    role: "QA Automation Engineer",
    problem:
      "Manual regression testing across complex web flows was error-prone and time-consuming before deployment releases.",
    architecture:
      "PyTest framework running parallelized test execution with Playwright and Selenium WebDriver, logging HTML test execution reports.",
    lessons: [
      "Established strict Page Object Model design patterns to isolate UI element selectors.",
      "Automated API contract verification prior to UI test execution.",
    ],
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
    role: "ML Developer & Data Analyst",
    problem:
      "Lack of centralized, transparent real estate valuation data leads to pricing inefficiencies for property buyers and sellers in Sri Lanka.",
    architecture:
      "Pandas & Scikit-Learn data cleaning and model training pipeline served through a lightweight Streamlit web application.",
    lessons: [
      "Engineered feature transformations to handle missing property attributes and location outliers.",
      "Evaluated model performance using Root Mean Squared Error (RMSE) and R-squared metrics.",
    ],
  },
  {
    slug: "washflow",
    title: "WashFlow Laundromat Management System",
    year: "2024",
    summary: "Microservices-based laundromat order and catalog management platform.",
    description:
      "Containerized microservices system featuring an API gateway with JWT validation, request routing, rate limiting, catalog service, user auth service, and order processing service backed by MongoDB Atlas.",
    techStack: ["React", "Node.js", "Express", "MongoDB Atlas", "Docker", "JWT"],
    // TODO: Add GitHub URL once provided in links.txt
    githubUrl: undefined,
    // TODO: Add Live URL once provided in links.txt
    liveUrl: undefined,
    featured: false,
    highlights: [
      "Designed microservices architecture with API Gateway managing JWT authentication, routing, and rate limiting.",
      "Configured service-to-service API key authentication between isolated Docker containers.",
      "Integrated MongoDB Atlas for scalable order tracking and catalog state storage.",
    ],
    screenshots: [],
    role: "Backend & Microservices Architect",
    problem:
      "Monolithic order processing systems experienced bottlenecks during peak laundromat service demand.",
    architecture:
      "React Frontend connects to API Gateway (JWT, Routing, Rate Limiting). The gateway directs traffic to Catalog Service, Auth/User Service, and Order Service in Docker containers with API key inter-service security, backed by MongoDB Atlas.",
    lessons: [
      "Implemented rate-limiting and JWT verification at the gateway level to protect internal microservices.",
      "Secured container-to-container communication with encrypted service API keys.",
    ],
  },
];
