/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        leftToRight: {
          '0%': {
            width: '0',
          },
          '50%': {
            width: '50%',
          },
          '100%': {
            width: '100%',
          },
        },
      },
      animation: {
        leftToRight: 'leftToRight 0.5s linear',
      },
      colors: {
        grey: '#394867',
        grey2: '#676D79',
        white1: '#F1F6F9',
        secondary: '#7360DF',
        purple2: '#8A7BE4',
        purple3: '#B9AFEF',
        primary: '#212A3E',
        borderGrey: '#DEE1E6',
        borderGrey2: '#EBEDF0',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
