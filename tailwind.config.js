/** Design tokens extracted from the Figma file */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003526", "primary-2": "#174d3b",
        mint: "#bde9d9", "mint-light": "#c0ecdc", "mint-ink": "#426a5e", "mint-dark": "#002018",
        surface: "#f2fcf2", "surface-low": "#ecf6ed", "surface-mid": "#e6f1e7", "surface-high": "#dbe5dc",
        ink: "#151e18", "ink-2": "#404944", secondary: "#3d6659", outline: "#707974",
        "outline-soft": "#c0c9c2", sage: "#9cd2ba", peach: "#ffddb4", "peach-ink": "#291800", brown: "#604111",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "1280px" },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,.05)",
        lift: "0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)",
        float: "0 20px 25px -5px rgba(0,0,0,.1), 0 8px 10px -6px rgba(0,0,0,.1)",
        header: "0 1px 8px rgba(23,77,59,.06)",
      },
    },
  },
  plugins: [],
};
