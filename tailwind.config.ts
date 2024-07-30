import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4db8f4',
        foreground: '#000000',
        'picton-blue': {
          '50': '#f0f8ff',
          '100': '#e1f1fd',
          '200': '#bce2fb',
          '300': '#80ccf9',
          '400': '#4db8f4',
          '500': '#1498e3',
          '600': '#0778c2',
          '700': '#07609d',
          '800': '#0a5282',
          '900': '#0f446b',
          '950': '#0a2c47',
      },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
