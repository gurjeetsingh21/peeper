/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        sidebar: {
          background: "1e1e1e",
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
