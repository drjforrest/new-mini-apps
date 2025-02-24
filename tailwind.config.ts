import type { Config } from 'tailwindcss';
import { themeConfig } from './src/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    ...themeConfig.theme
  },
  plugins: [],
};

export default config;