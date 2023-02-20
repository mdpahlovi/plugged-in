import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

const useIsRequested = (requestedUserEmail) => {
  const { user } = useAuth();

  if (requestedUserEmail && user) {
    const { data: status = "", refetch: requestRefetch } = useQuery({
      queryKey: ["isRequested", user, requestedUserEmail],
      queryFn: () =>
        fetch(
          `https://plugged-in-server.onrender.com/isRequested?userEmail=${user?.email}&friendUserEmail=${requestedUserEmail}`
        ).then((res) => res.json()),
    });
    return { requestStatus: status?.status, requestRefetch };
  } else {
    return { requestStatus: "holding" };
  }
};

export default useIsRequested;
