/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        slatebase: "rgb(var(--color-slatebase) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        borderline: "rgb(var(--color-borderline) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        accentsoft: "rgb(var(--color-accentsoft) / <alpha-value>)",
        textmain: "rgb(var(--color-textmain) / <alpha-value>)",
        textmuted: "rgb(var(--color-textmuted) / <alpha-value>)"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"]
      },
      boxShadow: {
        panel: "var(--shadow-panel)"
      }
    }
  },
  plugins: []
};
