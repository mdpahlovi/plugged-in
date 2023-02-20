import { useRouter } from "next/router";
import { useAuth } from "../../../hooks/useAuth";
import useGetUser from "../../../hooks/useGetUser";
import useIsFriend from "../../../hooks/useIsFriend";
import { useIsPending } from "../../../hooks/useIsPending";
import useIsRequested from "../../../hooks/useIsRequested";
import { TiWarningOutline } from "react-icons/ti";
import { Button, ButtonOutline } from "../../Common/Buttons";

const DisconnectModal = ({ disconnectingFriend, friendListRefetch, peoplesRefetch }) => {
    const { email, room } = disconnectingFriend;
    const { user: auth_user } = useAuth();
    const { friendRefetch } = useIsFriend(email);
    const { user } = useGetUser(email);
    const router = useRouter();
    const { pendingStatus, pendingRefetch } = useIsPending(email);
    const { requestStatus, requestRefetch } = useIsRequested(email);

    const handleDisconnect = () => {
        const user = {
            email: auth_user?.email,
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
                                if (router.pathname === "/dashboard/peoples") {
                                    peoplesRefetch();
                                    friendRefetch();
                                    pendingRefetch();
                                    requestRefetch();
                                } else if (router.pathname === "/dashboard/friends") {
                                    friendListRefetch();
                                    friendRefetch();
                                    pendingRefetch();
                                    requestRefetch();
                                }
                            }
                        });
                }
            });
    };

    return (
        <div>
            <input type="checkbox" id="disconnectModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box rounded-lg max-w-md">
                    <TiWarningOutline className="w-20 h-20 mx-auto" />
                    <h3 className="text-lg text-center font-medium my-4">
                        Are you sure you want to disconnect <br />
                        {user?.name}?
                    </h3>
                    <div className="mx-auto w-3/4 grid grid-cols-2 gap-4">
                        <label htmlFor="disconnectModal">
                            <Button onClick={handleDisconnect} className="w-full">
                                Yes
                            </Button>
                        </label>
                        <label htmlFor="disconnectModal">
                            <ButtonOutline>No</ButtonOutline>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisconnectModal;
