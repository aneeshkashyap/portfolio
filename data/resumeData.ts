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
  role: "Data Analyst & Analytics Engineer",
  subRole: "Computer Science Engineering Student",
  email: "ksaneeshkashyap@gmail.com",
  phone: "+91 7397303538",
  location: "Chennai, India",
  github: "https://github.com/aneeshkashyap",
  linkedin: "https://www.linkedin.com/in/aneesh-kashyap-k-s-146a7b371/",
  bio: "I build analytical solutions that transform raw datasets into actionable insights, interactive dashboards, and data-driven decisions.",
  tagline: "Computer Science Engineering Student · SVCE Chennai · 8.1 CGPA",
  status: "Open to Data Analytics, Analytics Engineering, and Software Engineering Internships",
  semester: "5th Semester (3rd Year)",
  cgpa: "8.1 / 10",
  graduationYear: "2028",
  college: "Sri Venkateswara College of Engineering (SVCE) | Chennai",
};

export const internships: Internship[] = [
  {
    role: "Data Analytics Intern",
    company: "3Skill",
    duration: "2 Months",
    period: "Internship",
    badge: "Data Analytics & EDA",
    bullets: [
      "Conducted exploratory data analysis on 103,024 ride bookings to isolate cancellation patterns across 10 vehicle categories and turnaround times.",
      "Analyzed 52,560 hourly environmental sensor readings from Delhi stations to quantify seasonal PM2.5/PM10 spikes and thermal inversion (r = -0.78).",
      "Evaluated 30,000 retail footwear transactions across 6 global markets ($9.08M gross) to determine category velocity and discount elasticity boundaries."
    ],
    keyHighlights: [
      "Ola / Uber Analysis: Isolated vehicle turnaround (V_TAT) thresholds where customer cancellations surge",
      "Delhi AQI Modeling: Correlated particulate accumulation with surface wind deceleration (<5 km/h)",
      "Retail Analytics: Validated mathematical parity across $9.08M gross transactions and tested discount depths"
    ],
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "EDA"]
  },
  {
    role: "Machine Learning Intern",
    company: "Future Interns",
    duration: "1 Month",
    period: "Internship",
    badge: "ML Engineering",
    bullets: [
      "Developed supervised machine learning pipelines for customer churn classification, sales forecasting baselines, and a conversational support prototype.",
      "Engineered preprocessing routines: numerical standardization, categorical one-hot encoding, and feature importance analysis using Scikit-learn.",
      "Benchmarked model evaluation metrics (precision, recall, F1 score, confusion matrices) across trained classification baselines."
    ],
    keyHighlights: [
      "Customer Churn Model: Feature importance evaluation and risk classification using Scikit-learn",
      "Sales Forecasting: Time-series trend analysis and rolling baseline projections",
      "Customer Support Prototype: Semantic response retrieval with structured intent mapping"
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "NLP"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Data Analytics & Processing",
    description: "End-to-end data manipulation, validation, hypothesis formulation, and exploratory analysis.",
    iconName: "Binary",
    skills: [
      { name: "Python", level: "Core", highlight: true, evidence: "Primary language across all 4 analytics projects and ML workflows" },
      { name: "Pandas", level: "Core", highlight: true, evidence: "Data cleaning, aggregation, grouping & filtering on 100k+ records" },
      { name: "NumPy", level: "Core", highlight: true, evidence: "Vectorized array calculations, numerical transformations & stats" },
      { name: "SQL", level: "Core", highlight: true, evidence: "Relational queries, multi-table joins, aggregations & filtering" },
      { name: "Exploratory Data Analysis (EDA)", level: "Core", highlight: true, evidence: "Distribution diagnostics, correlation matrices & outlier auditing" },
      { name: "Data Cleaning & Preprocessing", level: "Core", highlight: true, evidence: "Handling nulls, datetime parsing & categorical standardization" },
      { name: "Feature Engineering", level: "Project Tested", evidence: "Temporal derivations, ordinal encoding & turnaround derivations" },
      { name: "Statistical Analysis", level: "Project Tested", evidence: "Descriptive statistics, variance, Pearson correlation & hypothesis checks" }
    ]
  },
  {
    category: "Business Intelligence & Visualization",
    description: "Transforming complex datasets into clear, informative charts, reports, and interactive dashboards.",
    iconName: "BarChart3",
    skills: [
      { name: "Power BI", level: "Project Tested", highlight: true, evidence: "Built 3 multi-page interactive dashboards with DAX measures" },
      { name: "Matplotlib", level: "Core", evidence: "Histograms, scatter visualizers & distribution plots in notebooks" },
      { name: "Seaborn", level: "Core", highlight: true, evidence: "Statistical distributions, correlation heatmaps & KDE plots" },
      { name: "Recharts", level: "Project Tested", highlight: true, evidence: "Engineered web-based radar & bar visualizers for T20 cricket app" },
      { name: "Interactive Dashboards", level: "Project Tested", evidence: "Connected client-side visual controls for real-time data slicing" }
    ]
  },
  {
    category: "Applied Machine Learning",
    description: "Supervised classification, regression models, time-series baselines, and evaluation metrics.",
    iconName: "BrainCircuit",
    skills: [
      { name: "Scikit-learn", level: "Working Knowledge", highlight: true, evidence: "Model pipelines, transformers & estimators at Future Interns" },
      { name: "Classification Modeling", level: "Working Knowledge", highlight: true, evidence: "Customer churn risk classification using logistic & tree models" },
      { name: "Model Evaluation", level: "Working Knowledge", evidence: "Benchmarked precision, recall, F1 scores & confusion matrices" },
      { name: "Time-Series Baselines", level: "Working Knowledge", evidence: "Moving averages, rolling windows & seasonal trend tracking" }
    ]
  },
  {
    category: "Programming & Web Engineering",
    description: "Computer science foundations, modern web frontends, component architecture, and version control.",
    iconName: "Code2",
    skills: [
      { name: "TypeScript / JavaScript", level: "Project Tested", highlight: true, evidence: "Built this responsive portfolio & interactive EDA lab" },
      { name: "React & Next.js", level: "Project Tested", highlight: true, evidence: "App router, SSR, static generation & custom component design" },
      { name: "Tailwind CSS", level: "Project Tested", evidence: "Utility design tokens, dark/light themes & high-contrast layouts" },
      { name: "Git & GitHub", level: "Core", highlight: true, evidence: "Branch management, repository documentation & version history" },
      { name: "C++ / Java", level: "Familiar", evidence: "Academic coursework covering core data structures & OOP" }
    ]
  },
  {
    category: "Database Systems",
    description: "Relational data modeling, schema understanding, and structured querying.",
    iconName: "Layout",
    skills: [
      { name: "MySQL", level: "Core", highlight: true, evidence: "Relational queries, primary/foreign keys & table indexing" },
      { name: "PostgreSQL", level: "Working Knowledge", evidence: "Structured analytical queries, aggregations & filtering" },
      { name: "SQLite", level: "Project Tested", evidence: "Local analytical storage & test database setups" }
    ]
  }
];

