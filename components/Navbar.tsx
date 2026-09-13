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
  Activity,
  Terminal,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Name */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-zinc-950 font-bold font-mono text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            AK
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              ANEESH KASHYAP
            </span>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>DATA ANALYST &amp; ANALYTICS ENGINEER</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-zinc-900/60 border border-zinc-800/80 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-mono text-zinc-400 hover:text-cyan-300 hover:bg-zinc-800/60 rounded-full transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* GitHub */}
          <a
            href="https://github.com/aneeshkashyap"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
          >
            <GithubIcon size={15} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/aneesh-kashyap-k-s"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
          >
            <LinkedinIcon size={15} />
          </a>

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

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            suppressHydrationWarning
            className="p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2">
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
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/aneeshkashyap"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-zinc-900 text-zinc-400"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://linkedin.com/in/aneesh-kashyap-k-s"
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
