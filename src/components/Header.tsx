"use client";

import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/profile";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  // Active section observer
  useEffect(() => {
    const sectionIds = ["projects", "skills", "experience", "contact"];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -60% 0px",
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle Escape key & Focus Trap for Mobile Menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }

      if (e.key === "Tab" && mobileMenuRef.current) {
        const focusables = mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-bg-surface/80 border-b border-border-subtle transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-container h-16 flex items-center justify-between">
        {/* Logo Link to Top */}
        <a
          href="#top"
          className="font-display font-bold text-h3 text-text-primary hover:text-accent-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none rounded-sharp px-1 py-0.5"
          aria-label={`${profile.name} - Scroll to top`}
        >
          {profile.name}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          <ul className="flex items-center gap-6 text-body">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none rounded-sharp px-2 py-1 ${
                      isActive
                        ? "text-accent-primary font-semibold"
                        : "text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 text-text-primary hover:bg-card-surface rounded-card border border-border-subtle focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden border-b border-border-subtle bg-card-surface px-container py-4 space-y-3"
        >
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`block py-2 px-3 rounded-card text-body font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none ${
                        isActive
                          ? "bg-accent-primary/10 text-accent-primary font-semibold"
                          : "text-text-primary hover:bg-bg-surface"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
