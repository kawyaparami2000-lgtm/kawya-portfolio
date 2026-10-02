import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${profile.name} | ${profile.headline}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.shortBio,
  keywords: [
    "Kawya Bogoda",
    "Software Engineer Intern",
    "AI/ML Developer",
    "QA Automation Engineer",
    "Horizon Campus Sri Lanka",
    "Next.js Portfolio",
    "RAG Pipelines",
    "Playwright QA",
  ],
  authors: [{ name: profile.name, url: baseUrl }],
  creator: profile.name,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: `${profile.name} | ${profile.headline}`,
    description: profile.shortBio,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.headline}`,
    description: profile.shortBio,
    creator: "@KawyaBogoda",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${jakarta.variable}`}
    >
      <body className="antialiased bg-bg-surface text-text-primary min-h-screen font-body">
        {/* Skip to Main Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-accent-primary text-white font-medium rounded-card shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-primary"
        >
          Skip to main content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
