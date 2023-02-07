import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../../hooks/useTheme";

const Toastify = () => {
    const { theme } = useTheme();
    return <ToastContainer position="top-right" autoClose={1500} theme={theme} />;
};

export default Toastify;
