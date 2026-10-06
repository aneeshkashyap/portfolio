"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIBuild from "@/components/WhatIBuild";
import DataCanvas from "@/components/DataCanvas";
import ProjectsGrid from "@/components/ProjectsGrid";
import DataPlayground from "@/components/DataPlayground";
import SkillsMatrix from "@/components/SkillsMatrix";
import CertificatesSection from "@/components/CertificatesSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function PortfolioClient() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [resumeTab, setResumeTab] = useState<"resume" | "ats-score">("resume");

  const handleOpenResume = () => {
    setResumeTab("resume");
    setIsResumeOpen(true);
  };

  const handleOpenAtsScore = () => {
    setResumeTab("ats-score");
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => setIsResumeOpen(false);

  const handleScrollToPlayground = () => {
    const el = document.getElementById("playground");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Subdued Technical Data Constellation Canvas */}
      <DataCanvas />

      {/* Navigation with direct ATS Score and Resume triggers */}
      <Navbar
        onOpenResume={handleOpenResume}
        onOpenAtsScore={handleOpenAtsScore}
      />

      {/* Main Content Sections: Narrative Flow */}
      <main className="flex-1 w-full relative z-10">
        {/* 1. Overview & Positioning Hero */}
        <Hero
          onOpenResume={handleOpenResume}
          onOpenContact={handleScrollToContact}
          onOpenAtsScore={handleOpenAtsScore}
        />

        {/* 1.5 What I Build (Concise Capability Overview) */}
        <WhatIBuild />

        {/* 2. Featured Projects & Case Studies (Primary Proof of Ability) */}
        <ProjectsGrid
          onOpenPlayground={handleScrollToPlayground}
          onOpenResume={handleOpenResume}
          onOpenAtsScore={handleOpenAtsScore}
        />

        {/* 3. Interactive EDA Lab (Hands-on Exploration) */}
        <DataPlayground />

        {/* 4. Technical Stack & Competencies */}
        <SkillsMatrix />

        {/* 4.5 Certifications, Hackathons & Official Credentials */}
        <CertificatesSection />

        {/* 5. Internships, Education & ACM Leadership */}
        <ExperienceTimeline />

        {/* 6. Direct Contact & Professional Inquiry */}
        <ContactSection
          onOpenResume={handleOpenResume}
          onOpenAtsScore={handleOpenAtsScore}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable / ATS-Friendly Resume & Diagnostic Score Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
        initialTab={resumeTab}
      />
    </div>
  );
}
