"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  TrendingUp,
  FileText,
  BarChart2,
  Database,
  Briefcase,
  Layers,
  Sparkles,
  Info,
  Award,
  Search,
  ExternalLink,
} from "lucide-react";
import { atsAuditData, AtsRoleMatch, AtsCategoryScore } from "@/data/atsData";

interface AtsScoreViewProps {
  onSwitchToResume?: () => void;
}

export default function AtsScoreView({ onSwitchToResume }: AtsScoreViewProps) {
  const [activeSubTab, setActiveSubTab] = useState<"overview" | "categories" | "roles" | "keywords" | "systems">("overview");

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Top Banner: Score Hero */}
      <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-zinc-900/80 to-zinc-950 border border-cyan-500/30 shadow-xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/35 flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-emerald-400" />
                VERIFIED ATS COMPLIANCE AUDIT
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                {atsAuditData.percentile}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white">
              Curriculum Vitae ATS Score
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              {atsAuditData.summary}
            </p>

            <div className="flex items-center gap-3 pt-2 text-[11px] font-mono text-zinc-400">
              <span>Audited: {atsAuditData.lastAudited}</span>
              <span>•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 size={12} />
                Single-Column ISO Layout
              </span>
            </div>
          </div>

          {/* Big Score Callout Card */}
          <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 shrink-0 self-start md:self-center">
            <div className="text-center">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block tracking-wider">
                Overall Score
              </span>
              <div className="flex items-baseline justify-center gap-1 mt-1">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  {atsAuditData.overallScore}
                </span>
                <span className="text-sm font-mono text-zinc-400">/100</span>
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-400 block mt-0.5">
                Grade: {atsAuditData.grade}
              </span>
            </div>

            <div className="w-[1px] h-16 bg-zinc-800" />

            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Format: 100%</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Keywords: 95%</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Metrics: 93%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs inside ATS View */}
        <div className="flex items-center gap-1.5 mt-6 pt-4 border-t border-zinc-800/80 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveSubTab("overview")}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
              activeSubTab === "overview"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
            }`}
          >
            Overview & Breakdown
          </button>
          <button
            onClick={() => setActiveSubTab("roles")}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === "roles"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
            }`}
          >
            <Briefcase size={12} />
            Target Role Matches (4)
          </button>
          <button
            onClick={() => setActiveSubTab("keywords")}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === "keywords"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
            }`}
          >
            <Cpu size={12} />
            Detected Keywords (14)
          </button>
          <button
            onClick={() => setActiveSubTab("systems")}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === "systems"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
            }`}
          >
            <Layers size={12} />
            ATS Systems (Greenhouse, Workday...)
          </button>
          <button
            onClick={() => setActiveSubTab("categories")}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === "categories"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
            }`}
          >
            <BarChart2 size={12} />
            Detailed Checklist
          </button>
        </div>
      </div>

      {/* SUBTAB 1: OVERVIEW & BREAKDOWN */}
      {activeSubTab === "overview" && (
        <div className="space-y-6">
          {/* Category Progress Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {atsAuditData.categories.map((cat, idx) => (
              <div
                key={cat.name}
                className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-white">
                      {cat.name}
                    </span>
                    <span className="text-xs font-mono font-extrabold text-cyan-400">
                      {cat.score}%
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-sans leading-snug">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-zinc-850">
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        cat.score === 100
                          ? "bg-gradient-to-r from-emerald-500 to-teal-400"
                          : "bg-gradient-to-r from-cyan-500 to-blue-400"
                      }`}
                      style={{ width: `${cat.score}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>Weight: {cat.weight}</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 size={10} />
                      {cat.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Role Match Highlights */}
          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-850 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-mono font-bold text-white flex items-center gap-2">
                <Briefcase size={15} className="text-cyan-400" />
                Target Role Match Summary
              </h4>
              <button
                onClick={() => setActiveSubTab("roles")}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline"
              >
                View details &rarr;
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {atsAuditData.roleMatches.map((r) => (
                <div
                  key={r.role}
                  className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white">
                      {r.role}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {r.matchScore}%
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 block">
                    {r.verdict}
                  </span>
                  <p className="text-[11px] text-zinc-400 font-sans line-clamp-2 leading-relaxed">
                    {r.recommendation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section Parsing Diagnostic Checklist */}
          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-850 space-y-3">
            <h4 className="text-sm font-mono font-bold text-white flex items-center gap-2">
              <ShieldCheck size={15} className="text-emerald-400" />
              Automated Parser Entity Extraction Diagnostics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {atsAuditData.parserDiagnostics.map((diag) => (
                <div
                  key={diag.section}
                  className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-2.5 text-xs font-mono"
                >
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{diag.section}</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded">
                        {diag.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-sans mt-0.5">
                      {diag.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: TARGET ROLE MATCHES */}
      {activeSubTab === "roles" && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <span className="font-bold text-sm block mb-1 text-white">
              Target Role Compatibility Analysis
            </span>
            Evaluated by cross-referencing candidate skills, project deliverables, and metrics against industry internship job specifications.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {atsAuditData.roleMatches.map((r) => (
              <div
                key={r.role}
                className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold font-mono text-white">
                      {r.role}
                    </h4>
                    <span className="text-xs font-mono text-emerald-400">
                      {r.verdict} • Grade {r.grade}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold font-mono text-cyan-400">
                      {r.matchScore}%
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 block">Match Score</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {r.recommendation}
                </p>

                <div className="pt-3 border-t border-zinc-850 space-y-1.5">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase block">
                    Top Matched ATS Keywords:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {r.topKeywordsFound.map((kw) => (
                      <span
                        key={kw}
                        className="px-2 py-0.5 rounded bg-zinc-950 text-cyan-300 border border-zinc-800 text-[10px] font-mono"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 3: DETECTED KEYWORDS */}
      {activeSubTab === "keywords" && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
            <h4 className="font-bold font-mono text-white text-sm flex items-center gap-2 mb-1">
              <Cpu size={15} className="text-cyan-400" />
              Verified Technical Keyword Frequency & Density
            </h4>
            <p className="text-zinc-400 font-sans">
              Automated scan verifying presence and recurrence of high-value technical keywords in Aneesh's resume and portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {atsAuditData.keywordDetections.map((item) => (
              <div
                key={item.term}
                className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-850 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-white">
                      {item.term}
                    </span>
                    <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/25">
                      {item.count}x
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 block mb-1">
                    {item.category} • {item.importance}
                  </span>
                  <p className="text-[11px] text-zinc-400 font-sans leading-snug">
                    {item.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 4: ATS SYSTEM COMPATIBILITY */}
      {activeSubTab === "systems" && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
            <h4 className="font-bold font-mono text-white text-sm flex items-center gap-2 mb-1">
              <Layers size={15} className="text-emerald-400" />
              Enterprise Applicant Tracking System Benchmark Tests
            </h4>
            <p className="text-zinc-400 font-sans">
              Evaluated against parser engines used by Fortune 500 and top technology recruiters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {atsAuditData.systemCompatibility.map((sys) => (
              <div
                key={sys.system}
                className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-2.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold font-mono text-white">
                      {sys.system}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {sys.passRate}% Pass
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 block mb-1">
                    Quality: {sys.parsingQuality} Extraction
                  </span>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {sys.notes}
                  </p>
                </div>
                <div className="pt-2 border-t border-zinc-850 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 size={11} />
                  <span>Validated Parse Profile</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 5: DETAILED CHECKLIST */}
      {activeSubTab === "categories" && (
        <div className="space-y-4">
          {atsAuditData.categories.map((cat) => (
            <div
              key={cat.name}
              className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold font-mono text-white">
                    {cat.name} ({cat.score}%)
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5">{cat.description}</p>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  {cat.status}
                </span>
              </div>

              <div className="space-y-2 pt-2 border-t border-zinc-850">
                {cat.checklist.map((chk, cIdx) => (
                  <div
                    key={cIdx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-850/80 text-xs"
                  >
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="font-mono text-white font-medium block">
                        {chk.item}
                      </span>
                      <span className="text-[11px] text-zinc-400 font-sans block">
                        Evidence: {chk.evidence}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Switcher / Action Bar */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
        <span className="text-zinc-400">
          Want to examine or print the raw CV text layer?
        </span>
        {onSwitchToResume && (
          <button
            onClick={onSwitchToResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 font-semibold transition-all"
          >
            <FileText size={13} />
            <span>Switch to Curriculum Vitae</span>
          </button>
        )}
      </div>
    </div>
  );
}
