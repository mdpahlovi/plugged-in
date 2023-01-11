import { useTheme } from "../hooks/useTheme";
import { HiSun, HiMoon } from "react-icons/hi";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = (theme, setTheme) => {
        if (theme === "dark") {
            localStorage.setItem("theme", "light");
            setTheme("light");
        } else {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        }
    };

    return (
        <label className="swap swap-rotate text-xl btn btn-primary btn-outline btn-sm px-2">
            <input type="checkbox" onClick={() => changeTheme(theme, setTheme)} />
            <HiSun className="swap-off" />
            <HiMoon className="swap-on" />
        </label>
    );
};

export default ThemeToggle;
