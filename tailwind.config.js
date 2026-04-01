/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Core palette
          bgMain: "#F3E8DF",      // very light background
          bgAlt: "#E8D1C5",       // warm light accent background
          textMain: "#452829",    // deep rich brown - primary text / headings
          textMuted: "#57595B",   // neutral gray - secondary text / labels

          primary: "#452829",     // primary actions / key accents
          primarySoft: "#E8D1C5", // soft primary surfaces
          accent: "#57595B",      // secondary accents

          borderSoft: "rgba(87, 89, 91, 0.15)", // subtle borders
          cardBg: "rgba(243, 232, 223, 0.95)",  // soft card background using bgMain
        },
      },
      boxShadow: {
        "brand-soft": "0 18px 45px rgba(69, 40, 41, 0.18)",
        "brand-strong": "0 22px 60px rgba(69, 40, 41, 0.24)",
      },
      borderRadius: {
        "brand-lg": "20px",
        "brand-xl": "28px",
      },
    },
  },
  plugins: [],
}

