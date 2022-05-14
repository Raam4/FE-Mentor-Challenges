module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px'
    },
    fontFamily :{
      'sans': 'Outfit, sans-serif' 
    },
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightGray: 'hsl(212, 45%, 89%)',
        grayishBlue: 'hsl(220, 15%, 55%)',
        darkBlue: 'hsl(218, 44%, 22%)',
      }
    },
  },
  plugins: [],
}