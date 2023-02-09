import { useEffect, useState } from "react";
import useGetUser from "./useGetUser";
import { MdVideoCameraBack, MdConnectWithoutContact } from "react-icons/md";
import { FaUserSecret, FaUsers } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { GoGitPullRequest } from "react-icons/go";
import { TiUserAdd } from "react-icons/ti";

const useDashboardRoutes = (email) => {
    const [routes, setRoutes] = useState([]);
    const { userLoading, user } = useGetUser(email);

    useEffect(() => {
        if (user?._id) {
            if (user.role === "team") {
                setRoutes([
                    { href: "/dashboard", name: "Profile", icon: <FaUserSecret /> },
                    {
                        href: "/dashboard/recordings",
                        name: "Recordings",
                        icon: <MdVideoCameraBack className="text-lg" />,
                    },
                    {
                        href: "/dashboard/add_member",
                        name: "Add Member",
                        icon: <TiUserAdd className="text-lg" />,
                    },
                    { href: "/dashboard/message", name: "Message", icon: <SiGooglemessages /> },
                    {
                        href: "/dashboard/requests",
                        name: "Requests",
                        icon: <GoGitPullRequest className="text-lg" />,
                    },
                ]);
            } else if (user.role === "pro") {
                setRoutes([
                    { href: "/dashboard", name: "Profile", icon: <FaUserSecret /> },
                    {
                        href: "/dashboard/recordings",
                        name: "Recordings",
                        icon: <MdVideoCameraBack className="text-lg" />,
                    },
                ]);
            } else if (user.role === "basic") {
                setRoutes([
                    { href: "/dashboard", name: "Profile", icon: <FaUserSecret /> },
                    {
                        href: "/dashboard/recordings",
                        name: "Recordings",
                        icon: <MdVideoCameraBack className="text-lg" />,
                    },
                ]);
            } else {
                setRoutes([
                    { href: "/dashboard", name: "Profile", icon: <FaUserSecret /> },
                    { href: "/dashboard/message", name: "Message", icon: <SiGooglemessages /> },
                    {
                        href: "/dashboard/recordings",
                        name: "Recordings",
                        icon: <MdVideoCameraBack className="text-lg" />,
                    },
                    {
                        href: "/dashboard/users",
                        name: "Users",
                        icon: <FaUsers className="text-lg" />,
                    },
                    {
                        href: "/dashboard/requests",
                        name: "Requests",
                        icon: <GoGitPullRequest className="text-lg" />,
                    },
                    {
                        href: "/dashboard/friends",
                        name: "Friends",
                        icon: <MdConnectWithoutContact className="text-lg" />,
                    },
                ]);
            }
        }
    }, [user?._id, user?.role]);

    return { userLoading, routes };
};

export default useDashboardRoutes;
