/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
    './public/**/*.html',
  ],
  corePlugins: {
    preflight: false, // 禁用 Tailwind 的全局樣式重置 (即 preflight)
  },
  darkMode: 'class', // 啟用基於 class 的暗黑模式
  theme: {
    extend: {
      filter: {
        'icon-border': 'drop-shadow(0 0 2px white)',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'scaleX(1)' },   // 初始狀態，正常顯示
          '50%': { transform: 'scaleX(-1)' }, // 鏡像反轉
          '100%': { transform: 'scaleX(1)' }  // 回到正常顯示
        },
      },
      animation: {
        'flip': 'flip 2s ease-in-out infinite', // 鏡像反轉動畫，持續 2 秒，無限循環
      },
    },
  },
  plugins: [],
}