import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "./useAuth";

const useIsRequested = (requestedUserEmail) => {
  const { authUser } = useAuth();

  if (requestedUserEmail && authUser) {
    const { data: status = "", refetch: requestRefetch } = useQuery({
      queryKey: ["isRequested", authUser, requestedUserEmail],
      queryFn: () =>
        fetch(
          `https://plugged-in-server.onrender.com/isRequested?userEmail=${authUser?.email}&friendUserEmail=${requestedUserEmail}`
        ).then((res) => res.json()),
    });
    console.log(status.status);
    return { requestStatus: status?.status, requestRefetch };
  } else {
    return { requestStatus: "holding" };
  }
};

export default useIsRequested;
