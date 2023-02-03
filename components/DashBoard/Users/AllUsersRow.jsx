import Image from "next/image";
import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import UseIsPending from "../../../hooks/UseIsPending";

const AllUsersRow = ({ user, handleConnect, handleCancelConnect }) => {
  const { name, avatar, email } = user;
  const { pendingStatus, pendingRefetch } = UseIsPending(email);
  const { authUser } = useAuth();

  return (
    <tr className={`${email === authUser?.email && "hidden"}`}>
      <td>
        <div className="flex items-center space-x-3">
          {avatar && (
            <Image
              src={avatar}
              alt=""
              width={48}
              height={48}
              className="mask mask-squircle"
            />
          )}
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        Zelma, Daniel and Lennon
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>Purple</td>
      <td>
        <input
          type="text"
          className="input"
          onBlur={(event) => handleEdit(event, email)}
        />
      </td>
      {pendingStatus === "pending" ? (
        <td
          onClick={() =>
            handleCancelConnect({ name, avatar, email, pendingRefetch })
          }
          className="hover:text-blue-500 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </td>
      ) : (
        <td
          onClick={() => handleConnect({ name, avatar, email, pendingRefetch })}
          className="hover:text-blue-500 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
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
