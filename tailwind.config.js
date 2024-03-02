const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/views/app/**/*.blade.php', './resources/**/*.js', './resources/**/*.vue'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        light: colors.neutral,
        // #000033
        accentLight: {
          50: '#e4efff',
          100: '#cfe0ff',
          200: '#a8c4ff',
          300: '#749dff',
          400: '#3e61ff',
          500: '#1328ff',
          600: '#0010ff',
          700: '#0010ff',
          800: '#000ee4',
          900: '#0005b0',
          950: '#000033'
        },
        accentDark: colors.sky,
        dark: colors.slate
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base'
    }),
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}
