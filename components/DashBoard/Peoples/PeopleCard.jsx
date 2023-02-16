import Image from "next/image";
import React, { use } from "react";
import useIsFriend from "../../../hooks/useIsFriend";
import { useIsPending } from "../../../hooks/useIsPending";
import { Button, ButtonOutline } from "../../Common/Buttons";
import NoPhoto from "../../../public/images/no-photo.jpg";
import { useAuth } from "../../../hooks/useAuth";
import useIsRequested from "../../../hooks/useIsRequested";
import { useRouter } from "next/router";
import useGetUser from "../../../hooks/useGetUser";

const PeopleCard = ({ people, peoplesRefetch, setDisconnectingFriend }) => {
  const router = useRouter();
  const { authUser } = useAuth();
  const { avatar, email, name, role, _id } = people;
  const { pendingStatus, pendingRefetch } = useIsPending(email);
  const { friendStatus, friendRefetch } = useIsFriend(email);
  const { requestStatus, requestRefetch } = useIsRequested(email);

  const { userLoading, user, userRefetch } = useGetUser(email);
  console.log();
  const friend = user?.friendList?.find(
    (item) => item.email === authUser.email
  );

  const handleConnect = (email) => {
    const sender = {
      email: authUser?.email,
    };
    const receiver = {
      email,
    };

    fetch("https://plugged-in-server.onrender.com/connect", {
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
          peoplesRefetch();
          friendRefetch();
          requestRefetch();
        }
      });
  };

  const handleCancelConnect = ({ email, pendingRefetch }) => {
    const sender = {
      email: authUser?.email,
    };
    const receiver = {
      email,
    };

    fetch("https://plugged-in-server.onrender.com/calcelConnect", {
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
          peoplesRefetch();
          friendRefetch();
          requestRefetch();
        }
      });
  };

  const handleDeleteConnect = () => {
    const sender = {
      email,
    };
    const receiver = {
      email: authUser?.email,
    };

    fetch("https://plugged-in-server.onrender.com/calcelConnect", {
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
          friendRefetch();
          requestRefetch();
          peoplesRefetch();
        }
      });
  };

  const handleAcceptRequest = () => {
    const sender = {
      email,
    };
    const receiver = {
      email: authUser?.email,
    };

    fetch("https://plugged-in-server.onrender.com/makeFriend", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ sender, receiver }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (
          data.sendingResult &&
          data.receivingResult &&
          data.senderFriendListResult &&
          data.receiverFriendListResult
        ) {
          const roomData = {
            roomName: `${authUser?.email}_${email}`,
            roomType: "single",
            members: [authUser?.email, email],
          };

          fetch(`https://plugged-in-server.onrender.com/makeRoom`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(roomData),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                pendingRefetch();
                friendRefetch();
                requestRefetch();
                peoplesRefetch();
              }
            });
        }
      });
  };

  return (
    <div
      className={`relative border rounded-lg ${
        authUser?.email === email ? "hidden" : ""
      }`}
    >
      <div className="flex flex-col items-center py-8 px-8">
        <Image
          src={avatar ? avatar : NoPhoto}
          className="mb-3 rounded-full shadow-lg"
          alt=""
          width={112}
          height={112}
        />
        <h2 className="text-center">{name}</h2>
        <p>{email}</p>
        <div className="mt-3 flex space-x-4">
          {pendingStatus === "pending" ? (
            <Button
              onClick={() => handleCancelConnect({ email, pendingRefetch })}
            >
              Cancel
            </Button>
          ) : requestStatus === "requested" ? (
            // <Button>Respond</Button>
            <div className="dropdown dropdown-top">
              <label tabIndex={0} className="m-1">
                <Button>Respond</Button>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content p-2 shadow bg-base-100 rounded-box"
              >
                <li>
                  <Button className={"flex"} onClick={handleAcceptRequest}>
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
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                    <span className="ml-2">Accept</span>
                  </Button>
                </li>
                <li className="mt-2">
                  <ButtonOutline onClick={handleDeleteConnect}>
                    <div className="flex">
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="ml-2">Delete</span>
                    </div>
                  </ButtonOutline>
                </li>
              </ul>
            </div>
          ) : friendStatus === "friend" ? (
            // <Button>Friend</Button>
            <div className="dropdown dropdown-top">
              <label tabIndex={0} className="m-1">
                <Button>Friend</Button>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content p-2 shadow bg-base-100 rounded-box"
              >
                <li>
                  <Button
                    onClick={() => {
                      router.push(`/dashboard/message/${friend?.room}`);
                    }}
                    className={"flex"}
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
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <span className="ml-2">Message</span>
                  </Button>
                </li>
                <li className="mt-2">
                  <ButtonOutline>
                    <label
                      htmlFor="disconnectModal"
                      onClick={() =>
                        setDisconnectingFriend({ email, room: friend?.room })
                      }
                      className="flex cursor-pointer"
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
                          d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                        />
                      </svg>
                      <span className="ml-2">Unfriend</span>
                    </label>
                  </ButtonOutline>
                </li>
              </ul>
            </div>
          ) : (
            <Button onClick={() => handleConnect(email)}>Add Friend</Button>
          )}
          <ButtonOutline>Report</ButtonOutline>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
