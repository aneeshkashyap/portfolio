export interface PersonalInfo {
  name: string;
  role: string;
  subRole: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  bio: string;
  tagline: string;
  status: string;
  semester: string;
  cgpa: string;
  graduationYear: string;
  college: string;
}

export interface Internship {
  role: string;
  company: string;
  duration: string;
  period: string;
  badge: string;
  bullets: string[];
  keyHighlights: string[];
  techStack: string[];
}

export type SkillLevel = "Core" | "Project Tested" | "Working Knowledge" | "Familiar";

export interface SkillItem {
  name: string;
  level: SkillLevel;
  evidence: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ResumeSkillEntry {
  category: string;
  details: string;
}

export interface ResumeProject {
  title: string;
  techStack: string;
  bullets: string[];
}

export interface LeadershipRole {
  title: string;
  organization: string;
  period: string;
  previousRole: string;
  description: string;
  achievements: string[];
}

export interface ExploringTopic {
  title: string;
  description: string;
  status: string;
}

export interface Achievement {
  name: string;
  organization: string;
  year: string;
  context: string;
  type: "Academic" | "Leadership" | "Internship";
}

export const personalInfo: PersonalInfo = {
  name: "ANEESH KASHYAP K S",
  role: "Software Engineering Candidate & Data Analyst",
  subRole: "Computer Science Student",
  email: "ksaneeshkashyap@gmail.com",
  phone: "+91 7397303538",
  location: "Chennai",
  github: "https://github.com/aneeshkashyap",
  linkedin: "https://linkedin.com/in/aneeshkashyap-k-s",
  bio: "Third-year Computer Science Engineering student with hands-on OOP programming experience (Python, C++) and a solid grounding in data structures and algorithms. Experienced in end-to-end data analysis, cleaning large-scale operational datasets, and engineering analytical pipelines with Pandas, NumPy, and SQL. Skilled in exploratory data analysis (EDA), statistical pattern identification, and architecting interactive dashboards and visualizers in Power BI, React, and Recharts to transform complex data into actionable business decisions.",
  tagline: "Computer Science Engineering Student · SVCE Chennai · 8.1 CGPA",
  status: "Open to Software Engineering, Data Analytics, and Machine Learning Opportunities",
  semester: "5th Semester (at least 3 semesters remaining)",
  cgpa: "8.1 / 10",
  graduationYear: "2028",
  college: "Sri Venkateswara College of Engineering | Chennai",
};

export const internships: Internship[] = [
  {
    role: "Machine Learning Intern",
    company: "Future Interns",
    duration: "1 Month",
    period: "Internship",
    badge: "ML Engineering & Pipelines",
    bullets: [
      "Applied object-oriented Python to design and build three end-to-end software pipelines -- a Customer Churn Prediction web app, a Sales Forecasting system, and a Customer Support Semantic Chat-bot -- solving distinct business problems through sound engineering design.",
      "Owned the full project life-cycle (requirements, data preprocessing, model building, evaluation, and deployment integration), iterating on usability based on feedback to improve each solution's reliability and performance."
    ],
    keyHighlights: [
      "Customer Churn Pipeline: End-to-end OOP web application with Scikit-learn classification & risk evaluation",
      "Sales Forecasting System: Time-series trend analysis and rolling baseline projection pipeline",
      "Semantic Support Bot: Intent-mapped conversational prototype with structured response retrieval"
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "NLP", "OOP"]
  },
  {
    role: "Data Analytics Intern",
    company: "3Skill",
    duration: "2 Months",
    period: "Internship",
    badge: "Data Analytics & EDA",
    bullets: [
      "Worked with Python, Pandas, and NumPy to build the Ola/Uber Cancellation Analysis project, engineering a clean data pipeline and applying statistical analysis to identify ride-cancellation patterns and behavior trends.",
      "Performed Delhi Weather & AQI Analysis, applying data cleaning, exploratory analysis, and visualization best practices to surface reliable, actionable environmental trends.",
      "Conducted Sports Footwear Sales & Consumer Analysis, translating raw data into structured insights that informed business decisions, while managing time effectively to deliver all three projects within the internship window."
    ],
    keyHighlights: [
      "Ola / Uber Analysis: Clean data pipeline on 103K records isolating turnaround thresholds where cancellations surge",
      "Delhi AQI Analysis: Statistical correlation linking pollutant accumulation with surface wind stagnation (r = -0.78)",
      "Retail Sales Analytics: Structured transactional evaluation across $9.08M gross volume informing pricing decisions"
    ],
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "EDA"]
  }
];

