/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "448px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1600px",
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                header: "url('/src/Assets/header.png')",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
    // DaisyUI Customized
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    "base-100": "#ffffff",
                    "base-content": "#000000",
                    neutral: "#000000",
                    "neutral-content": "#ffffff",
                    accent: "#A5B4FC",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
                    "base-100": "#171717",
                    "base-content": "#ffffff",
                    neutral: "#ffffff",
                    "neutral-content": "#171717",
                    accent: "#4338CA",
                },
            },
            "light",
            "dark",
        ],
    },
};
