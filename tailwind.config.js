/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
    './public/**/*.html',
  ],
  darkMode: 'class', // 啟用基於 class 的暗黑模式
  theme: {
    extend: {
      filter: {
        'icon-border': 'drop-shadow(0 0 2px white)',
      }
    },
  },
  plugins: [],
}