export const resumeProjects: ResumeProject[] = [
  {
    title: "ICC Men's T20 World Cup 2024 -- Data Analysis & Interactive Dashboard",
    techStack: "Python, Pandas, React, Recharts",
    bullets: [
      "Engineered a responsive, full-stack sports analytics dashboard end-to-end -- from raw CSV processing in Python/Pandas to an interactive React + Recharts front end -- demonstrating object-oriented and component-based software design.",
      "Defined feature requirements independently (player profiles, match views, performance visualizations) and iteratively improved the UI based on usability testing and self-review."
    ]
  },
  {
    title: "Ola/Uber Cancellation Analysis",
    techStack: "Python, Pandas, NumPy, Matplotlib, Seaborn",
    bullets: [
      "Performed end-to-end EDA on ride-booking data, engineering analytical features and applying sound problem-solving to uncover the drivers of ride cancellations across customers, drivers, and vehicle types.",
      "Built comparative visual analyses to communicate findings clearly and generate actionable recommendations for improving booking success rates."
    ]
  },
  {
    title: "Delhi Weather & AQI Analysis",
    techStack: "Python, Pandas, NumPy, Data Visualization",
    bullets: [
      "Investigated temporal patterns and relationships between environmental variables using statistical analysis and data preprocessing techniques."
    ]
  },
  {
    title: "Sports Footwear Sales & Consumer Analysis",
    techStack: "Python, Pandas, NumPy, EDA, Data Visualization",
    bullets: [
      "Cleaned, transformed, and aggregated sales and consumer data to evaluate performance trends and support data-driven business decisions."
    ]
  }
];

