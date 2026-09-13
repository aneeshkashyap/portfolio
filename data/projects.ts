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

export interface CaseStudyInterpretation {
  type: "OBSERVED" | "INFERRED" | "RECOMMENDATION";
  headline: string;
  detail: string;
}

export interface CaseStudyFinding {
  title: string;
  stat: string;
  finding: string;
  evidence: string;
}

export interface VisualEvidenceItem {
  title: string;
  subtitle: string;
  caption: string;
  type: "bar" | "distribution" | "comparison" | "line";
  data: {
    label: string;
    value: number;
    secondary?: number;
    unit?: string;
  }[];
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
  
  // Enhanced 8-Part Case Study Fields
  problemDescription?: string;
  datasetDetails?: {
    records: string;
    features: string;
    dimensions: string;
    keyFields: string[];
    sourceNote: string;
  };
  dataPreparationSteps?: string[];
  analyticalMethods?: string[];
  verifiedFindings?: CaseStudyFinding[];
  interpretations?: CaseStudyInterpretation[];
  visualEvidence?: VisualEvidenceItem[];
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
  // Card-Level Summary (Problem, Method, Key Finding, Tools)
  problemSummary: string;
  methodSummary: string;
  findingSummary: string;
  toolsSummary: string[];
  
  github?: string;
  demo?: string;
  downloads?: ProjectFileDownload[];
  caseStudy: ProjectCaseStudy;
}

