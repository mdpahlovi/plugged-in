import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

const UseIsPending = (pendingUserEmail) => {
  const { authUser } = useAuth();
  //   const [pendingStatus, setPendingStatus] = useState("");
  if (pendingUserEmail && authUser) {
    const { data: status = "", refetch: pendingRefetch } = useQuery({
      queryKey: ["isPending", authUser, pendingUserEmail],
      queryFn: () =>
        fetch(
          `http://localhost:5000/isPending?userEmail=${authUser?.email}&pendingUserEmail=${pendingUserEmail}`
        ).then((res) => res.json()),
    });
    return { pendingStatus: status?.status, pendingRefetch };
  } else {
    return { pendingStatus: "holding" };
  }
};

export default UseIsPending;
