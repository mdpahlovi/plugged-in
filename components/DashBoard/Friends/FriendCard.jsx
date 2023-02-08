import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { SocketContext } from "../../../contexts/SocketProvider";
import useGetUser from "../../../hooks/useGetUser";
import NoPhoto from "../../../public/images/no-photo.jpg";

const FriendCard = ({ friend, setDisconnectingFriend }) => {
  const { email, room } = friend;
  const { socket } = useContext(SocketContext);
  const router = useRouter();
  const { userLoading, user, userRefetch } = useGetUser(email);

  const handleMessage = () => {
    router.push(`/dashboard/message/${room}`);
  };

  return (
    <div className="card rounded-lg card-compact bg-base-100 shadow-xl">
      <Image
        className="w-full rounded-t-lg"
        src={user?.avatar ? user.avatar : NoPhoto}
        alt="avatar"
        width={200}
        height={200}
      />
      <div className="card-body">
        <h2 className="card-title">{user?.name}</h2>
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
