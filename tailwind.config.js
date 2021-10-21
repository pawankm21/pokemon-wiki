module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "mask-image":
          "url('https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_960_720.png')",
      },
    },
  },
  important: true,
  variants: {
    extend: {},
  },
  plugins: [],
};
