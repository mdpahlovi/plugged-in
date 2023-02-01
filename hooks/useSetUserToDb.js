import axios from "axios";
import { useEffect, useState } from "react";
import { api_url } from "../utilities/api";

const useSetUserToDb = (user) => {
    const [confirmation, setConfirmation] = useState("");

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
                    setConfirmation(res.data.result);
                    localStorage.setItem("plugged-token", res.data.token);
                })
                .catch((error) => console.log(error));
        }
    }, [user]);

    return { confirmation };
};

export default useSetUserToDb;
