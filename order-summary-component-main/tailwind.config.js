module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      sm: '375px',
      md: '415px',
      xl: '1440px'
    },
    fontFamily :{
      'sans': 'Red Hat Display, sans-serif'
    },
    extend: {
      colors: {
        paleBlue: 'hsl(225, 100%, 94%)',
        brightBlue: 'hsl(245, 75%, 52%)',
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        desaturatedBlue: 'hsl(224, 23%, 55%)',
        darkBlue: 'hsl(223, 47%, 23%)'
      }
    },
  },
  plugins: [],
}