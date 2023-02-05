import Image from "next/image";
import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useIsPending } from "../../../hooks/useIsPending";

const RequestCard = ({ request, connectionRequestRefetch }) => {
  const { protoURL, displayName, email } = request;

  const { authUser } = useAuth();
  const { pendingRefetch } = useIsPending(email);

  const handleDeleteConnect = () => {
    const sender = {
      email,
      protoURL,
      displayName,
    };
    const receiver = {
      email: authUser?.email,
      protoURL: authUser?.photoURL,
      displayName: authUser?.displayName,
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
          connectionRequestRefetch();
          pendingRefetch();
        }
      });
  };

  const handleAcceptRequest = () => {
    const sender = {
      email,
      protoURL,
      displayName,
    };
    const receiver = {
      email: authUser?.email,
      protoURL: authUser?.photoURL,
      displayName: authUser?.displayName,
    };

    fetch("http://localhost:5000/makeFriend", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ sender, receiver }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (
          data.sendingResult &&
          data.receivingResult &&
          data.senderFriendListResult &&
          data.receiverFriendListResult
        ) {
          const roomData = {
            roomName: `${authUser?.email}_${email}`,
            roomType: "single",
            members: [
              {
                email: authUser?.email,
                displayName: authUser?.displayName,
                photoURL: authUser?.photoURL,
              },
              {
                email,
                displayName,
                photoURL: protoURL,
              },
            ],
          };
          // connectionRequestRefetch();
          // pendingRefetch();
          fetch(`http://localhost:5000/makeRoom`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(roomData),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        }
      });
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <Image
        className="w-full"
        src={protoURL ? protoURL : ""}
        alt="user"
        width={200}
        height={200}
      />
      <div className="card-body">
        <h2 className="card-title">{displayName}</h2>
        <p>{email}</p>
        <div className="card-actions">
          <button
            onClick={handleAcceptRequest}
            className="btn btn-primary w-full"
          >
            Accept
          </button>
          <button
            onClick={handleDeleteConnect}
            className="btn btn-active w-full"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
