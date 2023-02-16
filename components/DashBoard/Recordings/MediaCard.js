import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { format, parseISO } from "date-fns";
import { Button, ButtonOutline, IconButton } from "../../Common/Buttons";
import audioImage from "../../../public/logo/audioImage.png";
import {
  MdEditNote,
  MdDeleteSweep,
  MdOutlineCloudDownload,
} from "react-icons/md";
import { HiOutlineShare } from "react-icons/hi";
import { Switch } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";

const MediaCard = ({
  media,
  refetch,
  setShareMedia,
  setDeletingRecordId,
  children,
}) => {
  const { _id, date, mediaType, mediaUrl, title, teamName } = media;
  const [isEditing, setIsEditing] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const { authUser } = useAuth();

  const date_is = format(parseISO(date), "PP");
  const time_is = format(parseISO(date), "p");

  const { register, handleSubmit } = useForm();
  const handleEdit = ({ title, teamName }) => {
    const updatingRecord = { _id, title, teamName };
    axios
      .put(`https://plugged-in-server.onrender.com/record`, updatingRecord)
      .then((res) => {
        if (res.data.matchedCount > 0) {
          refetch();
          toast.success("Record updated successfully");
          setIsEditing(false);
        }
      })
      .catch((error) => console.log(error.message));
  };

  const { data: teams } = useQuery({
    queryKey: ["team", authUser],
    queryFn: () =>
      fetch(
        `https://plugged-in-server.onrender.com/teamByUser?email=${authUser?.email}`
      ).then((res) => res.json()),
  });

  return (
    <div className="">
      <div>
        {mediaType === "video" || mediaType === "screen" ? (
          <video src={mediaUrl} controls className="video"></video>
        ) : (
          <div className="relative aspect-video border border-b-0 rounded-lg">
            <audio
              src={mediaUrl}
              controls
              className="absolute bottom-0 w-full"
            ></audio>
            <Image
              src={audioImage}
              alt=""
              className="w-1/2 mx-auto rounded-lg"
            />
          </div>
        )}
      </div>
      <div className="-mt-4 border border-t-0 rounded-lg p-5">
        <div className="relative pt-0.5 flex justify-between items-center">
          <p className="text-sm">
            {date_is} at {time_is}
          </p>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-base-content" : "bg-base-content/75"}
           relative flex items-center h-8 w-14 cursor-pointer rounded-full transition-colors duration-300 xs:hidden`}
          >
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-[26px]" : "translate-x-0.5"}
            pointer-events-none mt-[0.35px] h-7 w-7 transform rounded-full bg-base-100 shadow-lg transition duration-300`}
            />
          </Switch>
          <div
            className={`space-x-4 absolute border px-4 py-2.5 rounded-lg bg-base-100 flex items-center right-0 top-10 transition-all duration-300 opacity-0 ${
              enabled ? "opacity-100" : "opacity-0"
            } xs:opacity-100 xs:static xs:p-0 xs:border-0 xs:bg-transparent`}
          >
            <IconButton onClick={() => setIsEditing(!isEditing)}>
              <MdEditNote className="text-lg" />
            </IconButton>
            <IconButton onClick={() => setShareMedia(media)}>
              <HiOutlineShare className="text-lg" />
            </IconButton>
            <IconButton onClick={() => setDeletingRecordId(_id)}>
              <MdDeleteSweep className="text-lg" />
            </IconButton>
          </div>
        </div>
        {isEditing || !title || !teamName ? (
          <form
            onSubmit={handleSubmit(handleEdit)}
            className="mt-1.5 space-y-4"
          >
            <input
              {...register("title")}
              className="input"
              placeholder="Recording Title"
              defaultValue={title}
            />
            <select
              {...register("teamName")}
              className="select select-bordered w-full"
            >
              {teams?.map((team) => (
                <option value={`${team?.name}`}>{team?.name}</option>
              ))}
            </select>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        ) : (
          <>
            <h3 className="text-xl leading-6 font-semibold">Title :{title}</h3>
            <h3 className="text-xl leading-6 font-semibold mt-2">
              Team Name :{teamName}
            </h3>
          </>
        )}
        <div className="mt-4 grid xs:grid-cols-[auto_auto] gap-4">
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
