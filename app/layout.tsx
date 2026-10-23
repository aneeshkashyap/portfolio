import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { personalInfo } from "@/data/resumeData";

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
  description: personalInfo.bio,
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
    description: personalInfo.bio,
    url: "https://portfolio-ksaneeshkashyap.vercel.app/",
    siteName: "Aneesh Kashyap Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aneesh Kashyap | Software Engineering Candidate & Data Analyst",
    description: personalInfo.bio,
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
