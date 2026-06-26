import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        daemon: {
          bg: '#0A0A0F',
          panel: '#11131D',
          line: '#25293A',
          text: '#F4F7FB',
          muted: '#A7AFBF',
          accent: '#37D6A3',
          accentDark: '#1B8E73'
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(55, 214, 163, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
