"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIBuild from "@/components/WhatIBuild";
import DataCanvas from "@/components/DataCanvas";
import ProjectsGrid from "@/components/ProjectsGrid";
import DataPlayground from "@/components/DataPlayground";
import SkillsMatrix from "@/components/SkillsMatrix";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function PortfolioClient() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
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

      {/* Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections: Narrative Flow */}
      <main className="flex-1 w-full relative z-10">
        {/* 1. Overview & Positioning Hero */}
        <Hero
          onOpenResume={handleOpenResume}
          onOpenContact={handleScrollToContact}
        />

        {/* 1.5 What I Build (Concise Capability Overview) */}
        <WhatIBuild />

        {/* 2. Featured Projects & Case Studies (Primary Proof of Ability) */}
        <ProjectsGrid
          onOpenPlayground={handleScrollToPlayground}
          onOpenResume={handleOpenResume}
        />

        {/* 3. Interactive EDA Lab (Hands-on Exploration) */}
        <DataPlayground />

        {/* 4. Technical Stack & Competencies */}
        <SkillsMatrix />

        {/* 5. Internships, Education & ACM Leadership */}
        <ExperienceTimeline />

        {/* 6. Direct Contact & Professional Inquiry */}
        <ContactSection onOpenResume={handleOpenResume} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable / ATS-Friendly Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
