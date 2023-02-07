import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import useGetUser from "../../../hooks/useGetUser";
import useIsFriend from "../../../hooks/UseIsFriend";

const DisconnectModal = ({ disconnectingFriend, friendListRefetch }) => {
    const { email, room } = disconnectingFriend;
    console.log(disconnectingFriend);
    const { authUser } = useAuth();
    const { friendRefetch } = useIsFriend(email);
    const { user } = useGetUser(email);

    const handleDisconnect = () => {
        const user = {
            email: authUser?.email,
            room,
        };
        const friend = {
            email,
            room,
        };
        fetch("https://plugged-in-server.onrender.com/disconnect", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ user, friend }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.friendDisconnectingResult && data.userDisconnectingResult) {
                    // friendListRefetch();
                    // friendRefetch();
                    fetch(`https://plugged-in-server.onrender.com/deleteRoom?roomName=${room}`, {
                        method: "DELETE",
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.acknowledged) {
                                friendListRefetch();
                            }
                        });
                }
            });
    };

    return (
        <div>
            <input type="checkbox" id="disconnectModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to disconnect {user?.name}?</h3>
                    <div className="modal-action">
                        <label onClick={handleDisconnect} htmlFor="disconnectModal" className="btn btn-ghost w-[50%]">
                            Yes
                        </label>
                        <label htmlFor="disconnectModal" className="btn w-[50%]">
                            No
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisconnectModal;
