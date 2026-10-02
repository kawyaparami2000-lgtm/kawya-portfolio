"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
  hp_field: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    hp_field: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: keyof FormState, value: string): string | undefined => {
    const trimmed = value.trim();
    if (name === "name") {
      if (trimmed.length < 2) return "Name must be at least 2 characters.";
      if (trimmed.length > 80) return "Name must not exceed 80 characters.";
    }
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return "Please enter a valid email address.";
    }
    if (name === "message") {
      if (trimmed.length < 10) return "Message must be at least 10 characters.";
      if (trimmed.length > 2000) return "Message must not exceed 2000 characters.";
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // Run client-side validation
    const nameErr = validateField("name", formData.name);
    const emailErr = validateField("email", formData.email);
    const messageErr = validateField("message", formData.message);

    if (nameErr || emailErr || messageErr) {
      setErrors({
        name: nameErr,
        email: emailErr,
        message: messageErr,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setIsSubmitted(true);
      setStatusMessage({ type: "success", text: data.message || "Thank you! Your message has been sent." });
      setFormData({ name: "", email: "", message: "", hp_field: "" });
      setErrors({});
    } catch (err: unknown) {
      const errorText = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setStatusMessage({ type: "error", text: errorText });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-border-subtle" aria-label="Contact Section">
      <div className="max-w-5xl mx-auto px-container space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-caption font-mono uppercase tracking-wider text-accent-primary font-semibold">
            Get In Touch
          </span>
          <h2 className="font-display text-h1 font-bold text-text-primary">
            Contact Me
          </h2>
          <p className="text-body-lg text-text-muted max-w-xl leading-relaxed">
            I am actively looking for software development, AI/ML, and QA testing internship opportunities. Feel free to reach out via direct message or connect on social platforms!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-card rounded-card border border-border-subtle bg-card-surface space-y-6 shadow-sm">
              <h3 className="font-display text-h3 font-semibold text-text-primary">
                Direct Channels
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 p-3 rounded-card border border-border-subtle bg-bg-surface hover:border-accent-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none group"
                >
                  <div className="p-2.5 rounded-pill bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-caption text-text-muted block">Direct Email</span>
                    <span className="text-body font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                      {profile.email}
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-card border border-border-subtle bg-bg-surface hover:border-accent-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none group"
                >
                  <div className="p-2.5 rounded-pill bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-caption text-text-muted block">GitHub Profile</span>
                    <span className="text-body font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                      github.com/kawyaparami2000-lgtm
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                {profile.linkedinUrl && (
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-card border border-border-subtle bg-bg-surface hover:border-accent-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none group"
                  >
                    <div className="p-2.5 rounded-pill bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-caption text-text-muted block">LinkedIn Profile</span>
                      <span className="text-body font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                        LinkedIn Profile
                      </span>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-card rounded-card border border-border-subtle bg-card-surface space-y-6 shadow-sm">
              <h3 className="font-display text-h3 font-semibold text-text-primary">
                Send a Message
              </h3>

              {/* Status Message (aria-live region) */}
              <div aria-live="polite" className="space-y-2">
                {statusMessage && (
                  <div
                    className={`p-4 rounded-card border flex items-start gap-3 text-caption font-medium ${
                      statusMessage.type === "success"
                        ? "bg-accent-precision/10 border-accent-precision/30 text-accent-precision"
                        : "bg-red-500/10 border-red-500/30 text-red-500"
                    }`}
                  >
                    {statusMessage.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    )}
                    <span>{statusMessage.text}</span>
                  </div>
                )}
              </div>

              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-accent-precision mx-auto" />
                  <p className="text-body font-medium text-text-primary">
                    Your message has been delivered! I will get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-card bg-bg-surface border border-border-subtle text-caption font-medium text-text-primary hover:border-accent-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Honeypot field for bot protection */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_field">Do not fill this field</label>
                    <input
                      type="text"
                      id="hp_field"
                      name="hp_field"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.hp_field}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-caption font-medium text-text-primary">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-3.5 py-2.5 rounded-card bg-bg-surface border text-body text-text-primary placeholder:text-text-muted/60 transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none ${
                        errors.name ? "border-red-500" : "border-border-subtle hover:border-text-muted"
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-caption text-red-500 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-caption font-medium text-text-primary">
                      Your Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                      placeholder="e.g. jane@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-card bg-bg-surface border text-body text-text-primary placeholder:text-text-muted/60 transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none ${
                        errors.email ? "border-red-500" : "border-border-subtle hover:border-text-muted"
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-caption text-red-500 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-caption font-medium text-text-primary">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      aria-invalid={!!errors.message}
                      placeholder="Write your message here..."
                      className={`w-full px-3.5 py-2.5 rounded-card bg-bg-surface border text-body text-text-primary placeholder:text-text-muted/60 transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none resize-y ${
                        errors.message ? "border-red-500" : "border-border-subtle hover:border-text-muted"
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-caption text-red-500 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 rounded-card bg-accent-primary text-white font-medium text-body inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:outline-none shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
