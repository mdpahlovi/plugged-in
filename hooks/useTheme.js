import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(null);

    // Set Default Theme Value
    useEffect(() => {
        const selectedTheme = localStorage.getItem("theme");
        if (selectedTheme) {
            setTheme(selectedTheme);
        } else {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark");
            } else {
                setTheme("light");
            }
        }
    }, []);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

// Get Default Theme Value & Set Theme to body
export const useTheme = () => {
    const context = useContext(ThemeContext);

    useEffect(() => {
        document.body.classList.value = "transition-colors ease-in-out duration-300";
        if (context.theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }, [context.theme]);

    return context;
};
