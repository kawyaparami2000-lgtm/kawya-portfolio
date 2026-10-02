import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-bg-surface text-text-primary">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Placeholder Section: Contact */}
        <section id="contact" className="py-16 border-b border-border-subtle" aria-label="Contact Section">
          <div className="max-w-5xl mx-auto px-container space-y-4">
            <h2 className="font-display text-h1 font-bold">Contact</h2>
            <p className="text-body text-text-muted">Get in touch for software development, AI/ML, and QA internship opportunities coming soon.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-card-surface border-t border-border-subtle">
        <div className="max-w-5xl mx-auto px-container flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-text-muted">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>{profile.location}</p>
        </div>
      </footer>
    </div>
  );
}
