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
                    It&apos;s an online base recording and media management Solution. Why PluggedIn among many other good options? Because you can record your
                    screen, webcam, and audio along with managing those recordings on our server. Recordings will automatically add to our database when you
                    stop recording. For this, you have to log in first. You can also add a title and to-do tasks list to the record. For your feature use.
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
