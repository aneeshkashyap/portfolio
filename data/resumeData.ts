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

export interface SkillItem {
  name: string;
  level: "Core" | "Advanced" | "Working Knowledge";
  highlight?: boolean;
  context?: string;
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

export const personalInfo: PersonalInfo = {
  name: "ANEESH KASHYAP K S",
  role: "Data Analyst & Analytics Engineer",
  subRole: "Computer Science Engineering Student",
  email: "ksaneeshkashyap@gmail.com",
  phone: "+91 7397303538",
  location: "Chennai, India",
  github: "https://github.com/aneeshkashyap",
  linkedin: "https://linkedin.com/in/aneesh-kashyap-k-s",
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
    role: "Machine Learning Intern",
    company: "Future Interns",
    duration: "1 Month",
    period: "Internship",
    badge: "ML Engineering",
    bullets: [
      "Developed end-to-end machine learning pipelines for customer churn classification, sales forecasting, and a semantic support chatbot.",
      "Engineered preprocessing routines, feature transformations, hyperparameter tuning, and cross-validated model evaluation metrics.",
      "Integrated prediction endpoints into interactive web interfaces using Streamlit and Python for stakeholder demonstration."
    ],
    keyHighlights: [
      "Customer Churn Web App: Feature importance evaluation and risk classification",
      "Sales Forecasting: Time-series trend analysis and rolling baseline projections",
      "Customer Support Chatbot: Semantic response retrieval with context handling"
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "NLP"]
  },
  {
    role: "Data Analytics Intern",
    company: "3Skill",
    duration: "2 Months",
    period: "Internship",
    badge: "Data Analytics & EDA",
    bullets: [
      "Conducted exploratory data analysis on 103,000+ ride bookings to isolate cancellation patterns across vehicle categories and turnaround times.",
      "Analyzed multi-variable environmental sensor data from Delhi CPCB to quantify temporal PM2.5 and PM10 variations and seasonal shifts.",
      "Evaluated 30,000 retail footwear orders to determine product category turnover, pricing elasticity, and revenue concentration across channels."
    ],
    keyHighlights: [
      "Ola / Uber Analysis: Evaluated V_TAT wait-time thresholds and vehicle cancellation distributions",
      "Delhi AQI Trends: Modeled particulate pollution behavior vs. ambient seasonal variables",
      "Footwear Sales Analytics: Identified category revenue share and discount sensitivity patterns"
    ],
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "EDA"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Data Analytics",
    description: "End-to-end data manipulation, validation, hypothesis formulation, and exploratory analysis.",
    iconName: "Binary",
    skills: [
      { name: "Python", level: "Core", highlight: true, context: "Primary language across all data workflows" },
      { name: "Pandas", level: "Core", highlight: true, context: "Data manipulation, grouping, aggregations" },
      { name: "NumPy", level: "Core", highlight: true, context: "Vectorized calculations & numerical arrays" },
      { name: "SQL", level: "Core", highlight: true, context: "Relational queries, joins, window functions" },
      { name: "Exploratory Data Analysis (EDA)", level: "Core", highlight: true, context: "Distribution checks, correlations, outlier audit" },
      { name: "Data Cleaning & Preprocessing", level: "Core", highlight: true, context: "Null imputation, type casting, standardization" },
      { name: "Feature Engineering", level: "Advanced", context: "Temporal derivations, encoding, ratio features" },
      { name: "Statistical Analysis", level: "Advanced", context: "Summary statistics, variance, hypothesis testing" }
    ]
  },
  {
    category: "Data Visualization",
    description: "Transforming complex datasets into clear, informative charts, reports, and interactive dashboards.",
    iconName: "BarChart3",
    skills: [
      { name: "Power BI", level: "Core", highlight: true, context: "Interactive business reports & data modeling" },
      { name: "Matplotlib", level: "Core", context: "Publication-grade exploratory plots" },
      { name: "Seaborn", level: "Core", highlight: true, context: "Statistical distributions, heatmaps, pairplots" },
      { name: "Plotly", level: "Working Knowledge", context: "Dynamic web-ready chart visualizers" },
      { name: "Interactive Dashboards", level: "Advanced", highlight: true, context: "Client-side responsive analytical views" }
    ]
  },
  {
    category: "Machine Learning",
    description: "Supervised classification, regression models, time-series baselines, and evaluation metrics.",
    iconName: "BrainCircuit",
    skills: [
      { name: "Scikit-learn", level: "Core", highlight: true, context: "Model pipelines, transformers, estimators" },
      { name: "Classification", level: "Advanced", highlight: true, context: "Churn prediction, logistic, decision trees" },
      { name: "Regression", level: "Advanced", context: "Continuous value estimation & price modeling" },
      { name: "Model Evaluation", level: "Advanced", highlight: true, context: "Precision, recall, F1, ROC-AUC, RMSE" },
      { name: "Time-Series Forecasting", level: "Working Knowledge", context: "Rolling windows, trend analysis" }
    ]
  },
  {
    category: "Programming",
    description: "Computer science foundations, algorithmic problem solving, and object-oriented design.",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Core", highlight: true, context: "Data scripting, OOP, libraries" },
      { name: "Java", level: "Working Knowledge", context: "Academic coursework & OOP principles" },
      { name: "JavaScript / TypeScript", level: "Advanced", highlight: true, context: "Interactive dashboards & frontend logic" },
      { name: "C++", level: "Working Knowledge", context: "Core data structures & algorithm implementation" }
    ]
  },
  {
    category: "Databases",
    description: "Relational data modeling, schema understanding, and structured querying.",
    iconName: "Layout",
    skills: [
      { name: "MySQL", level: "Core", highlight: true, context: "Relational queries, indexing, constraints" },
      { name: "PostgreSQL", level: "Working Knowledge", context: "Structured analytics and aggregations" },
      { name: "SQLite", level: "Core", context: "Lightweight local analytical storage" }
    ]
  },
  {
    category: "Web / Engineering",
    description: "Modern web frontends, component architecture, version control, and collaboration.",
    iconName: "Cpu",
    skills: [
      { name: "React", level: "Advanced", highlight: true, context: "Component state, hooks, interactive UI" },
      { name: "Next.js", level: "Advanced", highlight: true, context: "SSR, static generation, app router" },
      { name: "Tailwind CSS", level: "Advanced", context: "Responsive design & design system tokens" },
      { name: "Git", level: "Core", highlight: true, context: "Branching, commits, workflow management" },
      { name: "GitHub", level: "Core", highlight: true, context: "Repository hosting, documentation, releases" }
    ]
  },
  {
    category: "AI-Assisted Development",
    description: "Using AI-assisted developer tools for rapid prototyping, debugging, documentation, and development acceleration.",
    iconName: "Sparkles",
    skills: [
      { name: "Claude Code", level: "Advanced", highlight: true, context: "Codebase refactoring, terminal workflow" },
      { name: "AI-Assisted Coding", level: "Advanced", highlight: true, context: "Rapid prototyping & test-case generation" },
      { name: "Prompt Engineering", level: "Advanced", context: "Structured prompting for analytical tasks" },
      { name: "Jupyter Notebook", level: "Core", highlight: true, context: "Reproducible research & data exploration" }
    ]
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
