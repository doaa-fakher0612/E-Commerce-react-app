/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: "var(--primary-light)",
        primaryDark: "var(--primary-dark)",
        secondaryLight: "var(--secondary-light)",
        secondaryDark: "var(--secondary-dark)",
        base: "var(--base)",
      },
      
    },
  },
  plugins: [],
}

