import React, { useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import IconButton from "../../Button/IconButton";
import { HiOutlinePlay, HiOutlinePause, HiOutlinePlayPause } from "react-icons/hi2";
import { BsDownload } from "react-icons/bs";

const AudioRecorderModal = ({ startAudio, setStartAudio }) => {
    const { status, startRecording, stopRecording, pauseRecording, resumeRecording, mediaBlobUrl } = useReactMediaRecorder({
        audio: true,
        blobPropertyBag: {
            type: "audio/wav",
        },
    });

    useEffect(() => {
        if (startAudio === "start") {
            startRecording();
            if (status === "recording") {
                setStartAudio("recording");
            } else {
                setStartAudio("denied");
            }
        } else if (startAudio === "stop") {
            stopRecording();
        }
    }, [startAudio, startRecording, stopRecording, setStartAudio, status]);

    return (
        <div>
            <input type="checkbox" id="audioModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="audioModal" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
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
                                        setStartAudio("stop");
                                    } else {
                                        setStartAudio("start");
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
                        <audio src={mediaBlobUrl} autoPlay controls loop className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioRecorderModal;
