import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Dashboard from "../../../components/Layout/Dashboard";
import { MdDeleteSweep, MdEditNote, MdFormatColorText, MdOutlineCloudDownload } from "react-icons/md";
import { Button, ButtonOutline, IconButton } from "../../../components/Buttons";
import { format, parseISO } from "date-fns";
import TaskList from "../../../components/DashBoard/Recordings/TaskList";
import Link from "next/link";
import { BiTrim } from "react-icons/bi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import RecordLoader from "../../../components/DashBoard/Recordings/RecordLoader";
import TextEditor from "../../../components/DashBoard/Recordings/TextEditor";
import TodoSection from "../../../components/DashBoard/Recordings/TodoSection";

const RecordDetails = () => {
    const { query } = useRouter();
    const [isEditing, setIsEditing] = useState(false);
    const { register, handleSubmit } = useForm();

    const {
        data: media,
        isLoading: mediaLoading,
        refetch,
    } = useQuery({
        queryKey: ["media", query?.id],
        queryFn: () => fetch(`https://plugged-in-server.vercel.app/media/${query?.id}`).then((res) => res.json()),
    });

    const {
        data: tasks = [],
        isLoading: tasksLoading,
        refetch: taskRefetch,
    } = useQuery({
        queryKey: ["tasks", query?.id],
        queryFn: () => fetch(`https://plugged-in-server.vercel.app/tasks/${query?.id}`).then((res) => res.json()),
    });

    if (mediaLoading || tasksLoading) {
        return (
            <Dashboard title="Record Details" className="grid md:grid-cols-[7fr,_5fr] gap-6 animate-pulse">
                <RecordLoader />
            </Dashboard>
        );
    } else {
        const { _id, authorEmail, date, mediaType, mediaUrl, title } = media;
        const date_is = format(parseISO(date), "PP");
        const time_is = format(parseISO(date), "p");

        // Add Title to DB
        const handleEdit = ({ title }) => {
            const updatingRecord = { _id, title };
            axios
                .put(`https://plugged-in-server.vercel.app/record`, updatingRecord)
                .then((res) => {
                    if (res.data.matchedCount > 0) {
                        refetch();
                        toast.success("Record updated successfully");
                        setIsEditing(false);
                    }
                })
                .catch((error) => console.log(error.message));
        };

        return (
            <Dashboard title="Record Details" className="grid md:grid-cols-[7fr,_5fr] gap-x-6 gap-y-10">
                <div>
                    <video src={mediaUrl} controls className="video"></video>
                    <div className="-mt-4 border border-t-0 rounded-lg p-5">
                        <div className="pt-2 flex justify-between items-center">
                            <p className="text-sm">
                                {date_is} at {time_is}
                            </p>
                            <div className="space-x-4">
                                <IconButton onClick={() => setIsEditing(!isEditing)}>
                                    <MdEditNote className="text-lg" />
                                </IconButton>
                                <IconButton onClick={() => setDeletingRecordId(_id)}>
                                    <MdDeleteSweep className="text-lg" />
                                </IconButton>
                            </div>
                        </div>
                        {isEditing || !title ? (
                            <form onSubmit={handleSubmit(handleEdit)} className="mt-1.5 space-y-4">
                                <input {...register("title")} className="input" placeholder="Recording Title" defaultValue={title} />
                                <Button type="submit" className="w-full">
                                    Submit
                                </Button>
                            </form>
                        ) : (
                            <>
                                <h3 className="text-xl leading-6 font-semibold">{title}</h3>
                            </>
                        )}
                        <div className="mt-4 grid grid-cols-[auto_auto] gap-4">
                            <a href={mediaUrl} download="media/mp4">
                                <ButtonOutline>
                                    <div className="flex items-center justify-center gap-2">
                                        Download
                                        <MdOutlineCloudDownload className="text-lg" />
                                    </div>
                                </ButtonOutline>
                            </a>
                            <ButtonOutline>
                                <div className="flex items-center justify-center gap-2">
                                    Trim
                                    <BiTrim className="text-lg" />
                                </div>
                            </ButtonOutline>
                        </div>
                    </div>
                </div>
                <TodoSection tasks={tasks} refetch={taskRefetch} />
            </Dashboard>
        );
    }
};

export default RecordDetails;
