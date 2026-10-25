"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Sun,
  Moon,
  FileText,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/resumeData";

interface NavbarProps {
  onOpenResume?: () => void;
  onOpenAtsScore?: () => void;
}

export default function Navbar({ onOpenResume, onOpenAtsScore }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Projects", href: "#projects" },
    { label: "Data Lab", href: "#playground" },
    { label: "Skills", href: "#skills" },
    { label: "Certificates", href: "#certificates" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-4 border-b border-white/5"
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 flex items-center justify-between gap-4">
        {/* Brand / Name (Left) */}
        <div className="flex-1 flex items-center justify-start min-w-0">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-zinc-950 font-bold font-mono text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              AK
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                ANEESH KASHYAP
              </span>
              <div className="hidden lg:flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 whitespace-nowrap">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>SOFTWARE ENGINEERING CANDIDATE &amp; DATA ANALYST</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Nav Links (Center - Exactly Centered with Equal Gaps) */}
        <div className="hidden lg:flex items-center justify-center shrink-0">
          <nav className="flex items-center gap-1.5 p-1.5 bg-zinc-900/70 border border-zinc-800/80 rounded-full backdrop-blur-md shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 xl:px-4 py-1.5 text-xs font-mono whitespace-nowrap text-zinc-400 hover:text-cyan-300 hover:bg-zinc-800/70 rounded-full transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right CTA Actions (Right - Aligned to Far Right) */}
        <div className="flex-1 hidden lg:flex items-center justify-end gap-2.5 xl:gap-3 shrink-0">
          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
          >
            <GithubIcon size={15} />
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
          >
            <LinkedinIcon size={15} />
          </a>

          {/* ATS Score Trigger */}
          {onOpenAtsScore && (
            <button
              onClick={onOpenAtsScore}
              suppressHydrationWarning
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/35 text-xs font-mono font-semibold transition-all shadow-sm"
              title="Inspect Candidate ATS Audit (94/100)"
            >
              <ShieldCheck size={13} className="text-emerald-400" />
              <span>ATS: <strong>94%</strong></span>
            </button>
          )}

          {/* Resume Trigger */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              suppressHydrationWarning
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-medium transition-all"
            >
              <FileText size={13} />
              <span>Resume</span>
            </button>
          )}

          {/* Theme Toggle */}
          <button
            aria-label="Toggle Theme"
            suppressHydrationWarning
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-cyan-300 border border-zinc-800 transition-colors"
          >
            {mounted && (theme === "dark" ? <Sun size={15} /> : <Moon size={15} />)}
          </button>
        </div>

        {/* Mobile / Tablet Hamburger Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          {onOpenAtsScore && (
            <button
              onClick={onOpenAtsScore}
              suppressHydrationWarning
              className="px-2 py-1 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[11px] font-mono font-semibold flex items-center gap-1"
              aria-label="View ATS Score"
            >
              <ShieldCheck size={12} className="text-emerald-400" />
              <span>94%</span>
            </button>
          )}

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              suppressHydrationWarning
              className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs"
              aria-label="View Resume"
            >
              <FileText size={15} />
            </button>
          )}

          <button
            aria-label="Open Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-zinc-950/95 border-b border-zinc-800 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-mono text-zinc-300 hover:text-cyan-400 border-b border-zinc-900"
              >
                {link.label}
              </Link>
            ))}

            {onOpenAtsScore && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAtsScore();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-semibold flex items-center justify-between mt-2"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  ATS Diagnostic Audit
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200">
                  94/100
                </span>
              </button>
            )}

            {onOpenResume && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold flex items-center gap-2 mt-1"
              >
                <FileText size={14} />
                <span>View Full Resume</span>
              </button>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-zinc-900 text-zinc-400"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-zinc-900 text-zinc-400"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 text-xs font-mono text-zinc-300"
            >
              {mounted && (theme === "dark" ? <Sun size={14} /> : <Moon size={14} />)}
              <span>Theme</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
