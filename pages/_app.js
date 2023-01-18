import { ThemeProvider } from "../hooks/useTheme";
import "../styles/globals.css";
import { UserContext } from "../hooks/useAuth";
import Toastify from "../components/Toastify";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <UserContext>
                <Component {...pageProps} />
                <Toastify />
            </UserContext>
        </ThemeProvider>
    );
}
