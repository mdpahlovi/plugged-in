import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import DisconnectModal from "../../components/DashBoard/Friends/DisconnectModal";
import FriendCard from "../../components/DashBoard/Friends/FriendCard";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";

const Friends = () => {
    const { authUser } = useAuth();
    const [disconnectingFriend, setDisconnectingFriend] = useState(null);


  const { data: friends = [], refetch: friendListRefetch } = useQuery({
    queryKey: ["friends", authUser],
    queryFn: () =>
      fetch(
        `https://plugged-in-server.onrender.com/friends?email=${authUser?.email}`
      ).then((res) => res.json()),
  });


    return (
        <Dashboard>
            <p>Friends</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {friends?.map((friend) => (
                    <FriendCard key={friend?.email} friend={friend} setDisconnectingFriend={setDisconnectingFriend} />
                ))}
            </div>
            {disconnectingFriend && <DisconnectModal disconnectingFriend={disconnectingFriend} friendListRefetch={friendListRefetch} />}
        </Dashboard>
    );
};

export default Friends;
