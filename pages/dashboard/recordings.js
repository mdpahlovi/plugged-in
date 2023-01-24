import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useState } from "react";
import DeleteCnfirmModal from "../../components/DashBoard/Recordings/DeleteCnfirmModal";
import MediaCard from "../../components/DashBoard/Recordings/MediaCard";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";

const Recordings = () => {
  const { authUser } = useAuth();

  const [deletingRecord, setDeletingRecord] = useState(null);

  const { data: medias = [], refetch } = useQuery({
    queryKey: ["userMedia", authUser],
    queryFn: () =>
      fetch(
        `https://plugged-in-server.vercel.app/userMedia?email=${authUser?.email}`
      ).then((res) => res.json()),
  });

  // grid-template-columns: repeat(auto-fill, minmax(96px, 1fr))

  return (
    <Dashboard title={`${authUser?.displayName} Recordings in PluggedIn`}>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-6">
        {medias.map((media) => (
          <MediaCard
            key={media._id}
            media={media}
            refetch={refetch}
            setDeletingRecord={setDeletingRecord}
          ></MediaCard>
        ))}
        {deletingRecord && (
          <DeleteCnfirmModal
            deletingRecord={deletingRecord}
            setDeletingRecord={setDeletingRecord}
            refetch={refetch}
          />
        )}
      </div>
    </Dashboard>
  );
};

export default Recordings;
