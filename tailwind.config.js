/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Courier Prime", "monospace"],
        titleFont: ["Croissant One", "serif"],
        headingFont: ["DM Serif Display", "serif"],
      },
      // bodyFont: "Courier Prime",
      // titleFont: "Croissant One",
    },
  },
  plugins: [],
};
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         bodyFont: "Poppins",
//         titleFont: "Nunito Sans",
//       },
//     },
//   },
//   plugins: [],
// };
