import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-gray-50": "#6F6C90",
      },
      fontFamily: {
        openSans: ["var(--open-sans)"],
        DM_Sans: ["var(DM Sans)"],
        Kumbh_Sans: ["var(Kumbh Sans)"],
      },
      fontSize: {
        "dm-sans-default": ["18px", { lineHeight: "27px" }],
        "dm-sans-custom-1": ["20px", { lineHeight: "30px" }],
      },
      fontWeight: {
        "dm-sans-bold": "800",
        "dm-sans-semi": "400",
      },
    },
  },
  plugins: [],
};
export default config;
