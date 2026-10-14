/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#f6f7f0", 100: "#e7ead6", 200: "#d2d9ae", 300: "#b6c17d",
          400: "#9aa856", 500: "#7d8c3c", 600: "#5f6e2c", 700: "#4a5524",
          800: "#3c451f", 900: "#333a1c",
        },
        grape: {
          50: "#f6f2fb", 100: "#eee5f7", 200: "#dfd0f0", 300: "#c8b0e4",
          400: "#ad86d4", 500: "#9460c2", 600: "#7c46a7", 700: "#653788",
          800: "#552f6f", 900: "#472a5c",
        },
        royal: {
          50: "#f0f6fa", 100: "#dcebf4", 200: "#c0d9ea", 300: "#94bfdb",
          400: "#619ec6", 500: "#3e82ae", 600: "#2d6893", 700: "#265478",
          800: "#234764", 900: "#213c55",
        },
        ivory: "#f7f4ec",
        ink: "#14171a",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
      letterSpacing: { widest2: "0.35em" },
      boxShadow: {
        luxe: "0 30px 60px -15px rgba(20,23,26,0.25)",
        card: "0 20px 45px -20px rgba(71,42,92,0.35)",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(30px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" } },
        kenburns: { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(1.12)" } },
      },
      animation: {
        fadeUp: "fadeUp .9s cubic-bezier(.22,1,.36,1) both",
        kenburns: "kenburns 18s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};