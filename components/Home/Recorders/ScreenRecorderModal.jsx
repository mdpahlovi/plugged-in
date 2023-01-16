import React, { useEffect, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { HiOutlinePlay, HiOutlinePause, HiOutlinePlayPause } from "react-icons/hi2";
import { BsDownload } from "react-icons/bs";
import { IconButton } from "../../Buttons";

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
    return <video className="rounded-xl" ref={videoRef} autoPlay controls />;
};

const ScreenRecorderModal = ({ startScreen, setStartScreen }) => {
    const [enable, setEnable] = useState(true);
    const { status, startRecording, stopRecording, pauseRecording, resumeRecording, mediaBlobUrl, previewStream } = useReactMediaRecorder({
        screen: true,
        blobPropertyBag: {
            type: "video/mp4",
        },
    });

    useEffect(() => {
        if (startScreen === "start") {
            setEnable(true);
            startRecording();
            if (status === "recording") {
                setStartScreen("recording");
                console.log(startScreen);
            } else {
                setStartScreen("denied");
            }
        } else if (startScreen === "stop") {
            setEnable(false);
            stopRecording();
        }
    }, [startScreen, startRecording, stopRecording, setStartScreen, status]);
    console.log(startScreen);

    return (
        <div>
            <input type="checkbox" id="screenModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="screenModal" className="btn btn-sm btn-circle absolute right-2 top-2">
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
                                            setStartScreen("stop");
                                        } else {
                                            setStartScreen("start");
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
                            {enable ? <VideoPreview stream={previewStream} /> : <video className="rounded-xl" src={mediaBlobUrl} controls autoPlay loop />}
                            {/* <video src={mediaBlobUrl} controls autoPlay loop />
                    {enable && <VideoPreview stream={previewStream} />} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScreenRecorderModal;
