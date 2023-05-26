/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/global/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      skeleton: "#c3c3c3",
      primaryColor: "#3498db",
      secondaryColor: "rgb(39, 118, 171)",
      disabledColor: "rgb(15, 54, 80)",
    },
  },
  plugins: [],
};
