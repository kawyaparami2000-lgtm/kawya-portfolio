"use client";

import { skillCategories } from "@/data/skills";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, BrainCircuit, ShieldCheck, Database, Layout } from "lucide-react";

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  const categoryIcons: Record<string, React.ReactNode> = {
    Programming: <Code2 className="w-5 h-5 text-accent-primary" />,
    "Data and AI": <BrainCircuit className="w-5 h-5 text-accent-primary" />,
    Testing: <ShieldCheck className="w-5 h-5 text-accent-precision" />,
    "Databases and tools": <Database className="w-5 h-5 text-accent-primary" />,
    Design: <Layout className="w-5 h-5 text-accent-precision" />,
  };

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-border-subtle" aria-label="Skills Section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-container space-y-10"
      >
        {/* Section Heading */}
        <div className="space-y-2">
          <span className="text-caption font-mono uppercase tracking-wider text-accent-precision font-semibold">
            Capabilities & Competencies
          </span>
          <h2 className="font-display text-h1 font-bold text-text-primary">
            Technical Skills
          </h2>
          <p className="text-body text-text-muted max-w-xl">
            Core stack spanning AI application engineering, automated quality assurance testing, and full-stack software development.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="p-card rounded-card border border-border-subtle bg-card-surface space-y-4 hover:border-accent-primary/40 transition-colors shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 pb-2 border-b border-border-subtle">
                  {categoryIcons[group.category] || <Code2 className="w-5 h-5 text-accent-primary" />}
                  <h3 className="font-display text-h3 font-semibold text-text-primary">
                    {group.category}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2 pt-1" aria-label={`${group.category} skills`}>
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-block px-3 py-1 rounded-card text-caption font-medium bg-bg-surface border border-border-subtle text-text-primary hover:border-accent-primary/50 transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
