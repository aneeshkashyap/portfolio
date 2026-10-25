import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteSummary =
  "Third-year Computer Science student focused on Data Analytics, with hands-on experience in Python, SQL, Pandas, NumPy, Exploratory Data Analysis (EDA), and Data Visualization. Developed data-driven projects involving Ola/Uber cancellation analysis, Delhi weather and AQI trends, sports footwear sales and consumer behavior, and ICC T20 World Cup 2024 cricket analytics. Skilled in data cleaning, preprocessing, statistical analysis, trend identification, visualization, and extracting actionable insights from datasets. Experienced in building interactive dashboards and AI assisted development workflows using Claude Code and Antigravity, leveraging rapid prototyping and vibe-coding to accelerate project development.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ksaneeshkashyap.vercel.app"),
  title: "Aneesh Kashyap | Software Engineering Candidate & Data Analyst",
  description: siteSummary,
  keywords: [
    "Aneesh Kashyap",
    "Software Engineering Candidate",
    "Data Analyst",
    "Computer Science Engineering",
    "SVCE Chennai",
    "Python",
    "C++",
    "Object-Oriented Programming",
    "Data Structures and Algorithms",
    "Exploratory Data Analysis",
    "Machine Learning",
    "Scikit-learn",
    "React",
    "Next.js",
    "SQL",
    "Pandas",
    "NumPy",
    "Power BI",
    "ACM Student Chapter",
  ],
  authors: [{ name: "Aneesh Kashyap K S" }],
  openGraph: {
    title: "Aneesh Kashyap | Software Engineering Candidate & Data Analyst",
    description: siteSummary,
    url: "https://portfolio-ksaneeshkashyap.vercel.app/",
    siteName: "Aneesh Kashyap Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aneesh Kashyap | Software Engineering Candidate & Data Analyst",
    description: siteSummary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
