import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
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

        {/* Contact Section */}
        <ContactSection />
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
