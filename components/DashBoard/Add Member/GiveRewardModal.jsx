import { useQuery } from "@tanstack/react-query";
import React from "react";
import TaskCollapse from "./TaskCollapse";

const GiveRewardModal = ({ selectedMemberTask }) => {
    const { data: tasks = [], refetch: tasksRefetch } = useQuery({
        queryKey: ["taskByUser", selectedMemberTask],
        queryFn: () => fetch(`https://plugged-in-server.onrender.com/taskByUser?email=${selectedMemberTask?.email}`).then((res) => res.json()),
    });

    return (
        <div>
            <input type="checkbox" id="giveRewardModal" className="modal-toggle" />
            <label htmlFor="giveRewardModal" className="modal cursor-pointer">
                <label className="modal-box rounded-lg relative" htmlFor="">
                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        {tasks?.map((task) => (
                            <TaskCollapse tasksRefetch={tasksRefetch} key={task?._id} task={task} />
                        ))}
                    </div>
                </label>
            </label>
        </div>
    );
};

export default GiveRewardModal;
