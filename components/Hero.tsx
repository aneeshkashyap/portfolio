"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full max-w-5xl mx-auto py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Hi, I'm Your Name — I build product-quality web experiences.
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
        I'm a college-level professional focused on interactive UI/UX, accessible design, and performant front-end products. Browse projects below or sign in to manage your portfolio.
      </motion.p>
    </section>
  );
}
