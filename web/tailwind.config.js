/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "gray-800": "#26262E",
        "gray-900": "#1A1A20",
        "gray-950": "#0B0D10",
        // "cyan-400": "#4BBBCF",
        // "cyan-800": "#315970",
      },
    },
  },
  plugins: [],
};
