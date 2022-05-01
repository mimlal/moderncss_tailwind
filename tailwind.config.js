module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
     sm:"480px",
     md:"768px",
     lg:"976px",
     xl:"1440px"
    },
    extend: {
      colors:{
        brightRed:'hsl(12,88%,59%)',
        brightRedLight:'hsl(12,88%,69%)',
        darkBlue:'hsl(288,39%,2%)',
        darkGrayishBlue:'hsl(277,17%,61%)',
        veryDarkBlue:'hsl(233,17%,17%)',
        veryPaleRed:'hsl(13,100%,96%)',
        veryLightGray:'hsl(0,0%,98%)',
      
      }
    },
  },
  plugins: [],
}
