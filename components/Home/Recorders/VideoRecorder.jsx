import { useReactMediaRecorder } from "react-media-recorder";
import RecordModal from "./RecordModal";

const VideoRecorder = ({ startVideo, setStartVideo }) => {
    const { status, startRecording, stopRecording, pauseRecording, resumeRecording, mediaBlobUrl, clearBlobUrl, previewStream } = useReactMediaRecorder({
        video: true,
        blobPropertyBag: {
            type: "video/mp4",
        },
    });

    return (
        <RecordModal
            mode="Webcam Record"
            start={startVideo}
            setStart={setStartVideo}
            status={status}
            startRecording={startRecording}
            stopRecording={stopRecording}
            pauseRecording={pauseRecording}
            resumeRecording={resumeRecording}
            clearBlobUrl={clearBlobUrl}
            mediaBlobUrl={mediaBlobUrl}
            previewStream={previewStream}
        />
    );
};

export default VideoRecorder;
