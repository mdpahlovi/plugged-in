import { format, parseISO } from "date-fns";
import { MdEditNote, MdDeleteSweep } from "react-icons/md";

const TaskList = ({ data }) => {
    const date_is = format(parseISO(data), "PP");
    const time_is = format(parseISO(data), "p");

    return (
        <div className="border p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
                <p>
                    {date_is} at {time_is}
                </p>
                <div className="flex gap-4">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <MdEditNote className="text-xl" />
                    <MdDeleteSweep className="text-xl" />
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, sapiente explicabo. Saepe perferendis quaerat temporibus, esse animi
                consectetur iste fuga corrupti dolorum sint perspiciatis ratione quae voluptatibus, in ipsa assumenda.
            </p>
        </div>
    );
};

export default TaskList;
