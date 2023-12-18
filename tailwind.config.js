/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    plugins: [require('@tailwindcss/typography')],
    theme: {
        colors,
    },
};
export default config;
