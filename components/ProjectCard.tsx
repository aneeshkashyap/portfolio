"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { Sparkles, FolderDown, BarChart2, AlertCircle, Cpu, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  onOpenPlayground?: () => void;
}

export default function ProjectCard({ project, onOpenCaseStudy, onOpenPlayground }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group relative flex flex-col justify-between rounded-3xl bg-zinc-950/80 border p-6 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden ${
        project.featured
          ? "border-cyan-500/50 hover:border-cyan-400 shadow-cyan-500/10 ring-1 ring-cyan-500/20"
          : "border-zinc-800/80 hover:border-zinc-700"
      }`}
    >
      {/* Top Accent Gradient Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 group-hover:via-cyan-400 to-transparent transition-all ${
          project.featured ? "opacity-100 via-cyan-400" : "opacity-50"
        }`}
      />

      {/* Top Meta & Badges */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/35 font-bold tracking-wider">
                FLAGSHIP CASE STUDY
              </span>
            )}
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-900/90 text-emerald-400 border border-emerald-500/25 flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            {project.highlightMetric.value}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-zinc-400 mt-1 line-clamp-1">
          {project.subtitle}
        </p>

        {/* Structured Evidence Summary: Problem | Method | Key Finding */}
        <div className="mt-4 p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-850 space-y-2.5 text-xs">
          {/* Problem */}
          <div className="flex items-start gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-300 border border-rose-500/25 shrink-0 mt-0.5 font-semibold">
              PROBLEM
            </span>
            <span className="text-zinc-300 leading-snug text-[11px] font-sans">
              {project.problemSummary}
            </span>
          </div>

          {/* Method */}
          <div className="flex items-start gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 shrink-0 mt-0.5 font-semibold">
              METHOD
            </span>
            <span className="text-zinc-300 leading-snug text-[11px] font-sans">
              {project.methodSummary}
            </span>
          </div>

          {/* Key Finding */}
          <div className="flex items-start gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 shrink-0 mt-0.5 font-semibold">
              KEY FINDING
            </span>
            <span className="text-emerald-200/90 leading-snug text-[11px] font-sans font-medium">
              {project.findingSummary}
            </span>
          </div>
        </div>

        {/* Deliverables Available Badge */}
        {project.downloads && project.downloads.length > 0 && (
          <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-300 font-mono text-[10px]">
            <FolderDown size={12} className="text-cyan-400 shrink-0" />
            <span>{project.downloads.length} Project Artifacts (.ipynb, .pbix, .csv)</span>
          </div>
        )}
      </div>

      {/* Footer: Tools & Actions */}
      <div className="mt-5 pt-3.5 border-t border-zinc-850/80 space-y-3">
        {/* Tools Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-mono text-zinc-400 mr-1">TOOLS:</span>
          {project.toolsSummary.map((tool) => (
            <span
              key={tool}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 transition-all"
          >
            <Sparkles size={13} />
            Explore Case Study
          </button>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon size={15} />
              </a>
            )}

            {project.demo === "#playground" && onOpenPlayground && (
              <button
                onClick={onOpenPlayground}
                title="Launch in Interactive Data Lab"
                aria-label="Launch interactive demo"
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-emerald-400 hover:text-emerald-300 border border-zinc-800 transition-colors"
              >
                <BarChart2 size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
