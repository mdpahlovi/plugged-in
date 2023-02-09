import Image from "next/image";
import { useAuth } from "../../../hooks/useAuth";
import useIsFriend from "../../../hooks/useIsFriend";
import { useIsPending } from "../../../hooks/useIsPending";
import NoPhoto from "../../../public/images/no-photo.jpg";

const roles = [
    { value: "admin", name: "Admin" },
    { value: "team", name: "Team" },
    { value: "pro", name: "Pro" },
    { value: "basic", name: "Basic" },
];

const AllUsersRow = ({ user, index, handleEdit, handleConnect, handleCancelConnect }) => {
    const { name, avatar, role, email } = user;
    const { pendingStatus, pendingRefetch } = useIsPending(email);
    const { friendStatus, friendRefetch } = useIsFriend(email);
    const { authUser } = useAuth();

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

            {pendingStatus === "pending" ? (
                <td onClick={() => handleCancelConnect({ email, pendingRefetch })} className="hover:text-blue-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </td>
            ) : friendStatus === "friend" ? (
                <td>
                    <p className="bg-sky-500 px-5 py-1 rounded-btn font-bold text-white">friend</p>
                </td>
            ) : (
                <td onClick={() => handleConnect({ email, pendingRefetch })} className="hover:text-blue-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                        />
                    </svg>
                </td>
            )}
        </tr>
    );
};

export default AllUsersRow;
