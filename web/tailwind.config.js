/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#13161f", // 171B26
        "gray-800": "#1b1e29", // 232732
        "gray-900": "#161923", // 1E222D
        // "cyan-800": "#315970",
      },
    },
  },
  plugins: [],
};
