import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { useAuth } from "../hooks/useAuth";

export function Protect(Component) {
    return function Protect(props) {
        const [screenLoading, setScreenLoading] = useState(true);
        const { user, userLoading, loading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!loading || !userLoading) {
                if (!user?._id) {
                    router.replace("/login");
                } else {
                    setScreenLoading(false);
                }
            }
        }, [loading, userLoading, user, router]);

        if (screenLoading) {
            return (
                <div className="w-screen h-screen flex justify-center items-center">
                    <CirclesWithBar height="160" width="160" color="#201172" />
                </div>
            );
        } else {
            return <Component {...props} />;
        }
    };
}
