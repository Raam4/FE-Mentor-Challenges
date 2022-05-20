module.exports = {
  content: ['./src/*.html'],
  theme: {
    screnes: {
      sm: '375px',
      md: '415px',
      xl: '1440px'
    },
    fontFamily: {
      'sans': 'Lexend Deca, sans-serif',
      'sec': 'Big Shoulders Display, cursive'
    },
    extend: {
      colors: {
        brightOrange: 'hsl(31, 77%, 52%)',
        darkCyan: 'hsl(184, 100%, 22%)',
        veryDarkCyan: 'hsl(179, 100%, 13%)',
        transparentWhite: 'hsla(0, 0%, 100%, 0.75)',
        veryLightGray: 'hsl(0, 0%, 95%)'
      }
    },
  },
  plugins: [],
}
