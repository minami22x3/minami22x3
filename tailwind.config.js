const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './components/**/*.{js,jsx}',
    './containers/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
  ],
  theme: {
    colors: {
      gray: {
        50: '#a5a5a5',
        100: '#8d8d8d',
        200: '#515151',
        300: '#2a2a2a',
        400: '#1d1d1d',
        500: '#181818',
      },
      transparent: 'transparent',
      inherit: 'inherit',
      white: '#ffffff',
      red: '#fd2155',
      teal: '#08fdd8',
      purple: '#d26cd5',
      black: '#000000',
    },
    fontFamily: {
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
};
