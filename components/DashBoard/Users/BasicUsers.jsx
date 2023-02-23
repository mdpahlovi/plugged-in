import Image from "next/image";
import NoPhoto from "../../../public/images/no-photo.jpg";
import { ButtonOutline, IconButton } from "../../Common/Buttons";
import { RiDeleteBin5Fill } from "react-icons/ri";

const BasicUsers = ({ users, handleOpen }) => {
    const basic_user = users.filter((user) => user.role === "basic");

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {basic_user.map(({ _id, name, email, avatar }, index) => (
                        <tr key={_id}>
                            <td>{index + 1}</td>
                            <td>
                                <Image src={avatar ? avatar : NoPhoto} alt="" width={48} height={48} className="mask mask-squircle" />
                            </td>
                            <td>
                                <div className="font-bold">{name}</div>
                                <div className="text-sm opacity-50">{email}</div>
                            </td>
                            <td>
                                <ButtonOutline>See Details</ButtonOutline>
                            </td>
                            <td>
                                <IconButton onClick={() => handleOpen({ _id, name })}>
                                    <RiDeleteBin5Fill />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BasicUsers;
