/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{js,jsx,tsx,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                merri: ['Merriweather', 'serif'],
            },
            backgroundColor: {
                colorBackground: '#ECF0EF',
                cardColor: '#FEEECC',
                backgroundColor2: '#6794D8',
            },
            textColor: {
                text_color: '#3C3C3C',
                text_color2: '#626263',
            },
            screen: {
                sm: '490px',
            },
        },
    },
    plugins: [],
}
