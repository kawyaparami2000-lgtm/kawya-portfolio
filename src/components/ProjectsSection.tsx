"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowUpRight, Github, ExternalLink, Code2 } from "lucide-react";

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const compactProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-border-subtle" aria-label="Projects Section">
      <div className="max-w-5xl mx-auto px-container space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-caption font-mono uppercase tracking-wider text-accent-primary font-semibold">
            Featured Portfolio
          </span>
          <h2 className="font-display text-h1 font-bold text-text-primary">
            Featured Projects
          </h2>
          <p className="text-body text-text-muted max-w-xl">
            Selected software development, AI/ML models, and test automation systems built with modern web architectures.
          </p>
        </div>

        {/* Featured Projects: Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col justify-between rounded-card border border-border-subtle bg-card-surface overflow-hidden group hover:border-accent-primary/50 transition-all duration-300 shadow-sm"
            >
              {/* Media Container / Graphic Placeholder */}
              <div className="relative w-full h-48 bg-bg-surface border-b border-border-subtle flex items-center justify-center p-6 overflow-hidden">
                {project.screenshots && project.screenshots.length > 0 ? (
                  <Image
                    src={project.screenshots[0]}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 text-text-muted group-hover:text-accent-primary transition-colors">
                    <Code2 className="w-10 h-10 stroke-[1.5]" />
                    <span className="text-caption font-mono">{project.title}</span>
                  </div>
                )}
                <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-pill text-caption font-mono bg-card-surface/90 border border-border-subtle text-text-muted backdrop-blur-sm">
                  {project.year}
                </span>
              </div>

              {/* Content Box */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-display text-h3 font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none rounded-sharp"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-body text-text-muted line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-sharp text-caption font-mono bg-bg-surface border border-border-subtle text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-caption font-semibold text-accent-primary hover:underline focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none rounded-sharp"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="p-1.5 text-text-muted hover:text-text-primary rounded-sharp focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        className="p-1.5 text-text-muted hover:text-text-primary rounded-sharp focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Compact Projects List */}
        {compactProjects.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="space-y-1">
              <h3 className="font-display text-h2 font-semibold text-text-primary">
                More Projects & Engineering Work
              </h3>
              <p className="text-caption text-text-muted">
                Systems architecture, backend services, and automation repositories.
              </p>
            </div>

            <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
              {compactProjects.map((project) => (
                <div
                  key={project.slug}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-card-surface/50 px-2 transition-colors rounded-sharp"
                >
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="font-display font-semibold text-body-lg text-text-primary group-hover:text-accent-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none rounded-sharp"
                      >
                        {project.title}
                      </Link>
                      <span className="text-caption font-mono text-text-muted">
                        ({project.year})
                      </span>
                    </div>
                    <p className="text-caption text-text-muted">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-sharp text-[11px] font-mono bg-bg-surface border border-border-subtle text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-caption font-semibold text-accent-primary hover:underline focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none rounded-sharp"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
