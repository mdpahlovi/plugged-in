import { HiOutlinePlay } from "react-icons/hi2";
import { BsCaretDown } from "react-icons/bs";
import { Audio, Screen, Webcam } from "../Icons/RecordIcons";
import { IconButton } from "../../Buttons";

const Recorders = ({ setStartVideo, startVideo, setStartAudio, startAudio, setStartScreen, startScreen }) => {
    return (
        <>
            <h1 className="section-gap">Please Choose a Recording Mode</h1>
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-screen-sm lg:max-w-none mx-auto">
                <div className="bg-base-100 shadow-lg cursor-pointer hover:text-white transition ease-in-out delay-150 hover:scale-105 hover:bg-[#201172] duration-300 rounded-lg">
                    <Screen />
                    <div className="card-body items-center text-center">
                        <h2 className="mb-2">Screen Record</h2>
                        <label
                            onClick={() => {
                                if (startScreen === "stop") {
                                    setStartScreen("start");
                                }
                            }}
                            htmlFor="screenModal"
                            className="cursor-pointer"
                        >
                            <IconButton>
                                {startScreen === "stop" ? <HiOutlinePlay className="text-2xl" /> : <BsCaretDown className="text-2xl translate-y-0.5" />}
                            </IconButton>
                        </label>
                    </div>
                </div>
                <div className="shadow-lg bg-base-100 hover:text-white cursor-pointer transition ease-in-out delay-150 hover:scale-105 hover:bg-[#201172] duration-300 rounded-lg">
                    <Webcam />
                    <div className="card-body items-center text-center">
                        <h2 className="mb-2">Webcam Record</h2>
                        <label
                            onClick={() => {
                                if (startVideo === "stop") {
                                    setStartVideo("start");
                                }
                            }}
                            htmlFor="videoModal"
                            className="cursor-pointer"
                        >
                            <IconButton>
                                {startVideo === "stop" ? <HiOutlinePlay className="text-2xl" /> : <BsCaretDown className="text-2xl translate-y-0.5" />}
                            </IconButton>
                        </label>
                    </div>
                </div>
                <div className="bg-base-100 shadow-lg cursor-pointer hover:text-white transition ease-in-out delay-150 hover:scale-105 hover:bg-[#201172] duration-300 rounded-lg">
                    <Audio />
                    <div className="card-body items-center text-center">
                        <h2 className="mb-2">Audio Record</h2>
                        <label
                            onClick={() => {
                                if (startAudio === "stop") {
                                    setStartAudio("start");
                                }
                            }}
                            htmlFor="audioModal"
                            className="cursor-pointer"
                        >
                            <IconButton>
                                {startAudio === "stop" ? <HiOutlinePlay className="text-2xl" /> : <BsCaretDown className="text-2xl translate-y-0.5" />}
                            </IconButton>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recorders;
