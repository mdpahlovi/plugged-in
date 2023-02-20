import Image from "next/image";
import useGetUser from "../../../hooks/useGetUser";
import NoPhoto from "../../../public/images/no-photo.jpg";

const OtherChatBubble = ({ message }) => {
  const { userLoading, user, userRefetch } = useGetUser(message?.authorEmail);

  if (message?.msgContent) {
    return (
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <Image
            className="mask mask-circle"
            src={user?.avatar ? user.avatar : NoPhoto}
            alt=""
            width={36}
            height={36}
          />
        </div>
        <div className="chat-header">
          {user?.name}
          <time className="ml-2 text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble break-all font-bold">
          {message?.msgContent}
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    );
  } else {
    return (
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <Image
            className="mask mask-circle"
            src={user?.avatar ? user.avatar : NoPhoto}
            alt=""
            width={36}
            height={36}
          />
        </div>
        <div className="chat-header">
          {user?.name}
          <time className="ml-2 text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble break-all font-bold shadow-xl">
          <a target="_blank" href={message?.fileContent} className="card">
            <div className="card-body">
              <p>Open File</p>
            </div>
          </a>
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    );
  }
};

export default OtherChatBubble;
