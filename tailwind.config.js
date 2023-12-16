/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: 'class',
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        themes: ['forest', 'retro'],
    },
};
export default config;
