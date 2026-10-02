"use client";

import { profile } from "@/data/profile";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Sparkles, MapPin } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const animationVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section className="py-16 md:py-24 border-b border-border-subtle" aria-label="Hero Section">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        className="max-w-5xl mx-auto px-container space-y-8"
      >
        {/* Status Badge */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-pill text-caption font-medium bg-accent-precision/10 text-accent-precision border border-accent-precision/20 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{profile.seekingRole}</span>
          </span>
          <span className="text-caption text-text-muted inline-flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-text-muted" />
            <span>{profile.location}</span>
          </span>
        </div>

        {/* Headline & Name */}
        <div className="space-y-3 max-w-3xl">
          <h1 className="font-display text-display font-extrabold tracking-tight text-text-primary">
            {profile.headline}
          </h1>
          <p className="font-body text-body-lg text-text-muted leading-relaxed">
            {profile.shortBio}
          </p>
        </div>

        {/* Action Buttons & Social Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-card bg-accent-primary text-white font-medium text-body hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <span>View projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-card bg-card-surface text-text-primary border border-border-subtle font-medium text-body hover:border-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none"
          >
            <Download className="w-4 h-4 text-accent-precision" />
            <span>Download CV</span>
          </a>

          <div className="flex items-center gap-2 pl-2">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-card bg-card-surface text-text-muted hover:text-text-primary border border-border-subtle transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none"
            >
              <Github className="w-5 h-5" />
            </a>

            {profile.linkedinUrl ? (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-card bg-card-surface text-text-muted hover:text-text-primary border border-border-subtle transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
