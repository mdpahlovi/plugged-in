import { Tab } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { jwt_axios } from "../../utilities/api";
import AllUsers from "../../components/DashBoard/Users/AllUsers";
import BasicUsers from "../../components/DashBoard/Users/BasicUsers";
import ProUsers from "../../components/DashBoard/Users/ProUsers";
import TeamUsers from "../../components/DashBoard/Users/TeamUsers";
import Dashboard from "../../components/Layout/Dashboard";
import { useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const roles = [
    { tab: "All Users", role: "" },
    { tab: "Team Users", role: "team" },
    { tab: "Pro Users", role: "pro" },
    { tab: "Basic Users", role: "basic" },
];

const Users = () => {
    const [role, setRole] = useState(null);

    const {
        data: users = [],
        isLoading: usersLoading,
        refetch: usersRefetch,
    } = useQuery({
        queryKey: ["users", role],
        queryFn: () => jwt_axios(`/users?role=${role}`).then((res) => res.data),
    });

    return (
        <Dashboard title="Users in PluggedIn">
            {usersLoading ? (
                ""
            ) : (
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-lg bg-base-content/5 p-1">
                        {roles.map(({ tab, role }, index) => (
                            <Tab
                                key={index}
                                onClick={() => setRole(role)}
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
                            <AllUsers users={users} refetch={usersRefetch} />
                        </Tab.Panel>
                        <Tab.Panel className={classNames("mt-4 ring-offset-0 focus:outline-none focus:ring-0")}>
                            <TeamUsers users={users} refetch={usersRefetch} />
                        </Tab.Panel>
                        <Tab.Panel className={classNames("mt-4 ring-offset-0 focus:outline-none focus:ring-0")}>
                            <ProUsers users={users} refetch={usersRefetch} />
                        </Tab.Panel>
                        <Tab.Panel className={classNames("mt-4 ring-offset-0 focus:outline-none focus:ring-0")}>
                            <BasicUsers users={users} refetch={usersRefetch} />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            )}
        </Dashboard>
    );
};

export default Users;
