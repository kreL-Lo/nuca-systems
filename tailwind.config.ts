import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-deep": "#060e1a",
        navy: "#0a1628",
        "navy-mid": "#0f1d32",
        "navy-light": "#162642",
        "navy-surface": "#1a2d4a",
        blue: "#2196f3",
        "blue-bright": "#42a5f5",
        "blue-glow": "rgba(33, 150, 243, 0.15)",
        "blue-subtle": "rgba(33, 150, 243, 0.08)",
        cyan: "#26c6da",
        "cyan-bright": "#4dd0e1",
        red: "#ff6b6b",
        "red-bright": "#ff8a8a",
        "red-glow": "rgba(255, 107, 107, 0.15)",
        "red-subtle": "rgba(255, 107, 107, 0.08)",
        white: "#f0f4f8",
        gray: "#8899aa",
        "gray-light": "#b0bec5",
        text: "#cdd8e4",
        gold: "#f0c040",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 50%, rgba(33, 150, 243, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(255, 107, 107, 0.15) 0%, transparent 40%), radial-gradient(circle at 60% 60%, rgba(38, 198, 218, 0.08) 0%, transparent 40%)",
        "grid-overlay":
          "linear-gradient(rgba(74, 158, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 158, 255, 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      boxShadow: {
        "blue-glow": "0 8px 30px rgba(74, 158, 255, 0.3)",
        "blue-soft": "0 20px 60px rgba(74, 158, 255, 0.08)",
        "red-soft": "0 20px 60px rgba(255, 107, 107, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
