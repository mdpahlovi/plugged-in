import Image from "next/image";
import { useAuth } from "../../../hooks/useAuth";
import useGetUser from "../../../hooks/useGetUser";
import NoPhoto from "../../../public/images/no-photo.jpg";

const MessageUser = ({ room, active }) => {
  const { roomName, members, messages } = room;
  const { authUser } = useAuth();

  let otherUser;
  if (authUser?.email === members[0]) {
    otherUser = members[1];
  } else {
    otherUser = members[0];
  }

  const { userLoading, user, userRefetch } = useGetUser(otherUser);
  let lastMessage;
  if (messages) {
    if (messages[messages?.length - 1].msgContent.length > 15) {
      lastMessage =
        messages[messages?.length - 1].msgContent?.slice(0, 10) + "...";
    } else {
      lastMessage = messages[messages?.length - 1].msgContent;
    }
  }

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
          <h3 className="ml-2 font-semibold">{user?.name}</h3>
          {messages && (
            <p className="ml-2 text-sm">
              {messages[messages?.length - 1].time}
            </p>
          )}
        </div>
        {lastMessage && <p className="ml-2 text-sm">{lastMessage}</p>}
      </div>
    </div>
  );
};

export default MessageUser;
