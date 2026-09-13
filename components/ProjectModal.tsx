"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import {
  X,
  Database,
  Layers,
  Sparkles,
  TrendingUp,
  BarChart2,
  Download,
  FolderDown,
  CheckCircle2,
  FileCode2,
  Compass,
  AlertCircle,
  Lightbulb,
  ExternalLink,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenPlayground?: () => void;
}

export default function ProjectModal({ project, onClose, onOpenPlayground }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"casestudy" | "evidence" | "artifacts">("casestudy");

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setActiveTab("casestudy");
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy, downloads } = project;

  const getFileBadge = (type: string) => {
    switch (type) {
      case "notebook":
        return { label: "Jupyter Notebook", color: "bg-amber-500/15 text-amber-300 border-amber-500/30" };
      case "powerbi":
        return { label: "Power BI (.pbix)", color: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30" };
      case "presentation":
        return { label: "Slide Deck (.pptx)", color: "bg-rose-500/15 text-rose-300 border-rose-500/30" };
      case "dataset":
        return { label: "CSV Dataset", color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" };
      default:
        return { label: "Project Asset", color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30" };
    }
  };

  const getInterpretationBadge = (type: "OBSERVED" | "INFERRED" | "RECOMMENDATION") => {
    switch (type) {
      case "OBSERVED":
        return {
          label: "OBSERVED EVIDENCE",
          icon: <CheckCircle2 size={12} className="text-emerald-400" />,
          style: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
        };
      case "INFERRED":
        return {
          label: "ANALYTICAL INFERENCE",
          icon: <Compass size={12} className="text-amber-400" />,
          style: "bg-amber-500/10 text-amber-300 border-amber-500/30",
        };
      case "RECOMMENDATION":
        return {
          label: "OPERATIONAL RECOMMENDATION",
          icon: <Lightbulb size={12} className="text-cyan-400" />,
          style: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
        };
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: "spring", duration: 0.35, bounce: 0 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl md:rounded-3xl bg-[#090d14] border border-zinc-800 shadow-2xl overflow-hidden z-10 text-zinc-100"
        >
          {/* Header */}
          <div className="p-5 sm:p-7 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl relative shrink-0">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {project.featured && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/35 flex items-center gap-1.5">
                  <Sparkles size={11} />
                  FLAGSHIP CASE STUDY
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                {project.highlightMetric.label}: <strong>{project.highlightMetric.value}</strong>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white pr-10">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-mono">
              {project.subtitle}
            </p>

            {/* Quick action bar */}
            <div className="flex flex-wrap items-center gap-2.5 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-cyan-500/50 transition-all"
                >
                  <GithubIcon size={14} />
                  Verify on GitHub
                  <ExternalLink size={11} className="text-zinc-500" />
                </a>
              )}
              {onOpenPlayground && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenPlayground();
                  }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition-all font-semibold"
                >
                  <BarChart2 size={13} />
                  Open in Interactive Lab
                </button>
              )}
              {downloads && downloads.length > 0 && (
                <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline-flex items-center gap-1 ml-auto">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  {downloads.length} Verified Deliverables Attached
                </span>
              )}
            </div>

            {/* Case Study Navigation Tabs */}
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-zinc-850/60 overflow-x-auto text-xs font-mono">
              <button
                onClick={() => setActiveTab("casestudy")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "casestudy"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                }`}
              >
                01-07 Full Case Study
              </button>
              {caseStudy.visualEvidence && caseStudy.visualEvidence.length > 0 && (
                <button
                  onClick={() => setActiveTab("evidence")}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    activeTab === "evidence"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                  }`}
                >
                  <BarChart2 size={13} />
                  Visual Evidence ({caseStudy.visualEvidence.length} Charts)
                </button>
              )}
              {downloads && downloads.length > 0 && (
                <button
                  onClick={() => setActiveTab("artifacts")}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    activeTab === "artifacts"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                  }`}
                >
                  <FolderDown size={13} />
                  08 Artifacts ({downloads.length})
                </button>
              )}
            </div>
          </div>

          {/* Body Content - Scrollable */}
          <div className="p-5 sm:p-7 md:p-8 space-y-8 overflow-y-auto custom-scrollbar">
            {/* TAB: CASE STUDY */}
            {activeTab === "casestudy" && (
              <div className="space-y-8">
                {/* 01 — PROBLEM */}
                <section className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[10px] text-cyan-300">
                        01
                      </span>
                      Problem & Business Context
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Verified Scope</span>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {caseStudy.problemDescription || caseStudy.overview}
                  </p>
                  <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 text-xs sm:text-sm text-zinc-300 font-mono">
                    <span className="text-cyan-400 font-bold block mb-1">Core Investigation:</span>
                    {caseStudy.problemStatement}
                  </div>
                </section>

                {/* 02 — DATA */}
                <section className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[10px] text-emerald-300">
                        02
                      </span>
                      Data Source & Telemetry
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Verified Dataset
                    </span>
                  </div>

                  {/* 4 Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                      <span className="text-[10px] font-mono text-zinc-400 block uppercase">Verified Records</span>
                      <span className="text-sm sm:text-base font-bold font-mono text-white mt-1 block">
                        {caseStudy.datasetDetails?.records || caseStudy.datasetStats.records}
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                      <span className="text-[10px] font-mono text-zinc-400 block uppercase">Feature Attributes</span>
                      <span className="text-sm sm:text-base font-bold font-mono text-cyan-400 mt-1 block">
                        {caseStudy.datasetDetails?.features || caseStudy.datasetStats.features}
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                      <span className="text-[10px] font-mono text-zinc-400 block uppercase">Temporal Range</span>
                      <span className="text-sm sm:text-base font-bold font-mono text-emerald-400 mt-1 block">
                        {caseStudy.datasetStats.timeline}
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                      <span className="text-[10px] font-mono text-zinc-400 block uppercase">Telemetry Source</span>
                      <span className="text-xs font-bold font-mono text-purple-300 mt-1 block truncate">
                        {caseStudy.datasetStats.source}
                      </span>
                    </div>
                  </div>

                  {/* Dimensions & Key Fields */}
                  {caseStudy.datasetDetails && (
                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-850 space-y-2 text-xs font-mono">
                      {caseStudy.datasetDetails.dimensions && (
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                          <span className="text-zinc-400 shrink-0">Dimensions:</span>
                          <span className="text-zinc-200">{caseStudy.datasetDetails.dimensions}</span>
                        </div>
                      )}
                      {caseStudy.datasetDetails.keyFields && caseStudy.datasetDetails.keyFields.length > 0 && (
                        <div className="pt-2 border-t border-zinc-850 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                          <span className="text-zinc-400 shrink-0">Key Fields Analyzed:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {caseStudy.datasetDetails.keyFields.map((field, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 text-[11px]"
                              >
                                {field}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {caseStudy.datasetDetails.sourceNote && (
                        <p className="text-[11px] text-zinc-400 pt-1 font-sans italic">
                          Note: {caseStudy.datasetDetails.sourceNote}
                        </p>
                      )}
                    </div>
                  )}
                </section>

                {/* 03 — DATA PREPARATION */}
                <section className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[10px] text-purple-300">
                        03
                      </span>
                      Data Preparation & Cleansing
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Audit Workflow</span>
                  </div>

                  <div className="space-y-2.5">
                    {(caseStudy.dataPreparationSteps || caseStudy.edaMethodology).map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300"
                      >
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 font-mono text-xs shrink-0 mt-0.5 font-bold">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 04 — ANALYSIS */}
                <section className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-[10px] text-blue-300">
                        04
                      </span>
                      Analytical Methodology
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Techniques Executed</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(caseStudy.analyticalMethods || caseStudy.edaMethodology).map((method, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-2.5 text-xs text-zinc-300"
                      >
                        <Cpu size={14} className="text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{method}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 05 — KEY FINDINGS */}
                <section className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[10px] text-amber-300">
                        05
                      </span>
                      Key Empirical Findings
                    </span>
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      Verified Facts
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {caseStudy.verifiedFindings && caseStudy.verifiedFindings.length > 0 ? (
                      caseStudy.verifiedFindings.map((finding, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between space-y-2"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-mono text-zinc-400 font-medium">
                                {finding.title}
                              </span>
                              <span className="text-xs font-bold font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/25">
                                {finding.stat}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-white leading-relaxed">
                              {finding.finding}
                            </p>
                          </div>
                          <div className="pt-2 border-t border-zinc-850">
                            <span className="text-[11px] font-mono text-zinc-400 leading-snug block">
                              <strong className="text-zinc-300">Evidence:</strong> {finding.evidence}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      caseStudy.keyInsights.map((insight, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-xs font-mono text-zinc-400 block mb-1">
                              {insight.label}
                            </span>
                            <span className="text-lg font-bold font-mono text-amber-400 block mb-2">
                              {insight.value}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-300 leading-relaxed">{insight.description}</p>
                        </div>
                      ))
                    )}
                  </div>
                </section>

                {/* 06 — BUSINESS INTERPRETATION (OBSERVED / INFERRED / RECOMMENDATION) */}
                <section className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[10px] text-cyan-300">
                        06
                      </span>
                      Business & Operational Interpretation
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      Separated Claims
                    </span>
                  </div>

                  <div className="space-y-3">
                    {caseStudy.interpretations && caseStudy.interpretations.length > 0 ? (
                      caseStudy.interpretations.map((interp, idx) => {
                        const badge = getInterpretationBadge(interp.type);
                        return (
                          <div
                            key={idx}
                            className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-2"
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${badge.style}`}
                              >
                                {badge.icon}
                                {badge.label}
                              </span>
                            </div>
                            <h5 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                              {interp.headline}
                            </h5>
                            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                              {interp.detail}
                            </p>
                          </div>
                        );
                      })
                    ) : (
                      caseStudy.businessImpact.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-2.5 text-xs text-zinc-300"
                        >
                          <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))
                    )}
                  </div>
                </section>

                {/* 07 — TOOLS */}
                <section className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-300">
                        07
                      </span>
                      Verified Tooling & Libraries
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Utilized</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 text-zinc-200 border border-zinc-800 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* TAB: VISUAL EVIDENCE (DATA TELEMETRY CHARTS) */}
            {activeTab === "evidence" && (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                  <span className="font-bold block text-sm mb-1 text-white flex items-center gap-2">
                    <BarChart2 size={16} className="text-cyan-400" />
                    Verified Project Telemetry & Visual Distributions
                  </span>
                  Exact empirical counts computed directly from the underlying project dataset. No simulated values.
                </div>

                {caseStudy.visualEvidence && caseStudy.visualEvidence.length > 0 ? (
                  caseStudy.visualEvidence.map((vis, idx) => {
                    const maxValue = Math.max(...vis.data.map((d) => d.value));
                    return (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-4"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm sm:text-base font-bold text-white font-mono">
                              {vis.title}
                            </h4>
                            <span className="text-[10px] font-mono text-zinc-400 uppercase bg-zinc-800 px-2 py-0.5 rounded">
                              {vis.type}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-400 font-mono mt-0.5">{vis.subtitle}</p>
                        </div>

                        {/* Chart Bars */}
                        <div className="space-y-2.5 pt-2">
                          {vis.data.map((item, itemIdx) => {
                            const pct = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
                            return (
                              <div key={itemIdx} className="space-y-1">
                                <div className="flex items-center justify-between text-xs font-mono">
                                  <span className="text-zinc-300">{item.label}</span>
                                  <span className="font-bold text-white">
                                    {item.value.toLocaleString()}{" "}
                                    <span className="text-zinc-400 text-[11px] font-normal">
                                      {item.unit || ""}
                                    </span>
                                  </span>
                                </div>
                                <div className="w-full h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                                  <div
                                    className={`h-full rounded-full transition-all duration-500 ${
                                      itemIdx === 0
                                        ? "bg-gradient-to-r from-cyan-500 to-teal-400"
                                        : itemIdx === 1
                                        ? "bg-gradient-to-r from-purple-500 to-indigo-400"
                                        : itemIdx === 2
                                        ? "bg-gradient-to-r from-amber-500 to-yellow-400"
                                        : "bg-zinc-600"
                                    }`}
                                    style={{ width: `${Math.max(pct, 4)}%` }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <p className="text-xs text-zinc-400 italic pt-2 border-t border-zinc-850 leading-relaxed font-sans">
                          {vis.caption}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-xs font-mono text-zinc-400">
                    No visual evidence items configured for this project.
                  </p>
                )}
              </div>
            )}

            {/* TAB: 08 ARTIFACTS & DELIVERABLES */}
            {activeTab === "artifacts" && (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1 text-xs">
                  <h4 className="font-bold font-mono text-white text-sm flex items-center gap-2">
                    <FolderDown size={16} className="text-cyan-400" />
                    08 — Verified Artifacts & Project Deliverables
                  </h4>
                  <p className="text-zinc-400 font-sans">
                    All original analysis artifacts, Jupyter notebooks, Power BI data models, and raw datasets are available for direct audit and local review.
                  </p>
                </div>

                {downloads && downloads.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {downloads.map((file) => {
                      const badge = getFileBadge(file.type);
                      return (
                        <div
                          key={file.filename}
                          className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${badge.color}`}>
                                {badge.label}
                              </span>
                              <span className="text-[11px] font-mono text-zinc-400">
                                {file.size}
                              </span>
                            </div>
                            <span className="text-xs font-bold font-mono text-white block group-hover:text-cyan-300 transition-colors">
                              {file.name}
                            </span>
                            <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
                              {file.description}
                            </p>
                          </div>

                          <div className="pt-3 mt-3 border-t border-zinc-850 flex items-center justify-between">
                            <span className="text-[10px] font-mono text-zinc-500 truncate max-w-[150px]">
                              {file.filename}
                            </span>
                            <a
                              href={file.path}
                              download={file.filename}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-all shadow-sm"
                            >
                              <Download size={12} />
                              <span>Download</span>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-xs font-mono text-zinc-400">
                    No downloadable assets for this project. Refer to the GitHub repository.
                  </p>
                )}

                {project.github && (
                  <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-white block">
                        Source Code Repository
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {project.github}
                      </span>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-mono transition-all"
                    >
                      <GithubIcon size={14} />
                      Open Repo
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
