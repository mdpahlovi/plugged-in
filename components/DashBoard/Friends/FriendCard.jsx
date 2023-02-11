import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { SocketContext } from "../../../contexts/SocketProvider";
import useGetUser from "../../../hooks/useGetUser";
import NoPhoto from "../../../public/images/no-photo.jpg";
import { Button, ButtonOutline } from "../../Common/Buttons";

const FriendCard = ({ friend, setDisconnectingFriend }) => {
  const { email, room } = friend;
  const { socket } = useContext(SocketContext);
  const router = useRouter();
  const { userLoading, user, userRefetch } = useGetUser(email);

  const handleMessage = () => {
    router.push(`/dashboard/message/${room}`);
  };

  return (
    // <div className="card rounded-lg card-compact bg-base-100 shadow-xl">
    //   <Image
    //     className="w-full rounded-t-lg"
    //     src={user?.avatar ? user.avatar : NoPhoto}
    //     alt="avatar"
    //     width={200}
    //     height={200}
    //   />
    //   <div className="card-body">
    //     <h2 className="card-title">{user?.name}</h2>
    //     <p>{email}</p>
    //     <div className="card-actions">
    //       <button onClick={handleMessage} className="btn btn-primary w-full">
    //         Message
    //       </button>
    //       <label
    //         onClick={() => setDisconnectingFriend(friend)}
    //         htmlFor="disconnectModal"
    //         className="btn btn-active w-full"
    //       >
    //         Unfriend
    //       </label>
    //     </div>
    //   </div>
    // </div>

    <div className={`relative border rounded-lg`}>
      <div className="flex flex-col items-center py-8 px-8">
        <Image
          src={user?.avatar ? user?.avatar : NoPhoto}
          className="mb-3 rounded-full shadow-lg"
          alt=""
          width={112}
          height={112}
        />
        <h2 className="text-center">
          <span className="-translate-y-1.5 badge badge-accent">
            {user?.name}
          </span>
        </h2>
        <p>{email}</p>
        <div className="mt-3 flex space-x-4">
          <Button onClick={handleMessage}>Message</Button>
          <label
            htmlFor="disconnectModal"
            onClick={() => setDisconnectingFriend(friend)}
          >
            <ButtonOutline>Unfriend</ButtonOutline>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
