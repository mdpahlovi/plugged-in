import axios from "axios";
import { useEffect, useState } from "react";
import { api_url } from "../utilities/api";
import { useAuth } from "./useAuth";

const useSetUserToDb = (user) => {
    const [confirmation, setConfirmation] = useState("");
    const { userRefetch } = useAuth();

    useEffect(() => {
        const sendingUser = {
            email: user?.email,
            name: user?.displayName,
            avatar: user?.photoURL,
            role: "basic",
        };
        if (user) {
            axios
                .post(`${api_url}/user`, sendingUser)
                .then((res) => {
                    localStorage.setItem("plugged-token", res.data.token);
                    if (res.data.result.acknowledged) {
                        userRefetch();
                    }
                    setConfirmation(res.data.result);
                })
                .catch((error) => console.log(error));
        }
    }, [user, userRefetch]);

    return { confirmation };
};

export default useSetUserToDb;
