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
                header: "url('/images/header.png')",
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
                    "base-300": "#c7c2ee",
                    "base-content": "#000000",
                    neutral: "#000000",
                    "neutral-content": "#ffffff",
                    primary: "#362c75",
                    secondary: "#3b28b3",
                    accent: "#9484d7",
                    "accent-content": "#fff",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
                    "base-100": "#171717",
                    "base-300": "#c7c2ee",
                    "base-content": "#ffffff",
                    neutral: "#ffffff",
                    "neutral-content": "#171717",
                    primary: "#7565d9",
                    secondary: "#9b92d9",
                    accent: "#bcacec",
                    "accent-content": "#000",
                },
            },
            "light",
            "dark",
        ],
    },
};
