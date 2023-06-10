/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "810px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
