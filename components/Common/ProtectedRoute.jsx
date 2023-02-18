import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

export function Protect(Component) {
    return function Protect(props) {
        const [screenLoading, setScreenLoading] = useState(true);
        const { authUser, loading } = useAuth();
        const router = useRouter();
        const { theme } = useTheme();
        console.log(theme);

        useEffect(() => {
            if (!loading) {
                if (!authUser?.uid) {
                    router.replace("/login");
                } else {
                    setScreenLoading(false);
                }
            }
        }, [loading, authUser, router]);

        if (screenLoading) {
            return (
                <div className="w-screen h-screen flex justify-center items-center">
                    <CirclesWithBar height="160" width="160" color={theme === "light" ? "#201172" : "#6f2d97"} />
                </div>
            );
        } else {
            return <Component {...props} />;
        }
    };
}
