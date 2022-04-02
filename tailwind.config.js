const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
