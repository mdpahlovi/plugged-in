import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../components/Common/Buttons";
import MemberCardLoader from "../../components/Common/MemberCardLoader";
import DisconnectModal from "../../components/DashBoard/Friends/DisconnectModal";
import FriendCard from "../../components/DashBoard/Friends/FriendCard";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";

const Friends = () => {
    const { user } = useAuth();
    const [disconnectingFriend, setDisconnectingFriend] = useState(null);

    const {
        data: friends = [],
        isLoading: friendsLoading,
        refetch: friendListRefetch,
    } = useQuery({
        queryKey: ["friends", user],
        queryFn: () => fetch(`https://plugged-in-server.onrender.com/friends?email=${user?.email}`).then((res) => res.json()),
    });

    return (
        <Dashboard title={`Friends of ${user?.name}`} className="grid xs:grid-cols-[repeat(auto-fill,_minmax(20.5rem,_1fr))] gap-6">
            {friendsLoading ? (
                [...Array(6)].map((user, index) => <MemberCardLoader key={index} />)
            ) : friends?.length ? (
                friends?.map((friend) => <FriendCard key={friend?.email} friend={friend} setDisconnectingFriend={setDisconnectingFriend} />)
            ) : (
                <div className="col-span-full h-[calc(100vh_-_7rem)] mx-auto flex flex-col items-center justify-center">
                    <h1 className="mb-4">Your Friend list is empty</h1>
                    <Link href="/dashboard/peoples">
                        <Button>Add Friends</Button>
                    </Link>
                </div>
            )}
            {disconnectingFriend && <DisconnectModal disconnectingFriend={disconnectingFriend} friendListRefetch={friendListRefetch} />}
        </Dashboard>
    );
};

export default Friends;
