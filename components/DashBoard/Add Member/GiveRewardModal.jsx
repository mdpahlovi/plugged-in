import { useQuery } from "@tanstack/react-query";
import React from "react";
import TaskCollapse from "./TaskCollapse";

const GiveRewardModal = ({
  setSelectedMemberTask,
  selectedMemberTask,
  team,
}) => {
  console.log(selectedMemberTask);

  const { data: tasks = [], refetch: tasksRefetch } = useQuery({
    queryKey: ["taskByUser", selectedMemberTask],
    queryFn: () =>
      fetch(
        `https://plugged-in-server.onrender.com/taskByUser?email=${selectedMemberTask?.email}`
      ).then((res) => res.json()),
  });

  return (
    <div>
      <input type="checkbox" id="giveRewardModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box rounded-lg relative">
          <label
            onClick={() => setSelectedMemberTask(null)}
            htmlFor="giveRewardModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {tasks?.map((task) => (
            <TaskCollapse
              tasksRefetch={tasksRefetch}
              team={team}
              key={task?._id}
              task={task}
            />
          ))}
        </div>
      </div>
    </div>

    // <div>
    //   <input
    //     onClick={() => setSelectedMemberTask(null)}
    //     type="checkbox"
    //     id="giveRewardModal"
    //     className="modal-toggle"
    //   />
    //   <label htmlFor="giveRewardModal" className="modal cursor-pointer">
    //     <label className="modal-box rounded-lg relative" htmlFor="">
    //       <div className="collapse">
    //         <input type="checkbox" className="peer" />
    //         {tasks?.map((task) => (
    //           <TaskCollapse
    //             tasksRefetch={tasksRefetch}
    //             team={team}
    //             key={task?._id}
    //             task={task}
    //           />
    //         ))}
    //       </div>
    //     </label>
    //   </label>
    // </div>
  );
};

export default GiveRewardModal;
