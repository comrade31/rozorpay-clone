/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        mullish:["mulish", "san-serif"]
      },
      colors:{
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76"
      },
      dropShadow:{
            '_dark':[
                  ' 0px 19px 38px rgba(0, 0, 0, 0.3)',
                  '0px 15px 12px rgba(0, 0, 0, 0.22)'
            ]
           
      }
    },
  },
  plugins: [],
}
