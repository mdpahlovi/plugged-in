import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import MediaCollapse from "./MediaCollapse";

const TaskDetailsModal = ({ team, selectedMemberTask }) => {
    const { data: allMedias = [] } = useQuery({
        queryKey: ["media", selectedMemberTask],
        queryFn: () => fetch(`https://plugged-in-server.onrender.com/media?email=${selectedMemberTask?.email}`).then((res) => res.json()),
    });

    const teamMedias = allMedias?.filter((media) => media?.teamName === team?.name);

    return (
        <div>
            <input type="checkbox" id="taskDetailsModal" className="modal-toggle" />
            <label htmlFor="taskDetailsModal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    {teamMedias ? (
                        <div className="collapse">
                            {teamMedias?.map((media) => (
                                <MediaCollapse key={media?._id} media={media} />
                            ))}
                        </div>
                    ) : (
                        <p>No media available for this team</p>
                    )}
                </label>
            </label>
        </div>
    );
};

export default TaskDetailsModal;
