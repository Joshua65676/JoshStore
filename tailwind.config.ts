import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      colors: {
        Orange: 'hsl(26, 100%, 55%)',
        BgOrange: 'rgba(255, 172, 106, 255)',
        PaleOrange: 'hsl(25, 100%, 94%)',
        DarkBlue: 'hsl(220, 13%, 13%)',
        Grayishblue: 'hsl(219, 9%, 45%)',
        GrayishBlue: 'hsl(220, 14%, 75%)',
        LightGrayishBlue: 'hsl(223, 64%, 98%)',
        White: 'hsl(0, 0%, 100%)',
        Black : 'hsl(0, 0%, 0%)'
      },
      screens: {
        sm: '300px',
        mx: '350px',
        xm: '410px',
        md: '768px',
        lg: '876px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
