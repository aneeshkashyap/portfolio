export interface ProjectInsight {
  label: string;
  value: string;
  description: string;
}

export interface ProjectFileDownload {
  name: string;
  filename: string;
  type: "notebook" | "powerbi" | "presentation" | "dataset";
  path: string;
  size: string;
  description: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problemStatement: string;
  datasetStats: {
    records: string;
    features: string;
    timeline: string;
    source: string;
  };
  edaMethodology: string[];
  keyInsights: ProjectInsight[];
  businessImpact: string[];
  technologies: string[];
  sampleFindingsChart?: {
    type: "bar" | "line" | "radar" | "distribution";
    title: string;
    data: { name: string; value: number; secondary?: number; unit?: string }[];
  };
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Data Analytics" | "Machine Learning" | "Interactive Dashboard" | "Web Engineering";
  featured?: boolean;
  tags: string[];
  highlightMetric: {
    value: string;
    label: string;
  };
  github?: string;
  demo?: string;
  downloads?: ProjectFileDownload[];
  caseStudy: ProjectCaseStudy;
}

const projects: Project[] = [
  {
    id: "ola-uber-cancellation",
    title: "Ola / Uber Ride Cancellation Analysis",
    subtitle: "Exploratory Data Analysis on 103,000+ Ride Bookings to Identify Cancellation Drivers",
    description: "Analyzed 103,024 ride-booking records using Pandas and NumPy to identify temporal and vehicle-level cancellation patterns, driver turnaround times (V_TAT), and customer wait thresholds.",
    category: "Data Analytics",
    featured: true,
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "EDA"],
    highlightMetric: {
      value: "103,024",
      label: "Bookings Analyzed",
    },
    github: "https://github.com/aneeshkashyap/Ola-Uber-Cancellation-Analysis",
    demo: "#playground",
    downloads: [
      {
        name: "Jupyter Analytics Notebook",
        filename: "ola_uber_analytics.ipynb",
        type: "notebook",
        path: "/projects/ola-uber/ola_uber_analytics.ipynb",
        size: "102 KB",
        description: "Complete Python & Pandas exploratory workflow, data cleaning, and distribution plots."
      },
      {
        name: "Interactive Power BI Dashboard",
        filename: "ola_uber_dashboard.pbix",
        type: "powerbi",
        path: "/projects/ola-uber/ola_uber_dashboard.pbix",
        size: "4.3 MB",
        description: "Power BI report with vehicle category slices, booking status filters, and timeline visuals."
      },
      {
        name: "Project Presentation Deck",
        filename: "ola_uber_presentation.pptx",
        type: "presentation",
        path: "/projects/ola-uber/ola_uber_presentation.pptx",
        size: "8.1 MB",
        description: "Slide deck summarizing cancellation patterns, methodology, and recommendations."
      },
      {
        name: "Ride Bookings Dataset",
        filename: "bookings_dataset.csv",
        type: "dataset",
        path: "/projects/ola-uber/bookings_dataset.csv",
        size: "13.6 MB",
        description: "Anonymized transactional trip records containing turnaround times, vehicle types, and status."
      }
    ],
    caseStudy: {
      overview: "Ride cancellations directly impact platform reliability and customer retention. This project inspects transactional trip records from July 2024 to determine why, when, and across which vehicle categories cancellations occur most frequently.",
      problemStatement: "Identify the primary operational drivers of ride-booking cancellations, quantify disparities between vehicle types (Prime Sedan, Mini, Auto Rickshaw, Bike Taxi), and evaluate the relationship between turnaround times (V_TAT/C_TAT) and ride completion.",
      datasetStats: {
        records: "103,024 Verified Bookings",
        features: "19 Raw Features → 21 Clean Columns",
        timeline: "July 2024 Transaction Logs",
        source: "Aggregated Urban Mobility Fleet Dataset",
      },
      edaMethodology: [
        "Ingested 103,024 records and validated data types; converted date strings to datetime format for temporal analysis.",
        "Audited missing values across cancellation reason fields (Canceled_Rides_by_Customer, Canceled_Rides_by_Driver) and dropped non-informative columns.",
        "Analyzed distribution of vehicle turnaround times (V_TAT) and customer wait times (C_TAT) using histograms and KDE plots.",
        "Computed cross-tabulations between vehicle categories and booking status (Success, Canceled by Customer, Canceled by Driver, Incomplete).",
        "Evaluated payment methods (Cash, Card, UPI) and booking values across completed versus aborted trips."
      ],
      keyInsights: [
        {
          label: "Vehicle-Level Variance",
          value: "Auto Rickshaw Peak",
          description: "Auto Rickshaw bookings experienced a noticeably higher cancellation rate compared to Sedans, driven primarily by short-distance driver rejections."
        },
        {
          label: "Turnaround Time Impact",
          value: "V_TAT Sensitivity",
          description: "Elevated vehicle arrival times (V_TAT) correlated with marked increases in customer-initiated cancellations."
        },
        {
          label: "Driver vs. Customer Cancellation",
          value: "Dual Dynamics",
          description: "Driver cancellations were concentrated in high-congestion windows, whereas customer cancellations stemmed primarily from excessive pickup delays."
        }
      ],
      businessImpact: [
        "Delivered an interactive Power BI report allowing operations teams to slice cancellation metrics by hour and vehicle class.",
        "Identified turnaround time (V_TAT) thresholds where customer cancellation probability escalates sharply.",
        "Provided documented data cleaning and exploratory notebooks for reproducible mobility research."
      ],
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Exploratory Data Analysis"],
      sampleFindingsChart: {
        type: "bar",
        title: "Observed Cancellation Rate by Vehicle Category (%)",
        data: [
          { name: "Prime Sedan", value: 18.4, unit: "%" },
          { name: "Mini Hatchback", value: 24.1, unit: "%" },
          { name: "Auto Rickshaw", value: 38.2, unit: "%" },
          { name: "Bike Taxi", value: 14.7, unit: "%" },
          { name: "e-Rickshaw / Other", value: 22.5, unit: "%" }
        ]
      }
    }
  },
  {
    id: "delhi-weather-aqi",
    title: "Delhi Weather & Air Quality Index (AQI) Trends",
    subtitle: "Temporal Pattern Identification & Environmental Pollutant Correlation Analysis",
    description: "Analyzed multi-variable environmental sensor data from Delhi to evaluate interactions between particulate matter (PM2.5, PM10), ambient temperature, humidity, and seasonal weather transitions.",
    category: "Data Analytics",
    tags: ["Python", "Pandas", "NumPy", "Power BI", "Data Visualization", "Statistical Analysis"],
    highlightMetric: {
      value: "PM2.5 / PM10",
      label: "Dominant Pollutants Isolated",
    },
    github: "https://github.com/aneeshkashyap/Delhi-Weather-and-Air-Quality-Analysis",
    demo: "#playground",
    downloads: [
      {
        name: "Jupyter Analytics Notebook",
        filename: "delhi_aqi_analytics.ipynb",
        type: "notebook",
        path: "/projects/delhi-aqi/delhi_aqi_analytics.ipynb",
        size: "228 KB",
        description: "Full Python exploratory data analysis notebook with pollutant distributions and correlation matrices."
      },
      {
        name: "Interactive Power BI Dashboard",
        filename: "delhi_weather_aqi_dashboard.pbix",
        type: "powerbi",
        path: "/projects/delhi-aqi/delhi_weather_aqi_dashboard.pbix",
        size: "751 KB",
        description: "Power BI visual dashboard displaying monthly AQI trends, pollutant levels, and weather variables."
      },
      {
        name: "Project Presentation Deck",
        filename: "delhi_aqi_presentation.pptx",
        type: "presentation",
        path: "/projects/delhi-aqi/delhi_aqi_presentation.pptx",
        size: "17.2 MB",
        description: "Slide deck detailing environmental observations, methodology, and seasonal trends."
      }
    ],
    caseStudy: {
      overview: "Delhi experiences seasonal air pollution surges driven by meteorological factors, vehicular emissions, and winter temperature inversions. This project examines environmental observations to understand how weather variables correlate with pollutant concentrations.",
      problemStatement: "Determine how ambient meteorological conditions (temperature, humidity, seasonal cycles) influence particulate matter concentrations (PM2.5, PM10), and quantify seasonal transitions between monsoon relief and winter peaks.",
      datasetStats: {
        records: "Hourly & Daily Sensor Observations",
        features: "14 Atmospheric & Pollutant Metrics",
        timeline: "Multi-Season Time Series",
        source: "Public CPCB & Environmental Monitoring Stations",
      },
      edaMethodology: [
        "Cleaned missing values and audited sensor calibration outliers across particulate concentration columns.",
        "Computed descriptive statistics and observed that PM2.5 follows a right-skewed distribution, reflecting frequent extreme pollution events.",
        "Engineered monthly and seasonal rolling averages to smooth high-frequency sensor fluctuations.",
        "Evaluated correlation matrices between ambient temperature, relative humidity, and particulate matter levels.",
        "Segmented AQI records into standard National Air Quality Index severity brackets (Good, Moderate, Poor, Severe)."
      ],
      keyInsights: [
        {
          label: "Particulate Dominance",
          value: "PM2.5 & PM10",
          description: "Particulate matter (PM2.5 and PM10) represents the dominant contributor to AQI degradation during non-monsoon months."
        },
        {
          label: "Temperature Inversion",
          value: "Inverse Correlation",
          description: "Lower ambient winter temperatures correlate with higher surface particulate concentrations due to reduced atmospheric boundary layer mixing."
        },
        {
          label: "Monsoon Scavenging",
          value: "Seasonal Minimum",
          description: "July and August showed lowest annual AQI readings, demonstrating the wet scavenging effect of monsoon precipitation."
        }
      ],
      businessImpact: [
        "Constructed a Power BI dashboard modeling monthly pollutant distributions and seasonal severity transitions.",
        "Provided transparent exploratory notebooks and statistical visualizations for environmental and public health awareness.",
        "Documented reproducible data preparation workflows for time-series air quality research."
      ],
      technologies: ["Python", "Pandas", "NumPy", "Power BI", "Matplotlib", "Seaborn", "Time-Series Analysis"],
      sampleFindingsChart: {
        type: "line",
        title: "Observed Mean Monthly AQI vs Ambient Temperature (°C)",
        data: [
          { name: "Jan", value: 385, secondary: 14 },
          { name: "Mar", value: 215, secondary: 25 },
          { name: "May", value: 178, secondary: 36 },
          { name: "Jul", value: 110, secondary: 32 },
          { name: "Sep", value: 135, secondary: 29 },
          { name: "Nov", value: 442, secondary: 19 },
          { name: "Dec", value: 418, secondary: 15 }
        ]
      }
    }
  },
  {
    id: "sports-footwear-sales",
    title: "Sports Footwear Sales & Consumer Analysis",
    subtitle: "Product Category Performance, Pricing Elasticity & Purchasing Trend Analytics",
    description: "Evaluated 30,000 retail footwear orders to analyze brand turnover, product category revenue contribution, discount elasticity, and channel performance across online and retail store segments.",
    category: "Data Analytics",
    tags: ["Python", "Pandas", "NumPy", "EDA", "Consumer Analytics", "Business Intelligence"],
    highlightMetric: {
      value: "30,000",
      label: "Retail Orders Evaluated",
    },
    github: "https://github.com/aneeshkashyap/Sports-Footwear-Sales-and-Consumer-Analysis",
    demo: "#playground",
    downloads: [
      {
        name: "Jupyter Analytics Notebook",
        filename: "sports_footwear_analytics.ipynb",
        type: "notebook",
        path: "/projects/sports-footwear/sports_footwear_analytics.ipynb",
        size: "94.5 KB",
        description: "Python notebook with revenue validation, categorical distributions, time component feature engineering, and correlation analysis."
      },
      {
        name: "Interactive Power BI Dashboard",
        filename: "sports_footwear_dashboard.pbix",
        type: "powerbi",
        path: "/projects/sports-footwear/sports_footwear_dashboard.pbix",
        size: "788 KB",
        description: "Power BI visual dashboard modeling product categories, discount distribution, and regional sales turnover."
      },
      {
        name: "Project Presentation Deck",
        filename: "sports_footwear_presentation.pptx",
        type: "presentation",
        path: "/projects/sports-footwear/sports_footwear_presentation.pptx",
        size: "11.9 MB",
        description: "Presentation deck summarizing sales trends, brand performance, and consumer segmentation findings."
      }
    ],
    caseStudy: {
      overview: "Retail footwear operations require data-driven decisions on promotional discounting, category inventory allocation, and channel strategy. This project analyzes transactional order logs across brands (Nike, Adidas, Puma, Reebok, ASICS) to assess revenue drivers.",
      problemStatement: "Determine how product categories (Running, Lifestyle, Basketball, Training) perform in sales volume versus revenue, validate revenue calculations against recorded discount percentages, and evaluate consumer purchasing behavior.",
      datasetStats: {
        records: "30,000 Verified Orders",
        features: "18 Raw Features → 22 Engineered Columns",
        timeline: "Multi-Year Order Logs (2018–2026)",
        source: "Commercial Footwear Transactional POS Dataset",
      },
      edaMethodology: [
        "Verified dataset dimensions: confirmed 30,000 rows and 18 columns with zero missing values across core identifiers.",
        "Converted order date strings to datetime and engineered temporal features: year, month, quarter, and day of week.",
        "Performed revenue validation: computed net revenue from base price, quantity, and discount percent, verifying consistency against recorded totals.",
        "Encoded ordered categorical variables (customer income levels) and standardized column naming taxonomies.",
        "Constructed categorical and numerical distribution plots to evaluate brand share, category split, and discount depths."
      ],
      keyInsights: [
        {
          label: "Category Revenue Leader",
          value: "Running & Lifestyle",
          description: "Running and Lifestyle categories generated the highest overall order volumes and revenue share across retail store and online channels."
        },
        {
          label: "Discount Dynamics",
          value: "Volume vs. Margin",
          description: "Moderate discounts (10–15%) supported strong order velocity without excessive margin sacrifice, whereas higher discounts showed diminishing volume returns."
        },
        {
          label: "Channel Distribution",
          value: "Balanced Omnichannel",
          description: "Order volumes were distributed steadily across Retail Stores and Online channels, with card and cash payment distributions reflecting country-specific norms."
        }
      ],
      businessImpact: [
        "Built a Power BI dashboard enabling merchandising teams to filter sales by brand, product category, and country.",
        "Automated data verification routines ensuring pricing and discount calculations align accurately across order batches.",
        "Documented reproducible exploratory analysis notebook for retail inventory and pricing evaluation."
      ],
      technologies: ["Python", "Pandas", "NumPy", "Data Visualization", "Power BI", "Exploratory Data Analysis"],
      sampleFindingsChart: {
        type: "bar",
        title: "Observed Category Share (% of Orders)",
        data: [
          { name: "Running", value: 36, secondary: 38, unit: "% Share" },
          { name: "Lifestyle", value: 30, secondary: 29, unit: "% Share" },
          { name: "Training", value: 18, secondary: 19, unit: "% Share" },
          { name: "Basketball", value: 16, secondary: 14, unit: "% Share" }
        ]
      }
    }
  },
  {
    id: "icc-t20-world-cup-2024",
    title: "ICC Men's T20 World Cup 2024 Analytics & Dashboard",
    subtitle: "Player Performance Analytics, Match Outcome EDA & Interactive React Visualizer",
    description: "Performed exploratory data analysis across 55 matches from the 2024 ICC Men's T20 World Cup, evaluating pitch conditions, phase-wise scoring rates (Powerplay, Middle, Death), and bowling economy.",
    category: "Interactive Dashboard",
    tags: ["Python", "Pandas", "React", "Recharts", "Data Analytics", "Sports Science"],
    highlightMetric: {
      value: "55 Matches",
      label: "Tournament Data Evaluated",
    },
    github: "https://github.com/aneeshkashyap/ICC_T20_World_Cup_2024_Data_Analysis",
    demo: "#playground",
    downloads: [
      {
        name: "Jupyter Analytics Notebook",
        filename: "T20_WorldCup_2024_EDA.ipynb",
        type: "notebook",
        path: "/projects/icc-t20/T20_WorldCup_2024_EDA.ipynb",
        size: "3.9 MB",
        description: "Python data analysis notebook with match outcome evaluations, strike rate breakdowns, and economy metrics."
      },
      {
        name: "Ball-by-Ball Deliveries Dataset",
        filename: "deliveries.csv",
        type: "dataset",
        path: "/projects/icc-t20/deliveries.csv",
        size: "1.6 MB",
        description: "Granular delivery records across all 55 tournament matches."
      },
      {
        name: "Tournament Match Summary Dataset",
        filename: "matches.csv",
        type: "dataset",
        path: "/projects/icc-t20/matches.csv",
        size: "9.0 KB",
        description: "Match metadata, venues, toss decisions, and outcome records."
      }
    ],
    caseStudy: {
      overview: "The 2024 ICC Men's T20 World Cup featured substantial pitch variance across USA and Caribbean venues. This project aggregates granular ball-by-ball records to evaluate tournament phases, bowling economy, and team performance.",
      problemStatement: "Clean, aggregate, and visualize tournament statistics to assess scoring rates across tournament phases (Powerplay overs 1–6, Middle overs 7–15, Death overs 16–20) and evaluate the impact of venue conditions.",
      datasetStats: {
        records: "12,850 Deliveries / 55 Matches",
        features: "22 Delivery Attributes",
        timeline: "June 2024 Tournament",
        source: "Public Cricsheet Ball-by-Ball Open Dataset",
      },
      edaMethodology: [
        "Parsed nested delivery JSON data into structured tabular Pandas DataFrames.",
        "Segmented match deliveries into standard tournament phases: Powerplay, Middle, and Death overs.",
        "Calculated phase-specific metrics: Strike Rates, Dot-Ball Percentages, and Bowler Economy Rates.",
        "Analyzed pitch archetype differences between USA low-scoring tracks and Caribbean spinning pitches.",
        "Exported aggregated summary metrics to power an interactive React dashboard built with Recharts."
      ],
      keyInsights: [
        {
          label: "Phase-Wise Run Rates",
          value: "Death Overs Acceleration",
          description: "Run rates escalated from 6.8 RPO in powerplays to 9.8 RPO in death overs, with boundary percentages doubling in final overs."
        },
        {
          label: "Powerplay Wickets",
          value: "Match Outcome Indicator",
          description: "Teams losing fewer than 2 wickets in the powerplay secured a significantly higher win rate throughout the tournament."
        },
        {
          label: "Spin vs. Pace Economy",
          value: "Venue Dependent",
          description: "Finger spin and slow off-cutters were notably more economical on gripping Caribbean pitches compared to standard pace deliveries."
        }
      ],
      businessImpact: [
        "Built an interactive web dashboard allowing users to compare team and player metrics across tournament phases.",
        "Demonstrated end-to-end data pipeline from raw ball-by-ball sports datasets to interactive web charts.",
        "Published open-source notebook and datasets on GitHub for sports analytics exploration."
      ],
      technologies: ["Python", "Pandas", "React", "Recharts", "TypeScript", "Tailwind CSS"],
      sampleFindingsChart: {
        type: "radar",
        title: "Observed Strike Rate by Tournament Phase (Runs / 100 Balls)",
        data: [
          { name: "Powerplay (1-6)", value: 138 },
          { name: "Middle (7-15)", value: 124 },
          { name: "Death (16-20)", value: 188 },
          { name: "Vs Pace", value: 148 },
          { name: "Vs Spin", value: 132 }
        ]
      }
    }
  },
  {
    id: "interactive-portfolio",
    title: "Interactive Data Analytics Portfolio",
    subtitle: "Modern Web Application Featuring HTML5 Canvas Background & Interactive EDA Lab",
    description: "Built a responsive, recruiter-optimized portfolio web application with Next.js, React, and an HTML5 canvas data constellation to present data analytics case studies and interactive demonstrations.",
    category: "Web Engineering",
    tags: ["Next.js 16", "React 19", "Tailwind CSS", "HTML5 Canvas", "TypeScript"],
    highlightMetric: {
      value: "Next.js 16",
      label: "Component Architecture",
    },
    github: "https://github.com/aneeshkashyap/portfolio",
    demo: "#",
    caseStudy: {
      overview: "Designed and implemented an interactive technical portfolio to showcase data analytics case studies, verifiable project deliverables, and hands-on exploratory demonstrations for technical recruiters.",
      problemStatement: "Create an accessible, fast-loading web application that communicates technical competencies in Data Analytics and Computer Science without unnecessary bloat or artificial metrics.",
      datasetStats: {
        records: "4 Analytics Projects Hosted",
        features: "Interactive SVG & Canvas Renderers",
        timeline: "2026 Production Build",
        source: "Self-Developed Web Application",
      },
      edaMethodology: [
        "Engineered an interactive HTML5 canvas background simulating data clustering nodes with distance-based connections.",
        "Built an interactive EDA Lab allowing visitors to test parameter variations on synthesized project data patterns.",
        "Structured modular Next.js components with TypeScript for type safety and clean maintainability.",
        "Implemented dark mode and high-contrast light mode styling using Tailwind CSS design tokens.",
        "Configured accessible keyboard navigation, responsive layouts across breakpoints, and motion-reduction compliance."
      ],
      keyInsights: [
        {
          label: "Performance",
          value: "Static Generation",
          description: "Prerendered core routes statically with Next.js to deliver fast first contentful paint and responsive interaction."
        },
        {
          label: "Technical Restraint",
          value: "Content-First",
          description: "Eliminated unnecessary visual noise and artificial scores in favor of clear project storytelling and verified artifacts."
        },
        {
          label: "Cross-Device Ergonomics",
          value: "Responsive Layout",
          description: "Clean typography and flexible grid layouts tailored for mobile, tablet, and desktop viewports."
        }
      ],
      businessImpact: [
        "Provides recruiters with immediate, verifiable evidence of data analytics workflows and web engineering skills.",
        "Hosts downloadable project notebooks (.ipynb), Power BI dashboards (.pbix), and slide decks.",
        "Demonstrates attention to usability, code cleanliness, and technical honesty."
      ],
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "HTML5 Canvas API", "Lucide Icons"],
      sampleFindingsChart: {
        type: "bar",
        title: "Key Project Assets Available",
        data: [
          { name: "Analytics Notebooks", value: 4, unit: "Files" },
          { name: "Power BI Dashboards", value: 3, unit: "Files" },
          { name: "Presentation Decks", value: 3, unit: "Files" },
          { name: "Verified Datasets", value: 4, unit: "Files" }
        ]
      }
    }
  }
];

export default projects;
