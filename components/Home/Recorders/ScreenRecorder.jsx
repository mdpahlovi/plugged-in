import { useReactMediaRecorder } from "react-media-recorder";
import RecordModal from "./RecordModal";

const ScreenRecorder = ({ startScreen, setStartScreen }) => {
    const { status, startRecording, stopRecording, pauseRecording, resumeRecording, mediaBlobUrl, clearBlobUrl, previewStream } = useReactMediaRecorder({
        screen: true,
        blobPropertyBag: {
            type: "video/mp4",
        },
    });

    return (
        <RecordModal
            mode="Screen Record"
            start={startScreen}
            setStart={setStartScreen}
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

export default ScreenRecorder;
