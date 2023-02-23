import Image from "next/image";
import { RiDeleteBin5Fill } from "react-icons/ri";
import NoPhoto from "../../../public/images/no-photo.jpg";
import { ButtonOutline, IconButton } from "../../Common/Buttons";

const TeamUsers = ({ users, handleOpen }) => {
    const team_user = users.filter((user) => user.role === "team");

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Total Team</th>
                        <th>Details</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {team_user.map(({ _id, name, email, avatar, team, address, phone }, index) => (
                        <tr key={_id}>
                            <td>{index + 1}</td>
                            <td>
                                <Image src={avatar ? avatar : NoPhoto} alt="" width={48} height={48} className="mask mask-squircle" />
                            </td>
                            <td>
                                <div className="font-bold">{name}</div>
                                <div className="text-sm opacity-50">{email}</div>
                            </td>
                            <td>{team.length}</td>
                            <td>
                                <ButtonOutline>See Details</ButtonOutline>
                            </td>
                            <td>
                                <ButtonOutline>See Status</ButtonOutline>
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

export default TeamUsers;
