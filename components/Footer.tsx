"use client";

import React from "react";
import { personalInfo } from "@/data/resumeData";
import { ArrowUp, Heart, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-zinc-850 bg-zinc-950/80 backdrop-blur-md py-8 px-4 sm:px-6 relative z-10 text-zinc-400 text-xs font-mono">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-white tracking-wider">
            ANEESH KASHYAP K S
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span>Data Analyst &amp; Analytics Engineer • CS Student</span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="text-emerald-400">SVCE Chennai</span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all ml-2"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
