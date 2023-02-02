import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import Dashboard from "../../../components/Layout/Dashboard";
import RecordLoader from "../../../components/DashBoard/Recordings/RecordLoader";
import MediaCard from "../../../components/DashBoard/Recordings/MediaCard";
import TodoSection from "../../../components/DashBoard/Recordings/TodoSection";
import TrimModal from "../../../components/DashBoard/Recordings/TrimModal";
import DeleteConfirmModal from "../../../components/DashBoard/Recordings/DeleteConfirmModal";
import { ButtonOutline } from "../../../components/Buttons";
import { BiTrim } from "react-icons/bi";
import ShareModal from "../../../components/DashBoard/Recordings/ShareModal";

const RecordDetails = () => {
    const { query } = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [deletingRecordId, setDeletingRecordId] = useState(null);
    const [shareMedia, setShareMedia] = useState(null);

    const {
        data: media,
        isLoading: mediaLoading,
        refetch: mediaRefetch,
    } = useQuery({
        queryKey: ["media", query?.id],
        queryFn: () => fetch(`https://plugged-in-server.vercel.app/media/${query?.id}`).then((res) => res.json()),
    });

    const {
        data: tasks = [],
        isLoading: tasksLoading,
        refetch: taskRefetch,
    } = useQuery({
        queryKey: ["tasks", query?.id],
        queryFn: () => fetch(`https://plugged-in-server.vercel.app/tasks/${query?.id}`).then((res) => res.json()),
    });

    if (mediaLoading || tasksLoading) {
        return (
            <Dashboard title="Record Details" className="grid md:grid-cols-[7fr,_5fr] gap-6 animate-pulse">
                <RecordLoader />
            </Dashboard>
        );
    } else {
        return (
            <Dashboard title="Record Details" className="grid md:grid-cols-[7fr,_5fr] gap-x-6 gap-y-10">
                <MediaCard media={media} refetch={mediaRefetch} setShareMedia={setShareMedia} setDeletingRecordId={setDeletingRecordId}>
                    <ButtonOutline onClick={() => setIsOpen(true)}>
                        <div className="flex items-center justify-center gap-2">
                            Trim
                            <BiTrim className="text-lg" />
                        </div>
                    </ButtonOutline>
                </MediaCard>
                <TodoSection tasks={tasks} media_id={media._id} refetch={taskRefetch} />
                <TrimModal isOpen={isOpen} setIsOpen={setIsOpen} mediaUrl={media.mediaUrl} />
                <DeleteConfirmModal deletingRecordId={deletingRecordId} setDeletingRecordId={setDeletingRecordId} refetch={mediaRefetch} />
                <ShareModal shareMedia={shareMedia} setShareMedia={setShareMedia} />
            </Dashboard>
        );
    }
};

export default RecordDetails;
