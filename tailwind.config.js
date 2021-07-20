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
        50: 'rgb(165, 165, 165)',
        100: 'rgb(141, 141, 141)',
        200: 'rgb(81, 81, 81)',
        300: 'rgb(42, 42, 42)',
        400: 'rgb(29, 29, 29)',
        500: 'rgb(24, 24, 24)',
      },
      transparent: 'transparent',
      inherit: 'inherit',
      white: 'rgb(255, 255, 255)',
      red: 'rgb(253, 33, 85)',
      teal: 'rgb(8, 253, 261)',
      purple: 'rgb(210, 108, 213)',
      black: 'rgb(0, 0, 0)',
    },
    fontFamily: {
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      animation: {
        slide: 'slide 4000ms infinite alternate',
        glitch: 'glitch 500ms infinite step-start',
      },
      keyframes: {
        slide: {
          '0%': { 'background-position': 'left' },
          '100%': { 'background-position': 'right' },
        },
        glitch: {
          '0%': {
            'text-shadow': `0.05em 0 0 rgba(253, 33, 85, 0.75),
              -0.05em -0.025em 0 rgba(8, 253, 261, 0.75),
              -0.025em 0.05em 0 rgba(210, 108, 213, 0.75)`,
          },
          '15%': {
            'text-shadow': `-0.05em -0.025em 0 rgba(253, 33, 85, 0.75),
              0.025em 0.025em 0 rgba(8, 253, 261, 0.75),
              -0.05em -0.05em 0 rgba(210, 108, 213, 0.75)`,
          },
          '50%': {
            'text-shadow': `0.025em 0.05em 0 rgba(253, 33, 85, 0.75),
              0.05em 0 0 rgba(8, 253, 261, 0.75),
              0 -0.05em 0 rgba(210, 108, 213, 0.75)`,
          },
          '80%': {
            'text-shadow': `-0.025em 0 0 rgba(253, 33, 85, 0.75),
              -0.025em -0.025em 0 rgba(8, 253, 261, 0.75),
              -0.025em -0.05em 0 rgba(210, 108, 213, 0.75)`,
          },
        },
      },
    },
  },
};
