/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "color-primary": "#950057",
                "color-nav": "#F2F2F2"
            }
        },
    },
    plugins: [require("daisyui")],
}
