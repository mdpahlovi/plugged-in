import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { format, parseISO } from "date-fns";
import { Button, ButtonOutline, IconButton } from "../../Buttons";
import audioImage from "../../../public/logo/audioImage.png";
import { MdEditNote, MdDeleteSweep, MdOutlineCloudDownload } from "react-icons/md";

const MediaCard = ({ media, refetch, setDeletingRecordId, children }) => {
    const { _id, date, mediaType, mediaUrl, title } = media;
    const [isEditing, setIsEditing] = useState(false);

    const date_is = format(parseISO(date), "PP");
    const time_is = format(parseISO(date), "p");

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

    return (
        <div className="">
            <div>
                {mediaType === "video" || mediaType === "screen" ? (
                    <video src={mediaUrl} controls className="video"></video>
                ) : (
                    <div className="relative aspect-video border border-b-0 rounded-lg">
                        <audio src={mediaUrl} controls className="absolute bottom-0 w-full"></audio>
                        <Image src={audioImage} alt="" className="w-1/2 mx-auto rounded-lg" />
                    </div>
                )}
            </div>
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
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MediaCard;
