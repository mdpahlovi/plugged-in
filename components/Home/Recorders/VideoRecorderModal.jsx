import React, { useEffect, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { HiOutlinePlay, HiOutlinePause, HiOutlinePlayPause } from "react-icons/hi2";
import { BsDownload } from "react-icons/bs";
import { IconButton } from "../../Buttons";
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

const VideoRecorderModal = ({ startVideo, setStartVideo }) => {
    const [enable, setEnable] = useState(true);
    const { status, startRecording, stopRecording, pauseRecording, resumeRecording, mediaBlobUrl, clearBlobUrl, previewStream } = useReactMediaRecorder({
        video: true,
        blobPropertyBag: {
            type: "video/mp4",
        },
    });
    const { authUser } = useAuth();
    const [media, setMedia] = useState(null);
    const { confirmation } = useSetMediaToDb(media, mediaBlobUrl);

    useEffect(() => {
        if (confirmation.acknowledged) {
            toast.success("Media saved successfully");
        }
    }, [confirmation]);

    useEffect(() => {
        if (startVideo === "start") {
            setEnable(true);
            startRecording();
            if (status === "recording") {
                setStartVideo("recording");
            } else {
                setStartVideo("denied");
            }
        } else if (startVideo === "stop") {
            setEnable(false);
            stopRecording();
        }
    }, [startVideo, startRecording, stopRecording, setStartVideo, status]);

    useEffect(() => {
        if (mediaBlobUrl && authUser) {
            setMedia({
                date: new Date(),
                authorEmail: authUser?.email,
                mediaType: "video",
            });
        }
    }, [mediaBlobUrl, authUser]);

    return (
        <div>
            <input type="checkbox" id="videoModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="videoModal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => {
                            if (status === "stopped") {
                                clearBlobUrl();
                            }
                        }}
                    >
                        ✕
                    </label>
                    <div>
                        <p className={`font-bold mb-2`}>
                            Status :{" "}
                            <span
                                className={`btn btn-xs ${
                                    status === "recording" ? "btn-error" : status === "paused" ? "btn-warning" : status === "stopped" ? "btn-success" : ""
                                }`}
                            >
                                {status}
                            </span>
                        </p>
                        <div className="flex flex-col-reverse">
                            <div className="flex items-center justify-evenly my-4">
                                <IconButton
                                    onClick={() => {
                                        if (status === "recording") {
                                            setStartVideo("stop");
                                        } else {
                                            setStartVideo("start");
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
                            {/* <video src={mediaBlobUrl} controls autoPlay loop /> */}
                            {enable ? (
                                <VideoPreview stream={previewStream} />
                            ) : (
                                status !== "idle" && <video className="video" src={mediaBlobUrl} controls autoPlay loop />
                            )}
                            {/* <video src={mediaBlobUrl} controls autoPlay loop />
                    {enable && <VideoPreview stream={previewStream} />} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoRecorderModal;
