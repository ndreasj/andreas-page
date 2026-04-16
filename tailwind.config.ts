import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#0f0f0f",
        surface: "#1a1a1a",
        border: "#2a2a2a",
        muted: "#6b6b6b",
        subtle: "#3a3a3a",
        primary: "#e8e8e8",
        accent: "#a0a0a0",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#e8e8e8",
            a: { color: "#e8e8e8" },
            strong: { color: "#ffffff" },
            h1: { color: "#ffffff" },
            h2: { color: "#ffffff" },
            h3: { color: "#ffffff" },
            blockquote: { color: "#a0a0a0", borderLeftColor: "#2a2a2a" },
            code: { color: "#e8e8e8" },
            "pre code": { color: "#e8e8e8" },
            hr: { borderColor: "#2a2a2a" },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
