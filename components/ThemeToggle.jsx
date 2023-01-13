import { useTheme } from "../hooks/useTheme";
import { HiSun, HiMoon } from "react-icons/hi";
import IconButton from "./Button/IconButton";

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
        <label className="swap swap-rotate">
            <input type="checkbox" onClick={() => changeTheme(theme, setTheme)} />
            <IconButton className="swap-off text-xl">
                <HiSun />
            </IconButton>
            <IconButton className="swap-on text-xl">
                <HiMoon />
            </IconButton>
        </label>
    );
};

export default ThemeToggle;
