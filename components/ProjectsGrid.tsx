"use client";

import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
