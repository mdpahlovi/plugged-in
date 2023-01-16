import { ThemeProvider } from "../hooks/useTheme";
import "../styles/globals.css";
import{SessionProvider} from 'next-auth/react'
export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
           </SessionProvider>
        </ThemeProvider>
    );
}
