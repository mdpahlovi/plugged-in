import Image from "next/image";
import { ActiveStatus } from "./MessageIcon";

const MessageHeader = ({ user }) => {
    return (
        <div className="relative flex items-center px-4 py-3 border-b">
            <Image className="mask mask-squircle" src={user?.avatar} alt="user" width={40} height={40} />
            <h3 className="ml-3 text-xl font-bold">Faisal Ahmed</h3>
            <ActiveStatus />
        </div>
    );
};

export default MessageHeader;
