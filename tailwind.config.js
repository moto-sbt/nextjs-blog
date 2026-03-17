/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
        },
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      white: '#ffffff',
      black: '#000000',
      cyan: {
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
      },
      violet: {
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#a855f7',
      },
      indigo: {
        400: '#818cf8',
        500: '#6366f1',
      },
      blue: {
        DEFAULT: '#0070f3',
        100: '#dbeafe',
        300: '#93c5fd',
        500: '#3b82f6',
        700: '#1d4ed8',
        900: '#1e3a8a',
      },
      slate: {
        50:  '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        850: '#0f1829',
        900: '#0f172a',
        950: '#070711',
      },
      gray: {
        light: '#f5f5f5',
        DEFAULT: '#666',
        dark: '#a9a9a9',
        400: '#9ca3af',
        800: '#1f2937',
      },
      twitter:   '#1DA1F2',
      x:         '#ffffff',
      youtube:   '#E62117',
      tiktok:    '#6a76ac',
      instagram: '#c13584',
      qiita:     '#55c500',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