export const resumeSkills: ResumeSkillEntry[] = [
  {
    category: "Programming (OOP)",
    details: "Python, C++ -- 1+ year of object-oriented programming experience"
  },
  {
    category: "CS Fundamentals",
    details: "Data Structures & Algorithms, Problem Solving, Software Design"
  },
  {
    category: "Data Analysis",
    details: "Pandas, NumPy, EDA, Data Cleaning, Preprocessing, Statistical Analysis, Feature Engineering"
  },
  {
    category: "Machine Learning",
    details: "Scikit-learn, TensorFlow/Keras, XGBoost, LightGBM, Classification, Regression, Forecasting"
  },
  {
    category: "Dashboard & Web Dev",
    details: "React, Flask, Next.js, Streamlit, Tailwind CSS"
  },
  {
    category: "Data Visualization & DB",
    details: "Matplotlib, Seaborn, Recharts, Power BI, SQL, SQLite"
  },
  {
    category: "Tools & Practices",
    details: "Git, GitHub, Jupyter Notebook, Agile/Iterative Development, Code Review & Feedback Incorporation"
  },
  {
    category: "AI-Assisted Development",
    details: "Claude Code, Antigravity IDE, Gemini CLI, OpenAI Codex, Prompt Engineering"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming (OOP)",
    description: "Object-oriented programming, software design, memory management, and algorithm implementation.",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Core", highlight: true, evidence: "1+ year hands-on OOP experience across full-stack apps, ML pipelines & analytics" },
      { name: "C++", level: "Core", highlight: true, evidence: "1+ year coursework and practice in OOP, memory concepts, DSA and problem solving" },
      { name: "Object-Oriented Design", level: "Core", highlight: true, evidence: "Component-based architecture, modular OOP software pipelines & patterns" }
    ]
  },
  {
    category: "CS Fundamentals",
    description: "Core computer science principles, algorithmic problem solving, and software engineering discipline.",
    iconName: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: "Core", highlight: true, evidence: "Solid grounding in trees, graphs, sorting, searching, hash tables & complexity" },
      { name: "Problem Solving", level: "Core", highlight: true, evidence: "Systematic engineering approach to requirements, edge cases & algorithmic efficiency" },
      { name: "Software Design", level: "Core", highlight: true, evidence: "Modular component hierarchies, separation of concerns & clean code practices" }
    ]
  },
  {
    category: "Data Analysis",
    description: "End-to-end data manipulation, validation, hypothesis formulation, and exploratory analysis.",
    iconName: "Binary",
    skills: [
      { name: "Pandas", level: "Core", highlight: true, evidence: "Data cleaning, aggregation, grouping & filtering on 100k+ records" },
      { name: "NumPy", level: "Core", highlight: true, evidence: "Vectorized array calculations, numerical transformations & stats" },
      { name: "Exploratory Data Analysis (EDA)", level: "Core", highlight: true, evidence: "Distribution diagnostics, correlation matrices & outlier auditing" },
      { name: "Data Cleaning & Preprocessing", level: "Core", highlight: true, evidence: "Handling nulls, datetime parsing & categorical standardization" },
      { name: "Statistical Analysis", level: "Project Tested", evidence: "Descriptive statistics, variance, Pearson correlation & hypothesis checks" },
      { name: "Feature Engineering", level: "Project Tested", evidence: "Temporal derivations, ordinal encoding & turnaround derivations" }
    ]
  },
  {
    category: "Machine Learning",
    description: "Supervised classification, regression models, time-series baselines, and evaluation metrics.",
    iconName: "BrainCircuit",
    skills: [
      { name: "Scikit-learn", level: "Core", highlight: true, evidence: "Model pipelines, transformers & estimators at Future Interns" },
      { name: "Classification & Regression", level: "Core", highlight: true, evidence: "Customer churn risk classification and predictive baseline models" },
      { name: "Forecasting", level: "Project Tested", evidence: "Time-series trend analysis, sales forecasting & moving window projections" },
      { name: "XGBoost & LightGBM", level: "Project Tested", highlight: true, evidence: "Gradient boosted decision trees for tabular classification benchmarks" },
      { name: "TensorFlow / Keras", level: "Working Knowledge", evidence: "Neural network architectures and deep learning fundamentals" }
    ]
  },
  {
    category: "Dashboard & Web Dev",
    description: "Full-stack frontend engineering, reactive dashboards, component-based architectures, and modern web frameworks.",
    iconName: "Layout",
    skills: [
      { name: "React", level: "Core", highlight: true, evidence: "Engineered responsive full-stack sports analytics dashboard and component UI" },
      { name: "Next.js", level: "Core", highlight: true, evidence: "App Router, SSR, TypeScript, and modern component design" },
      { name: "Tailwind CSS", level: "Core", highlight: true, evidence: "Responsive layouts, utility tokens, dark theme & high-contrast UI" },
      { name: "Flask", level: "Project Tested", evidence: "Lightweight Python REST API microservices for backend integration" },
      { name: "Streamlit", level: "Project Tested", evidence: "Interactive web applications for ML model inference and data exploration" }
    ]
  },
  {
    category: "Data Visualization & DB",
    description: "Transforming complex datasets into clear, informative charts, reports, and relational databases.",
    iconName: "BarChart3",
    skills: [
      { name: "SQL", level: "Core", highlight: true, evidence: "Relational queries, multi-table joins, aggregations & filtering" },
      { name: "SQLite", level: "Core", evidence: "Embedded analytical storage, schema modeling & query optimization" },
      { name: "Power BI", level: "Project Tested", highlight: true, evidence: "Built 3 multi-page interactive dashboards with DAX measures" },
      { name: "Recharts", level: "Project Tested", highlight: true, evidence: "Engineered web-based radar & bar visualizers for T20 cricket app" },
      { name: "Matplotlib & Seaborn", level: "Core", evidence: "Distribution diagnostics, correlation heatmaps & KDE plots" }
    ]
  },
  {
    category: "Tools & Practices",
    description: "Engineering workflows, iterative development cycles, version control, and code quality.",
    iconName: "Sparkles",
    skills: [
      { name: "Git & GitHub", level: "Core", highlight: true, evidence: "Branch management, repository documentation & version history" },
      { name: "Jupyter Notebook", level: "Core", evidence: "Reproducible research, EDA workflows & documentation" },
      { name: "Agile / Iterative Development", level: "Core", evidence: "Requirements gathering, user feedback loops & incremental delivery" },
      { name: "Code Review & Feedback", level: "Core", evidence: "Following software best practices to improve reliability and usability" }
    ]
  },
  {
    category: "AI-Assisted Development",
    description: "Leveraging cutting-edge AI development environments and prompt engineering to accelerate software delivery.",
    iconName: "Bot",
    skills: [
      { name: "Claude Code", level: "Core", highlight: true, evidence: "Advanced agentic terminal workflow and autonomous coding" },
      { name: "Antigravity IDE", level: "Core", highlight: true, evidence: "Modern AI-assisted pair programming and workspace orchestration" },
      { name: "Gemini CLI", level: "Core", highlight: true, evidence: "Command-line multimodal intelligence and script generation" },
      { name: "OpenAI Codex", level: "Core", evidence: "Code synthesis, refactoring, and automated test generation" },
      { name: "Prompt Engineering", level: "Core", highlight: true, evidence: "Structured context design, system prompting & deterministic outputs" }
    ]
  }
];

