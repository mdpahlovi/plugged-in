import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import DeleteConfirmModal from "../../components/DashBoard/Recordings/DeleteConfirmModal";
import MediaCard from "../../components/DashBoard/Recordings/MediaCard";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";

const Recordings = () => {
    const { authUser } = useAuth();
    const [deletingRecordId, setDeletingRecordId] = useState(null);

    const {
        data: medias = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["userMedia", authUser],
        queryFn: () => fetch(`https://plugged-in-server.vercel.app/userMedia?email=${authUser?.email}`).then((res) => res.json()),
    });

    return (
        <Dashboard title={`${authUser?.displayName} Recordings in PluggedIn`}>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-6">
                {isLoading
                    ? [...Array(6)].map((media, index) => (
                          <div key={index} className="animate-pulse">
                              <div className="w-full aspect-video bg-base-content/10 rounded-lg" />
                              <div className="space-y-4 border border-t-0 p-4 pt-6 rounded-lg -mt-2">
                                  <div className="flex justify-between items-center">
                                      <div className="w-40 h-5 bg-base-content/10" />
                                      <div className="flex gap-4">
                                          <div className="w-[34px] h-[34px] bg-base-content/10 rounded-full" />
                                          <div className="w-[34px] h-[34px] bg-base-content/10 rounded-full" />
                                      </div>
                                  </div>
                                  <div className="h-10 bg-base-content/10 rounded" />
                                  <div className="grid grid-cols-2 gap-4">
                                      <div className="h-12 bg-base-content/10 rounded-full" />
                                      <div className="h-12 bg-base-content/10 rounded-full" />
                                  </div>
                              </div>
                          </div>
                      ))
                    : medias.map((media) => <MediaCard key={media._id} media={media} refetch={refetch} setDeletingRecordId={setDeletingRecordId}></MediaCard>)}
                <DeleteConfirmModal deletingRecordId={deletingRecordId} setDeletingRecordId={setDeletingRecordId} refetch={refetch} />
            </div>
        </Dashboard>
    );
};

export default Recordings;
