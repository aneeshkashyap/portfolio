"use client";

import React, { useState, useMemo } from "react";
import projects, { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Search, Database, FileText } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/resumeData";

interface ProjectsGridProps {
  onOpenPlayground?: () => void;
  onOpenResume?: () => void;
}

export default function ProjectsGrid({ onOpenPlayground, onOpenResume }: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Data Analytics", "Interactive Dashboard", "Web Engineering"];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3">
            <Database size={13} />
            <span>Verified Project Deliverables</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Data Analytics & Engineering Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
            Each project represents an end-to-end analytical workflow: from raw dataset cleaning and feature engineering to statistical inference, visual evidence, and downloadable artifacts.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Search by tech or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500/60"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 pb-6 overflow-x-auto border-b border-zinc-850/80 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap ${
              activeCategory === cat
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-transparent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-3xl bg-zinc-950/40 border border-zinc-850 text-zinc-500 font-mono text-sm">
          No projects found matching your filter or query.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(p) => setSelectedProject(p)}
              onOpenPlayground={onOpenPlayground}
            />
          ))}
        </div>
      )}

      {/* Phase 9: Subtle Post-Projects Recruiter CTA */}
      <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white font-mono">
            Interested in my work?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-sans">
            I am actively seeking internship opportunities in data analytics, analytics engineering, AI/ML, and software engineering.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/35 text-xs font-mono font-semibold transition-all shadow-sm"
          >
            <FileText size={13} />
            <span>View Resume</span>
          </button>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono transition-all"
          >
            <LinkedinIcon size={13} />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Deep-dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenPlayground={onOpenPlayground}
      />
    </section>
  );
}
