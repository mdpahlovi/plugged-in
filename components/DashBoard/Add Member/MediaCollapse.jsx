import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const MediaCollapse = ({ media, open, toggle }) => {
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks", media],
    queryFn: () =>
      fetch(`https://plugged-in-server.onrender.com/tasks/${media?._id}`).then(
        (res) => res.json()
      ),
  });

  return (
    <div className="border rounded-lg">
      <div
        className="py-4 px-6 flex justify-between items-center cursor-pointer gap-4"
        onClick={toggle}
      >
        <h2>{media?.title}</h2>
        <div className="text-3xl">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        {tasks?.length ? (
          tasks?.map((task, index) => (
            <div key={index} className="px-8 pb-4 flex justify-between">
              {task?.details
                ? task?.details.replace(/(<([^>]+)>)/gi, "")
                : "No task assigned"}
              <span
                className={`badge ${
                  task?.done === true ? "badge-success" : "badge-error"
                } gap-2`}
              >
                {task?.done === true ? "done" : "unfinished"}
              </span>
            </div>
          ))
        ) : (
          <p className="px-8 pb-4">No task added</p>
        )}
      </Collapse>
    </div>
  );
};

export default MediaCollapse;
