"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  FileText,
  ShieldCheck,
  Award,
} from "lucide-react";
import {
  personalInfo,
  internships,
  education,
  leadership,
  resumeProjects,
  resumeSkills,
} from "@/data/resumeData";
import AtsScoreView from "./AtsScoreView";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "resume" | "ats-score";
}

export default function ResumeModal({
  isOpen,
  onClose,
  initialTab = "resume",
}: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<"resume" | "ats-score">(initialTab);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

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

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: "spring", duration: 0.35, bounce: 0 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden z-10 text-zinc-100 print:max-w-none print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black"
        >
          {/* Action Toolbar Header */}
          <div className="p-3.5 sm:p-5 border-b border-zinc-800 bg-zinc-900/70 backdrop-blur-xl flex flex-wrap items-center justify-between gap-3 print:hidden shrink-0">
            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
              <button
                onClick={() => setActiveTab("resume")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeTab === "resume"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <FileText size={13} />
                <span>Curriculum Vitae</span>
              </button>
              <button
                onClick={() => setActiveTab("ats-score")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeTab === "ats-score"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <ShieldCheck size={13} className="text-emerald-400" />
                <span>ATS Score: <strong>94/100</strong></span>
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 transition-colors border border-zinc-800"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? "Copied!" : "Email"}</span>
              </button>

              <a
                href="/Aneesh_Kashyap_Resume.pdf"
                download="Aneesh_Kashyap_Resume.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/35 text-xs font-mono font-semibold transition-colors"
              >
                <Download size={13} />
                <span>Download PDF</span>
              </a>

              {activeTab === "resume" && (
                <button
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-colors"
                >
                  <Printer size={13} />
                  <span>Print</span>
                </button>
              )}

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800 ml-1"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Body: Either ATS Score View OR Printable Resume Document */}
          <div className="p-5 sm:p-8 md:p-10 overflow-y-auto space-y-6 text-zinc-200 print:text-black print:p-0 custom-scrollbar">
            {activeTab === "ats-score" ? (
              <AtsScoreView onSwitchToResume={() => setActiveTab("resume")} />
            ) : (
              /* Printable Resume Document */
              <div className="space-y-6">
                {/* Resume Header */}
                <div className="text-center border-b border-zinc-800 pb-5 print:border-black/20">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-wider text-white print:text-black font-sans">
                    {personalInfo.name}
                  </h1>
                  <p className="text-xs sm:text-sm font-mono tracking-wide text-cyan-400 print:text-black mt-1 font-semibold">
                    {personalInfo.role} | {personalInfo.subRole}
                  </p>

                  {/* Contact meta */}
                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-2.5 text-xs text-zinc-400 print:text-black font-mono">
                    <span>{personalInfo.email}</span>
                    <span>|</span>
                    <span>7397303538</span>
                    <span>|</span>
                    <span>Chennai</span>
                    <span>|</span>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-300 underline"
                    >
                      github.com/aneeshkashyap
                    </a>
                    <span>|</span>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-300 underline"
                    >
                      linkedin.com/in/aneesh-kashyap-k-s-146a7b371/
                    </a>
                  </div>

                  {/* ATS Score Prompt Banner */}
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[11px] font-mono print:hidden">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    <span>Machine ATS Rating: <strong>94/100 (A+)</strong></span>
                    <span>•</span>
                    <button
                      onClick={() => setActiveTab("ats-score")}
                      className="text-cyan-300 underline font-semibold hover:text-white"
                    >
                      Inspect ATS Diagnostic Audit &rarr;
                    </button>
                  </div>
                </div>

                {/* Summary */}
                <div className="space-y-2">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold border-b border-zinc-800 pb-1">
                    SUMMARY
                  </h2>
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-300 print:text-black">
                    {personalInfo.bio}
                  </p>
                </div>

                {/* Internship Experience */}
                <div className="space-y-4">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold border-b border-zinc-800 pb-1">
                    INTERNSHIP EXPERIENCE
                  </h2>

                  {internships.map((job) => (
                    <div key={job.company} className="space-y-1.5 text-xs sm:text-sm">
                      <div className="flex justify-between font-bold text-white print:text-black">
                        <span className="font-semibold text-sm">
                          {job.role}
                        </span>
                        <span className="font-mono text-xs text-zinc-400 print:text-black italic">
                          {job.duration}
                        </span>
                      </div>
                      <div className="text-xs text-cyan-400 print:text-black font-medium italic">
                        {job.company}
                      </div>
                      <ul className="list-disc list-outside space-y-1 text-zinc-300 print:text-black pl-4 text-xs leading-relaxed">
                        {job.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Projects */}
                <div className="space-y-4">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold border-b border-zinc-800 pb-1">
                    PROJECTS
                  </h2>

                  {resumeProjects.map((proj) => (
                    <div key={proj.title} className="space-y-1 text-xs sm:text-sm">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-white print:text-black">
                        <span className="text-xs sm:text-sm font-semibold">
                          {proj.title}
                        </span>
                        <span className="font-mono text-xs text-zinc-400 print:text-black font-normal">
                          | {proj.techStack}
                        </span>
                      </div>
                      <ul className="list-disc list-outside space-y-1 text-zinc-300 print:text-black pl-4 text-xs leading-relaxed">
                        {proj.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="space-y-2.5">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold border-b border-zinc-800 pb-1">
                    SKILLS
                  </h2>
                  <div className="space-y-1.5 text-xs">
                    {resumeSkills.map((item) => (
                      <div key={item.category} className="leading-relaxed">
                        <strong className="text-white print:text-black font-mono font-bold">
                          {item.category}:{" "}
                        </strong>
                        <span className="text-zinc-300 print:text-black">
                          {item.details}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-1.5">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold border-b border-zinc-800 pb-1">
                    EDUCATION
                  </h2>
                  <div className="flex justify-between text-xs sm:text-sm font-bold text-white print:text-black">
                    <span>{education.degree}</span>
                    <span className="font-mono text-xs text-zinc-400 print:text-black">{education.graduation}</span>
                  </div>
                  <p className="text-xs text-zinc-300 print:text-black font-medium">
                    {education.college}
                  </p>
                  <p className="text-xs text-zinc-400 print:text-black font-mono">
                    CGPA: {education.cgpa} | {education.currentStatus}
                  </p>
                </div>

                {/* Leadership & Responsibilities */}
                <div className="space-y-1.5">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold border-b border-zinc-800 pb-1">
                    LEADERSHIP & RESPONSIBILITIES
                  </h2>
                  <ul className="list-disc list-outside space-y-1 text-zinc-300 print:text-black pl-4 text-xs leading-relaxed">
                    <li>
                      <strong className="text-white print:text-black font-semibold">
                        {leadership.title} -- {leadership.organization} ({leadership.period})
                      </strong>
                      , {leadership.previousRole} for contributions to member engagement and event coordination -- reflecting time management and teamwork in a cooperative environment.
                    </li>
                  </ul>
                </div>

                {/* Competitions & Certifications */}
                <div className="space-y-1.5">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold border-b border-zinc-800 pb-1">
                    COMPETITIONS &amp; CERTIFICATIONS
                  </h2>
                  <ul className="list-disc list-outside space-y-1 text-zinc-300 print:text-black pl-4 text-xs leading-relaxed">
                    <li>
                      <strong className="text-white print:text-black font-semibold">
                        Top 10 Finalist — HEATCODE 2025 Machine Learning Hackathon
                      </strong>{" "}
                      (FODSE, SVCE · Aug 2025): Developed an ensemble of XGBoost &amp; LightGBM regressors to predict Chennai weather temperatures, securing a verified Top 10 Kaggle leaderboard standing.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
