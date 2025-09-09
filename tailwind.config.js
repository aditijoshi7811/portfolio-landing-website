/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add "Space Mono" as a new font family
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

