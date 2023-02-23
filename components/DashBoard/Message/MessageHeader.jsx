import Image from "next/image";
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
      <div className="relative px-4 py-3 border-b flex items-center justify-between">
        <div className="flex items-center">
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
            {room?.roomType === "single"
              ? user?.name
                ? user.name
                : "No Name"
              : room?.teamName}
          </h3>
        </div>
        <label htmlFor="roomModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
        </label>
        {/* <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-2.5"></span> */}
      </div>
    );
  }
};

export default MessageHeader;
