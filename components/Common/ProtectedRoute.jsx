import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

export function Protect(Component) {
    return function Protect(props) {
        const [screenLoading, setScreenLoading] = useState(true);
        const { user, loading, userLoading } = useAuth();
        const router = useRouter();
        const { theme } = useTheme();

        useEffect(() => {
            if (!loading && !userLoading) {
                if (!user?._id) {
                    router.replace("/login");
                } else {
                    setScreenLoading(false);
                }
            }
        }, [loading, user, router, userLoading]);

        if (screenLoading) {
            return (
                <div className="w-screen h-screen flex justify-center items-center">
                    <CirclesWithBar height="160" width="160" color={theme === "light" ? "#362c75" : "#7565d9"} />
                </div>
            );
        } else {
            return <Component {...props} />;
        }
    };
}
