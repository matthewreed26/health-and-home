/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/main/webapp/index.html', './src/main/webapp/**/*.{vue,js,ts,jsx,tsx,html}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
