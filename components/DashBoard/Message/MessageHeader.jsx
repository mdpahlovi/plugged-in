import Image from "next/image";
import NoPhoto from "../../../public/images/no-photo.jpg";

const MessageHeader = ({ userLoading, user }) => {
    if (userLoading) {
        return (
            <div className="relative flex items-center px-4 border-b animate-pulse">
                <div className="w-10 h-10 mask mask-squircle bg-base-content/10" />
                <div className="ml-3 h-7 w-28 rounded bg-base-content/10" />
            </div>
        );
    } else {
        return (
            <div className="relative flex items-center px-4 border-b">
                <Image className="mask mask-squircle" src={user?.avatar ? user.avatar : NoPhoto} alt="user" width={40} height={40} />
                <h3 className="ml-3 text-xl font-bold">{user?.name}</h3>
                <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-2.5"></span>
            </div>
        );
    }
};

export default MessageHeader;
