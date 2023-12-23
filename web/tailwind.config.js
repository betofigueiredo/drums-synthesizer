/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        background: {
          main: "#2B2E43",
          dark: "#27293E"
        },
        white: "#ffffff",
        gray: {
          700: '#373D50',
        },
        lime: {
          300: "#E5F33C",
          400: "#CFD966",
        },
        slate: {
          900: "#171B26"
        }
      },
    },
  },
  plugins: [],
};
