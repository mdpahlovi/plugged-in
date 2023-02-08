import Dashboard from "./Dashboard";
import MessageUser from "../DashBoard/Message/MessageUser";
import { ImSearch } from "react-icons/im";
import pahlovi from "../../public/images/team/pahlovi.png";
import safayet from "../../public/images/team/safayet.png";
import ashiq from "../../public/images/team/ashiqur.png";
import pran from "../../public/images/team/gobinda.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";
import useGetUser from "../../hooks/useGetUser";
import { useQuery } from "@tanstack/react-query";

const Message = ({ children }) => {
  const { query } = useRouter();
  const { authUser } = useAuth();
  const { userLoading, user, userRefetch } = useGetUser(authUser?.email);
  const router = useRouter();

  const { data: rooms = [], refetch: roomsRefetch } = useQuery({
    queryKey: ["getRooms"],
    queryFn: () =>
      fetch("https://plugged-in-server.onrender.com/getRooms").then((res) =>
        res.json()
      ),
  });

  return (
    <Dashboard title="Message in PluggedIn">
      <div className="border rounded-lg flex h-[screen]">
        <div className="border-r min-w-full sm:min-w-[280px] md:min-w-[320px] xl:min-w-[360px]">
          <div className="mx-4 my-4 relative">
            <ImSearch className="absolute h-full flex items-center left-4" />
            <input
              type="search"
              className="input rounded-full pl-10"
              name="search"
              placeholder="Search"
              required
            />
          </div>
          <ul className="overflow-auto h-[32rem]">
            <h2 className="ml-4 -mt-1 mb-1 text-xl">Chats</h2>
            <div>
              {rooms?.map(
                (room, index) =>
                  room?.members?.includes(authUser?.email) && (
                    <div
                      onClick={() => {
                        router.push(`/dashboard/message/${room?.roomName}`);
                      }}
                      key={index}
                    >
                      <MessageUser room={room} />
                    </div>
                  )
              )}
            </div>
          </ul>
        </div>
        <div className="flex flex-col justify-between w-full">{children}</div>
      </div>
    </Dashboard>
  );
};

export default Message;
