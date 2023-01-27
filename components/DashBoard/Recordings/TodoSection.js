import React, { useState } from "react";
import { Button } from "../../Buttons";
import TaskList from "./TaskList";
import TextEditor from "./TextEditor";

const TodoSection = ({ tasks, refetch }) => {
    const [show, setShow] = useState(false);
    const [todoTexts, setTodoTexts] = useState(null);

    const handleTask = (data) => {
        setShow(!show);
        console.log(data);
    };

    return (
        <div className="md:relative md:overflow-hidden md:overflow-y-auto">
            <div className="md:absolute w-full flex flex-col gap-4">
                <div className={tasks.length && !show ? "hidden" : ""}>
                    <TextEditor setTodoTexts={setTodoTexts} />
                </div>
                <div>
                    <Button onClick={() => handleTask(todoTexts)}>Add Todo List</Button>
                </div>
                {tasks.map((task, index) => (
                    <TaskList key={index} data={date} />
                ))}
            </div>
        </div>
    );
};

export default TodoSection;
