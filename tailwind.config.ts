import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        myRed: {
          DEFAULT: '',
          100: '',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: '',
        },
        myBlue: {
          DEFAULT: '',
          100: '',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: ''
        },
        myGreen: {
          DEFAULT: '',
          100: '',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: ''
        },
        myYellow: {
          DEFAULT: '',
          100: '',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: ''
        },
        myDark: {
          DEFAULT: '',
          100: '',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: ''
        }
      }
    },
  },
  plugins: [],
} satisfies Config

