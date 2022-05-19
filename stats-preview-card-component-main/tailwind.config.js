module.exports = {
  content: ['./src/*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '875px',
      xl: '1440px'
    },
    fontFamily: {
      'sans': 'Inter, sans-serif',
      'sec': 'Lexend Deca, sans-serif'
    },
    extend: {
      colors: {
        veryDarkBlue: 'hsl(233, 47%, 7%)',
        darkDesaturatedBlue: 'hsl(244, 38%, 16%)',
        softViolet: 'hsl(277, 64%, 61%)',
        white: 'hsl(0, 0%, 100%)',
        transparentWhite: 'hsla(0, 0%, 100%, 0.75)',
        otherTransparentWhite: 'hsla(0, 0%, 100%, 0.6)'
      }
    },
  },
  plugins: [],
}