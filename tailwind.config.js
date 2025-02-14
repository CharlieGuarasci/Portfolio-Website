/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Fix the path to index.html
    "./src/**/*.{js,jsx}", // This correctly includes all .js and .jsx files in src/
  ],
  darkMode: "class", 
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"], // "Inter" should be capitalized
      },
    },
  },
  plugins: [],
};
