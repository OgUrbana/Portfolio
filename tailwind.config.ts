import { blackA, green, mauve, slate, violet } from '@radix-ui/colors';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact-banner': 'url("/public/contactbanner.png")',
      },
      colors: {
        ...blackA,
        ...green,
        ...mauve,
        ...slate,
        ...violet,
        secondary: '#FFBE62',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        background: {
          1: 'rgb(var(--color-bkg) / <alpha-value>)',
          2: 'rgb(var(--color-bkg-2) / <alpha-value>)',
        },
        'white-800': '#F3F8FF',
        'white-500': '#6F74A7',
        'black-200': '#151E2C',
        'black-300': '#192333',
        'black-400': '#778295',
        jobit: '#0BAB7C',
        challenge: '#E15A46',
        success: '#02BC7D',
        lightBlue: '#CCE1FF',
        'black-600': '#2C3C56',
        error: '#FF4C4C',
      },
      fontSize: {
        sm: ['0.875rem', '155%'],
        smallBold: ['0.875rem', '145%'],
      },
      keyframes: {
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideIn: {
          from: {
            transform: 'translateX(calc(100% + var(--viewport-padding)))',
          },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
