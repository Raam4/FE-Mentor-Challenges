module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px'
    },
    fontFamily :{
      'sans': 'Overpass, sans-serif' 
    },
    extend: {
      colors: {
        orange: 'hsl(25, 97%, 53%)',
        white: 'hsl(0, 0%, 100%)',
        lightGrey: 'hsl(217, 12%, 63%)',
        mediumGrey: 'hsl(216, 12%, 54%)',
        darkBlue: 'hsl(213, 19%, 18%)',
        veryDarkBlue: 'hsl(216, 12%, 8%)'
      }
    },
  },
  plugins: [],
}
