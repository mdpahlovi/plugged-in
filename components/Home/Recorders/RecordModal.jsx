import React, { useEffect, useRef, useState } from "react";
import { HiOutlinePlay, HiOutlinePause, HiOutlinePlayPause } from "react-icons/hi2";
import { BsDownload } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { IconButton } from "../../Common/Buttons";
import { useAuth } from "../../../hooks/useAuth";
import useSetMediaToDb from "../../../hooks/useSetMediaToDb";
import { toast } from "react-toastify";

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

    useEffect(() => {
        if (confirmation.acknowledged) {
            toast.success("Media saved successfully");
        }
    }, [confirmation]);

    useEffect(() => {
        if (start === "start") {
            setEnable(true);
            startRecording();
            if (status === "recording") {
                setStart("recording");
            } else {
                setStart("denied");
            }
        } else if (start === "stop") {
            setEnable(false);
            stopRecording();
        }
    }, [start, startRecording, stopRecording, setStart, status]);

    useEffect(() => {
        if (mediaBlobUrl && user) {
            setMedia({
                date: new Date(),
                authorEmail: user?.email,
                mediaType: mode === "Audio Record" ? "audio" : "video",
            });
        }
    }, [mediaBlobUrl, mode, user]);

    return (
        <div>
            <input type="checkbox" id={mode} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
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
                        <h5 className={`font-bold mb-2`}>
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
                            <div className="flex items-center justify-evenly my-4">
                                <IconButton
                                    onClick={() => {
                                        if (status === "recording") {
                                            setStart("stop");
                                        } else {
                                            setStart("start");
                                        }
                                    }}
                                >
                                    {status === "recording" ? <HiOutlinePause className="text-2xl" /> : <HiOutlinePlay className="text-2xl" />}
                                </IconButton>
                                {(status === "recording" || status === "paused") && (
                                    <IconButton
                                        onClick={() => {
                                            if (status === "recording") {
                                                pauseRecording();
                                            } else if (status === "paused") {
                                                resumeRecording();
                                            }
                                        }}
                                    >
                                        <HiOutlinePlayPause className="text-2xl" />
                                    </IconButton>
                                )}
                                {mediaBlobUrl && (
                                    <IconButton>
                                        <a href={mediaBlobUrl} download="media/mp4">
                                            <BsDownload className="text-2xl" />
                                        </a>
                                    </IconButton>
                                )}
                            </div>
                            {enable ? (
                                <VideoPreview stream={previewStream} />
                            ) : (
                                status !== "idle" &&
                                (mode === "Audio Record" ? (
                                    <audio src={mediaBlobUrl} autoPlay controls loop className="w-full" />
                                ) : (
                                    <video className="video" src={mediaBlobUrl} controls autoPlay loop />
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
