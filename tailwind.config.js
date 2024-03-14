module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#f6f7f9", 200: "#e7e7e7", 800: "#494848", 900: "#222529" },
        yellow: { 800: "#f59d1f" },
        blue_gray: { 400: "#8d8d8d" },
        white: { A700: "#ffffff" },
        red: { A200: "#ff5b5b" },
        green: { 600: "#4f9749" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
