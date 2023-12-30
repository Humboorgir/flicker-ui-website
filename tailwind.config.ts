import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "hsl(var(--foreground))",
        background: "var(--background)",
        primary: "hsl(var(--primary))",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        ring: "var(--ring)",
      },
      animation: {
        ripple: "ripple 600ms linear",
      },
      keyframes: {
        ripple: {
          "0%": { opacity: "40%", transform: "scale(0)" },
          "100%": { opacity: "0%", transform: "scale(3)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
