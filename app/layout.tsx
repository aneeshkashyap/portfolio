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

export const metadata: Metadata = {
  title: "Aneesh Kashyap | Software Engineering Candidate & Data Analyst",
  description:
    "Third-year Computer Science Engineering student with hands-on OOP programming experience (Python, C++) and solid grounding in data structures and algorithms. Experienced in end-to-end data analysis, cleaning large-scale operational datasets, and engineering analytical pipelines with Pandas, NumPy, and SQL. Skilled in exploratory data analysis (EDA), statistical pattern identification, and architecting interactive dashboards in Power BI and React.",
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
    description:
      "Third-year Computer Science Engineering student with hands-on OOP programming experience (Python, C++) and solid grounding in data structures and algorithms. Experienced in end-to-end data analysis, cleaning large-scale operational datasets, and engineering analytical pipelines with Pandas, NumPy, and SQL. Skilled in exploratory data analysis (EDA), statistical pattern identification, and architecting interactive dashboards in Power BI and React.",
    url: "https://portfolio-five-sable-31.vercel.app/",
    siteName: "Aneesh Kashyap Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aneesh Kashyap | Software Engineering Candidate & Data Analyst",
    description:
      "Third-year Computer Science Engineering student with hands-on OOP programming experience (Python, C++) and solid grounding in data structures and algorithms. Experienced in end-to-end data analysis, cleaning large-scale operational datasets, and engineering analytical pipelines with Pandas, NumPy, and SQL. Skilled in exploratory data analysis (EDA), statistical pattern identification, and architecting interactive dashboards in Power BI and React.",
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
