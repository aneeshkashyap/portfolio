"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Printer,
  Copy,
  Check,
  Award,
  ShieldCheck,
  Calendar,
  Users,
  Cpu,
  TrendingUp,
  FileCheck2,
  ExternalLink,
  Sparkles,
  Download,
} from "lucide-react";
import { CertificateData } from "@/data/certificates";

interface CertificateModalProps {
  certificate: CertificateData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  isOpen,
  onClose,
}: CertificateModalProps) {
  const [activeTab, setActiveTab] = useState<"certificate" | "caseStudy" | "verification">(
    "certificate"
  );
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const handleCopyCredential = () => {
    navigator.clipboard.writeText(certificate.credentialId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto print:p-0 print:static">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-5xl max-h-[94vh] flex flex-col rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden z-10 text-zinc-100 print:max-w-none print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black"
        >
          {/* Header Action Bar */}
          <div className="p-3 sm:p-4 md:p-5 border-b border-zinc-850 bg-zinc-900/70 backdrop-blur-xl flex flex-wrap items-center justify-between gap-3 print:hidden">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Award size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm sm:text-base font-mono text-white leading-tight">
                    {certificate.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {certificate.rankBadge}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mt-0.5">
                  <Calendar size={12} className="text-zinc-500" />
                  <span>{certificate.formattedDate}</span>
                  <span>•</span>
                  <span>SVCE FODSE</span>
                </div>
              </div>
            </div>

            {/* Nav Tabs */}
            <div className="flex items-center gap-1 bg-zinc-950/80 p-1 rounded-2xl border border-zinc-800">
              <button
                onClick={() => setActiveTab("certificate")}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeTab === "certificate"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Official Certificate
              </button>
              <button
                onClick={() => setActiveTab("caseStudy")}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeTab === "caseStudy"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                ML Case Study
              </button>
              <button
                onClick={() => setActiveTab("verification")}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeTab === "verification"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Credentials
              </button>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2">
              <a
                href={certificate.imageAsset}
                download="HEATCODE_2025_Certificate_Aneesh_Kashyap.png"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-semibold transition-colors"
                title="Download original certificate image"
              >
                <Download size={13} />
                <span className="hidden sm:inline">Download</span>
              </a>
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 border border-zinc-800 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer size={13} />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
            {/* TAB 1: OFFICIAL CERTIFICATE */}
            {activeTab === "certificate" && (
              <div className="space-y-6">
                {/* Authentic Certificate Image Display */}
                <div className="w-full flex justify-center">
                  <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-white">
                    <img
                      src={certificate.imageAsset}
                      alt={`${certificate.title} Certificate of Participation`}
                      className="w-full h-auto object-contain block mx-auto select-none"
                    />
                  </div>
                </div>

                {/* Sub-bar below certificate */}
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                        <span>Official Academic Credential</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[10px] text-emerald-400 font-normal">Verified</span>
                      </div>
                      <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                        Credential ID:{" "}
                        <span className="text-zinc-200 select-all font-semibold">
                          {certificate.credentialId}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyCredential}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 transition-colors"
                    >
                      {copiedId ? (
                        <>
                          <Check size={13} className="text-emerald-400" />
                          <span>Copied ID</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy ID</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab("caseStudy")}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-semibold transition-all"
                    >
                      <span>Read Story &amp; Tech Stack</span>
                      <Sparkles size={13} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ML CASE STUDY & NARRATIVE */}
            {activeTab === "caseStudy" && (
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Competition Snapshot Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                    <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                      Leaderboard Finish
                    </span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                      Top 10
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 block mt-0.5">
                      Kaggle Competition
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                    <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                      Team Name
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-mono text-cyan-400 truncate block">
                      Pair-o-dox
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 block mt-0.5">
                      2-Person Collaborative ML
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                    <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                      Ensemble Models
                    </span>
                    <span className="text-base sm:text-lg font-bold font-mono text-white truncate block">
                      XGBoost + LightGBM
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 block mt-0.5">
                      Gradient Boosted Trees
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                    <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                      Target Task
                    </span>
                    <span className="text-base sm:text-lg font-bold font-mono text-amber-400 truncate block">
                      Sunday Temp Predict
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 block mt-0.5">
                      Chennai Weather Data
                    </span>
                  </div>
                </div>

                {/* The Narrative Story */}
                <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-4">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                    <Sparkles size={14} />
                    <span>The Hackathon Experience &amp; Journey</span>
                  </div>

                  <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-sans">
                    {certificate.narrativeStory.overview}
                  </p>

                  {/* Challenge & Process Callouts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
                        <TrendingUp size={14} />
                        <span>The Challenge</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                        {certificate.narrativeStory.theChallenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
                        <Cpu size={14} />
                        <span>The Engineering Process</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                        {certificate.narrativeStory.theProcess}
                      </p>
                    </div>
                  </div>

                  {/* Solution & Outcome */}
                  <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                      <Award size={15} />
                      <span>The Ensemble Architecture &amp; Top 10 Result</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                      {certificate.narrativeStory.theSolution}
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-300 font-medium leading-relaxed font-sans pt-1">
                      {certificate.narrativeStory.theResult}
                    </p>
                  </div>

                  {/* Personal Takeaway */}
                  <div className="p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/60 text-xs sm:text-sm text-zinc-300 italic font-sans leading-relaxed">
                    &ldquo;{certificate.narrativeStory.takeaway}&rdquo;
                  </div>
                </div>

                {/* Technical Highlights & Feature Engineering */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Feature Engineering */}
                  <div className="p-5 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                      <Cpu size={14} />
                      Feature Engineering Highlights
                    </h4>
                    <ul className="space-y-2">
                      {certificate.technicalDetails.featureEngineeringHighlights.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <span className="text-cyan-400 mt-0.5">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Learnings */}
                  <div className="p-5 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <FileCheck2 size={14} />
                      Key Methodological Takeaways
                    </h4>
                    <ul className="space-y-2">
                      {certificate.technicalDetails.keyTakeaways.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <span className="text-emerald-400 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Team Roster */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Users size={15} className="text-purple-400" />
                    <span>Team Roster (Pair-o-dox):</span>
                    <span className="text-white font-bold">Aneesh Kashyap KS</span>
                    <span>&amp;</span>
                    <span className="text-white font-bold">Ananya Kannan</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {certificate.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: VERIFICATION & CREDENTIAL DETAILS */}
            {activeTab === "verification" && (
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-6">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-base font-mono text-white">
                          Credential Verification Record
                        </h4>
                        <p className="text-xs font-mono text-zinc-400">
                          Sri Venkateswara College of Engineering · Autonomous Institution
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-semibold">
                      Authentic
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-1">
                      <span className="text-zinc-500 block">Recipient</span>
                      <span className="text-white font-bold text-sm block">
                        {certificate.recipientName}
                      </span>
                      <span className="text-zinc-400 text-[11px]">
                        Department of CSE, 2nd Year
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-1">
                      <span className="text-zinc-500 block">Issuing Authority</span>
                      <span className="text-white font-bold text-sm block">
                        FODSE &amp; Dept. of AI&amp;DS / CSE
                      </span>
                      <span className="text-zinc-400 text-[11px]">
                        Sri Venkateswara College of Engineering
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-1">
                      <span className="text-zinc-500 block">Event &amp; Scope</span>
                      <span className="text-white font-bold text-sm block">
                        HEATCODE 2025
                      </span>
                      <span className="text-zinc-400 text-[11px]">
                        Competitive Machine Learning Hackathon
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-1">
                      <span className="text-zinc-500 block">Date of Issuance</span>
                      <span className="text-white font-bold text-sm block">
                        {certificate.formattedDate}
                      </span>
                      <span className="text-zinc-400 text-[11px]">
                        Verified &amp; Awarded in Person
                      </span>
                    </div>
                  </div>

                  {/* Signatories Record */}
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
                      Authorized Signatories
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {certificate.signatories.map((sig, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between"
                        >
                          <div>
                            <span className="font-bold text-sm text-white font-mono block">
                              {sig.name}
                            </span>
                            <span className="text-xs text-zinc-400 font-mono">
                              {sig.role}, {sig.organization}
                            </span>
                          </div>
                          <Check size={16} className="text-emerald-400" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Unique Credential Copy Bar */}
                  <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 block uppercase">
                        Credential Identifier
                      </span>
                      <span className="text-xs font-mono text-emerald-400 font-bold select-all">
                        {certificate.credentialId}
                      </span>
                    </div>
                    <button
                      onClick={handleCopyCredential}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 transition-colors"
                    >
                      {copiedId ? (
                        <>
                          <Check size={13} className="text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
