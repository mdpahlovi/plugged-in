import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const AudioRecorderModal = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });
  return (
    <div>
      <input type="checkbox" id="audioModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="audioModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <p className="font-bold mb-2">Status : {status}</p>
          <div className="flex flex-col-reverse">
            <div className="flex items-center justify-evenly my-4">
              <button
                className="btn btn-primary btn-circle"
                onClick={startRecording}
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
                onClick={stopRecording}
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
            </div>
            <audio
              src={mediaBlobUrl}
              autoPlay
              controls
              loop
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioRecorderModal;
