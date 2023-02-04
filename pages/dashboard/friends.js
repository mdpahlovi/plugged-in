import { useQuery } from "@tanstack/react-query";
import React from "react";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";
import FriendCard from "./FriendCard";

const friends = () => {
  const { authUser } = useAuth();

  const { data: friends = [], refetch: friendListRefetch } = useQuery({
    queryKey: ["friends", authUser],
    queryFn: () =>
      fetch(`http://localhost:5000/friends?email=${authUser?.email}`).then(
        (res) => res.json()
      ),
  });

  return (
    <Dashboard>
      <p>Friends</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {friends?.map((friend) => (
          <FriendCard key={friend?.email} friend={friend} />
        ))}
      </div>
    </Dashboard>
  );
};

export default friends;
