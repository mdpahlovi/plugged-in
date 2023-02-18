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
                    "base-content": "#000000",
                    neutral: "#000000",
                    "neutral-content": "#ffffff",
                    primary: "#201172",
                    secondary: "#2F0D77",
                    accent: "#816EEF",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
                    "base-100": "#171717",
                    "base-content": "#ffffff",
                    neutral: "#ffffff",
                    "neutral-content": "#171717",
                    primary: "#6f2d97",
                    secondary: "#7f3da8",
                    accent: "#2e2a3f",
                },
            },
            "light",
            "dark",
        ],
    },
};
