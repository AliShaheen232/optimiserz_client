/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#EDF1F8",
        alt: "#E4EAF4",
        surface: "#F8FAFD",
        line: "#D6DEEB",
        ink: {
          DEFAULT: "#0B1426",
          soft: "#45536B",
          mute: "#7A879C",
        },
        cyan: {
          400: "#1BA8E0",
          600: "#0E7FB8",
        },
        violet: {
          400: "#7C7DF5",
          500: "#6466F0",
          600: "#4F50D8",
        },
        spark: "#FFB547",
      },
      fontFamily: {
        display: ['"Sora"', "system-ui", "sans-serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,20,38,0.05), 0 12px 32px -18px rgba(11,20,38,0.22)",
        glow: "0 18px 50px -16px rgba(100,102,240,0.55)",
      },
      backgroundImage: {
        accent: "linear-gradient(135deg, #1BA8E0 0%, #6466F0 100%)",
      },
    },
  },
  plugins: [],
};
