
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import MediaCard from "../../components/DashBoard/Recordings/MediaCard";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";

const Recordings = () => {
  const { authUser } = useAuth();

  const { data: medias = [] } = useQuery({
    queryKey: ["userMedia", authUser],
    queryFn: () =>
      fetch(
        `https://plugged-in-server.vercel.app/userMedia?email=${authUser?.email}`
      ).then((res) => res.json()),
  });

  return (
    <Dashboard>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        {medias.map((media) => (
          <MediaCard key={media._id} media={media}></MediaCard>
        ))}
      </div>
    </Dashboard>
  );
    );
};

export default Recordings;
