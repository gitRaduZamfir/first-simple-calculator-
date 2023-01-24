/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
    },
    fontFamily: {
      helvetica: ["Helvetica", "sans-serif"],
      letter: ["Courier New"],
    },
  },
  plugins: [],
};
