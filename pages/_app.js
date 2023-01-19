import { ThemeProvider } from "../hooks/useTheme";
import "../styles/globals.css";
import { UserContext } from "../hooks/useAuth";
import Toastify from "../components/Toastify";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <UserContext>
                    <Component {...pageProps} />
                    <Toastify />
                </UserContext>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
