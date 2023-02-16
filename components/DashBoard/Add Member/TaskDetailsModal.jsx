import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import MediaCollapse from "./MediaCollapse";

const TaskDetailsModal = ({ team, selectedMemberTask }) => {
    const [open, setOpen] = useState(false);
    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        }
        setOpen(index);
    };

    const { data: allMedias = [], isLoading: mediaLoading } = useQuery({
        queryKey: ["media", selectedMemberTask],
        queryFn: () => fetch(`https://plugged-in-server.onrender.com/media?email=${selectedMemberTask?.email}`).then((res) => res.json()),
    });

    const teamMedias = allMedias?.filter((media) => media?.teamName === team?.name);

    return (
        <div>
            <input type="checkbox" id="taskDetailsModal" className="modal-toggle" />
            <label htmlFor="taskDetailsModal" className="modal cursor-pointer">
                <label className="space-y-4 modal-box relative" htmlFor="">
                    {mediaLoading ? (
                        [...Array(5)].map((media, index) => <div key={index} className="h-16 bg-base-content/10 rounded-lg animate-pulse" />)
                    ) : teamMedias?.length ? (
                        teamMedias?.map((media, index) => <MediaCollapse key={index} open={index === open} toggle={() => toggle(index)} media={media} />)
                    ) : (
                        <h2>No media available for this team</h2>
                    )}
                </label>
            </label>
        </div>
    );
};

export default TaskDetailsModal;
