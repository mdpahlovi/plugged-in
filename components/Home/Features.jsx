import Image from "next/image";
import ScreenRecorder from "../../public/images/screen-recorder.png";
import AudioRecorder from "../../public/images/audio-recorder.png";
import VideoEditing from "../../public/images/video-editing.png";
import Webcam from "../../public/images/webcam.png";

const Features = () => {
    return (
        <>
            <h1 className="section-gap">Our Features</h1>
            <div className="container mx-auto grid justify-center gap-8 sm:grid-cols-2 xl:grid-cols-4">
                <div className="flex flex-col items-center">
                    <div className="mb-10">
                        <div className="w-40 h-20 rounded">
                            <Image src={ScreenRecorder} alt="" />
                        </div>
                    </div>
                    <h2 className="my-3">Screen Recording</h2>
                    <p className="text-center opacity-70">
                        Capture any activities on your desktop screen and browser. Record meetings, lectures, video tutorials etc. Online screen recorder with
                        no hassle.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-10">
                        <div className="w-40 h-20 rounded">
                            <Image src={AudioRecorder} alt="" />
                        </div>
                    </div>
                    <h2 className="my-3">Audio Recording</h2>
                    <p className="text-center opacity-70">
                        Capture sounds from system/browser and microphone. Record screen with audio (internal/external) with no quality loss.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-10">
                        <div className="w-40 h-20 rounded">
                            <Image src={Webcam} alt="" />
                        </div>
                    </div>
                    <h2 className="my-3">Webcam Recording</h2>
                    <p className="text-center opacity-70">
                        Capture webcam to record screen and yourself simultaneously. Creat presentation, gameplay, reaction videos with facecam recording.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-10">
                        <div className="w-40 h-20 rounded">
                            <Image src={VideoEditing} alt="" />
                        </div>
                    </div>
                    <h2 className="my-3">Video Editing</h2>
                    <p className="text-center opacity-70">
                        Create your online screen video and then you will be editing your video. it will help your video editing experience.It has no bug. So
                        enjoy it.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Features;
