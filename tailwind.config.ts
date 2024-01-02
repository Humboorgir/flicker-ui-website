import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          light: "hsl(var(--foreground-light))",
          muted: "hsl(var(--foreground-muted))",
        },
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        ring: "hsl(var(--ring))",
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
