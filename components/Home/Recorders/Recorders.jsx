import { Audio, Screen, Webcam } from "../Icons/RecordIcons";
import RecordModeCard from "./RecordModeCard";

const Recorders = ({ setStartVideo, startVideo, setStartAudio, startAudio, setStartScreen, startScreen }) => {
    return (
        <>
            <h1 className="section-gap">Please Choose a Recording Mode</h1>
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-screen-sm lg:max-w-none mx-auto">
                <RecordModeCard
                    icon={<Screen />}
                    mode="Screen Record"
                    onClick={() => {
                        if (startScreen === "stop") setStartScreen("start");
                    }}
                    status={startScreen}
                />
                <RecordModeCard
                    icon={<Webcam />}
                    mode="Webcam Record"
                    onClick={() => {
                        if (startVideo === "stop") setStartVideo("start");
                    }}
                    status={startVideo}
                />
                <RecordModeCard
                    icon={<Audio />}
                    mode="Audio Record"
                    onClick={() => {
                        if (startAudio === "stop") setStartAudio("start");
                    }}
                    status={startAudio}
                />
            </div>
        </>
    );
};

export default Recorders;
