import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { format, parseISO } from "date-fns";
import { Button, IconButton } from "../../Buttons";
import audioImage from "../../../public/logo/audioImage.png";
import { MdEditNote, MdDeleteSweep } from "react-icons/md";
import { toast } from "react-toastify";

const MediaCard = ({ media, refetch, setDeletingRecord }) => {
  const { _id, date, mediaType, mediaUrl, details, title } = media;
  const [isEditing, setIsEditing] = useState(false);

  const date_is = format(parseISO(date), "PP");
  const time_is = format(parseISO(date), "p");

  const handelEdit = (data) => {
    setIsEditing(!isEditing);
  };

  const handelDelete = (id) => {
    setDeletingRecord(media);

    console.log(id);
  };

  const { register, handleSubmit } = useForm();
  const handleEdit = (data) => {
    const updatingRecord = {
      _id,
      title: data.title,
      details: data.details,
    };

    fetch(`https://plugged-in-server.vercel.app/record`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatingRecord),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          refetch();
          toast.success("Record updated successfully");
          setIsEditing(false);
        }
      });
    console.log(updatingRecord);
  };

  return (
    <div className="">
      <figure>
        {mediaType === "video" || mediaType === "screen" ? (
          <video
            src={mediaUrl}
            controls
            className="aspect-video w-full rounded-lg"
          ></video>
        ) : (
          <Image
            src={audioImage}
            alt=""
            className="aspect-video w-full rounded-lg"
          />
        )}
      </figure>
      <div className="-mt-4 border border-t-0 rounded-lg p-5">
        <div className="pt-2 mb-1 flex justify-between items-center">
          <p className="text-sm">
            {date_is} at {time_is}
          </p>
          <div className="space-x-4">
            <IconButton onClick={() => handelEdit(_id)}>
              <MdEditNote className="text-lg" />
            </IconButton>
            <label htmlFor="deleteModal">
              <IconButton onClick={() => handelDelete(_id)}>
                <MdDeleteSweep className="text-lg" />
              </IconButton>
            </label>
          </div>
        </div>
        {isEditing ? (
          <form onSubmit={handleSubmit(handleEdit)} className="space-y-1">
            <textarea
              {...register("title")}
              className="textarea textarea-bordered w-full"
              rows="1"
              defaultValue={title}
              placeholder="Recording Title"
            ></textarea>
            <textarea
              {...register("details")}
              className="textarea textarea-bordered w-full"
              rows="3"
              placeholder="Recording Details"
              defaultValue={details}
            ></textarea>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        ) : (
          <>
            {title ? (
              <h3 className="text-xl leading-6 font-semibold">{title}</h3>
            ) : (
              <textarea
                // {...register("title")}
                className="textarea textarea-bordered w-full"
                rows="1"
                placeholder="Recording Title"
              ></textarea>
            )}
            {details ? (
              <p className="mt-1.5 leading-5">{details}</p>
            ) : (
              <textarea
                // {...register("details")}
                className="textarea textarea-bordered w-full"
                rows="3"
                placeholder="Recording Details"
              ></textarea>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MediaCard;
