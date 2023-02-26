import Image from "next/image";
import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import useGetUser from "../../../hooks/useGetUser";
import { useIsPending } from "../../../hooks/useIsPending";
import NoPhoto from "../../../public/images/no-photo.jpg";
import { Button, ButtonOutline } from "../../Common/Buttons";

const RequestCard = ({ request, connectionRequestRefetch }) => {
    const { email } = request;
    const { user } = useGetUser(email);
    const { user: auth_user } = useAuth();
    const { pendingRefetch } = useIsPending(email);

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
                    connectionRequestRefetch();
                    pendingRefetch();
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
                if (data.sendingResult && data.receivingResult && data.senderFriendListResult && data.receiverFriendListResult) {
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
                                connectionRequestRefetch();
                                pendingRefetch();
                            }
                        });
                }
            });
    };

    return (
        <div className={`relative border rounded-lg`}>
            <div className="flex flex-col items-center py-8 px-8">
                <Image src={user?.avatar ? user?.avatar : NoPhoto} className="mb-3 rounded-full shadow-lg" alt="" width={112} height={112} />
                <h2 className="text-center">{user?.name}</h2>
                <p>{email}</p>
                <div className="mt-3 w-4/5 xs:w-auto grid xs:grid-cols-2 gap-4">
                    <Button onClick={handleAcceptRequest}>Accept</Button>
                    <ButtonOutline onClick={handleDeleteConnect}>Delete</ButtonOutline>
                </div>
            </div>
        </div>
    );
};

export default RequestCard;
