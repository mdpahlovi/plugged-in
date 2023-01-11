import { ThemeProvider } from "../hooks/useTheme";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
