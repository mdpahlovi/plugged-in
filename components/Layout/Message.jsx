import Dashboard from "./Dashboard";
import MessageUser from "../DashBoard/Message/MessageUser";
import { ImSearch } from "react-icons/im";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const Message = ({ children }) => {
    const { user } = useAuth();
    const router = useRouter();

    const { data: rooms = [], refetch: roomsRefetch } = useQuery({
        queryKey: ["getRooms"],
        queryFn: () => fetch("https://plugged-in-server.onrender.com/getRooms").then((res) => res.json()),
    });

    return (
        <Dashboard title="Message in PluggedIn">
            <div className="border rounded-lg flex h-[calc(100vh_-_7rem)]">
                <div
                    className={`${
                        router?.pathname === "/dashboard/message/[roomName]" ? "hidden" : "block"
                    } sm:block border-r min-w-full sm:min-w-[280px] md:min-w-[320px] xl:min-w-[360px]`}
                >
                    <div className="mx-4 my-4 relative">
                        <ImSearch className="absolute h-full flex items-center left-4" />
                        <input type="search" className="input rounded-full pl-10" name="search" placeholder="Search" required />
                    </div>
                    <ul className="overflow-auto">
                        <h2 className="ml-4 -mt-1 mb-1 text-xl">Chats</h2>
                        <div className="">
                            {rooms?.map(
                                (room, index) =>
                                    room?.members?.includes(user?.email) && (
                                        <div onClick={() => router.push(`/dashboard/message/${room?.roomName}`)} key={index}>
                                            <MessageUser room={room} active={router?.asPath === `/dashboard/message/${room?.roomName}` ? true : false} />
                                        </div>
                                    )
                            )}
                        </div>
                    </ul>
                </div>
                <div className={`${router?.pathname === "/dashboard/message/[roomName]" ? "grid" : "hidden"} sm:grid grid-rows-[4.05rem_1fr_4.55rem] w-full`}>
                    {children}
                </div>
            </div>
        </Dashboard>
    );
};

export default Message;
