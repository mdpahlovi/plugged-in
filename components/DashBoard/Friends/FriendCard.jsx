import { useRouter } from "next/router";
import React, { useContext } from "react";
import { SocketContext } from "../../../contexts/SocketProvider";

const FriendCard = ({ friend, setDisconnectingFriend }) => {
  const { email, protoURL, displayName, room } = friend;
  const { socket } = useContext(SocketContext);
  const router = useRouter();
  const handleMessage = () => {
    router.push(`/dashboard/message/${room}`);
    socket.emit("join_room", room);
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="h-[200px]">
        {protoURL && <img className="w-full" src={protoURL} alt="Shoes" />}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{displayName}</h2>
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
