import Link from "next/link";
import { Header } from "@/components/Header";
import { profile } from "@/data/profile";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-surface text-text-primary">
      <Header />

      <main id="main-content" className="flex-1 flex items-center justify-center py-16 px-container">
        <div className="max-w-md mx-auto text-center space-y-6 p-card rounded-card border border-border-subtle bg-card-surface shadow-sm">
          <div className="w-16 h-16 rounded-pill bg-accent-primary/10 text-accent-primary flex items-center justify-center mx-auto">
            <FileQuestion className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-caption font-mono text-accent-primary uppercase tracking-wider font-semibold">
              404 — Page Not Found
            </span>
            <h1 className="font-display text-h1 font-bold text-text-primary">
              Page Lost in Orbit
            </h1>
            <p className="text-body text-text-muted">
              The page or case study you are looking for does not exist or has been moved.
            </p>
          </div>

          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-card bg-accent-primary text-white text-body font-medium hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
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
