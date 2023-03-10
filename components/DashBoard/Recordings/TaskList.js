import axios from "axios";
import { format, parseISO } from "date-fns";
import { useEffect, useRef } from "react";
import { MdEditNote, MdDeleteSweep } from "react-icons/md";
import { toast } from "react-toastify";

const TaskList = ({ task, refetch, editor }) => {
  const check_box = useRef();
  const { _id, date, details, done } = task;
  const date_is = format(parseISO(date), "PP");
  const time_is = format(parseISO(date), "p");

  const handleDelete = (id, button) => {
    axios
      .delete(`https://plugged-in-server.onrender.com/task/${id}`)
      .then((res) => {
        if (res.data) {
          refetch();
          toast.success(
            `Task ${
              button === "edit" ? "sent for edit" : "Deleted Successfully"
            }`
          );
          button === "edit" ? editor.commands.setContent(details) : "";
        }
      })
      .catch((error) => console.log(error.message));
  };

  const handleDone = (id) => {
    const task = { done: done ? false : true };
    axios
      .put(`https://plugged-in-server.onrender.com/task/${id}`, task)
      .then((res) => {
        if (res.data) {
          refetch();
          toast.success(`Task ${done ? "Undo" : "Done"} Successfully`);
        }
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    if (done) {
      check_box.current.checked = done;
    }
  }, [done]);

  return (
    <div className="border p-4 rounded-lg space-y-2">
      <div className="flex justify-between">
        <p>
          {date_is} at {time_is}
        </p>
        <div className="flex gap-4">
          <input
            ref={check_box}
            onClick={() => handleDone(_id)}
            type="checkbox"
            className="checkbox checkbox-sm"
          />
          <MdEditNote
            className="text-xl cursor-pointer"
            onClick={() => handleDelete(_id, "edit")}
          />
          <MdDeleteSweep
            className="text-xl cursor-pointer"
            onClick={() => handleDelete(_id, "delete")}
          />
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: details }} />
    </div>
  );
};

export default TaskList;
