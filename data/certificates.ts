export interface CertificateSignatory {
  name: string;
  role: string;
  organization: string;
}

export interface TechnicalDetails {
  modelsUsed: string[];
  metrics: { label: string; value: string }[];
  featureEngineeringHighlights: string[];
  keyTakeaways: string[];
}

export interface CertificateData {
  id: string;
  title: string;
  event: string;
  awardType: string;
  recipientName: string;
  department: string;
  yearOfStudy: string;
  college: string;
  organizedBy: string;
  departmentOrganizer: string;
  date: string;
  formattedDate: string;
  rankBadge: string;
  teamName: string;
  teammate: string;
  credentialId: string;
  imageAsset: string;
  status: "Verified Authentic" | "Active";
  category: "Machine Learning" | "Hackathon" | "Academic" | "Data Science";
  summary: string;
  narrativeStory: {
    overview: string;
    theChallenge: string;
    theProcess: string;
    theSolution: string;
    theResult: string;
    takeaway: string;
  };
  technicalDetails: TechnicalDetails;
  signatories: CertificateSignatory[];
  tags: string[];
  externalLinks?: {
    label: string;
    url: string;
  }[];
}

export const certificatesData: CertificateData[] = [
  {
    id: "heatcode-2025",
    title: "HEATCODE 2025 ML Competition",
    event: "HeatCode 2025",
    awardType: "Certificate of Participation — Top 10 Finalist",
    recipientName: "Aneesh Kashyap KS",
    department: "Computer Science and Engineering (CSE)",
    yearOfStudy: "2nd Year",
    college: "Sri Venkateswara College of Engineering (SVCE)",
    organizedBy: "FODSE (Forum Of Data Science Engineers)",
    departmentOrganizer: "Artificial Intelligence and Data Science, Department of Computer Science and Engineering",
    date: "2025-08-30",
    formattedDate: "30th August 2025",
    rankBadge: "Top 10 Leaderboard Finish",
    teamName: "Pair-o-dox",
    teammate: "Ananya Kannan",
    credentialId: "SVCE-FODSE-HC25-PAIR09",
    imageAsset: "/certificates/heatcode-2025.png",
    status: "Verified Authentic",
    category: "Machine Learning",
    summary:
      "Engineered an ensemble of XGBoost and LightGBM regressors to predict Chennai's Sunday temperature during a high-intensity hackathon, clinching a Top 10 leaderboard finish against university seniors and peers.",
    narrativeStory: {
      overview:
        "On 30th August 2025, participated in HEATCODE, a competitive machine learning hackathon organized by FODSE (Forum Of Data Science Engineers), Department of CSE and AI&DS at Sri Venkateswara College of Engineering.",
      theChallenge:
        "Participants were challenged to build a high-precision machine learning regression model to predict Chennai's Sunday temperature based on multi-variate meteorological observations under fluctuating atmospheric dynamics.",
      theProcess:
        "It was a full day of intense brainstorming, exploratory data analysis, domain-specific feature engineering, and endless model tuning — taking turns experimenting, validating hypotheses, and pushing our Kaggle leaderboard score bit by bit.",
      theSolution:
        "Together with teammate Ananya Kannan, we decided to venture beyond traditional baseline algorithms and engineered a weighted ensemble of XGBoost and LightGBM regressors with fine-tuned hyperparameters, cyclic temporal encodings, and robust cross-validation.",
      theResult:
        "Our team Pair-o-dox secured a Top 10 position on the Kaggle leaderboard, competing among some incredibly talented seniors, peers, and department ML enthusiasts.",
      takeaway:
        "This experience not only solidified our technical understanding of non-linear gradient boosting, ensembling, and cross-validation pipelines, but also reinforced how disciplined collaboration, rapid iteration, and perseverance amplify results under tight deadlines."
    },
    technicalDetails: {
      modelsUsed: ["XGBoost Regressor", "LightGBM Regressor", "Weighted Ensemble", "K-Fold Cross Validation"],
      metrics: [
        { label: "Leaderboard Standing", value: "Top 10" },
        { label: "Team Name", value: "Pair-o-dox" },
        { label: "Core Algorithms", value: "XGBoost + LightGBM" },
        { label: "Domain", value: "Meteorological Regression" }
      ],
      featureEngineeringHighlights: [
        "Cyclic transformations on hour and seasonal indicators",
        "Lag features capturing temperature and barometric pressure trends",
        "Interaction ratios between relative humidity and solar irradiance",
        "Outlier mitigation and robust imputation for missing weather sensors"
      ],
      keyTakeaways: [
        "Ensembling gradient boosting models consistently reduced generalization error over single estimators",
        "Rigorous local 5-fold cross-validation prevented overfitting to the public leaderboard",
        "Effective pair-programming division of labor between EDA, feature design, and model tuning"
      ]
    },
    signatories: [
      {
        name: "Ms. J. Buvana",
        role: "Coordinator",
        organization: "FODSE, SVCE"
      },
      {
        name: "Dr. N. Rajganesh",
        role: "Program Head",
        organization: "Artificial Intelligence and Data Science, SVCE"
      }
    ],
    tags: [
      "Machine Learning",
      "XGBoost",
      "LightGBM",
      "Ensemble Methods",
      "Regression",
      "Kaggle",
      "Competitive Coding",
      "Feature Engineering"
    ]
  }
];

export default certificatesData;
