"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ArrowUpRight, BarChart2, Sparkles, FolderDown } from "lucide-react";
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
      className={`group relative flex flex-col justify-between rounded-3xl bg-zinc-950/75 border p-6 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden ${
        project.featured
          ? "border-cyan-500/50 hover:border-cyan-400 shadow-cyan-500/10"
          : "border-zinc-800/80 hover:border-zinc-700"
      }`}
    >
      {/* Top Accent Gradient Border */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 group-hover:via-cyan-400 to-transparent transition-all ${
          project.featured ? "opacity-100 via-cyan-400" : "opacity-50"
        }`}
      />

      {/* Top metadata */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold uppercase tracking-wider">
                Flagship Case Study
              </span>
            )}
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-900 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            {project.highlightMetric.value}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs font-mono text-zinc-400 mt-1 line-clamp-2">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
          {project.description}
        </p>

        {/* Downloadable Project Assets Badge */}
        {project.downloads && project.downloads.length > 0 && (
          <div className="mt-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 font-mono text-[11px]">
            <FolderDown size={12} className="text-cyan-400 shrink-0" />
            <span>{project.downloads.length} Project Deliverables (.ipynb, .pbix, .csv)</span>
          </div>
        )}
      </div>

      {/* Bottom Section: Tags & Actions */}
      <div className="mt-6 pt-4 border-t border-zinc-800/80 space-y-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-400 border border-zinc-800"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-zinc-500">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        {/* Action buttons */}
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
                aria-label={`GitHub repo for ${project.title}`}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
              >
                <GithubIcon size={15} />
              </a>
            )}

            {project.demo === "#playground" && onOpenPlayground && (
              <button
                onClick={onOpenPlayground}
                title="Launch in Data Playground"
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
