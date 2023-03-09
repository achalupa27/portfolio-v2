/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Poppins'],
        },
        extend: {},
    },
    plugins: [require('tailwind-scrollbar')],
};
