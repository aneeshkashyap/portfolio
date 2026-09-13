"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Binary, LayoutDashboard, BrainCircuit } from "lucide-react";

interface CapabilityCard {
  title: string;
  category: string;
  icon: React.ReactNode;
  summary: string;
  bullets: string[];
  techPills: string[];
}

const capabilities: CapabilityCard[] = [
  {
    title: "Data Analytics & EDA",
    category: "DATA ANALYTICS",
    icon: <Binary className="text-cyan-400" size={20} />,
    summary: "Transforming raw, unstructured operational datasets into clean, validated tabular formats with actionable findings.",
    bullets: [
      "Missing-value auditing, categorical cleaning & datetime normalization",
      "Distribution analysis, outlier detection & correlation discovery",
      "Feature engineering: temporal derivations & turnaround metrics"
    ],
    techPills: ["Python", "Pandas", "NumPy", "SQL", "EDA"]
  },
  {
    title: "Business Intelligence & Dashboards",
    category: "DATA VISUALIZATION",
    icon: <BarChart3 className="text-emerald-400" size={20} />,
    summary: "Architecting interactive multi-page dashboards and KPI scorecards that allow stakeholders to slice operational metrics.",
    bullets: [
      "Power BI report modeling with DAX measures & time-series slicing",
      "Statistical distribution plots, KDE distributions & correlation heatmaps",
      "Executive presentations summarizing data findings for operations teams"
    ],
    techPills: ["Power BI", "Matplotlib", "Seaborn", "DAX"]
  },
  {
    title: "Data Applications & Tools",
    category: "DATA APPLICATIONS",
    icon: <LayoutDashboard className="text-purple-400" size={20} />,
    summary: "Developing interactive web-based data visualizers and exploratory tools using modern full-stack web technologies.",
    bullets: [
      "Client-side data explorers and parameter simulators (React & TypeScript)",
      "High-performance static rendering and responsive dashboard design",
      "Relational data schema definition and clean component architecture"
    ],
    techPills: ["React", "Next.js 16", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Applied Machine Learning",
    category: "MACHINE LEARNING",
    icon: <BrainCircuit className="text-amber-400" size={20} />,
    summary: "Constructing supervised classification baselines, preprocessing transformations, and diagnostic evaluation pipelines.",
    bullets: [
      "Feature scaling, categorical encoding & pipeline assembly (Scikit-learn)",
      "Customer churn risk classification and baseline trend forecasting",
      "Evaluation with precision, recall, F1 score & confusion matrices"
    ],
    techPills: ["Scikit-learn", "Classification", "Evaluation Metrics"]
  }
];

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 relative z-10">
      {/* Section Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>CORE COMPETENCIES</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          What I Build
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-1 max-w-2xl">
          Practical analytical capabilities and technical deliverables grounded in verified project experience.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {capabilities.map((item, idx) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="flex flex-col justify-between rounded-2xl bg-zinc-950/70 border border-zinc-850 p-5 backdrop-blur-xl hover:border-cyan-500/40 hover:bg-zinc-900/60 transition-all group"
          >
            <div>
              {/* Header with Icon & Category */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono tracking-wider font-semibold text-zinc-400 group-hover:text-cyan-400 transition-colors">
                  {item.category}
                </span>
                <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              {/* Summary */}
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {item.summary}
              </p>

              {/* Bullets */}
              <ul className="space-y-1.5 border-t border-zinc-850 pt-3 mb-4">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-[11px] text-zinc-300 flex items-start gap-1.5 leading-snug">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-1 pt-2 border-t border-zinc-850/60">
              {item.techPills.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
