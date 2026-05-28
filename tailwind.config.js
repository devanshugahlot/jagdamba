/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Space Grotesk", "Manrope", "sans-serif"],
      },
      colors: {
        ink: "#020617",
        obsidian: "#050816",
        midnight: "#08111f",
        neon: "#4ff3ff",
        plasma: "#9b5cff",
        signal: "#21e6a2",
        aurum: "#f5c76b",
      },
      boxShadow: {
        glow: "0 0 40px rgba(79, 243, 255, 0.22)",
        "glow-purple": "0 0 48px rgba(155, 92, 255, 0.22)",
        "glass": "0 24px 80px rgba(0, 0, 0, 0.38)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(79,243,255,.2), transparent 34%), radial-gradient(circle at 80% 10%, rgba(155,92,255,.17), transparent 30%), linear-gradient(135deg, #020617 0%, #050816 48%, #08111f 100%)",
      },
      animation: {
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
