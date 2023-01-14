import React, { useEffect, useRef, useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";

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
  return <video ref={videoRef} autoPlay controls />;
};

const VideoRecorderModal = () => {
  const [enable, setEnable] = useState(true);
  //   const { status, startRecording, stopRecording, mediaBlobUrl } =
  //     useReactMediaRecorder({ screen: true });

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

          <ReactMediaRecorder
            video
            blobPropertyBag={{
              type: "video/webm",
            }}
            // askPermissionOnMount={true}
            render={({
              previewStream,
              status,
              startRecording,
              stopRecording,
              mediaBlobUrl,
            }) => {
              console.log(previewStream);
              return (
                <div>
                  <p className="font-bold mb-2">Status : {status}</p>
                  <div className="flex flex-col-reverse">
                    <div className="flex items-center justify-evenly my-4">
                      <button
                        className="btn btn-primary btn-circle"
                        onClick={() => {
                          setEnable(true);
                          startRecording();
                        }}
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
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </button>
                      <button
                        className="btn btn-primary btn-circle"
                        onClick={() => {
                          setEnable(false);
                          stopRecording();
                        }}
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
                            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                          />
                        </svg>
                      </button>
                      <button
                        className="btn btn-primary btn-circle"
                        onClick={() => {
                          startRecording();
                          setTimeout(stopRecording, 2000);
                          setEnable(false);
                        }}
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
                    </div>
                    {/* <video src={mediaBlobUrl} controls autoPlay loop /> */}
                    {enable ? (
                      <VideoPreview stream={previewStream} />
                    ) : (
                      <video src={mediaBlobUrl} controls autoPlay loop />
                    )}
                    {/* <video src={mediaBlobUrl} controls autoPlay loop />
                    {enable && <VideoPreview stream={previewStream} />} */}
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoRecorderModal;
