module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "mask-image":
          "url('https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_960_720.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
