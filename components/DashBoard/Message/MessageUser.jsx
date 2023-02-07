import Image from "next/image";
import { useAuth } from "../../../hooks/useAuth";
import useGetUser from "../../../hooks/useGetUser";
import NoPhoto from "../../../public/images/no-photo.jpg";

const MessageUser = ({ room, active }) => {
    const { roomName, members, messages } = room;
    const { authUser } = useAuth();

    let otherUser;
    if (authUser.email === members[0].email) {
        otherUser = members[1].email;
    } else {
        otherUser = members[0].email;
    }

    const { userLoading, user, userRefetch } = useGetUser(otherUser);

    return (
        <div
            className={`flex items-center px-4 py-3 transition duration-300 border-b cursor-pointer ${
                active ? "bg-base-content/10" : "hover:bg-base-content/10"
            }`}
        >
            <Image className="mask mask-squircle" src={user?.avatar ? user.avatar : NoPhoto} alt="user" width={40} height={40} />
            <div className="w-full">
                <div className="-mb-1 flex justify-between items-center">
                    <h3 className="ml-2 font-semibold">{user?.name}</h3>
                    <p className="ml-2 text-sm">25 minutes</p>
                </div>
                {/* <p className="ml-2 text-sm">{messages[messages?.length - 1]}</p> */}
            </div>
        </div>
    );
};

export default MessageUser;
