import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { SocketContext } from "../../../contexts/SocketProvider";

const FriendCard = ({ friend, setDisconnectingFriend }) => {
  const { email, room } = friend;
  const { socket } = useContext(SocketContext);
  const router = useRouter();

  const { data: friendData } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch(`https://plugged-in-server.onrender.com/user/${email}`).then(
        (res) => res.json()
      ),
  });

  const handleMessage = () => {
    router.push(`/dashboard/message/${room}`);
  };

  console.log(friendData);
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="h-[200px]">
        {friendData?.avatar && (
          <img className="w-full" src={friendData?.avatar} alt="Shoes" />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{friendData?.name}</h2>
        <p>{email}</p>
        <div className="card-actions">
          <button onClick={handleMessage} className="btn btn-primary w-full">
            Message
          </button>
          <label
            onClick={() => setDisconnectingFriend(friend)}
            htmlFor="disconnectModal"
            className="btn btn-active w-full"
          >
            Unfriend
          </label>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
