"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import {
  X,
  ExternalLink,
  Database,
  Layers,
  Sparkles,
  TrendingUp,
  CheckCircle,
  BarChart2,
  FileSpreadsheet,
  Download,
  FileText,
  Code2,
  Presentation,
  FolderDown,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenPlayground?: () => void;
}

export default function ProjectModal({ project, onClose, onOpenPlayground }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
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
        return { label: "Asset File", color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30" };
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden z-10 text-zinc-100"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-zinc-850 bg-zinc-900/50 backdrop-blur-xl relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                {project.highlightMetric.label}: <strong>{project.highlightMetric.value}</strong>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 mt-1 font-mono">
              {project.subtitle}
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-zinc-800 hover:bg-zinc-750 text-zinc-200 border border-zinc-700 hover:border-cyan-500/50 transition-all"
                >
                  <GithubIcon size={14} />
                  View GitHub Repository
                </a>
              )}
              {onOpenPlayground && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenPlayground();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition-all font-semibold"
                >
                  <BarChart2 size={14} />
                  Open in Interactive Lab
                </button>
              )}
            </div>
          </div>

          {/* Body Content - Scrollable */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar">
            {/* DOWNLOADABLE PROJECT ASSETS (Files uploaded from File Explorer) */}
            {downloads && downloads.length > 0 && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-cyan-950/30 border border-cyan-500/30 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 font-bold">
                    <FolderDown size={15} />
                    Project Deliverables & Artifacts ({downloads.length} Files Available)
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Direct Download
                  </span>
                </div>
                <p className="text-xs text-zinc-300 font-sans">
                  The original project files, datasets, Power BI models, and Jupyter notebooks are hosted directly in this portfolio:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {downloads.map((file) => {
                    const badge = getFileBadge(file.type);
                    return (
                      <div
                        key={file.filename}
                        className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${badge.color}`}>
                              {badge.label}
                            </span>
                            <span className="text-[11px] font-mono text-zinc-400">
                              {file.size}
                            </span>
                          </div>
                          <span className="text-xs font-bold font-mono text-white block group-hover:text-cyan-300 transition-colors truncate">
                            {file.name}
                          </span>
                          <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                            {file.description}
                          </p>
                        </div>

                        <div className="pt-3 mt-2 border-t border-zinc-850 flex items-center justify-between">
                          <span className="text-[10px] font-mono text-zinc-500 truncate max-w-[140px]">
                            {file.filename}
                          </span>
                          <a
                            href={file.path}
                            download={file.filename}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-[11px] font-mono font-semibold transition-all shadow-sm"
                          >
                            <Download size={12} />
                            <span>Download</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Problem & Overview */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <Sparkles size={14} />
                Executive Overview & Problem Statement
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed">{caseStudy.overview}</p>
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs sm:text-sm text-zinc-300 font-mono">
                <strong className="text-white block mb-1">Core Problem Solved:</strong>
                {caseStudy.problemStatement}
              </div>
            </div>

            {/* Dataset Telemetry Cards */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-3">
                <Database size={14} />
                Dataset & Dimensional Telemetry
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-400 block">Total Records</span>
                  <span className="text-base font-bold font-mono text-white mt-1 block">
                    {caseStudy.datasetStats.records}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-400 block">Feature Depth</span>
                  <span className="text-base font-bold font-mono text-cyan-400 mt-1 block">
                    {caseStudy.datasetStats.features}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-400 block">Temporal Range</span>
                  <span className="text-base font-bold font-mono text-emerald-400 mt-1 block">
                    {caseStudy.datasetStats.timeline}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-400 block">Data Source</span>
                  <span className="text-xs font-bold font-mono text-purple-400 mt-1 block truncate">
                    {caseStudy.datasetStats.source}
                  </span>
                </div>
              </div>
            </div>

            {/* EDA & Preprocessing Pipeline */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 flex items-center gap-2 mb-3">
                <Layers size={14} />
                EDA & Preprocessing Methodology
              </h4>
              <div className="space-y-2.5">
                {caseStudy.edaMethodology.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 font-mono text-xs shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Insights & Findings */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-3">
                <TrendingUp size={14} />
                Critical Analytical Insights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {caseStudy.keyInsights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono text-zinc-400 block mb-1">
                        {insight.label}
                      </span>
                      <span className="text-lg font-bold font-mono text-amber-400 block mb-2">
                        {insight.value}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{insight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business & Technical Impact */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
                <CheckCircle size={14} />
                Business Impact & Strategic Takeaways
              </h4>
              <ul className="space-y-2">
                {caseStudy.businessImpact.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2 border-t border-zinc-850">
              <span className="text-xs font-mono text-zinc-500 block mb-2">Technologies & Tooling:</span>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
