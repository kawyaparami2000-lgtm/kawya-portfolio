"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Terminal } from "lucide-react";

export default function Home() {
  const colors = [
    { name: "Background", varName: "--bg-surface", class: "bg-bg-surface", border: true },
    { name: "Text Primary", varName: "--text-primary", class: "bg-text-primary" },
    { name: "Text Muted", varName: "--text-muted", class: "bg-text-muted" },
    { name: "Accent (AI)", varName: "--accent-primary", class: "bg-accent-primary" },
    { name: "Accent (QA)", varName: "--accent-precision", class: "bg-accent-precision" },
    { name: "Border Subtle", varName: "--border-subtle", class: "bg-border-subtle" },
    { name: "Card Surface", varName: "--card-surface", class: "bg-card-surface", border: true },
  ];

  return (
    <main className="max-w-5xl mx-auto px-container py-12 space-y-12">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-border-subtle">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-pill text-caption font-medium bg-accent-precision/10 text-accent-precision border border-accent-precision/20 inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> QA & AI Engineering System
            </span>
          </div>
          <h1 className="font-display text-h1 font-bold tracking-tight">
            Kawya Bogoda
          </h1>
          <p className="text-text-muted text-body mt-1">
            Design System & Component Foundation Demo
          </p>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Intro Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-card rounded-card border border-border-subtle bg-card-surface space-y-4"
      >
        <div className="flex items-center gap-2 text-accent-primary font-medium text-caption">
          <Sparkles className="w-4 h-4" /> Distinctive Engineering Identity
        </div>
        <h2 className="font-display text-display font-bold text-text-primary tracking-tight">
          Precision Engineering meets AI Intelligence.
        </h2>
        <p className="text-body-lg text-text-muted max-w-2xl">
          Fourth-year BSc (Hons) IT undergraduate specializing in software development, AI/ML models, and rigorous QA automation testing.
        </p>
      </motion.section>

      {/* Color Palette Tokens */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-accent-primary" />
          <h2 className="font-display text-h2 font-semibold">Color Palette Tokens</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {colors.map((color) => (
            <div
              key={color.name}
              className="p-3 rounded-card border border-border-subtle bg-card-surface space-y-3 flex flex-col justify-between"
            >
              <div
                className={`h-16 rounded-sharp ${color.class} ${
                  color.border ? "border border-border-subtle" : ""
                }`}
              />
              <div>
                <p className="text-caption font-semibold text-text-primary truncate">
                  {color.name}
                </p>
                <p className="text-[11px] font-mono text-text-muted truncate">
                  {color.varName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Scale */}
      <section className="space-y-4">
        <h2 className="font-display text-h2 font-semibold">Typography Scale & Fonts</h2>
        <div className="p-card rounded-card border border-border-subtle bg-card-surface space-y-6">
          <div>
            <span className="text-caption text-accent-primary font-mono block mb-1">
              Display Font (Syne) — Display Scale
            </span>
            <p className="font-display text-display font-bold">
              Autonomous AI Systems
            </p>
          </div>
          <div>
            <span className="text-caption text-accent-precision font-mono block mb-1">
              Display Font (Syne) — Heading 1
            </span>
            <p className="font-display text-h1 font-semibold">
              QA Test Automation & Verification
            </p>
          </div>
          <div>
            <span className="text-caption text-text-muted font-mono block mb-1">
              Body Font (Plus Jakarta Sans) — Body Large
            </span>
            <p className="font-body text-body-lg text-text-muted">
              Designing scalable microservices, intelligent multi-agent pipelines, and zero-defect test suites for mission-critical software applications.
            </p>
          </div>
          <div>
            <span className="text-caption text-text-muted font-mono block mb-1">
              Body Font (Plus Jakarta Sans) — Caption / Code Mono
            </span>
            <code className="text-caption font-mono text-accent-precision bg-bg-surface px-2 py-1 rounded-sharp border border-border-subtle inline-block">
              pytest --maxfail=0 --disable-warnings --tb=short
            </code>
          </div>
        </div>
      </section>
    </main>
  );
}
