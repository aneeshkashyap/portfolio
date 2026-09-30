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
  title: "Aneesh Kashyap | Software Engineering Intern Candidate",
  description:
    "Third-year Computer Science Engineering student with hands-on OOP programming experience (Python, C++) and solid grounding in data structures, algorithms, ML pipelines, and full-stack web dashboards.",
  keywords: [
    "Aneesh Kashyap",
    "Software Engineering Intern",
    "Computer Science Engineering",
    "SVCE Chennai",
    "Python",
    "C++",
    "Object-Oriented Programming",
    "Data Structures and Algorithms",
    "Machine Learning",
    "Scikit-learn",
    "React",
    "Next.js",
    "SQL",
    "Pandas",
    "NumPy",
    "Data Analytics",
    "ACM Student Chapter",
  ],
  authors: [{ name: "Aneesh Kashyap K S" }],
  openGraph: {
    title: "Aneesh Kashyap | Software Engineering Intern Candidate",
    description:
      "Third-year Computer Science Engineering student with hands-on OOP programming experience (Python, C++) and solid grounding in data structures, algorithms, ML pipelines, and full-stack web dashboards.",
    url: "https://portfolio-five-sable-31.vercel.app/",
    siteName: "Aneesh Kashyap Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aneesh Kashyap | Software Engineering Intern Candidate",
    description:
      "Third-year Computer Science Engineering student with hands-on OOP programming experience (Python, C++) and solid grounding in data structures, algorithms, ML pipelines, and full-stack web dashboards.",
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
