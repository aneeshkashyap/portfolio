"use client";

import React from "react";
import { internships, leadership, education } from "@/data/resumeData";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Building,
} from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 relative z-10">
      {/* Section Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
          <Briefcase size={13} />
          <span>Track Record & Leadership</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Internships, Education & ACM
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Practical industry internships in machine learning and data analytics, computer science education at SVCE, and elected leadership at the ACM Student Chapter.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Internships */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <Briefcase size={16} />
            Industry Internships
          </h3>

          <div className="space-y-6 relative border-l-2 border-zinc-800 ml-3 pl-6">
            {internships.map((internship, idx) => (
              <div key={internship.company} className="relative group">
                {/* Node dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-cyan-400 shadow-md shadow-cyan-500/30 group-hover:scale-125 transition-transform" />

                {/* Card */}
                <div className="p-6 rounded-3xl bg-zinc-950/70 border border-zinc-800/80 hover:border-cyan-500/40 backdrop-blur-xl shadow-lg transition-all space-y-4">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-lg font-bold text-white font-mono">
                        {internship.role}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium mt-0.5">
                        <Building size={14} />
                        <span>{internship.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {internship.duration}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {internship.badge}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2">
                    {internship.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Key Highlights Sub-box */}
                  <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-850 text-xs text-zinc-300 font-mono space-y-1.5">
                    <span className="text-zinc-400 font-bold block">Key Deliverables:</span>
                    {internship.keyHighlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-zinc-300">
                        <ChevronRight size={13} className="text-cyan-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {internship.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & ACM Leadership */}
        <div className="lg:col-span-5 space-y-6">
          {/* Education Card */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-4">
              <GraduationCap size={16} />
              Formal Education
            </h3>

            <div className="p-6 rounded-3xl bg-zinc-950/70 border border-zinc-800/80 hover:border-emerald-500/40 backdrop-blur-xl shadow-lg transition-all space-y-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold block mb-1">
                  {education.currentStatus}
                </span>
                <h4 className="text-lg font-bold text-white font-mono">
                  {education.degree}
                </h4>
                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  {education.college}
                </p>
              </div>

              {/* CGPA Badge */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 block">Cumulative GPA</span>
                  <span className="text-2xl font-bold font-mono text-emerald-400">
                    {education.cgpa}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-zinc-400 block">Class of</span>
                  <span className="text-sm font-bold font-mono text-white">
                    2028
                  </span>
                </div>
              </div>

              {/* Coursework Tags */}
              <div>
                <span className="text-xs font-mono text-zinc-400 block mb-2">
                  Key Computer Science Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ACM Leadership Card */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-purple-400 flex items-center gap-2 mb-4">
              <Award size={16} />
              Leadership & Student Chapter
            </h3>

            <div className="p-6 rounded-3xl bg-zinc-950/70 border border-zinc-800/80 hover:border-purple-500/40 backdrop-blur-xl shadow-lg transition-all space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono text-purple-400 font-semibold block mb-1">
                    {leadership.period}
                  </span>
                  <h4 className="text-lg font-bold text-white font-mono">
                    {leadership.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5 font-mono">
                    {leadership.organization}
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Elected
                </span>
              </div>

              <div className="text-xs text-zinc-400 font-mono italic">
                {leadership.previousRole}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {leadership.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-zinc-850">
                {leadership.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Sparkles size={13} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
