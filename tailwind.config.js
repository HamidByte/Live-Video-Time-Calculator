/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,vue,js,ts,jsx,tsx}',
    './node_modules/flyonui/dist/js/*.js', // If you need FlyonUI JS components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flyonui'),
    require('flyonui/plugin'), // If you need FlyonUI JS components
  ],
}