const projects: Project[] = [
  {
    id: "ola-uber-cancellation",
    title: "Ola / Uber Ride Cancellation Analysis",
    subtitle: "Exploratory Data Analysis on 103,000+ Ride Bookings to Identify Operational Cancellation Drivers",
    description: "Conducted an exploratory data analysis on 103,024 ride-booking records from July 2024 to determine why, when, and across which vehicle categories cancellations occur most frequently.",
    category: "Data Analytics",
    featured: true,
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "EDA"],
    highlightMetric: {
      value: "103,024 Bookings",
      label: "Verified Fleet Records",
    },
    problemSummary: "Ride non-fulfillment (37.9%) reduces completed trip volume, customer satisfaction, and driver fleet efficiency.",
    methodSummary: "Cleaned 103,024 records, audited TAT outliers, analyzed categorical cancellation reasons, and mapped driver vs. customer patterns.",
    findingSummary: "Driver cancellations (17.9%) outnumber customer cancellations (10.2%) by 1.75x; wait-time friction causes 39.5% of customer cancels.",
    toolsSummary: ["Python", "Pandas", "NumPy", "Seaborn", "Power BI"],
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
      problemStatement: "Identify the primary operational drivers of ride-booking cancellations, quantify disparities between vehicle types (Prime Sedan, Mini, Auto, Bike), and evaluate the relationship between turnaround times (V_TAT/C_TAT) and ride completion.",
      datasetStats: {
        records: "103,024 Verified Bookings",
        features: "19 Columns in Raw Dataset",
        timeline: "July 2024 Transaction Logs",
        source: "Aggregated Urban Mobility Fleet Dataset",
      },
      edaMethodology: [
        "Ingested 103,024 records; validated data types and verified that missing values are confined to conditional cancellation reason columns.",
        "Converted timestamp strings to native datetime format to extract hour of day, weekday/weekend indicators, and diurnal demand windows.",
        "Audited vehicle turnaround time (V_TAT) and customer wait time (C_TAT) distributions across completed and aborted rides.",
        "Computed cross-tabulations between 10 vehicle types and booking fulfillment status (Success, Canceled by Driver, Canceled by Customer, Driver Not Found).",
        "Quantified driver cancellation reasons (18,434 events) versus customer cancellation reasons (10,499 events)."
      ],
      keyInsights: [
        {
          label: "Overall Completion",
          value: "62.1% Success",
          description: "63,967 trips completed successfully, while 39,057 trips (37.9%) ended in driver cancellation, customer cancellation, or unallocated dispatch."
        },
        {
          label: "Driver vs Customer",
          value: "1.75x Driver Skew",
          description: "Drivers initiated 18,434 cancellations compared to 10,499 customer cancellations, highlighting driver-side dispatch friction as the primary non-fulfillment source."
        },
        {
          label: "Customer Wait Friction",
          value: "39.5% Wait-Driven",
          description: "Customer cancellations were dominated by excessive wait times ('Long wait time' at 2,152 and 'Driver is not moving' at 1,997)."
        }
      ],
      businessImpact: [
        "Delivered an interactive Power BI report allowing operations teams to slice cancellation metrics by hour and vehicle class.",
        "Identified turnaround time (V_TAT) thresholds where customer cancellation probability escalates sharply.",
        "Provided documented data cleaning and exploratory notebooks for reproducible mobility research."
      ],
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Exploratory Data Analysis"],
      
      // 01 — PROBLEM
      problemDescription: "Ride cancellations directly degrade gross booking value, inflate operational dispatch overhead, and erode rider trust. In dense urban mobility networks, trips are aborted due to driver reluctance, excessive pickup wait times, or supply mismatches. This study investigates the empirical drivers behind 39,057 non-completed bookings out of 103,024 requests to determine actionable levers for operations teams.",
      
      // 02 — DATA
      datasetDetails: {
        records: "103,024 Transactional Bookings",
        features: "19 Core Attributes",
        dimensions: "10 Vehicle Classes, 4 Booking Statuses, 10 Cancellation Categories",
        keyFields: ["Booking_ID", "Booking_Status", "Vehicle_Type", "V_TAT (Vehicle Turnaround)", "C_TAT (Customer Wait)", "Canceled_Rides_by_Customer", "Canceled_Rides_by_Driver", "Ride_Distance", "Booking_Value"],
        sourceNote: "Anonymized transactional ride-hailing logs recorded across urban transit routes in July 2024."
      },
      
      // 03 — DATA PREPARATION
      dataPreparationSteps: [
        "Missing-Value Verification: Verified that missing cells in Canceled_Rides_by_Customer (92,525 nulls) and Canceled_Rides_by_Driver (84,590 nulls) represent completed rides where cancellations were inapplicable.",
        "Datetime Normalization: Parsed 'Date' and 'Time' fields into unified timestamps; extracted hour-of-day (0–23) and weekday indices.",
        "Categorical Integrity: Standardized vehicle categories across 10 classes (Prime Sedan, Mini, Auto, Bike, eBike, Uber Go, Uber Premier, etc.).",
        "Turnaround Time (TAT) Validation: Audited numeric distributions of V_TAT (vehicle arrival time) and C_TAT (customer wait time) to isolate zero/negative anomalies."
      ],
      
      // 04 — ANALYSIS
      analyticalMethods: [
        "Exploratory Data Analysis (EDA): Computed descriptive summaries, skewness, and frequency tables for all numeric and categorical attributes.",
        "Fulfillment Breakdown: Segmented 103,024 bookings across 4 mutual statuses: Success (62.1%), Canceled by Driver (17.9%), Canceled by Customer (10.2%), and Driver Not Found (9.8%).",
        "Driver Cancellation Profiling: Aggregated 18,434 driver cancellation occurrences across 5 specific stated reasons.",
        "Customer Cancellation Profiling: Analyzed 10,499 customer cancellations to quantify sensitivity to wait duration and vehicle movement.",
        "Fleet Comparison: Computed non-completion rates across 10 vehicle types to measure category-level dispatch stability."
      ],
      
      // 05 — KEY FINDINGS
      verifiedFindings: [
        {
          title: "Overall Fulfillment Baseline",
          stat: "62.1% Completed",
          finding: "Out of 103,024 ride requests, 63,967 completed successfully, leaving 37.9% non-fulfillment.",
          evidence: "Verified counts: Success (63,967), Driver Canceled (18,434), Customer Canceled (10,499), Driver Not Found (10,124)."
        },
        {
          title: "Driver-Side Cancellation Dominance",
          stat: "1.75x Driver Ratio",
          finding: "Driver-initiated cancellations exceed customer cancellations by 1.75x (18,434 vs. 10,499).",
          evidence: "Driver cancellations represent 47.2% of all non-completed requests, demonstrating that supply willingness is the largest bottleneck."
        },
        {
          title: "Wait Time & Immobility Drive Customer Friction",
          stat: "39.5% of Customer Cancels",
          finding: "Customer cancellations are heavily concentrated around excessive arrival wait times and stationary drivers.",
          evidence: "'Long wait time' (2,152) and 'Driver is not moving' (1,997) together account for 4,149 of 10,499 customer cancellations."
        },
        {
          title: "Driver Cancellation Motivations",
          stat: "5 Primary Driver Buckets",
          finding: "Driver cancellations distribute evenly across car/personal issues (3,730), asking customer to cancel (3,715), and address friction (3,671).",
          evidence: "Vehicle breakdown accounted for 3,627 cancels; driver not moving toward pickup accounted for 3,691 cancels."
        }
      ],
      
      // 06 — BUSINESS INTERPRETATION
      interpretations: [
        {
          type: "OBSERVED",
          headline: "Driver cancellations (17.9%) represent the largest single category of aborted trips.",
          detail: "Drivers initiated 18,434 cancellations across the 103,024 recorded requests, compared to 10,499 customer-initiated cancellations."
        },
        {
          type: "INFERRED",
          headline: "High driver cancellation rates reflect pickup distance mismatches or undesirable routes.",
          detail: "Categories like 'Driver asked customer to cancel' (3,715) and 'Driver not moving' (3,691) suggest that drivers accept bookings before evaluating destination desirability or pickup congestion."
        },
        {
          type: "RECOMMENDATION",
          headline: "Optimize dispatch radius to minimize initial vehicle turnaround time (V_TAT).",
          detail: "Operations teams should enforce tighter dispatch radiuses in high-congestion windows so drivers receive pickups closer to their current position, lowering rejection propensity."
        },
        {
          type: "OBSERVED",
          headline: "Wait-time friction accounts for 39.5% of all customer cancellations.",
          detail: "'Long wait time' (2,152) and 'Driver not moving' (1,997) are the two primary customer cancellation drivers, totaling 4,149 occurrences."
        },
        {
          type: "RECOMMENDATION",
          headline: "Calibrate dynamic ETA prediction models and introduce proactive re-dispatching.",
          detail: "If a vehicle remains stationary for more than 3 minutes after booking confirmation, prompt the rider with an updated ETA or automated re-dispatch to retain the customer."
        }
      ],
      
      // Visual Evidence
      visualEvidence: [
        {
          title: "Booking Status Distribution (103,024 Records)",
          subtitle: "Empirical breakdown of ride request outcomes in July 2024",
          caption: "62.1% of requested rides completed successfully; driver cancellations represented the largest single source of aborted trips.",
          type: "distribution",
          data: [
            { label: "Success (Completed)", value: 63967, unit: "trips (62.1%)" },
            { label: "Canceled by Driver", value: 18434, unit: "trips (17.9%)" },
            { label: "Canceled by Customer", value: 10499, unit: "trips (10.2%)" },
            { label: "Driver Not Found", value: 10124, unit: "trips (9.8%)" }
          ]
        },
        {
          title: "Primary Customer Cancellation Reasons",
          subtitle: "Analysis of 10,499 customer-initiated cancellations",
          caption: "Wait-time friction and driver immobility together accounted for approximately 40% of all customer cancellations.",
          type: "bar",
          data: [
            { label: "Long Wait Time", value: 2152, unit: "cancels (20.5%)" },
            { label: "Change of Plans", value: 2147, unit: "cancels (20.4%)" },
            { label: "Wrong Address Input", value: 2135, unit: "cancels (20.3%)" },
            { label: "AC Not Working", value: 2068, unit: "cancels (19.7%)" },
            { label: "Driver Not Moving", value: 1997, unit: "cancels (19.0%)" }
          ]
        },
        {
          title: "Primary Driver Cancellation Reasons",
          subtitle: "Analysis of 18,434 driver-initiated cancellations",
          caption: "Driver cancellations exhibited balanced distributions across personal/vehicle reasons, off-app requests, and navigation friction.",
          type: "bar",
          data: [
            { label: "Personal & Car Issue", value: 3730, unit: "cancels (20.2%)" },
            { label: "Driver Asked to Cancel", value: 3715, unit: "cancels (20.2%)" },
            { label: "Not Moving to Pickup", value: 3691, unit: "cancels (20.0%)" },
            { label: "Wrong Address / Drop", value: 3671, unit: "cancels (19.9%)" },
            { label: "Vehicle Breakdown", value: 3627, unit: "cancels (19.7%)" }
          ]
        }
      ]
    }
  },
  {
    id: "delhi-weather-aqi",
    title: "Delhi Weather & Air Quality Index (AQI) Trends",
    subtitle: "Temporal Pattern Identification & Environmental Pollutant Correlation Analysis",
    description: "Analyzed 52,560 hourly sensor observations from Delhi environmental monitoring stations to evaluate interactions between particulate matter (PM2.5, PM10), ambient temperature, humidity, and seasonal weather transitions.",
    category: "Data Analytics",
    tags: ["Python", "Pandas", "NumPy", "Power BI", "Data Visualization", "Statistical Analysis"],
    highlightMetric: {
      value: "52,560 Hourly Records",
      label: "Sensor Telemetry Evaluated",
    },
    problemSummary: "Delhi suffers severe seasonal air pollution spikes governed by complex atmospheric interactions between particulate matter and meteorology.",
    methodSummary: "Audited 52,560 hourly readings across 16 variables, calculated diurnal profiles, and computed Pearson correlation coefficients.",
    findingSummary: "Winter temperature drops strongly correlate with PM2.5 surges (r = -0.78); over 74% of severe smog occurs when wind speeds fall below 5 km/h.",
    toolsSummary: ["Python", "Pandas", "NumPy", "Power BI", "Seaborn"],
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
        records: "52,560 Continuous Hourly Observations",
        features: "16 Sensor Telemetry Attributes",
        timeline: "Full 2025 Calendar Monitoring Cycle",
        source: "Delhi Ambient Air Quality Stations (Anand Vihar, IGI, etc.)",
      },
      edaMethodology: [
        "Ingested 52,560 hourly sensor records and verified zero null entries across all 16 variables.",
        "Converted 'date_ist' into datetime and extracted seasonal and diurnal indices.",
        "Computed descriptive metrics: Mean AQI of 287.4, PM2.5 mean of 89.5 µg/m³, and PM10 mean of 300.5 µg/m³.",
        "Evaluated correlation matrices showing a significant inverse relationship (r = -0.78) between ambient surface temperature and PM2.5.",
        "Quantified atmospheric stagnation: confirmed that over 74% of severe smog events occurred at wind speeds below 5 km/h."
      ],
      keyInsights: [
        {
          label: "Thermal Inversion",
          value: "r = -0.78 Correlation",
          description: "Surface radiative cooling in winter prevents vertical atmospheric mixing, trapping particulate emissions near ground level."
        },
        {
          label: "Particulate Dominance",
          value: "PM2.5 & PM10",
          description: "Particulate matter represents the governing determinant in over 88% of days classified as Severe (AQI > 400)."
        },
        {
          label: "Station Variance",
          value: "Anand Vihar Peak",
          description: "Anand Vihar exhibited up to 2.4x higher particulate levels compared to central residential monitoring zones due to diesel transit corridors."
        }
      ],
      businessImpact: [
        "Constructed a Power BI dashboard modeling monthly pollutant distributions and seasonal severity transitions.",
        "Provided transparent exploratory notebooks and statistical visualizations for environmental and public health awareness.",
        "Documented reproducible data preparation workflows for time-series air quality research."
      ],
      technologies: ["Python", "Pandas", "NumPy", "Power BI", "Matplotlib", "Seaborn", "Time-Series Analysis"],
      
      // 01 — PROBLEM
      problemDescription: "The National Capital Region of Delhi faces persistent air quality crises, culminating in severe winter smog that endangers public health and exceeds World Health Organization guidelines. Understanding the exact statistical relationship between ambient weather variables and criteria pollutants is necessary for municipal planning and proactive policy intervention.",
      
      // 02 — DATA
      datasetDetails: {
        records: "52,560 Hourly Sensor Readings",
        features: "16 Environmental Variables",
        dimensions: "Continuous Hourly Time-Series across Multiple Monitoring Stations",
        keyFields: ["date_ist", "time_ist", "location", "temp_c", "humidity", "windspeed_kph", "aqi_index", "pm2_5", "pm10", "co", "no2"],
        sourceNote: "Continuous ambient air quality monitoring telemetry from official Delhi stations."
      },
      
      // 03 — DATA PREPARATION
      dataPreparationSteps: [
        "Ingested 52,560 hourly records and confirmed complete data coverage with zero missing values across numeric metrics.",
        "Standardized 'date_ist' strings into native datetime format using day-first convention.",
        "Pruned redundant text fields ('description' containing fixed WMO code strings).",
        "Audited particulate distributions: observed extreme right skewness (PM2.5 max 443.3 µg/m³, PM10 max 3,263.4 µg/m³)."
      ],
      
      // 04 — ANALYSIS
      analyticalMethods: [
        "Time-Series Analysis: Extracted monthly and seasonal averages to smooth high-frequency sensor noise.",
        "Parametric & Non-Parametric Correlation: Evaluated Pearson coefficients between temperature, wind velocity, humidity, and pollutants.",
        "Diurnal Decomposition: Analyzed 24-hour cycle patterns to identify morning and evening pollution peaks.",
        "Geospatial Profiling: Compared transit corridor stations (Anand Vihar, IGI) against residential baselines."
      ],
      
      // 05 — KEY FINDINGS
      verifiedFindings: [
        {
          title: "Baseline Environmental Load",
          stat: "287.4 Mean AQI",
          finding: "Average AQI across Delhi in 2025 stood at 287.4, well above satisfactory national thresholds.",
          evidence: "Median PM2.5 reached 76.4 µg/m³ (NAAQS safe annual limit is 40 µg/m³); PM10 averaged 300.5 µg/m³."
        },
        {
          title: "Thermal Trapping Dynamics",
          stat: "r = -0.78 Inversion",
          finding: "Low surface temperatures in winter directly suppress atmospheric mixing, driving severe particulate spikes.",
          evidence: "January recorded mean temperatures of 14°C alongside AQI averages exceeding 380, whereas summer months dropped below 180."
        },
        {
          title: "Wind Stagnation Threshold",
          stat: "< 5 km/h Trigger",
          finding: "Over 74% of critical pollution episodes occurred when surface wind speed fell below 5 km/h.",
          evidence: "Average wind speed was 6.6 km/h; calm night-time intervals caused local emission pooling."
        }
      ],
      
      // 06 — BUSINESS INTERPRETATION
      interpretations: [
        {
          type: "OBSERVED",
          headline: "Particulate exceedances dictate over 88% of Severe air quality days in Delhi.",
          detail: "PM2.5 and PM10 surges occur concurrently during calm winter months, far outstripping gaseous CO and NO2 impact."
        },
        {
          type: "INFERRED",
          headline: "Severe pollution events in Delhi are meteorologically triggered on top of steady baseline emissions.",
          detail: "Emission volumes remain relatively steady year-round; the extreme winter crisis is caused by thermal inversion and wind deceleration."
        },
        {
          type: "RECOMMENDATION",
          headline: "Shift from reactive emergency measures to predictive 48-hour GRAP activation.",
          detail: "Municipal authorities should trigger vehicular restrictions and misting cannons whenever temperatures drop below 15°C and forecast wind drops below 4 km/h."
        }
      ],
      
      visualEvidence: [
        {
          title: "Criteria Air Pollutant Baseline (52,560 Hourly Records)",
          subtitle: "Empirical means vs. NAAQS standard thresholds",
          caption: "Both fine (PM2.5) and coarse (PM10) particulates consistently exceed national safe standards throughout the year.",
          type: "bar",
          data: [
            { label: "Observed Mean AQI", value: 287.4, unit: "index (Safe <= 100)" },
            { label: "Observed Mean PM10", value: 300.5, unit: "µg/m³ (Safe <= 100)" },
            { label: "Observed Mean PM2.5", value: 89.5, unit: "µg/m³ (Safe <= 60)" },
            { label: "Observed Mean NO2", value: 35.4, unit: "µg/m³ (Safe <= 80)" }
          ]
        }
      ]
    }
  },
  {
    id: "sports-footwear-sales",
    title: "Sports Footwear Sales & Consumer Analysis",
    subtitle: "Product Category Performance, Pricing Elasticity & Purchasing Trend Analytics",
    description: "Evaluated 30,000 retail footwear orders across 6 global markets (2018–2026) to analyze brand turnover, product category revenue contribution, discount elasticity, and omnichannel sales performance.",
    category: "Data Analytics",
    tags: ["Python", "Pandas", "NumPy", "EDA", "Consumer Analytics", "Business Intelligence"],
    highlightMetric: {
      value: "30,000 Orders",
      label: "Verified Retail Transactions",
    },
    problemSummary: "Footwear retail merchandisers require empirical validation of promotional discount depths against net revenue margin.",
    methodSummary: "Audited 30,000 multi-market order records, engineered temporal features across an 8-year timeline, and conducted price elasticity modeling.",
    findingSummary: "Running shoes generate the highest volume and revenue share ($3.45M); 10–15% discounts produce optimal velocity without margin erosion.",
    toolsSummary: ["Python", "Pandas", "NumPy", "Power BI", "Seaborn"],
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
      overview: "Retail footwear operations require data-driven decisions on promotional discounting, category inventory allocation, and channel strategy. This project analyzes transactional order logs across brands (Nike, Adidas, Puma, Reebok, ASICS, Under Armour) to assess revenue drivers.",
      problemStatement: "Determine how product categories perform in sales volume versus revenue, validate revenue calculations against recorded discount percentages, and evaluate consumer purchasing behavior.",
      datasetStats: {
        records: "30,000 Verified Orders ($9.08M Gross)",
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
          value: "Running (36% Volume)",
          description: "Running shoes generated 36% of all orders and over $3.45M in gross volume, leading all footwear disciplines."
        },
        {
          label: "Discount Dynamics",
          value: "10–15% Sweet Spot",
          description: "Moderate discounts (10–15%) supported strong order velocity without excessive margin sacrifice, whereas discounts above 25% showed diminishing volume returns."
        },
        {
          label: "Omnichannel Balance",
          value: "50/50 Channel Split",
          description: "Retail Store (15,009 orders) and Online (14,991 orders) performed with near-identical order share across all 6 countries."
        }
      ],
      businessImpact: [
        "Built a Power BI dashboard enabling merchandising teams to filter sales by brand, product category, and country.",
        "Automated data verification routines ensuring pricing and discount calculations align accurately across order batches.",
        "Documented reproducible exploratory analysis notebook for retail inventory and pricing evaluation."
      ],
      technologies: ["Python", "Pandas", "NumPy", "Data Visualization", "Power BI", "Exploratory Data Analysis"],
      
      // 01 — PROBLEM
      problemDescription: "Managing athletic footwear inventory requires balancing promotional discounts against gross margin. Over-discounting erodes operating margins without proportionally expanding order volume, while under-discounting risks slow turnover in seasonal categories. This project evaluates 30,000 international orders to identify optimal pricing boundaries and category demand patterns.",
      
      // 02 — DATA
      datasetDetails: {
        records: "30,000 Verified Orders",
        features: "18 Initial → 22 Transformed Attributes",
        dimensions: "6 Global Markets (UAE, UK, USA, India, Germany, Pakistan), 6 Athletic Brands, 5 Product Categories",
        keyFields: ["order_id", "order_date", "brand", "category", "base_price_usd", "discount_percent", "final_price_usd", "units_sold", "revenue_usd", "sales_channel"],
        sourceNote: "Multi-market point-of-sale transactional records spanning 2018 through 2026."
      },
      
      // 03 — DATA PREPARATION
      dataPreparationSteps: [
        "Completeness Check: Verified 30,000 complete customer rows with zero missing values across all 18 attributes.",
        "Temporal Feature Extraction: Decomposed 'order_date' into 'year' (2018–2026), 'month', and 'quarter'.",
        "Mathematical Parity Auditing: Validated that 'calculated_revenue = final_price_usd * units_sold' perfectly matches recorded 'revenue_usd'.",
        "Categorical Standardization: Standardized brand categorizations and encoded ordinal customer income brackets (Low -> 1, Med -> 2, High -> 3)."
      ],
      
      // 04 — ANALYSIS
      analyticalMethods: [
        "Revenue Auditing: Reconciled cumulative global turnover of $9,081,448 across 30,000 individual purchases.",
        "Price Elasticity Evaluation: Plotted discount depths (0% to 30%) against unit sales volume to detect elasticity drop-offs.",
        "Brand Performance Benchmarking: Sliced order volume across Nike, Adidas, Puma, ASICS, Reebok, and Under Armour.",
        "Omnichannel Comparison: Analyzed basket sizes and average order value across Physical Stores vs. Online D2C."
      ],
      
      // 05 — KEY FINDINGS
      verifiedFindings: [
        {
          title: "Total Revenue Volume",
          stat: "$9.08M Turnover",
          finding: "The 30,000 evaluated orders produced $9,081,448 in gross sales at an average of $302.71 per order.",
          evidence: "Mean base price was $139.63, with final realized price averaging $121.03 after applied discounts."
        },
        {
          title: "Category Contribution",
          stat: "Running & Lifestyle",
          finding: "Running (36%) and Lifestyle (30%) combine to drive approximately two-thirds of total retail order demand.",
          evidence: "Basketball (16%) and Training (18%) maintained consistent baseline volumes but smaller total market footprints."
        },
        {
          title: "Discount Optimization Threshold",
          stat: "10–15% Depth",
          finding: "Promotions capped at 10%–15% discount delivered highest net revenue without margin degradation.",
          evidence: "Discounts exceeding 20% reduced average order value without generating sufficient incremental unit velocity."
        }
      ],
      
      // 06 — BUSINESS INTERPRETATION
      interpretations: [
        {
          type: "OBSERVED",
          headline: "Running shoes represent the dominant revenue and unit driver across all 6 markets.",
          detail: "Running footwear accounted for over $3.45M in total order volume, with customer satisfaction averaging 4.0/5.0."
        },
        {
          type: "INFERRED",
          headline: "Deep discounting beyond 20% cannibalizes gross product margin in commercial footwear.",
          detail: "Units sold per order remained steady (mean: 2.5 pairs) regardless of whether discounts were 15% or 30%."
        },
        {
          type: "RECOMMENDATION",
          headline: "Cap promotional discounts at 15% for flagship silhouettes and protect margin integrity.",
          detail: "Reserve 20%+ discounts strictly for end-of-season clearance inventory rather than ongoing merchandising promotions."
        }
      ],
      
      visualEvidence: [
        {
          title: "Footwear Category Order Volume Share",
          subtitle: "Distribution of 30,000 orders across performance categories",
          caption: "Running and Lifestyle categories drove two-thirds of global order demand across both digital and physical stores.",
          type: "bar",
          data: [
            { label: "Running", value: 36, unit: "% of orders" },
            { label: "Lifestyle", value: 30, unit: "% of orders" },
            { label: "Training", value: 18, unit: "% of orders" },
            { label: "Basketball", value: 16, unit: "% of orders" }
          ]
        }
      ]
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
    problemSummary: "Evaluating tournament pitch variability and phase-wise scoring dynamics across Caribbean and USA cricket venues.",
    methodSummary: "Processed 12,850 ball-by-ball delivery records, partitioned deliveries into 3 match phases, and built a React dashboard.",
    findingSummary: "Death overs (16–20) run rates accelerated to 9.8 RPO; losing <= 1 wicket in powerplay correlated with a 76% match win rate.",
    toolsSummary: ["Python", "Pandas", "React", "Recharts", "TypeScript"],
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
          description: "Teams losing fewer than 2 wickets in the powerplay secured a 76% win rate throughout the tournament."
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
      
      // 01 — PROBLEM
      problemDescription: "T20 cricket tournaments require rapid tactical adaptations based on match phase and venue conditions. The 2024 tournament featured unprecedented pitch diversity—from sluggish, low-scoring tracks in New York to high-scoring Caribbean pitches. This project investigates phase-by-phase scoring efficiency and bowling impact.",
      
      // 02 — DATA
      datasetDetails: {
        records: "12,850 Ball-by-Ball Deliveries",
        features: "22 Delivery Attributes across 55 Matches",
        dimensions: "20 Participating Teams, 9 Stadium Venues, 3 Match Phases",
        keyFields: ["match_id", "venue", "innings", "over", "ball", "batter", "bowler", "runs_off_bat", "extras", "wicket_type"],
        sourceNote: "Ball-by-ball tournament logs compiled from verified open cricket telemetry."
      },
      
      // 03 — DATA PREPARATION
      dataPreparationSteps: [
        "Parsed raw nested ball delivery events into a flat relational DataFrame.",
        "Engineered categorical 'match_phase': Powerplay (overs 1–6), Middle Overs (overs 7–15), Death Overs (overs 16–20).",
        "Handled extras accounting (wides, no-balls, leg byes) to ensure accurate bowler economy calculation.",
        "Derived cumulative team run-rate and wicket-loss velocity time-series."
      ],
      
      // 04 — ANALYSIS
      analyticalMethods: [
        "Phase-Wise Scoring Rate Decomposition: Computed comparative strike rates and dot-ball percentages.",
        "Bowler Economy Evaluation: Contrasted spin versus pace economy across venue groupings.",
        "Win-Correlation Analysis: Assessed how wicket loss in the first 6 overs impacted final match outcomes.",
        "Interactive Dashboard Architecture: Integrated aggregated findings into a responsive React and Recharts web app."
      ],
      
      // 05 — KEY FINDINGS
      verifiedFindings: [
        {
          title: "Powerplay Wicket Preservation",
          stat: "76% Win Correlation",
          finding: "Teams losing 1 or fewer wickets in the powerplay won 76% of completed matches.",
          evidence: "Early top-order stability provided the foundation needed to attack middle and death overs."
        },
        {
          title: "Death-Over Scoring Surge",
          stat: "9.8 RPO",
          finding: "Scoring velocity jumped from 6.8 RPO in early overs to 9.8 RPO in the death overs.",
          evidence: "Boundary frequency increased by 110% between middle overs and overs 16–20."
        },
        {
          title: "Spin Efficacy on Caribbean Tracks",
          stat: "18% Lower Economy",
          finding: "Spinners conceded 18% fewer runs per over on Caribbean pitches than seamers.",
          evidence: "Grip and ball deceleration favored slow bowlers in second-innings matches."
        }
      ],
      
      // 06 — BUSINESS INTERPRETATION
      interpretations: [
        {
          type: "OBSERVED",
          headline: "Early wicket loss is the single strongest predictor of match outcome in T20 cricket.",
          detail: "Teams suffering 2 or more dismissals in the powerplay experienced a steep drop in win probability."
        },
        {
          type: "INFERRED",
          headline: "Aggressive batting strategies must be balanced against wicket retention in the first 6 overs.",
          detail: "Blindly maximizing powerplay strike rate is counter-productive if it sacrifices top-order wickets."
        },
        {
          type: "RECOMMENDATION",
          headline: "Prioritize bowling lineups with specialized death-over yorker specialists and spin controllers.",
          detail: "Teams with disciplined death bowlers consistently defended totals even on batting-friendly surfaces."
        }
      ],
      
      visualEvidence: [
        {
          title: "Phase-Wise Run Rate Acceleration (Runs Per Over)",
          subtitle: "Comparison of average scoring velocity across tournament overs",
          caption: "Scoring rates escalated sharply during the death overs as batting teams maximized boundary risk.",
          type: "bar",
          data: [
            { label: "Powerplay (Overs 1-6)", value: 6.8, unit: "RPO" },
            { label: "Middle Overs (Overs 7-15)", value: 7.4, unit: "RPO" },
            { label: "Death Overs (Overs 16-20)", value: 9.8, unit: "RPO" }
          ]
        }
      ]
    }
  }
];

export default projects;
