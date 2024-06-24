/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-color": "#00B98E",
        "custom-color-2": "#0E2E50",
      },
    },
  },
  plugins: [require("daisyui")],
};
