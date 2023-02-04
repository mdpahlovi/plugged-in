import Image from "next/image";
import { use } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { jwt_axios } from "../../../utilities/api";
import AllUsersRow from "./AllUsersRow";

const AllUsers = ({ users, refetch }) => {
  const { authUser } = useAuth();

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

  const handleConnect = ({ name, avatar, email, pendingRefetch }) => {
    const sender = {
      email: authUser?.email,
      protoURL: authUser?.photoURL,
      displayName: authUser?.displayName,
    };
    const receiver = {
      email,
      protoURL: avatar,
      displayName: name,
    };

    fetch("http://localhost:5000/connect", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ sender, receiver }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.sendingResult && data.receivingResult) {
          pendingRefetch();
        }
      });
  };

  const handleCancelConnect = ({ name, avatar, email, pendingRefetch }) => {
    const sender = {
      email: authUser?.email,
      protoURL: authUser?.photoURL,
      displayName: authUser?.displayName,
    };
    const receiver = {
      email,
      protoURL: avatar,
      displayName: name,
    };

    fetch("http://localhost:5000/calcelConnect", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ sender, receiver }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.sendingResult && data.receivingResult) {
          pendingRefetch();
        }
      });
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
            <th>Connect</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <AllUsersRow
              user={user}
              key={user._id}
              handleConnect={handleConnect}
              handleCancelConnect={handleCancelConnect}
              handleEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
