import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../Common/Buttons";
import TaskList from "./TaskList";
import TextEditor from "./TextEditor";

const TodoSection = ({ tasks, media_id, refetch }) => {
  const { user } = useAuth();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        HTMLAttributes: {
          class: "text-indigo-900 opacity-90 underline",
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "textarea focus:outline-none textarea-bordered w-full h-60 pt-4 leading-5",
      },
    },
    content: "",
  });

  const handleTask = (data) => {
    const task = {
      media_id,
      date: new Date(),
      details: data,
      done: false,
      assignedTo: user?.email,
    };
    axios
      .post(`https://plugged-in-server.onrender.com/task`, task)
      .then((res) => {
        if (res.data) {
          refetch();
          toast.success("Task added successfully");
          editor.commands.clearContent();
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="md:relative md:overflow-hidden md:overflow-y-auto">
      <div className="md:absolute w-full flex flex-col gap-4">
        <TextEditor editor={editor} />
        <div>
          <Button
            onClick={() => {
              handleTask(editor.getHTML());
            }}
          >
            Add Todo List
          </Button>
        </div>
        {tasks.map((task, index) => (
          <TaskList key={index} task={task} editor={editor} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default TodoSection;
