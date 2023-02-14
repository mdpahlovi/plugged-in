import Image from "next/image";
import { ActiveStatus } from "./MessageIcon";
import NoPhoto from "../../../public/images/no-photo.jpg";
import { useQuery } from "@tanstack/react-query";

const MessageHeader = ({ userLoading, user, roomName }) => {
  const { data: room } = useQuery({
    queryKey: ["singleRoom", roomName],
    queryFn: () =>
      fetch(
        `https://plugged-in-server.onrender.com/singleRoom?roomName=${roomName}`
      ).then((res) => res.json()),
  });

  if (userLoading) {
    return (
      <div className="relative flex items-center px-4 py-3 border-b animate-pulse">
        <div className="w-10 h-10 mask mask-squircle bg-base-content/10" />
        <div className="ml-3 h-7 w-28 rounded bg-base-content/10" />
      </div>
    );
  } else {
    return (
      <div className="relative flex items-center px-4 py-3 border-b">
        <Image
          className="mask mask-squircle"
          src={
            room?.roomType === "single"
              ? user?.avatar
                ? user.avatar
                : NoPhoto
              : room?.avatar
              ? room.avatar
              : NoPhoto
          }
          alt="user"
          width={40}
          height={40}
        />
        <h3 className="ml-3 text-xl font-bold">
          {room?.roomType === "single" ? user?.name : room?.teamName}
        </h3>
        <ActiveStatus />
      </div>
    );
  }
};

export default MessageHeader;
