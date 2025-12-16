/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: '#2874f0',
                    yellow: '#ffe500',
                    dark: '#212121',
                    gray: '#f0f0f0'
                },
                primary: '#2874f0',
                secondary: '#fb641b',
            }
        },
    },
    plugins: [],
}
