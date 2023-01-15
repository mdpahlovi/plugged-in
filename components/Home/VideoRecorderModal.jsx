import React, { useEffect, useRef, useState } from "react";
import {
  ReactMediaRecorder,
  useReactMediaRecorder,
} from "react-media-recorder";
import IconButton from "../Button/IconButton";

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

const VideoRecorderModal = ({ startVideo, setStartVideo }) => {
  const [enable, setEnable] = useState(true);
  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    mediaBlobUrl,
    previewStream,
  } = useReactMediaRecorder({
    video: true,
    blobPropertyBag: {
      type: "video/webm",
    },
  });

  useEffect(() => {
    if (startVideo === "start") {
      setEnable(true);
      startRecording();
      if (status === "recording") {
        setStartVideo("recording");
        console.log(startVideo);
      } else {
        setStartVideo("denied");
      }
    } else if (startVideo === "stop") {
      setEnable(false);
      stopRecording();
    }
  }, [startVideo, startRecording, stopRecording, setStartVideo, status]);
  console.log(startVideo);

  return (
    <div>
      <input type="checkbox" id="videoModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="videoModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <p className={`font-bold mb-2`}>
              Status :{" "}
              <span
                className={`btn btn-xs ${
                  status === "recording"
                    ? "btn-error"
                    : status === "paused"
                    ? "btn-warning"
                    : status === "stopped"
                    ? "btn-success"
                    : ""
                }`}
              >
                {status}
              </span>
            </p>
            <div className="flex flex-col-reverse">
              <div className="flex items-center justify-evenly my-4">
                <IconButton>
                  <button
                    className="btn btn-primary btn-circle"
                    onClick={() => {
                      if (status === "recording") {
                        setStartVideo("stop");
                      } else {
                        setStartVideo("start");
                      }
                    }}
                  >
                    {status === "recording" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                    )}
                  </button>
                </IconButton>
                {(status === "recording" || status === "paused") && (
                  <IconButton>
                    <button
                      onClick={() => {
                        if (status === "recording") {
                          pauseRecording();
                        } else if (status === "paused") {
                          resumeRecording();
                        }
                      }}
                      className="btn btn-primary btn-circle"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
                        />
                      </svg>
                    </button>
                  </IconButton>
                )}
                {mediaBlobUrl && (
                  <IconButton>
                    <a
                      href={mediaBlobUrl}
                      download="media/mp4"
                      className="btn btn-circle btn-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </a>
                  </IconButton>
                )}
              </div>
              {/* <video src={mediaBlobUrl} controls autoPlay loop /> */}
              {enable ? (
                <VideoPreview stream={previewStream} />
              ) : (
                <video
                  className="rounded-xl"
                  src={mediaBlobUrl}
                  controls
                  autoPlay
                  loop
                />
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
