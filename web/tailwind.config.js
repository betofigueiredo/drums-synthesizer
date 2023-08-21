/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1F2432",
        "cyan-800": "#315970",
      },
    },
  },
  plugins: [],
};
