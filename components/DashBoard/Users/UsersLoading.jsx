import { Tab } from "@headlessui/react";
import React from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const roles = ["All Users", "Team Users", "Pro Users", "Basic Users"];

const UsersLoading = () => {
    return (
        <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-lg bg-base-content/5 p-1">
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
            <table className="mt-6 table table-fixed w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Set Role</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(3)].map((a, i) => (
                        <tr className="animate-pulse" key={i}>
                            <th>
                                <div className="w-5 h-5 bg-base-content/10 rounded-lg"></div>
                            </th>
                            <td>
                                <div className="w-12 h-12 mask mask-squircle bg-base-content/10 rounded-lg"></div>
                            </td>
                            <td className="space-y-2">
                                <div className="w-24 h-4 bg-base-content/10 rounded-lg"></div>
                                <div className="w-40 h-4 bg-base-content/10 rounded-lg"></div>
                            </td>
                            <td>
                                <div className="w-24 h-4 bg-base-content/10 rounded-lg"></div>
                            </td>
                            <td>
                                <div className="w-full h-12 bg-base-content/10 rounded-lg"></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Tab.Group>
    );
};

export default UsersLoading;
