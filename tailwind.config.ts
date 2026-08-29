import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF8",
        foreground: "#0F172A",
        paper: {
          50: "#FCFCFA",
          100: "#F7F6F2",
          200: "#EFECE6",
          300: "#E2DDD5",
          400: "#CBC2B4",
        },
        slate: {
          850: "#131C2E",
          950: "#080D1A",
        },
        blueprint: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },
        amber: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
        },
        emerald: {
          500: "#10B981",
          600: "#059669",
        }
      },
      fontFamily: {
        sans: ["var(--font-cairo)", "Cairo", "sans-serif"],
        display: ["var(--font-ibm)", "IBM Plex Sans Arabic", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-blueprint": "radial-gradient(#CBD5E1 1px, transparent 1px)",
        "grid-dense": "linear-gradient(to right, #F1F5F9 1px, transparent 1px), linear-gradient(to bottom, #F1F5F9 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-blueprint": "24px 24px",
        "grid-dense": "16px 16px",
      },
      boxShadow: {
        "architectural": "0 2px 0 0 #0F172A",
        "architectural-lg": "4px 4px 0 0 #0F172A",
        "architectural-amber": "4px 4px 0 0 #D97706",
        "soft-elevation": "0 10px 30px -10px rgba(15, 23, 42, 0.08)",
      }
    },
  },
  plugins: [],
};
export default config;
