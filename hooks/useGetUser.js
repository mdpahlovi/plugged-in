import { useQuery } from "@tanstack/react-query";
import { jwt_axios } from "../utilities/api";

const useGetUser = (email) => {
    const {
        data: user,
        isLoading: userLoading,
        refetch: userRefetch,
    } = useQuery({
        queryKey: ["user", email],
        queryFn: () => jwt_axios.get(`/user/${email}`).then((res) => res.data),
    });

    return { userLoading, user, userRefetch };
};

export default useGetUser;
