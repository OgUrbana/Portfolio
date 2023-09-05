import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#FFBE62',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        background: {
          1: 'rgb(var(--color-bkg) / <alpha-value>)',
          2: 'rgb(var(--color-bkg-2) / <alpha-value>)',
        },
      },
      fontSize: {
        sm: ['0.875rem', '155%'],
        smallBold: ['0.875rem', '145%'],
      },
    },
  },
  plugins: [],
};
export default config;
