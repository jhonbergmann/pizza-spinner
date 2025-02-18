const {colors} = require('./src/styles/colors')
const {fonts} = require('./src/styles/fonts')

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {...colors},
      fontFamily: {
        regular: [fonts.regular],
        medium: [fonts.medium],
        semiBold: [fonts.semi_bold],
        bold: [fonts.bold],
      },
    },
  },
  plugins: [],
}
