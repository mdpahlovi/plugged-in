import { useReactMediaRecorder } from "react-media-recorder";
import RecordModal from "./RecordModal";

const AudioRecorder = ({ startAudio, setStartAudio }) => {
    const { status, startRecording, stopRecording, pauseRecording, resumeRecording, clearBlobUrl, mediaBlobUrl } = useReactMediaRecorder({
        audio: true,
        blobPropertyBag: {
            type: "audio/wav",
        },
    });

    return (
        <RecordModal
            mode="Audio Record"
            start={startAudio}
            setStart={setStartAudio}
            status={status}
            startRecording={startRecording}
            stopRecording={stopRecording}
            pauseRecording={pauseRecording}
            resumeRecording={resumeRecording}
            clearBlobUrl={clearBlobUrl}
            mediaBlobUrl={mediaBlobUrl}
        />
    );
};

export default AudioRecorder;
