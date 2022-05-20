module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px'
    },
    fontFamily: {
      'sans': 'Kumbh Sans, sans-serif'
    },
    extend: {
      colors: {
        darkCyan: 'hsl(185, 75%, 39%)',
        veryDarkDesaturatedBlue: 'hsl(229, 23%, 23%)',
        darkGrayishBlue: 'hsl(227, 10%, 46%)',
        darkGray: 'hsl(0, 0%, 59%)'
      }
    },
  },
  plugins: [],
}
