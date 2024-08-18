/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#00050E',
        white: '#FFFFFF',
        blue: '#0760FB',
        dodgerblue: '#4BBDFF',
        lightblue: '#E2EBFA',
        gray_50: '#F9F9F9',
        gray_100: '#F4F4F4',
        gray_200: '#D9D9D9',
        gray_300: '#979797',
        gray_400: '#717171',
        gray_500: '#393939',
      },
      boxShadow: {
        shadow_01: '0px 4px 12px 0px rgba(0, 5, 14, 0.05)',
        shadow_02: '0px -2px 6px 0px rgba(0, 4, 14, 0.10)',
      },
    },
  },
  plugins: [],
};
