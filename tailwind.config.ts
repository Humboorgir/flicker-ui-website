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
    },
  },
  plugins: [],
};
export default config;