export const currentlyExploring: ExploringTopic[] = [
  {
    title: "System Design & Distributed Architectures",
    description: "Designing scalable backend services, caching layers, message queues, and high-concurrency patterns.",
    status: "Active Practice"
  },
  {
    title: "Advanced Data Structures & Algorithms in C++",
    description: "Graph algorithms, dynamic programming, tree traversals, and algorithmic optimization.",
    status: "Daily Problem Solving"
  },
  {
    title: "Full-Stack Next.js & REST / Microservices",
    description: "Building production-grade web applications with server components, database integrations, and microservices.",
    status: "Project Building"
  },
  {
    title: "MLOps & Autonomous Agentic Pipelines",
    description: "Continuous model evaluation, containerization, and LLM-assisted autonomous workflow development.",
    status: "Prototyping"
  }
];

export const verifiedAchievements: Achievement[] = [
  {
    name: "SVCE ACM Membership Chair",
    organization: "SVCE ACM Student Chapter",
    year: "2026–2027",
    context: "Promoted from Design Executive (2025-26) for contributions to member engagement and event coordination.",
    type: "Leadership"
  },
  {
    name: "Academic Standing — 8.1 CGPA",
    organization: "Sri Venkateswara College of Engineering",
    year: "2023–2028",
    context: "B.E. Computer Science Engineering, Semester 5. Solid grounding in OOP (Python, C++), DSA, and software design.",
    type: "Academic"
  },
  {
    name: "Future Interns ML Internship",
    organization: "Future Interns",
    year: "2024",
    context: "Designed and built three end-to-end software pipelines (churn prediction web app, sales forecasting, semantic chat-bot).",
    type: "Internship"
  },
  {
    name: "3Skill Data Analytics Internship",
    organization: "3Skill",
    year: "2024",
    context: "Delivered 3 end-to-end analytical pipelines (Ola/Uber cancellation analysis, Delhi AQI, sports footwear retail).",
    type: "Internship"
  }
];

export const education = {
  degree: "Bachelor of Engineering -- Computer Science Engineering",
  college: "Sri Venkateswara College of Engineering | Chennai",
  location: "Chennai, India",
  graduation: "Graduation: 2028",
  cgpa: "8.1 / 10",
  currentStatus: "Current Semester: 5 (at least 3 semesters remaining)",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Python, C++)",
    "Software Design & Problem Solving",
    "Database Management Systems (DBMS / SQL)",
    "Operating Systems",
    "Computer Networks",
    "Probability & Statistics",
    "Machine Learning & Data Science"
  ]
};

export const leadership: LeadershipRole = {
  title: "Membership Chair",
  organization: "SVCE ACM Student Chapter",
  period: "2026-27",
  previousRole: "Promoted from Design Executive (2025-26)",
  description: "Membership Chair for SVCE ACM Student Chapter (2026-27), promoted from Design Executive (2025-26) for contributions to member engagement and event coordination -- reflecting time management and teamwork in a cooperative environment.",
  achievements: [
    "Promoted from Design Executive (2025-26) to Membership Chair (2026-27).",
    "Recognized for contributions to member engagement and technical event coordination.",
    "Demonstrated exceptional time management, leadership, and teamwork in a cooperative environment."
  ]
};
