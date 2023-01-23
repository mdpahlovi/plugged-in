import Image from "next/image";
import aboutImage from "../../public/images/aboutus.jpg";
import recordVoice from "../../public/logo/voice-recording.png";
import recordVideo from "../../public/logo/videoconferencing.png";
import trimVideo from "../../public/logo/video-editing.png";

const AboutHero = () => {
    return (
        <header className="section-gap grid lg:grid-cols-2 gap-10 items-center">
            <Image src={aboutImage} alt="logo" className="mx-auto rounded-lg w-full" />
            <div className="space-y-4">
                <h1 className="font-extrabold text-left mb-0">What is PluggedIn?</h1>
                <p>
                    PluggedIn is an online-based meeting recording web application. It is a single-page application using NextJS. There are many interesting
                    features here, such as video audio recording, downloading recorded video, screenshot capture, video trimming, and video audio previewing.
                    Furthermore, the numerous features make it affordable. 
                </p>
                <div className="stats stats-vertical sm:stats-horizontal shadow w-full">
                    <div className="stat">
                        <Image src={trimVideo} alt="logo" width={62} />
                        <p>Video Record</p>
                    </div>
                    <div className="stat">
                        <Image src={recordVoice} alt="logo" width={60} />
                        <p>Voice Record</p>
                    </div>
                    <div className="stat">
                        <Image src={recordVideo} alt="logo" width={60} />
                        <p>Video Record</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AboutHero;
