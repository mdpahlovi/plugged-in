import Image from "next/image";
import { ActiveStatus } from "./MessageIcon";
import NoPhoto from "../../../public/images/no-photo.jpg";

const MessageHeader = ({ user }) => {
    return (
        <div className="relative flex items-center px-4 py-3 border-b">
            <Image className="mask mask-squircle" src={user?.avatar ? user.avatar : NoPhoto} alt="user" width={40} height={40} />
            <h3 className="ml-3 text-xl font-bold">{user?.name}</h3>
            <ActiveStatus />
        </div>
    );
};

export default MessageHeader;
