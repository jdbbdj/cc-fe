/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-dark": "var(--main-dark)",
        "second-dark": "var(--second-dark)",
        "third-dark": "var(--third-dark)",
        "fourth-dark": "var(--fourth-dark)",
        "main-light": "var(--main-light)",
        "second-light": "var(--second-light)",
      },

      colorMode: {
        // 'light' | 'dark'
        defaultMode: "light",
        // disable system preference detection
        // useful for previewing light/dark mode
        disableSwitch: true,
      },
    },
  },
  plugins: [],
};
