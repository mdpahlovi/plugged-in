import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import DeleteConfirmModal from "../../components/DashBoard/Recordings/DeleteConfirmModal";
import MediaCard from "../../components/DashBoard/Recordings/MediaCard";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";

const Recordings = () => {
    const { authUser } = useAuth();
    const [deletingRecordId, setDeletingRecordId] = useState(null);

    const { data: medias = [], refetch } = useQuery({
        queryKey: ["userMedia", authUser],
        queryFn: () => fetch(`https://plugged-in-server.vercel.app/userMedia?email=${authUser?.email}`).then((res) => res.json()),
    });

    return (
        <Dashboard title={`${authUser?.displayName} Recordings in PluggedIn`}>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-6">
                {medias.map((media) => (
                    <MediaCard key={media._id} media={media} refetch={refetch} setDeletingRecordId={setDeletingRecordId}></MediaCard>
                ))}
                <DeleteConfirmModal deletingRecordId={deletingRecordId} setDeletingRecordId={setDeletingRecordId} refetch={refetch} />
            </div>
        </Dashboard>
    );
};

export default Recordings;
