import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../Buttons";
import TaskList from "./TaskList";
import TextEditor from "./TextEditor";

const TodoSection = ({ tasks, media_id, refetch }) => {
    const [todoText, setTodoText] = useState("");

    const handleTask = (data) => {
        const task = { media_id, date: new Date(), details: data, done: false };
        axios
            .post(`https://plugged-in-server.vercel.app/task`, task)
            .then((res) => {
                if (res.data) {
                    refetch();
                    toast.success("Task added successfully");
                }
            })
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="md:relative md:overflow-hidden md:overflow-y-auto">
            <div className="md:absolute w-full flex flex-col gap-4">
                <TextEditor setTodoText={setTodoText} />
                <div>
                    <Button onClick={() => handleTask(todoText)}>Add Todo List</Button>
                </div>
                {tasks.map((task, index) => (
                    <TaskList key={index} task={task} refetch={refetch} />
                ))}
            </div>
        </div>
    );
};

export default TodoSection;
