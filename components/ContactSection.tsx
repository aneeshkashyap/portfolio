"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/resumeData";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formName, setFormName] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `Inquiry from ${formName || "Portfolio Visitor"}`
    )}&body=${encodeURIComponent(formMessage)}`;
    window.open(mailto, "_blank");
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto py-20 px-4 sm:px-6 relative z-10">
      {/* Top Banner */}
      <div className="rounded-3xl border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
              <Sparkles size={13} />
              <span>Available for Opportunities</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Have a project or opportunity?
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">
                I'm open to data analytics, analytics engineering, AI/ML, and software engineering opportunities. Reach out directly via email or connect through LinkedIn.
              </p>
            </div>

            {/* Quick Copy Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 block">Direct Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-cyan-300 font-medium"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, "email")}
                  className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 block">Phone / Mobile</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-emerald-300 font-medium"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                  className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 block">Current Location</span>
                  <span className="text-xs sm:text-sm font-mono text-zinc-300">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-800 font-mono text-xs transition-all"
              >
                <GithubIcon size={14} />
                <span>github.com/aneeshkashyap</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-800 font-mono text-xs transition-all"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Message Composer */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare size={16} className="text-cyan-400" />
                <h3 className="text-lg font-bold font-mono text-white">
                  Quick Dispatch
                </h3>
              </div>

              <form onSubmit={handleSend} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Name or Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex (Engineering Manager)"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 font-mono focus:outline-none focus:border-cyan-500/80"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Message or Project Query
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Aneesh, we loved your Ola/Uber EDA and would like to discuss..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 font-mono focus:outline-none focus:border-cyan-500/80 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-zinc-950 font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all"
                >
                  <Send size={15} />
                  <span>Launch Mail Client</span>
                </button>

                {sentSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center">
                    ✓ Opening mail client with your prefilled message!
                  </div>
                )}
              </form>
            </div>

            <div className="text-[11px] font-mono text-zinc-500 text-center mt-4">
              Response SLA: Typically within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
