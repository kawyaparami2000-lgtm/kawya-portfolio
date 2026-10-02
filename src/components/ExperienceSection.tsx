"use client";

import { experiences } from "@/data/experience";
import { ExperienceItem } from "@/data/types";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Calendar } from "lucide-react";

export function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion();

  const educationEntries = experiences.filter((e) => e.type === "education");
  const workEntries = experiences.filter((e) => e.type === "work");
  const leadershipEntries = experiences.filter((e) => e.type === "leadership");

  const groups = [
    {
      title: "Work Experience",
      icon: <Briefcase className="w-5 h-5 text-accent-primary" />,
      items: workEntries,
    },
    {
      title: "Education",
      icon: <GraduationCap className="w-5 h-5 text-accent-precision" />,
      items: educationEntries,
    },
    {
      title: "Leadership & Extracurricular Activities",
      icon: <Users className="w-5 h-5 text-accent-primary" />,
      items: leadershipEntries,
    },
  ];

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

  const renderTimelineItem = (item: ExperienceItem) => {
    const isCompact = !item.bullets || item.bullets.length === 0;

    if (isCompact) {
      return (
        <motion.li
          key={item.id}
          variants={itemVariants}
          className="p-3 rounded-card border border-border-subtle bg-card-surface flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm"
        >
          <div className="flex items-center gap-2">
            <h4 className="font-display font-semibold text-body text-text-primary">
              {item.title}
            </h4>
            <span className="text-text-muted text-caption">•</span>
            <span className="text-caption text-text-muted">{item.organization}</span>
          </div>
          <div className="flex items-center gap-1.5 text-caption font-mono text-text-muted shrink-0">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={item.startDate}>{item.startDate}</time>
            <span>–</span>
            <time dateTime={item.endDate}>{item.endDate}</time>
          </div>
        </motion.li>
      );
    }

    return (
      <motion.li
        key={item.id}
        variants={itemVariants}
        className="p-card rounded-card border border-border-subtle bg-card-surface space-y-3 shadow-sm relative pl-6 border-l-4 border-l-accent-primary"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border-subtle pb-3">
          <div>
            <h4 className="font-display font-bold text-h3 text-text-primary">
              {item.title}
            </h4>
            <p className="text-body font-medium text-text-muted">{item.organization}</p>
          </div>

          <div className="flex items-center gap-1.5 text-caption font-mono text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-pill border border-accent-primary/20 w-fit">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={item.startDate}>{item.startDate}</time>
            <span>–</span>
            <time dateTime={item.endDate}>{item.endDate}</time>
          </div>
        </div>

        <ul className="space-y-1.5 list-disc list-inside text-body text-text-muted pt-1">
          {item.bullets?.map((bullet, idx) => (
            <li key={idx} className="leading-relaxed">
              <span className="text-text-primary font-normal">{bullet}</span>
            </li>
          ))}
        </ul>
      </motion.li>
    );
  };

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-border-subtle" aria-label="Experience Section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-container space-y-12"
      >
        {/* Section Heading */}
        <div className="space-y-2">
          <span className="text-caption font-mono uppercase tracking-wider text-accent-primary font-semibold">
            Background & History
          </span>
          <h2 className="font-display text-h1 font-bold text-text-primary">
            Experience & Education
          </h2>
          <p className="text-body text-text-muted max-w-xl">
            Academic foundation, software engineering target role history, and leadership contributions.
          </p>
        </div>

        {/* Timeline Groups */}
        <div className="space-y-10">
          {groups.map((group) => (
            <div key={group.title} className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                {group.icon}
                <h3 className="font-display text-h2 font-semibold text-text-primary">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {group.items.map((item) => renderTimelineItem(item))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
