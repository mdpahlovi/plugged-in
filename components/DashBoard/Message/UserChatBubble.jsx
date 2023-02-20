import Image from "next/image";
import { useAuth } from "../../../hooks/useAuth";
import NoPhoto from "../../../public/images/no-photo.jpg";

const UserChatBubble = ({ message }) => {
  const { user } = useAuth();

  if (message?.msgContent) {
    return (
      <div className="chat chat-end">
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
          <time className="ml-2 text-xs opacity-50">{message?.time}</time>
        </div>
        <div className="chat-bubble chat-bubble-accent break-all font-bold">
          {message?.msgContent}
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    );
  } else {
    return (
      //   <div className="card w-96 bg-base-100 shadow-xl">
      //     <div className="card-body">
      //       <p>Open File</p>
      //     </div>
      //   </div>

      <div className="chat chat-end">
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
          <time className="ml-2 text-xs opacity-50">{message?.time}</time>
        </div>
        <div className="chat-bubble chat-bubble-accent break-all font-bold shadow-xl">
          <a target="_blank" href={message?.fileContent} className="card">
            <div className="card-body">
              <h5>Open File</h5>
            </div>
          </a>
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    );
  }
};

export default UserChatBubble;
