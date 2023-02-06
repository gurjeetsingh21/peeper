/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./atoms/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        kpi: {
          "text-increase": "#6BEBA4",
          "text-decrease": "#F52525",
          "bg-increase": "#26666333",
          "bg-decrease": "#f5252526",
        },
        sidebar: {
          background: "#111219",
          color: "#ffffffa6",
        },
        header: {
          from: "#92FE9D",
          to: "#00C9FF",
        },
        "kpi-card": {
          from: "#000000",
          to: "#808080",
        },
      },
    },
  },
  plugins: [],
};
