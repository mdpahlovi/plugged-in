import { useQuery } from "@tanstack/react-query";
import React from "react";

const MediaCollapse = ({ media }) => {
    const { data: tasks = [] } = useQuery({
        queryKey: ["tasks", media],
        queryFn: () => fetch(`https://plugged-in-server.onrender.com/tasks/${media?._id}`).then((res) => res.json()),
    });

    console.log(tasks);

    return (
        <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
                <p className="font-bold ml-5">{media?.title}</p>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
                {tasks?.map((task, index) => (
                    <div key={index}>
                        <p className="bg-blue-900 px-5 py-2 mt-5 rounded-lg font-bold flex justify-between">
                            {task?.details ? task?.details.replace(/(<([^>]+)>)/gi, "") : "No task assigned"}
                            <span className={`badge ${task?.done === true ? "badge-success" : "badge-error"} gap-2`}>
                                {task?.done === true ? "done" : "unfinished"}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaCollapse;
