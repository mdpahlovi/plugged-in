import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

const useIsRequested = (requestedUserEmail) => {
  const { user } = useAuth();

  if (requestedUserEmail && user) {
    const { data: status = "", refetch: requestRefetch } = useQuery({
      queryKey: ["isRequested", user, requestedUserEmail],
      queryFn: () =>
        fetch(
          `http://localhost:5000/isRequested?userEmail=${user?.email}&friendUserEmail=${requestedUserEmail}`
        ).then((res) => res.json()),
    });
    return { requestStatus: status?.status, requestRefetch };
  } else {
    return { requestStatus: "holding" };
  }
};

export default useIsRequested;
