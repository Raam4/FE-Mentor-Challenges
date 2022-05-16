module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px'
    },
    fontFamily :{
      'sans': 'Outfit, sans-serif' 
    },
    extend: {
      colors: {
        softBlue: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        mainDarkBlue: 'hsl(217, 54%, 11%)',
        cardDarkBlue: 'hsl(216, 50%, 16%)',
        lineDarkBlue: 'hsl(215, 32%, 27%)',
        white: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}