export const currentlyExploring: ExploringTopic[] = [
  {
    title: "Advanced SQL & Query Optimization",
    description: "Complex analytical window functions, recursive CTEs, query plan profiling, and index tuning.",
    status: "Active Practice"
  },
  {
    title: "Data Engineering Pipelines",
    description: "ETL pipeline orchestration, schema evolution, and automated ingestion workflows for analytical stores.",
    status: "Practical Exploration"
  },
  {
    title: "PostgreSQL & Database Internals",
    description: "Deep dive into ACID transactions, query planner mechanisms, and table partitioning strategies.",
    status: "Coursework & Practice"
  },
  {
    title: "FastAPI Analytical Microservices",
    description: "Deploying Python data transformation routines and inference pipelines as lightweight REST APIs.",
    status: "Prototyping"
  }
];

export const verifiedAchievements: Achievement[] = [
  {
    name: "Elected Membership Chair",
    organization: "SVCE ACM Student Chapter",
    year: "2026–2027",
    context: "Promoted from Design Executive (2025–2026); coordinate technical student onboarding and hands-on coding workshops.",
    type: "Leadership"
  },
  {
    name: "Academic Standing — 8.1 CGPA",
    organization: "Sri Venkateswara College of Engineering (SVCE)",
    year: "2023–Present",
    context: "B.E. Computer Science & Engineering; strong performance in Data Structures, DBMS, and Probability & Statistics.",
    type: "Academic"
  },
  {
    name: "3Skill Data Analytics Internship Deliverables",
    organization: "3Skill",
    year: "2024",
    context: "Completed 3 end-to-end analytical project deliverables across urban mobility, air quality, and retail footwear.",
    type: "Internship"
  },
  {
    name: "Future Interns Machine Learning Internship",
    organization: "Future Interns",
    year: "2024",
    context: "Constructed supervised ML classification pipelines with documented precision, recall, and evaluation metrics.",
    type: "Internship"
  }
];

export const education = {
  degree: "Bachelor of Engineering — Computer Science Engineering",
  college: "Sri Venkateswara College of Engineering (SVCE)",
  location: "Chennai, India",
  graduation: "Expected Graduation: 2028",
  cgpa: "8.1 / 10",
  currentStatus: "Current Semester: 5 (Third Year)",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (C++ / Python)",
    "Probability & Statistics",
    "Operating Systems",
    "Computer Networks",
    "Data Science Fundamentals"
  ]
};

export const leadership: LeadershipRole = {
  title: "Membership Chair",
  organization: "SVCE ACM Student Chapter",
  period: "2026–2027",
  previousRole: "Previously Design Executive (2025–2026)",
  description: "Elected as Membership Chair following contributions as Design Executive. Lead member onboarding, student engagement initiatives, and coordinate technical events.",
  achievements: [
    "Elected to Membership Chair after successful tenure as Design Executive.",
    "Coordinated technical student onboarding and hands-on coding workshops.",
    "Led visual assets and communications for chapter hackathons, symposiums, and guest lectures."
  ]
};
