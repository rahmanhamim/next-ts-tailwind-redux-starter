import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"], // declare in layout.tsx
        jost: ["var(--font-jost)"], // declare in layout.tsx
      },
      colors: {
        primary: {
          100: "rgb(var(--tw-color-primary-100) / <alpha-value>)",
          200: "rgb(var(--tw-color-primary-200) / <alpha-value>)",
          300: "rgb(var(--tw-color-primary-300) / <alpha-value>)",
          400: "rgb(var(--tw-color-primary-400) / <alpha-value>)",
          500: "rgb(var(--tw-color-primary-500) / <alpha-value>)",
          600: "rgb(var(--tw-color-primary-600) / <alpha-value>)",
          700: "rgb(var(--tw-color-primary-700) / <alpha-value>)",
          800: "rgb(var(--tw-color-primary-800) / <alpha-value>)",
          900: "rgb(var(--tw-color-primary-900) / <alpha-value>)",
        },
        secondary: {
          100: "rgb(var(--tw-color-secondary-100) / <alpha-value>)",
          200: "rgb(var(--tw-color-secondary-200) / <alpha-value>)",
          300: "rgb(var(--tw-color-secondary-300) / <alpha-value>)",
          400: "rgb(var(--tw-color-secondary-400) / <alpha-value>)",
          500: "rgb(var(--tw-color-secondary-500) / <alpha-value>)",
          600: "rgb(var(--tw-color-secondary-600) / <alpha-value>)",
          700: "rgb(var(--tw-color-secondary-700) / <alpha-value>)",
          800: "rgb(var(--tw-color-secondary-800) / <alpha-value>)",
          900: "rgb(var(--tw-color-secondary-900) / <alpha-value>)",
        },
        tertiary: {
          100: "rgb(var(--tw-color-tertiary-100) / <alpha-value>)",
          200: "rgb(var(--tw-color-tertiary-200) / <alpha-value>)",
          300: "rgb(var(--tw-color-tertiary-300) / <alpha-value>)",
          400: "rgb(var(--tw-color-tertiary-400) / <alpha-value>)",
          500: "rgb(var(--tw-color-tertiary-500) / <alpha-value>)",
          600: "rgb(var(--tw-color-tertiary-600) / <alpha-value>)",
          700: "rgb(var(--tw-color-tertiary-700) / <alpha-value>)",
          800: "rgb(var(--tw-color-tertiary-800) / <alpha-value>)",
          900: "rgb(var(--tw-color-tertiary-900) / <alpha-value>)",
        },
        quaternary: {
          100: "rgb(var(--tw-color-quaternary-100) / <alpha-value>)",
          200: "rgb(var(--tw-color-quaternary-200) / <alpha-value>)",
          300: "rgb(var(--tw-color-quaternary-300) / <alpha-value>)",
          400: "rgb(var(--tw-color-quaternary-400) / <alpha-value>)",
          500: "rgb(var(--tw-color-quaternary-500) / <alpha-value>)",
          600: "rgb(var(--tw-color-quaternary-600) / <alpha-value>)",
          700: "rgb(var(--tw-color-quaternary-700) / <alpha-value>)",
          800: "rgb(var(--tw-color-quaternary-800) / <alpha-value>)",
          900: "rgb(var(--tw-color-quaternary-900) / <alpha-value>)",
        },
        neutral: {
          0: "rgb(var(--tw-color-neutral-0) / <alpha-value>)",
          50: "rgb(var(--tw-color-neutral-50) / <alpha-value>)",
          100: "rgb(var(--tw-color-neutral-100) / <alpha-value>)",
          200: "rgb(var(--tw-color-neutral-200) / <alpha-value>)",
          300: "rgb(var(--tw-color-neutral-300) / <alpha-value>)",
          400: "rgb(var(--tw-color-neutral-400) / <alpha-value>)",
          500: "rgb(var(--tw-color-neutral-500) / <alpha-value>)",
          600: "rgb(var(--tw-color-neutral-600) / <alpha-value>)",
          700: "rgb(var(--tw-color-neutral-700) / <alpha-value>)",
          800: "rgb(var(--tw-color-neutral-800) / <alpha-value>)",
          900: "rgb(var(--tw-color-neutral-900) / <alpha-value>)",
        },
      },
      boxShadow: {
        xs: "var(--shadow-xs-box-shadow)",
        sm: "var(--shadow-sm-box-shadow)",
        md: "var(--shadow-md-box-shadow)",
        lg: "var(--shadow-lg-box-shadow)",
        xl: "var(--shadow-xl-box-shadow)",
        "2xl": "var(--shadow-2-xl-box-shadow)",
        "3xl": "var(--shadow-3-xl-box-shadow)",
      },
    },
  },
  plugins: [],
};
export default config;
