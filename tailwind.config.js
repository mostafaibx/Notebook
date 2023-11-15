/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sail: {
          50: "#f2f9fd",
          100: "#e5f0f9",
          200: "#b7daf0",
          300: "#90c8e9",
          400: "#55acdb",
          500: "#2f91c8",
          600: "#2074a9",
          700: "#1b5d89",
          800: "#1a4f72",
          900: "#1b435f",
          950: "#122b3f",
        },
      },
    },
  },
  plugins: [],
};
