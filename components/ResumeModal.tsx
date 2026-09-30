"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  ExternalLink,
} from "lucide-react";
import {
  personalInfo,
  internships,
  education,
  leadership,
  resumeProjects,
  resumeSkills,
} from "@/data/resumeData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:static">
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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden z-10 text-zinc-100 print:max-w-none print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black"
        >
          {/* Action Toolbar Header */}
          <div className="p-4 sm:p-5 border-b border-zinc-800 bg-zinc-900/60 backdrop-blur-xl flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-cyan-400">
                Official Curriculum Vitae
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                Verified ATS Format
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 transition-colors"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? "Copied Email!" : "Copy Email"}</span>
              </button>

              <a
                href="/Aneesh_Kashyap_Resume.pdf"
                download="Aneesh_Kashyap_Resume.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-semibold transition-colors"
              >
                <Download size={13} />
                <span>Download PDF</span>
              </a>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold transition-colors"
              >
                <Printer size={13} />
                <span>Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors ml-1"
                aria-label="Close resume"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Printable Resume Document */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-zinc-200 print:text-black print:p-0">
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
                  linkedin.com/in/aneeshkashyap-k-s
                </a>
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
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
