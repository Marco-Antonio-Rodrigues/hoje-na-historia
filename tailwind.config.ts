import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        CustomAntiqueWhite: '#FAEBD7',
        CustomSepia: '#704214',
        CustomOldGold: '#CFB53B',
        CustomCharcoal: '#36454F',
        CustomTerracotta: '#E2725B',
      },
    },
  },
  plugins: [],
};
export default config;
