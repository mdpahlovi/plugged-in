import { useEffect, useState } from "react";
import { jwt_axios } from "../utilities/api";

const useGetUser = (email) => {
    const [user, setUser] = useState();
    const [userLoading, setUserLoading] = useState(true);

    useEffect(() => {
        if (email) {
            jwt_axios
                .get(`/user/${email}`)
                .then((res) => {
                    setUser(res.data);
                    setUserLoading(false);
                })
                .catch((error) => console.log(error));
        }
    }, [email]);

    return { userLoading, user };
};

export default useGetUser;
