import Image from "next/image";

const TeamUsers = ({ users, refetch }) => {
    const team_user = users.filter((user) => user.role === "team");

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {team_user.map(({ _id, name, avatar }) => (
                        <tr key={_id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <Image src={avatar} alt="" width={48} height={48} className="mask mask-squircle" />
                                    <div>
                                        <div className="font-bold">{name}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zelma, Daniel and Lennon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeamUsers;
