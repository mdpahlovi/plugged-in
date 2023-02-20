import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "./useAuth";

const useIsFriend = (friendEmail) => {
  const { user } = useAuth();
  if (user && friendEmail) {
    const { data: status = "", refetch: friendRefetch } = useQuery({
      queryKey: ["isFriend", user, friendEmail],
      queryFn: () =>
        fetch(
          `http://localhost:5000/isFriend?userEmail=${user?.email}&friendUserEmail=${friendEmail}`
        ).then((res) => res.json()),
    });
    return { friendStatus: status?.status, friendRefetch };
  } else {
    return { friendStatus: "holding" };
  }
};

export default useIsFriend;
