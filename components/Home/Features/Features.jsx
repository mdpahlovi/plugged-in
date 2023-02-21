import Image from "next/image";
import ScreenRecorder from "../../../public/images/feature/screen-recorder.png";
import AudioRecorder from "../../../public/images/feature/audio-recorder.png";
import VideoEditing from "../../../public/images/feature/video-editing.png";
import Webcam from "../../../public/images/feature/webcam.png";
import FeatureCard from "./FeatureCard";

const features = [
    {
        image: ScreenRecorder,
        title: "Screen Recording",
        details:
            "Capture any activities on your desktop screen and browser. Record meetings, lectures, video tutorials etc. Online screen recorder with no hassle.",
    },
    {
        image: Webcam,
        title: "Webcam Recording",
        details: "Capture webcam to record screen and yourself simultaneously. Create presentation, game play, reaction videos with face cam recording.",
    },
    {
        image: AudioRecorder,
        title: "Audio Recording",
        details: "Capture sounds from system/browser and microphone. Record screen with audio (internal/external) with no quality loss.",
    },
    {
        image: VideoEditing,
        title: "Media Management",
        details: "Create your online screen video and then you will be store your video. it will help your management experience. It has no bug. So enjoy it.",
    },
];

const Features = () => {
    return (
        <>
            <h1 className="section-gap">Our Features</h1>
            <div className="grid divide-y sm:divide-y-0 overflow-hidden rounded-lg border sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
                {features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} />
                ))}
            </div>
        </>
    );
};

export default Features;
