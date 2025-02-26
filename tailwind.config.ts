import type { Config } from 'tailwindcss'

export default {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['var(--font-inter)', 'sans-serif'],
        Roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      maskImage: {
        gradient:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 1))',
      },

      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config
