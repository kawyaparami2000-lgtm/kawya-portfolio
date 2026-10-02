import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { WashFlowArchitecture } from "@/components/WashFlowArchitecture";
import { ArrowLeft, ArrowRight, Github, ExternalLink, CheckCircle, Cpu } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found | Kawya Bogoda",
    };
  }

  return {
    title: `${project.title} | Case Study | Kawya Bogoda`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const currentIndex = projects.findIndex((p) => p.slug === resolvedParams.slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col bg-bg-surface text-text-primary">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-container py-12 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-caption font-semibold text-accent-primary hover:underline focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none rounded-sharp py-1 px-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="space-y-4 border-b border-border-subtle pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-0.5 rounded-pill text-caption font-mono bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
              {project.year} Case Study
            </span>
            {project.featured && (
              <span className="px-3 py-0.5 rounded-pill text-caption font-mono bg-accent-precision/10 text-accent-precision border border-accent-precision/20">
                Featured Project
              </span>
            )}
          </div>

          <h1 className="font-display text-display font-bold tracking-tight text-text-primary">
            {project.title}
          </h1>

          <p className="font-body text-body-lg text-text-muted leading-relaxed">
            {project.summary}
          </p>

          {/* Links if available */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-card bg-card-surface border border-border-subtle text-caption font-semibold text-text-primary hover:border-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-card bg-accent-primary text-white text-caption font-semibold hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </header>

        {/* Overview Section */}
        <section className="space-y-3" aria-label="Project Overview">
          <h2 className="font-display text-h2 font-semibold text-text-primary">Overview</h2>
          <p className="font-body text-body text-text-muted leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Role Section (Only rendered if defined) */}
        {project.role && (
          <section className="space-y-3" aria-label="My Role">
            <h2 className="font-display text-h2 font-semibold text-text-primary">My Role</h2>
            <div className="p-card rounded-card border border-border-subtle bg-card-surface">
              <p className="font-body text-body text-text-primary font-medium">{project.role}</p>
            </div>
          </section>
        )}

        {/* Problem Section (Only rendered if defined) */}
        {project.problem && (
          <section className="space-y-3" aria-label="The Problem">
            <h2 className="font-display text-h2 font-semibold text-text-primary">The Problem</h2>
            <p className="font-body text-body text-text-muted leading-relaxed">
              {project.problem}
            </p>
          </section>
        )}

        {/* Key Features / Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="space-y-4" aria-label="Key Features">
            <h2 className="font-display text-h2 font-semibold text-text-primary">Key Features</h2>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-precision shrink-0 mt-0.5" />
                  <span className="font-body text-body text-text-primary">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack */}
        <section className="space-y-3" aria-label="Tech Stack">
          <h2 className="font-display text-h2 font-semibold text-text-primary">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-card text-body font-mono bg-card-surface border border-border-subtle text-text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Architecture Section (Only rendered if defined or WashFlow) */}
        {(project.architecture || project.slug === "washflow") && (
          <section className="space-y-4" aria-label="System Architecture">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-accent-primary" />
              <h2 className="font-display text-h2 font-semibold text-text-primary">
                System Architecture
              </h2>
            </div>
            {project.architecture && (
              <p className="font-body text-body text-text-muted leading-relaxed">
                {project.architecture}
              </p>
            )}

            {/* WashFlow Interactive SVG Diagram */}
            {project.slug === "washflow" && <WashFlowArchitecture />}
          </section>
        )}

        {/* Lessons Learned (Only rendered if defined) */}
        {project.lessons && project.lessons.length > 0 && (
          <section className="space-y-3" aria-label="What I Learned">
            <h2 className="font-display text-h2 font-semibold text-text-primary">What I Learned</h2>
            <ul className="space-y-2 list-disc list-inside text-body text-text-muted">
              {project.lessons.map((lesson, i) => (
                <li key={i} className="leading-relaxed">
                  {lesson}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Screenshot Gallery (Only rendered if screenshots exist) */}
        {((project.gallery && project.gallery.length > 0) ||
          (project.screenshots && project.screenshots.length > 0)) && (
          <section className="space-y-4" aria-label="Screenshot Gallery">
            <h2 className="font-display text-h2 font-semibold text-text-primary">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(project.gallery || project.screenshots).map((imgSrc, i) => (
                <div
                  key={i}
                  className="relative h-64 rounded-card border border-border-subtle overflow-hidden bg-card-surface"
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Prev / Next Case Study Navigation */}
        <nav className="pt-8 border-t border-border-subtle flex items-center justify-between gap-4" aria-label="Project Case Studies Navigation">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col text-left space-y-1 focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none rounded-sharp p-2"
            >
              <span className="text-caption font-mono text-text-muted inline-flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                Previous Project
              </span>
              <span className="font-display font-semibold text-body text-text-primary group-hover:text-accent-primary transition-colors">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col text-right space-y-1 focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none rounded-sharp p-2"
            >
              <span className="text-caption font-mono text-text-muted inline-flex items-center justify-end gap-1">
                Next Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="font-display font-semibold text-body text-text-primary group-hover:text-accent-primary transition-colors">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </main>
    </div>
  );
}
