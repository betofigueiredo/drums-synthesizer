/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      gray: {
        700: '#373D50',
      },
      lime: {
        300: "#E5F33C"
      }
    },
    extend: {
      colors: {
        background: {
          main: "#2B2E43",
          dark: "#27293E"
        },
      },
    },
  },
  plugins: [],
};
