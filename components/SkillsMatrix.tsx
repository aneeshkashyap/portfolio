"use client";

import React, { useState } from "react";
import { skillCategories, SkillItem } from "@/data/resumeData";
import {
  Binary,
  BarChart3,
  BrainCircuit,
  Code2,
  Layout,
  Sparkles,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export default function SkillsMatrix() {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Binary":
        return <Binary size={18} className="text-cyan-400" />;
      case "BarChart3":
        return <BarChart3 size={18} className="text-emerald-400" />;
      case "BrainCircuit":
        return <BrainCircuit size={18} className="text-purple-400" />;
      case "Code2":
        return <Code2 size={18} className="text-amber-400" />;
      case "Layout":
        return <Layout size={18} className="text-blue-400" />;
      case "Sparkles":
        return <Sparkles size={18} className="text-pink-400" />;
      default:
        return <Cpu size={18} className="text-cyan-400" />;
    }
  };

  const currentCategory = skillCategories[selectedCategoryIdx];

  const getLevelBadge = (level: SkillItem["level"]) => {
    switch (level) {
      case "Core":
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
            Core
          </span>
        );
      case "Advanced":
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-medium">
            Advanced
          </span>
        );
      case "Working Knowledge":
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
            Working Knowledge
          </span>
        );
    }
  };

  return (
    <section id="skills" className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 relative z-10">
      {/* Section Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
          <Cpu size={13} />
          <span>Technical Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Technical Stack
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Core technical proficiencies spanning statistical exploratory data analysis, machine learning pipelines, relational databases, interactive dashboards, and modern AI-assisted workflows.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 mb-6">
        {skillCategories.map((cat, idx) => {
          const isSelected = idx === selectedCategoryIdx;
          return (
            <button
              key={cat.category}
              onClick={() => setSelectedCategoryIdx(idx)}
              className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? "bg-zinc-900 border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                  : "bg-zinc-950/60 border-zinc-800/80 hover:bg-zinc-900/60 hover:border-zinc-700"
              }`}
            >
              <div className="mb-2">{getIcon(cat.iconName)}</div>
              <div>
                <span
                  className={`text-xs font-mono font-semibold block leading-tight ${
                    isSelected ? "text-cyan-300" : "text-zinc-300"
                  }`}
                >
                  {cat.category}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono mt-0.5 block">
                  {cat.skills.length} skills
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Category Skills Panel */}
      <div className="rounded-3xl border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-2 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
              {getIcon(currentCategory.iconName)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-mono">
                {currentCategory.category}
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                {currentCategory.description}
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 self-start sm:self-center">
            Evidence-Based Proficiency
          </span>
        </div>

        {/* Skills Grid without Arbitrary Percentages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-sm font-bold font-mono text-zinc-200 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  {getLevelBadge(skill.level)}
                </div>

                {skill.context && (
                  <p className="text-xs text-zinc-400 mt-1 leading-snug">
                    {skill.context}
                  </p>
                )}
              </div>

              {skill.highlight && (
                <div className="mt-3 pt-2.5 border-t border-zinc-800/60 flex items-center gap-1.5 text-[10px] font-mono text-cyan-400/90">
                  <CheckCircle2 size={11} className="text-cyan-400 shrink-0" />
                  <span>Applied across flagship projects</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* AI-Assisted Workflow Highlight Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-zinc-900/80 via-zinc-900/50 to-cyan-950/30 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles size={20} className="text-cyan-400 shrink-0" />
            <div>
              <span className="text-xs font-mono font-bold text-white block">
                AI-Assisted Development
              </span>
              <p className="text-xs text-zinc-400 mt-0.5">
                Using AI-assisted development tools for rapid prototyping, debugging, documentation, and development acceleration.
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono px-3 py-1 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 whitespace-nowrap">
            Productivity Acceleration
          </span>
        </div>
      </div>
    </section>
  );
}
