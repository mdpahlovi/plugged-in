import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { format, parseISO } from "date-fns";
import { Button, IconButton } from "../../Buttons";
import audioImage from "../../../public/logo/audioImage.png";
import { MdEditNote, MdDeleteSweep } from "react-icons/md";

const MediaCard = ({ media }) => {
    const { _id, date, mediaType, mediaUrl } = media;
    const [isEditing, setIsEditing] = useState(false);

    const date_is = format(parseISO(date), "PP");
    const time_is = format(parseISO(date), "p");

    const handelEdit = (id) => {
        setIsEditing(true);
        console.log(id);
    };

    const handelDelete = (id) => {
        console.log(id);
    };

    const { register, handleSubmit } = useForm();
    const handleDetails = (data) => {
        setIsEditing(false);
        console.log(data);
    };

    return (
        <div className="">
            <figure>
                {mediaType === "video" || mediaType === "screen" ? (
                    <video src={mediaUrl} controls className="video"></video>
                ) : (
                    <div className="relative aspect-video border border-b-0 rounded-lg">
                        <audio src={mediaUrl} controls className="absolute bottom-0 w-full"></audio>
                        <Image src={audioImage} alt="" className="w-1/2 mx-auto rounded-lg" />
                    </div>
                )}
            </figure>
            <div className="-mt-4 border border-t-0 rounded-lg p-5">
                <div className="pt-2 flex justify-between items-center">
                    <p className="text-sm">
                        {date_is} at {time_is}
                    </p>
                    <div className="space-x-4">
                        <IconButton onClick={() => handelEdit(_id)}>
                            <MdEditNote className="text-lg" />
                        </IconButton>
                        <IconButton onClick={() => handelDelete(_id)}>
                            <MdDeleteSweep className="text-lg" />
                        </IconButton>
                    </div>
                </div>
                {isEditing ? (
                    <form onSubmit={handleSubmit(handleDetails)} className="pt-1.5 space-y-1">
                        <textarea {...register("title")} className="textarea textarea-bordered w-full" rows="1" placeholder="Recording Title"></textarea>
                        <textarea {...register("details")} className="textarea textarea-bordered w-full" rows="3" placeholder="Recording Details"></textarea>
                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                    </form>
                ) : (
                    <div className="space-y-1.5">
                        <h3 className="text-xl leading-6 font-semibold">If a dog chews shoes whose shoes does he choose?</h3>
                        <p className="leading-5">
                            Photos contain data that can give you useful information about the picture. Information such as shutter speed and focal length are
                            stored inside an image. Likewise, you can find out where the photo was taken by looking at the location information
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MediaCard;
