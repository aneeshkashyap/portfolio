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
  title: "Aneesh Kashyap | Data Analyst & Analytics Engineer",
  description:
    "Computer Science Engineering student focused on data analytics, analytics engineering, Python, SQL, machine learning, and interactive data visualization.",
  keywords: [
    "Aneesh Kashyap",
    "Data Analyst",
    "Analytics Engineer",
    "Computer Science",
    "SVCE Chennai",
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Exploratory Data Analysis",
    "Machine Learning",
    "Power BI",
    "Data Visualization",
    "ACM Student Chapter",
  ],
  authors: [{ name: "Aneesh Kashyap K S" }],
  openGraph: {
    title: "Aneesh Kashyap | Data Analyst & Analytics Engineer",
    description:
      "Computer Science Engineering student focused on data analytics, analytics engineering, Python, SQL, machine learning, and interactive data visualization.",
    type: "website",
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
