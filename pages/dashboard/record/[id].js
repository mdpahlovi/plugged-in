import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Dashboard from "../../../components/Layout/Dashboard";
import { FaBold, FaHighlighter, FaLink, FaImage } from "react-icons/fa";
import { MdDeleteSweep, MdEditNote, MdFormatColorText, MdOutlineCloudDownload } from "react-icons/md";
import { Button, ButtonOutline, IconButton } from "../../../components/Buttons";
import { format, parseISO } from "date-fns";
import TaskList from "../../../components/DashBoard/Recordings/TaskList";
import Link from "next/link";
import { BiTrim } from "react-icons/bi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import RecordLoader from "../../../components/DashBoard/Recordings/RecordLoader";

const RecordDetails = () => {
    const { query } = useRouter();
    const [isEditing, setIsEditing] = useState(false);
    const [show, setShow] = useState(false);

    const {
        data: media,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["media", query?.id],
        queryFn: () => fetch(`https://plugged-in-server.vercel.app/media/${query?.id}`).then((res) => res.json()),
    });

    const { register, handleSubmit } = useForm();
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

    if (isLoading) {
        return (
            <Dashboard title="Record Details" className="grid md:grid-cols-[7fr,_5fr] gap-6 animate-pulse">
                <RecordLoader />
            </Dashboard>
        );
    } else {
        const { _id, authorEmail, date, mediaType, mediaUrl, title, tasks = [6, 5, 35, 6, 67, 7] } = media;
        const date_is = format(parseISO(date), "PP");
        const time_is = format(parseISO(date), "p");

        return (
            <Dashboard title="Record Details" className="grid md:grid-cols-[7fr,_5fr] gap-6">
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
                            <Link href={`/dashboard/record/${_id}`}>
                                <ButtonOutline>
                                    <div className="flex items-center justify-center gap-2">
                                        Trim
                                        <BiTrim className="text-lg" />
                                    </div>
                                </ButtonOutline>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:relative md:overflow-hidden md:overflow-y-auto">
                    <div className="md:absolute w-full flex flex-col gap-4">
                        <div className={tasks.length && !show ? "hidden" : ""}>
                            <div className="flex justify-end gap-4 pb-4 pr-4">
                                <FaBold />
                                <FaHighlighter />
                                <MdFormatColorText />
                                <FaLink />
                                <FaImage />
                            </div>
                            <textarea rows={6} className="textarea focus:outline-none textarea-bordered w-full"></textarea>
                        </div>
                        <div>
                            <Button onClick={() => setShow(!show)}>Add Todo List</Button>
                        </div>
                        {tasks.map((task, index) => (
                            <TaskList key={index} data={date} />
                        ))}
                    </div>
                </div>
            </Dashboard>
        );
    }
};

export default RecordDetails;
