import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { profile } from "@/data/profile";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.headline,
    description: profile.shortBio,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Horizon Campus, Sri Lanka",
    },
    sameAs: [profile.githubUrl, profile.linkedinUrl].filter(Boolean),
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-bg-surface text-text-primary">
      {/* Person JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main id="main-content" className="flex-1">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="py-8 bg-card-surface border-t border-border-subtle">
        <div className="max-w-5xl mx-auto px-container flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-text-muted">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>{profile.location}</p>
        </div>
      </footer>
    </div>
  );
}
