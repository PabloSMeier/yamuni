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
      fontFamily: {
        yk: ["Kanit"],
      },
      colors: {
        bg: "#DDDDDD",
        primary: "#001f3f",
        primaryB: "#23b253",
        accent: "#4A90E2 ",
        accent2: "#F39C12 ",
      },
    },
  },
  plugins: [],
};
export default config;
