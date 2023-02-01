import Image from "next/image";
import { jwt_axios } from "../../../utilities/api";

const AllUsers = ({ users, refetch }) => {
    const handleEdit = (event, id) => {
        const value = event.target.value;
        jwt_axios
            .patch(`/user/${id}`, { role: value })
            .then((res) => {
                console.log(res.data);
                refetch();
            })
            .catch((error) => console.log(error));
    };

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
                    {users.map(({ _id, name, avatar, email }) => (
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
                                <input type="text" className="input" onBlur={(event) => handleEdit(event, email)} />
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;
