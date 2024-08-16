/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
    './public/**/*.html',
  ],
  corePlugins: {
    preflight: false,
  },
  darkMode: 'class',
  theme: {
    extend: {
      filter: {
        'icon-border': 'drop-shadow(0 0 2px white)',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(-1)' },
          '100%': { transform: 'scaleX(1)' }
        },
      },
      animation: {
        'flip': 'flip 2s ease-in-out infinite',
      },
      // 新增以下設置
      fontSize: {
        'clock': '1.5rem',
      },
      width: {
        'clock': '550px',
      },
      height: {
        'clock': '550px',
      },
    },
  },
  plugins: [],
}