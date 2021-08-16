const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: 'class',
  purge: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      gray: colors.blueGray
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
