import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { ButtonOutline } from "../../../components/Common/Buttons";
import DeleteConfirmModal from "../../../components/DashBoard/Recordings/DeleteConfirmModal";
import MediaCard from "../../../components/DashBoard/Recordings/MediaCard";
import ShareModal from "../../../components/DashBoard/Recordings/ShareModal";
import Dashboard from "../../../components/Layout/Dashboard";
import { useAuth } from "../../../hooks/useAuth";

const Recordings = () => {
  const { user } = useAuth();
  const [deletingRecordId, setDeletingRecordId] = useState(null);
  const [shareMedia, setShareMedia] = useState(null);

  const {
    data: medias = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userMedia", user],
    queryFn: () =>
      fetch(
        `https://plugged-in-server.onrender.com/userMedia?email=${user?.email}`
      ).then((res) => res.json()),
  });

  return (
    <Dashboard title={`${user?.name} Recordings in PluggedIn`}>
      <div className="grid xs:grid-cols-[repeat(auto-fill,_minmax(22rem,_1fr))] gap-6">
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
          : medias.map((media) => (
              <MediaCard
                key={media._id}
                media={media}
                refetch={refetch}
                setShareMedia={setShareMedia}
                setDeletingRecordId={setDeletingRecordId}
              >
                <Link href={`/dashboard/recordings/${media._id}`}>
                  <ButtonOutline>
                    <div className="flex items-center justify-center gap-2">
                      Details
                      <TbListDetails className="text-lg" />
                    </div>
                  </ButtonOutline>
                </Link>
              </MediaCard>
            ))}
        <DeleteConfirmModal
          deletingRecordId={deletingRecordId}
          setDeletingRecordId={setDeletingRecordId}
          refetch={refetch}
        />
        <ShareModal shareMedia={shareMedia} setShareMedia={setShareMedia} />
      </div>
    </Dashboard>
  );
};

export default Recordings;
