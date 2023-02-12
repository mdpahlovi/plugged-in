import Image from "next/image";
import { useAuth } from "../../../hooks/useAuth";
import useGetUser from "../../../hooks/useGetUser";
import NoPhoto from "../../../public/images/no-photo.jpg";

const MessageUser = ({ room, active }) => {
  const { roomName, members, messages, teamName, roomType } = room;
  const { authUser } = useAuth();

  let otherUser;
  if (roomType === "single") {
    if (authUser?.email === members[0]) {
      otherUser = members[1];
    } else {
      otherUser = members[0];
    }
  }

  const { userLoading, user } = useGetUser(otherUser);
  let lastMessage;
  if (messages) {
    if (messages[messages?.length - 1].msgContent.length > 15) {
      lastMessage =
        messages[messages?.length - 1].msgContent?.slice(0, 10) + "...";
    } else {
      lastMessage = messages[messages?.length - 1].msgContent;
    }
  }

  if (userLoading) {
    return (
      <div className="relative flex items-center px-4 py-3 border-b animate-pulse">
        <div className="w-10 h-10 mask mask-squircle bg-base-content/10" />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="ml-3 h-4 w-20 rounded bg-base-content/10" />
            <div className="ml-3 mt-1 h-3 w-10 rounded bg-base-content/10" />
          </div>
          <div className="ml-3 mt-1 h-3 w-28 rounded bg-base-content/10" />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`flex items-center px-4 py-3 transition duration-300 border-b cursor-pointer ${
          active ? "bg-base-content/10" : "hover:bg-base-content/10"
        }`}
      >
        <Image
          className="mask mask-squircle"
          src={user?.avatar ? user.avatar : NoPhoto}
          alt="user"
          width={40}
          height={40}
        />
        <div className="w-full">
          <div className="-mb-1 flex justify-between items-center">
            <h3 className="ml-3 font-semibold">
              {roomType === "single" ? user?.name : teamName}
            </h3>
            {messages && (
              <p className="ml-3 mt-0.5 text-sm">
                {messages[messages?.length - 1].time}
              </p>
            )}
          </div>
          {lastMessage && <p className="ml-3 mt-0.5 text-sm">{lastMessage}</p>}
        </div>
      </div>
    );
  }
};

export default MessageUser;
