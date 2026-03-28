/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#010008",
        secondary: "#8a94b5",
        tertiary: "#0a061d",
        "black-100": "#050212",
        "black-200": "#02000a",
        "white-100": "#f3f3f3",
        accent: "#00f0ff",
        highlight: "#bf61ff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        neon: "0 0 20px rgba(0, 240, 255, 0.4), 0 0 40px rgba(0, 240, 255, 0.1)",
        "neon-purple": "0 0 20px rgba(191, 97, 255, 0.4), 0 0 40px rgba(191, 97, 255, 0.1)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
      },
    },
  },
  plugins: [],
};
