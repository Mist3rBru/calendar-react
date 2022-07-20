/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        background: '#121214',
        green: '#00875f',
        'green-hover': '#015f43'
      }
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    }
  },
  plugins: []
}
