import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-surface": "var(--bg-surface)",
        "text-primary": "var(--text-primary)",
        "text-muted": "var(--text-muted)",
        "accent-primary": "var(--accent-primary)",
        "accent-precision": "var(--accent-precision)",
        "border-subtle": "var(--border-subtle)",
        "card-surface": "var(--card-surface)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      fontSize: {
        display: ["3.25rem", { lineHeight: "1.1" }],
        h1: ["2.25rem", { lineHeight: "1.2" }],
        h2: ["1.75rem", { lineHeight: "1.25" }],
        h3: ["1.25rem", { lineHeight: "1.35" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.5" }],
        caption: ["0.875rem", { lineHeight: "1.4" }],
      },
      spacing: {
        section: "5rem",
        container: "2rem",
        card: "1.5rem",
        element: "1rem",
        tight: "0.5rem",
      },
      borderRadius: {
        sharp: "0.125rem",
        card: "0.5rem",
        pill: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
