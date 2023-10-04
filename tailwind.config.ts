import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "max-sm": { raw: "(max-width: 639px)" },
      // => @media (max-width: 639px) { ... }

      "max-md": { raw: "(max-width: 767px)" },
      // => @media (max-width: 767px) { ... }

      "max-lg": { raw: "(max-width: 1023px)" },
      // => @media (max-width: 1023px) { ... }

      "max-xl": { raw: "(max-width: 1279px)" },
      // => @media (max-width: 1279px) { ... }

      "max-2xl": { raw: "(max-width: 1535px)" },
      // => @media (max-width: 1535px) { ... }
    },
  },
  plugins: [],
};
export default config;
