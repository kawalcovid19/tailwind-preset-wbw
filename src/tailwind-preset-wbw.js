const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // WargaBantuWarga.com brand colour
        brand: {
          DEFAULT: '#1667c2',
          50: '#c5ddf8',
          100: '#aed0f6',
          200: '#80b5f1',
          300: '#539beb',
          400: '#2580e6',
          500: '#1667c2',
          600: '#114f94',
          700: '#0c3666',
          800: '#061e39',
          900: '#01060b',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            hr: {
              borderColor: '#9ca3af',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
