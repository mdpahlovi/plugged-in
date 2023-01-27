import { format, parseISO } from "date-fns";
import { MdEditNote, MdDeleteSweep } from "react-icons/md";

const TaskList = ({ task, setTodoTexts }) => {
    const { date, details } = task;
    const date_is = format(date, "PP");
    const time_is = format(date, "p");

    return (
        <div className="border p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
                <p>
                    {date_is} at {time_is}
                </p>
                <div className="flex gap-4">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <MdEditNote className="text-xl" />
                    <MdDeleteSweep className="text-xl cursor-pointer" onClick={() => setTodoTexts([])} />
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: details }} />
        </div>
    );
};

export default TaskList;
