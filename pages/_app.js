import { ThemeProvider } from "../hooks/useTheme";
import "../styles/globals.css";
import { UserContext } from "../hooks/useAuth";
import Toastify from "../components/Toastify";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import SocketProvider from "../Contexts/SocketProvider";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <SocketProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <UserContext>
            <Component {...pageProps} />
            <Toastify />
          </UserContext>
        </ThemeProvider>
      </QueryClientProvider>
    </SocketProvider>
  );
}
