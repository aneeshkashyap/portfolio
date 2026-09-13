"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Database,
  ArrowRight,
  FileText,
  BarChart3,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { personalInfo } from "@/data/resumeData";

interface HeroProps {
  onOpenResume?: () => void;
  onOpenContact?: () => void;
}

export default function Hero({ onOpenResume, onOpenContact }: HeroProps) {
  // Verified analytical workflow logs corresponding directly to the actual Ola/Uber project
  const terminalLines = [
    { text: "$ python analysis.py --dataset bookings_dataset.csv", color: "text-cyan-400" },
    { text: "✓ Ingested 103,024 ride-booking records", color: "text-emerald-400" },
    { text: "✓ Handled missing values & dropped non-informative columns", color: "text-emerald-400" },
    { text: "✓ Engineered temporal features (date, hour, rush windows)", color: "text-emerald-400" },
    { text: "✓ Evaluated V_TAT (vehicle turnaround) & wait-time distributions", color: "text-emerald-400" },
    { text: "✓ Analyzed cancellation patterns across vehicle categories", color: "text-cyan-300" },
    { text: "✓ Identified primary driver and customer cancellation factors", color: "text-emerald-300" },
  ];

  const [activeLineIdx, setActiveLineIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLineIdx((prev) => (prev + 1) % terminalLines.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [terminalLines.length]);

  return (
    <section
      id="overview"
      className="w-full max-w-6xl mx-auto pt-28 sm:pt-32 pb-16 px-4 sm:px-6 relative z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Bio & Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-cyan-500/30 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] text-zinc-300 tracking-wide uppercase">
              Data Analyst & Analytics Engineer • CS Student
            </span>
          </div>

          {/* Headline & Clear Role Positioning */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Aneesh Kashyap
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-mono text-cyan-300/90 mt-2 font-semibold">
              Data Analyst & Analytics Engineer
            </p>
            <p className="text-base sm:text-lg text-zinc-300 mt-3 leading-relaxed max-w-xl">
              I build analytical solutions that transform raw datasets into actionable insights, interactive dashboards, and data-driven decisions.
            </p>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-2">
              Computer Science Engineering Student · SVCE Chennai · 8.1 CGPA
            </p>
          </div>

          {/* Evidence-based Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
            <div className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <span className="text-[11px] font-mono text-zinc-400 block">Academics</span>
              <span className="text-xl font-bold font-mono text-white mt-0.5 block">8.1 CGPA</span>
              <span className="text-[10px] text-zinc-500 block">Sem 5 • SVCE</span>
            </div>

            <div className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <span className="text-[11px] font-mono text-zinc-400 block">Analytics</span>
              <span className="text-xl font-bold font-mono text-cyan-400 mt-0.5 block">4+ Projects</span>
              <span className="text-[10px] text-zinc-500 block">End-to-End EDA</span>
            </div>

            <div className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <span className="text-[11px] font-mono text-zinc-400 block">Internships</span>
              <span className="text-xl font-bold font-mono text-emerald-400 mt-0.5 block">2 Roles</span>
              <span className="text-[10px] text-zinc-500 block">ML & Analytics</span>
            </div>

            <div className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <span className="text-[11px] font-mono text-zinc-400 block">Leadership</span>
              <span className="text-xl font-bold font-mono text-purple-400 mt-0.5 block">ACM Chair</span>
              <span className="text-[10px] text-zinc-500 block">SVCE Chapter</span>
            </div>
          </div>

          {/* Primary CTAs: Projects, Data Lab, Resume */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-mono font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <Database size={15} />
              View Projects
              <ArrowRight size={14} />
            </a>

            <a
              href="#playground"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-mono text-xs sm:text-sm transition-all"
            >
              <BarChart3 size={15} className="text-cyan-400" />
              Explore Data Lab
            </a>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-mono text-xs sm:text-sm transition-all"
              >
                <FileText size={15} className="text-emerald-400" />
                Resume
              </button>
            )}
          </div>
        </motion.div>

        {/* Right Column: Verified Analytical Workflow Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="rounded-3xl border border-zinc-800/90 bg-zinc-950/85 backdrop-blur-xl shadow-2xl p-5 sm:p-6 overflow-hidden relative group">
            {/* Soft subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                  <Terminal size={12} className="text-cyan-400" />
                  python-analytics ~ bash
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                Verified Run
              </span>
            </div>

            {/* Terminal Output */}
            <div className="font-mono text-xs space-y-2.5 pt-4 min-h-[200px] text-zinc-300">
              <div className="text-zinc-500 text-[11px]">
                # Verified Exploratory Data Analysis Pipeline
              </div>

              {terminalLines.map((line, idx) => (
                <div
                  key={idx}
                  className={`transition-opacity duration-300 ${
                    idx <= activeLineIdx ? "opacity-100" : "opacity-25"
                  } ${line.color} flex items-start gap-2`}
                >
                  <span className="text-zinc-600 select-none">&gt;</span>
                  <span>{line.text}</span>
                </div>
              ))}

              <div className="flex items-center gap-1.5 text-cyan-400 pt-1">
                <span className="animate-pulse">_</span>
                <span className="text-zinc-500 text-[11px]">Pipeline execution complete.</span>
              </div>
            </div>

            {/* Bottom Stack Verification Chip */}
            <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Code2 size={13} className="text-emerald-400" />
                Python 3.x · Pandas · NumPy · Seaborn
              </span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 size={12} />
                103K Records
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
