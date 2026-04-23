"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article whileHover={{ scale: 1.02 }} className="bg-white dark:bg-zinc-900 border rounded-lg shadow-sm overflow-hidden">
      <div className="relative h-40 w-full">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{project.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-2">
            {project.tags?.map((t) => (
              <span key={t} className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm text-blue-600">
                Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-sm">
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
