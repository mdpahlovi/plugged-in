import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";
import { jwt_axios } from "../../../utilities/api";
import AllUsersRow from "./AllUsersRow";

const AllUsers = ({ users, refetch }) => {
  const { authUser } = useAuth();

  const handleEdit = (value, email) => {
    jwt_axios
      .patch(`/user/${email}`, { role: value })
      .then((res) => {
        refetch();
        toast.success("Role updated successfully");
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
            <th>No</th>
            <th>Avatar</th>
            <th>Name</th>
            {/* <th>Role</th>
                        <th>Set Role</th> */}
            <th>Connect</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <AllUsersRow
              key={user._id}
              user={user}
              index={index}
              handleEdit={handleEdit}
              handleConnect={handleConnect}
              handleCancelConnect={handleCancelConnect}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
