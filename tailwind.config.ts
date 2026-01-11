import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#047857',
          light: '#059669',
          dark: '#064e3b',
        },
        accent: {
          DEFAULT: '#FCD34D',
          hover: '#fbbf24',
        }
      },
    },
  },
  plugins: [],
};
export default config;