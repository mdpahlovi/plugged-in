import Image from "next/image";
import React from "react";
import useIsFriend from "../../../hooks/useIsFriend";
import { useIsPending } from "../../../hooks/useIsPending";
import { Button, ButtonOutline } from "../../Common/Buttons";
import NoPhoto from "../../../public/images/no-photo.jpg";
import { useAuth } from "../../../hooks/useAuth";

const PeopleCard = ({ people, peoplesRefetch }) => {
    const { avatar, email, name, role, _id } = people;
    const { pendingStatus, pendingRefetch } = useIsPending(email);
    const { friendStatus, friendRefetch } = useIsFriend(email);
    const { authUser } = useAuth();

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
                }
            });
    };

    return (
        <div className={`relative border rounded-lg ${authUser?.email === email ? "hidden" : ""}`}>
            <div className="flex flex-col items-center py-8 px-8">
                <Image src={avatar ? avatar : NoPhoto} className="mb-3 rounded-full shadow-lg" alt="" width={112} height={112} />
                <h2 className="text-center">{name}</h2>
                <p>{email}</p>
                <div className="mt-3 flex space-x-4">
                    {pendingStatus === "pending" ? (
                        <Button onClick={() => handleCancelConnect({ email, pendingRefetch })}>Cancel</Button>
                    ) : friendStatus === "friend" ? (
                        <Button>Friend</Button>
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
