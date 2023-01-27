import React, { useState } from "react";
import { Button } from "../../Buttons";
import TaskList from "./TaskList";
import TextEditor from "./TextEditor";

const TodoSection = ({ tasks, refetch }) => {
    const [show, setShow] = useState(false);
    const [todoText, setTodoText] = useState(null);
    const [todoTasks, setTodoTexts] = useState([]);

    const handleTask = (data) => {
        setShow(true);
        setTodoTexts([...todoTasks, { date: new Date(), details: data }]);
    };

    return (
        <div className="md:relative md:overflow-hidden md:overflow-y-auto">
            <div className="md:absolute w-full flex flex-col gap-4">
                <div className={todoTasks.length && show ? "hidden" : ""}>
                    <TextEditor setTodoText={setTodoText} />
                </div>
                <div>
                    <Button onClick={() => handleTask(todoText)}>Add Todo List</Button>
                </div>
                {todoTasks.map((task, index) => (
                    <TaskList key={index} task={task} setTodoTexts={setTodoTexts} />
                ))}
            </div>
        </div>
    );
};

export default TodoSection;
