/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{js,jsx,tsx,jsx}'],
    theme: {
        extend: {
            backgroundColor: {
                colorBackground: '#ECF0EF',
                cardColor: '#FEEECC',
                backgroundColor2: '#6794D8',
            },
            textColor: {
                text_color: '#3C3C3C',
            },
            screen: {
                sm: '490px',
            },
        },
    },
    plugins: [],
}
