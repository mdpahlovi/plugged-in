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

const AllUsersRow = ({ user, index, handleEdit }) => {
  const { name, avatar, role, email } = user;

  const { authUser } = useAuth();

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <Image
          src={avatar ? avatar : NoPhoto}
          alt=""
          width={48}
          height={48}
          className="mask mask-squircle"
        />
      </td>
      <td>
        <div className="font-bold">{name}</div>
        <div className="text-sm opacity-50">{email}</div>
      </td>
      <td>{role ? role[0].toUpperCase() + role.substr(1) : ""}</td>
      <td>
        <select
          value={role}
          className="select text-base font-normal select-bordered w-full"
          onChange={(e) => handleEdit(e.target.value, email)}
        >
          {roles.map(({ name, value }, index) => (
            <option key={index} value={value}>
              {name}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
};

export default AllUsersRow;
