/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      hunyadi: '#f4b860',
      onyx: '#32373B',
      snow: '#F7F0F0',
      mindshaft: '#202020',
      brass: '#cc9077',
      jordyblue: '#97d5f5'

    },
  },
  plugins: [],
}

