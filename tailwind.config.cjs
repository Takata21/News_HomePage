/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        SoftOrange: '#e9ab53',
        SoftRed: '	#f15e50',
        OffWhite: '#fffdfa',
        GrayishBlue: '#c5c6ce',
        DarkGrayishBlue: '#5d5f79',
        VeryDarkBlue: '#00001a',
      },
    },
    plugins: [],
  },
}
