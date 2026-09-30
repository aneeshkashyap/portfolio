"use client";

import React, { useState } from "react";
import certificatesData, { CertificateData } from "@/data/certificates";
import CertificateModal from "./CertificateModal";
import {
  Award,
  ShieldCheck,
  Calendar,
  Users,
  Cpu,
  ChevronRight,
  ExternalLink,
  Eye,
  Sparkles,
  Trophy,
} from "lucide-react";

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateData | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Machine Learning", "Hackathons & Competitions"];

  const filteredCertificates = certificatesData.filter((cert) => {
    if (activeTab === "All") return true;
    if (activeTab === "Machine Learning") return cert.category === "Machine Learning";
    if (activeTab === "Hackathons & Competitions")
      return cert.tags.includes("Competitive Coding") || cert.tags.includes("Kaggle");
    return true;
  });

  return (
    <section id="certificates" className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3">
            <Trophy size={13} />
            <span>Competitive Milestones &amp; Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications &amp; Hackathons
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
            Verified academic credentials, competitive hackathon standings, and data science awards with full technical documentation and authentic issuance records.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900/70 border border-zinc-800 rounded-2xl backdrop-blur-sm self-start md:self-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 py-1.5 text-xs font-mono rounded-xl transition-all ${
                activeTab === cat
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Certificates Showcase Grid */}
      <div className="grid grid-cols-1 gap-8">
        {filteredCertificates.map((cert) => (
          <div
            key={cert.id}
            className="group relative rounded-3xl bg-zinc-950/80 border border-zinc-800/90 hover:border-emerald-500/40 transition-all duration-300 shadow-xl overflow-hidden backdrop-blur-xl"
          >
            {/* Top decorative gradient glow */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
              {/* Left Column: Visual Certificate Preview Card */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                {/* Mini interactive preview of the actual certificate */}
                <div
                  onClick={() => setSelectedCertificate(cert)}
                  className="relative group/preview rounded-2xl overflow-hidden cursor-pointer border border-zinc-700/60 shadow-lg hover:shadow-emerald-500/10 transition-all hover:scale-[1.01] bg-zinc-900"
                >
                  <img
                    src={cert.imageAsset}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-auto object-contain block transition-transform duration-300 group-hover/preview:scale-[1.02]"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/preview:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shadow-lg scale-90 group-hover/preview:scale-100 transition-transform">
                      <Eye size={22} />
                    </div>
                    <span className="text-xs font-mono font-bold text-white tracking-wide">
                      Click to Inspect Certificate
                    </span>
                    <span className="text-[10px] font-mono text-emerald-300">
                      Official Issued Document
                    </span>
                  </div>
                </div>

                {/* Verification metadata bar */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-2">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck size={14} />
                    <span>Verified Academic Credential</span>
                  </div>
                  <span className="text-[11px] text-zinc-500">
                    ID: {cert.credentialId}
                  </span>
                </div>
              </div>

              {/* Right Column: Narrative Context & Technical Breakthrough */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                <div>
                  {/* Badges Bar */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-semibold flex items-center gap-1.5">
                      <Trophy size={13} className="text-emerald-400" />
                      {cert.rankBadge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800 text-[11px] font-mono">
                      {cert.formattedDate}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px] font-mono">
                      Team {cert.teamName}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-2xl font-bold font-mono text-white tracking-tight">
                    {cert.title}
                  </h3>
                  <div className="text-sm font-mono text-emerald-400 mt-1 flex items-center gap-2">
                    <span>{cert.organizedBy}</span>
                    <span>•</span>
                    <span className="text-zinc-400">{cert.college}</span>
                  </div>

                  {/* Summary / Challenge Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed font-sans mt-3">
                    {cert.summary}
                  </p>

                  {/* Metric Chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
                    {cert.technicalDetails.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center"
                      >
                        <span className="text-[10px] font-mono text-zinc-400 block">
                          {m.label}
                        </span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-white truncate block mt-0.5">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Technical Highlights */}
                  <div className="mt-4 p-3.5 rounded-2xl bg-zinc-900/40 border border-zinc-850 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400">
                      <Cpu size={14} />
                      <span>The Architecture Decision:</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      &ldquo;Together with teammate Ananya Kannan, we built an ensemble of XGBoost and LightGBM regressors with cyclic temporal features and humidity interaction terms, securing a Top 10 position on the Kaggle leaderboard.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Tech Tags and Action Buttons */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      onClick={() => setSelectedCertificate(cert)}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-mono font-bold shadow-lg shadow-emerald-500/20 transition-all"
                    >
                      <Eye size={15} />
                      <span>Inspect Certificate</span>
                    </button>

                    <button
                      onClick={() => setSelectedCertificate(cert)}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono transition-colors"
                    >
                      <Sparkles size={14} className="text-cyan-400" />
                      <span>ML Story &amp; Leaderboard</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Interactive Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}
