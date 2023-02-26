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
import { HiUserPlus, HiUserMinus } from "react-icons/hi2";
import { AiFillMessage, AiOutlineClose } from "react-icons/ai";

const PeopleCard = ({ people, peoplesRefetch, setDisconnectingFriend }) => {
  const router = useRouter();
  const { user: auth_user } = useAuth();
  const { avatar, email, name } = people;
  const { pendingStatus, pendingRefetch } = useIsPending(email);
  const { friendStatus, friendRefetch } = useIsFriend(email);
  const { requestStatus, requestRefetch } = useIsRequested(email);
  const { user } = useGetUser(email);
  const friend = user?.friendList?.find(
    (item) => item.email === auth_user.email
  );

  const handleConnect = (email) => {
    const sender = {
      email: auth_user?.email,
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
      email: auth_user?.email,
    };
    const receiver = {
      email,
    };

    fetch("https://plugged-in-server.onrender.com/cancelConnect", {
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
      email: auth_user?.email,
    };

    fetch("https://plugged-in-server.onrender.com/cancelConnect", {
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
      email: auth_user?.email,
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
            roomName: `${auth_user?.email}_${email}`,
            roomType: "single",
            members: [auth_user?.email, email],
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
        auth_user?.email === email ? "hidden" : ""
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
        <div className="mt-3 grid w-4/5 xs:w-auto xs:grid-cols-[auto_auto] gap-4">
          {pendingStatus === "pending" ? (
            <Button
              onClick={() => handleCancelConnect({ email, pendingRefetch })}
            >
              Cancel
            </Button>
          ) : requestStatus === "requested" ? (
            <div className="dropdown dropdown-bottom">
              <label tabIndex={0}>
                <Button className="w-full">Respond</Button>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content p-2 shadow bg-base-100 rounded-box"
              >
                <li>
                  <Button
                    className={"flex items-center"}
                    onClick={handleAcceptRequest}
                  >
                    <HiUserPlus className="text-lg" />
                    <span className="ml-2">Accept</span>
                  </Button>
                </li>
                <li className="mt-2">
                  <ButtonOutline onClick={handleDeleteConnect}>
                    <div className="flex items-center">
                      <AiOutlineClose />
                      <span className="ml-2">Delete</span>
                    </div>
                  </ButtonOutline>
                </li>
              </ul>
            </div>
          ) : friendStatus === "friend" ? (
            <div className="dropdown dropdown-bottom">
              <label tabIndex={0}>
                <Button className="w-full">Friend</Button>
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
                    className="flex items-center"
                  >
                    <AiFillMessage />
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
                      className="flex items-center"
                    >
                      <HiUserMinus className="text-lg" />
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
