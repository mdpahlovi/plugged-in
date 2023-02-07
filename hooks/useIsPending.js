import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

export const useIsPending = (pendingUserEmail) => {
  const { authUser } = useAuth();
  //   const [pendingStatus, setPendingStatus] = useState("");

  if (pendingUserEmail && authUser) {
    const { data: status = "", refetch: pendingRefetch } = useQuery({
      queryKey: ["isPending", authUser, pendingUserEmail],
      queryFn: () =>
        fetch(
          `https://plugged-in-server.onrender.com/isPending?userEmail=${authUser?.email}&pendingUserEmail=${pendingUserEmail}`
        ).then((res) => res.json()),
    });
    return { pendingStatus: status?.status, pendingRefetch };
  } else {
    return { pendingStatus: "holding" };
  }
};
