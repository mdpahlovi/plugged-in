import React, { useEffect, useRef, useState } from "react";
import { HiOutlinePlay, HiOutlinePause, HiOutlinePlayPause } from "react-icons/hi2";
import { BsDownload } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { Button, ButtonOutline, IconButton, SpinLoader } from "../../Common/Buttons";
import { useAuth } from "../../../hooks/useAuth";
import useSetMediaToDb from "../../../hooks/useSetMediaToDb";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const VideoPreview = ({ stream }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);
    if (!stream) {
        return null;
    }
    return <video className="video" ref={videoRef} autoPlay controls />;
};

const RecordModal = ({
    mode,
    start,
    setStart,
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    clearBlobUrl,
    mediaBlobUrl,
    previewStream,
}) => {
    const { user } = useAuth();
    const [enable, setEnable] = useState(true);
    const [media, setMedia] = useState(null);
    const { confirmation } = useSetMediaToDb(media, mediaBlobUrl);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (confirmation.acknowledged) {
            setMedia(null);
            setUploading(false);
            toast.success("Media saved successfully");
        }
    }, [confirmation]);

    useEffect(() => {
        if (start === "start") {
            setEnable(true);
            startRecording();
            if (mediaBlobUrl) {
                clearBlobUrl();
            }
            if (status === "recording") {
                setStart("recording");
            } else {
                setStart("denied");
            }
        } else if (start === "stop") {
            setEnable(false);
            stopRecording();
        }
    }, [start, startRecording, stopRecording, setStart, status, clearBlobUrl, mediaBlobUrl]);

    const { register, handleSubmit } = useForm();
    const handleEdit = ({ title, teamName }) => {
        setUploading(true);
        const media = { date: new Date(), authorEmail: user?.email, mediaType: mode === "Audio Record" ? "audio" : "video", title };
        if (teamName) {
            media.teamName = teamName;
        }
        setMedia(media);
    };

    return (
        <div>
            <input type="checkbox" id={mode} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box rounded-lg relative">
                    <label
                        htmlFor={mode}
                        className="absolute right-2 top-2"
                        onClick={() => {
                            if (status === "stopped") clearBlobUrl();
                        }}
                    >
                        <IconButton>
                            <CgClose />
                        </IconButton>
                    </label>
                    <div>
                        <h5 className={`font-bold mb-4`}>
                            Status :
                            <span
                                className={`ml-2 btn btn-xs ${
                                    status === "recording" ? "btn-error" : status === "paused" ? "btn-warning" : status === "stopped" ? "btn-success" : ""
                                }`}
                            >
                                {status}
                            </span>
                        </h5>
                        <div className="flex flex-col-reverse">
                            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                <ButtonOutline
                                    disabled={status === "paused" ? true : false}
                                    onClick={() => {
                                        if (status === "recording") {
                                            setStart("stop");
                                        } else {
                                            setStart("start");
                                        }
                                    }}
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        {status === "recording" ? "Stop Recording" : "Start Recording"}
                                        {status === "recording" ? <HiOutlinePause className="text-lg" /> : <HiOutlinePlay className="text-lg" />}
                                    </div>
                                </ButtonOutline>
                                {(status === "recording" || status === "paused") && (
                                    <ButtonOutline
                                        onClick={() => {
                                            if (status === "recording") {
                                                pauseRecording();
                                            } else if (status === "paused") {
                                                resumeRecording();
                                            }
                                        }}
                                    >
                                        <div className="flex items-center justify-center gap-2">
                                            {status === "paused" ? "Resume" : "Pause"}
                                            <HiOutlinePlayPause className="text-lg" />
                                        </div>
                                    </ButtonOutline>
                                )}
                                {mediaBlobUrl && (
                                    <ButtonOutline>
                                        <a href={mediaBlobUrl} download="media/mp4" className="flex items-center justify-center gap-2">
                                            Download
                                            <BsDownload className="text-lg" />
                                        </a>
                                    </ButtonOutline>
                                )}
                            </div>
                            {user?._id && !enable ? (
                                <form onSubmit={handleSubmit(handleEdit)} className="mt-4 space-y-4">
                                    <input {...register("title")} className="input" placeholder="Recording Title" />
                                    <select {...register("teamName")} className={`select select-bordered w-full ${user?.role !== "team" && "hidden"}`}>
                                        {user?.team?.map((team, index) => (
                                            <option key={index} value={`${team?.name}`}>
                                                {team?.name}
                                            </option>
                                        ))}
                                    </select>
                                    <Button type="submit" className="w-full">
                                        {uploading ? <SpinLoader>Uploading</SpinLoader> : "Upload Now"}
                                    </Button>
                                </form>
                            ) : (
                                ""
                            )}
                            {enable ? (
                                <VideoPreview stream={previewStream} />
                            ) : (
                                status !== "idle" &&
                                (mode === "Audio Record" ? (
                                    <audio src={mediaBlobUrl} controls className="w-full" />
                                ) : (
                                    <video className="video" src={mediaBlobUrl} controls />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecordModal;
