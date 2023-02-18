import { toast } from "react-toastify";
import { jwt_axios } from "../../../utilities/api";
import AllUsersRow from "./AllUsersRow";

const AllUsers = ({ users, refetch }) => {
    const handleEdit = (value, email) => {
        jwt_axios
            .patch(`/user/${email}`, { role: value })
            .then((res) => {
                refetch();
                toast.success("Role updated successfully");
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
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
                    {users.map((user, index) => (
                        <AllUsersRow key={user._id} user={user} index={index} handleEdit={handleEdit} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;
