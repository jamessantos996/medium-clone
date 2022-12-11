/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FFC017",
            },
            backgroundImage: {
                apple: "url('../public/apple.png')",
                google: "url('../public/google-play.png')",
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [],
};
