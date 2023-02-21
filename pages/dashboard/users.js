import React from "react";
import { Tab } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { jwt_axios } from "../../utilities/api";
import AllUsers from "../../components/DashBoard/Users/AllUsers";
import BasicUsers from "../../components/DashBoard/Users/BasicUsers";
import ProUsers from "../../components/DashBoard/Users/ProUsers";
import TeamUsers from "../../components/DashBoard/Users/TeamUsers";
import Dashboard from "../../components/Layout/Dashboard";
import UsersLoading from "../../components/DashBoard/Users/UsersLoading";
import DeleteUserModal from "../../components/DashBoard/Users/DeleteUserModal";
import { useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const roles = ["All Users", "Team Users", "Pro Users", "Basic Users"];

const Users = () => {
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setUser(null);
        setIsOpen(false);
    };

    const handleOpen = (user) => {
        setUser(user);
        setIsOpen(true);
    };

    const {
        data: users = [],
        isLoading: usersLoading,
        refetch: usersRefetch,
    } = useQuery({
        queryKey: ["users"],
        queryFn: () => jwt_axios(`/users`).then((res) => res.data),
    });

    return (
        <Dashboard title="Users in PluggedIn">
            {usersLoading ? (
                <UsersLoading />
            ) : (
                <Tab.Group>
                    <Tab.List className="grid xs:grid-cols-2 sm:grid-cols-4 space-x-1 rounded-lg bg-base-content/5 p-1">
                        {roles.map((tab, index) => (
                            <Tab
                                key={index}
                                className={({ selected }) =>
                                    classNames(
                                        "w-full rounded-md py-2.5",
                                        "ring-offset-0 focus:outline-none focus:ring-0",
                                        selected ? "bg-base-100 shadow" : "text-base-content hover:bg-base-content/5"
                                    )
                                }
                            >
                                {tab}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-6">
                        <Tab.Panel className={classNames("mt-4 ring-offset-0 focus:outline-none focus:ring-0")}>
                            <AllUsers users={users} refetch={usersLoading} handleOpen={handleOpen} />
                        </Tab.Panel>
                        <Tab.Panel className={classNames("mt-4 ring-offset-0 focus:outline-none focus:ring-0")}>
                            <TeamUsers users={users} handleOpen={handleOpen} />
                        </Tab.Panel>
                        <Tab.Panel className={classNames("mt-4 ring-offset-0 focus:outline-none focus:ring-0")}>
                            <ProUsers users={users} handleOpen={handleOpen} />
                        </Tab.Panel>
                        <Tab.Panel className={classNames("mt-4 ring-offset-0 focus:outline-none focus:ring-0")}>
                            <BasicUsers users={users} handleOpen={handleOpen} />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            )}
            <DeleteUserModal handleClose={handleClose} user={user} isOpen={isOpen} refetch={usersRefetch} />
        </Dashboard>
    );
};

export default Users;
