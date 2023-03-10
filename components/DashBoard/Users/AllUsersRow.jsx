import Image from "next/image";
import { RiDeleteBin5Fill } from "react-icons/ri";
import NoPhoto from "../../../public/images/no-photo.jpg";
import { IconButton } from "../../Common/Buttons";

const roles = [
    { value: "admin", name: "Admin" },
    { value: "team", name: "Team" },
    { value: "pro", name: "Pro" },
    { value: "basic", name: "Basic" },
];

const AllUsersRow = ({ user, index, handleEdit, handleOpen }) => {
    const { _id, name, avatar, role, email } = user;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <Image src={avatar ? avatar : NoPhoto} alt="" width={48} height={48} className="mask mask-squircle" />
            </td>
            <td>
                <div className="font-bold">{name}</div>
                <div className="text-sm opacity-50">{email}</div>
            </td>
            <td>{role ? role[0].toUpperCase() + role.substr(1) : ""}</td>
            <td>
                <select value={role} className="select text-base font-normal select-bordered w-full" onChange={(e) => handleEdit(e.target.value, email)}>
                    {roles.map(({ name, value }, index) => (
                        <option key={index} value={value}>
                            {name}
                        </option>
                    ))}
                </select>
            </td>
            <td>
                <IconButton onClick={() => handleOpen({ _id, name })}>
                    <RiDeleteBin5Fill />
                </IconButton>
            </td>
        </tr>
    );
};

export default AllUsersRow;
