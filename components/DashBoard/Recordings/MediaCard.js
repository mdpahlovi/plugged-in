import { format, parseISO } from "date-fns";
import Image from "next/image";
import React from "react";
import audioImage from "../../../public/logo/audioImage.png";

const MediaCard = ({ media }) => {
    console.log(media);
    const { authorEmail, authorName, date, mediaType, mediaUrl } = media;

    const date_is = format(parseISO(date), "PP");
    const time_is = format(parseISO(date), "p");

    return (
        <div className="">
            <figure>
                {mediaType === "video" || mediaType === "screen" ? (
                    <video src={mediaUrl} controls className="aspect-video w-full rounded-lg"></video>
                ) : (
                    <Image src={audioImage} alt="" className="aspect-video w-full rounded-lg" />
                )}
            </figure>
            <div className="-mt-1 border border-t-0 rounded-lg p-5">
                <p className="mb-1 text-sm">
                    {date_is} at {time_is}
                </p>
                <h3 className="text-xl leading-6 font-semibold">If a dog chews shoes whose shoes does he choose?</h3>
                <p className="mt-1.5 leading-5">
                    Photos contain data that can give you useful information about the picture. Information such as shutter speed and focal length are stored
                    inside an image. Likewise, you can find out where the photo was taken by looking at the location information
                </p>
            </div>
        </div>
    );
};

export default MediaCard;
