import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useIsPending = (pendingUserEmail) => {
  const { user } = useAuth();
  //   const [pendingStatus, setPendingStatus] = useState("");

  if (pendingUserEmail && user) {
    const { data: status = "", refetch: pendingRefetch } = useQuery({
      queryKey: ["isPending", user, pendingUserEmail],
      queryFn: () =>
        fetch(
          `http://localhost:5000/isPending?userEmail=${user?.email}&pendingUserEmail=${pendingUserEmail}`
        ).then((res) => res.json()),
    });
    return { pendingStatus: status?.status, pendingRefetch };
  } else {
    return { pendingStatus: "holding" };
  }
};
