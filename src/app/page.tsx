import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-bg-surface text-text-primary">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Placeholder Section: Projects */}
        <section id="projects" className="py-16 border-b border-border-subtle" aria-label="Projects Section">
          <div className="max-w-5xl mx-auto px-container space-y-4">
            <h2 className="font-display text-h1 font-bold">Projects</h2>
            <p className="text-body text-text-muted">Featured AI, QA, and software engineering projects coming soon.</p>
          </div>
        </section>

        {/* Placeholder Section: Skills */}
        <section id="skills" className="py-16 border-b border-border-subtle" aria-label="Skills Section">
          <div className="max-w-5xl mx-auto px-container space-y-4">
            <h2 className="font-display text-h1 font-bold">Skills</h2>
            <p className="text-body text-text-muted">Technical skills matrix and proficiency overview coming soon.</p>
          </div>
        </section>

        {/* Placeholder Section: Experience */}
        <section id="experience" className="py-16 border-b border-border-subtle" aria-label="Experience Section">
          <div className="max-w-5xl mx-auto px-container space-y-4">
            <h2 className="font-display text-h1 font-bold">Experience</h2>
            <p className="text-body text-text-muted">Education, work experience, and leadership history coming soon.</p>
          </div>
        </section>

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
