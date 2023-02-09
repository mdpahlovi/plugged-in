import { Combobox, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import React, { Fragment, useState } from "react";
import { jwt_axios } from "../../../utilities/api";

const AddTeamMember = ({ handleAddMember }) => {
    const {
        data: users = [],
        isLoading: usersLoading,
        refetch: usersRefetch,
    } = useQuery({
        queryKey: ["users"],
        queryFn: () => jwt_axios(`/users`).then((res) => res.data),
    });

    const [query, setQuery] = useState("");
    const filtered_users =
        query === "" ? users : users.filter((user) => user.email.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")));

    return (
        <div className="relative">
            <Combobox onChange={(value) => handleAddMember({ name: value?.name, email: value?.email, role: "member", avatar: value.avatar })}>
                <Combobox.Input className="w-full border input" displayValue={(person) => person.name} onChange={(event) => setQuery(event.target.value)} />
                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery("")}>
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-base-100 py-1 shadow-lg">
                        {filtered_users.length === 0 && query !== "" ? (
                            <p className="py-2 px-4">Nothing found.</p>
                        ) : (
                            filtered_users.map((user) => (
                                <Combobox.Option
                                    key={user._id}
                                    className={({ active }) => `relative cursor-pointer py-2 px-6 ${active ? "bg-accent text-base-100" : "text-base-content"}`}
                                    value={user}
                                >
                                    <h3>{user.name}</h3>
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                </Transition>
            </Combobox>
        </div>
    );
};

export default AddTeamMember;
