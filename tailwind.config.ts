import type { Config } from 'tailwindcss';
import { themeConfig } from './src/styles/config';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      ...themeConfig.theme.extend
    }
  },
  plugins: [],
};

export default config;
