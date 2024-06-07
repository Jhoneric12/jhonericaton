/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        'main-color': '#27374D',
        'title-color': '#DDE6ED',
        'text-color': '#DDE6E3',
        'accent-color': '#4BD8D5',
        'sub-title-color': '#9A9A9A',

        'light-main-color': '#fcfcfc',
        'light-text-color': '#27374D',
      }
    },
  },
  plugins: [],
};
