import { useState } from "react";
import dynamic from "next/dynamic";
import Main from "../components/Layout/Main";
import Hero from "../components/Home/Hero";
import Recorders from "../components/Home/Recorders/Recorders";
import HowToRecord from "../components/Home/HowToRecord/HowToRecord";
import Features from "../components/Home/Features";
import FaqData from "../components/Home/Faq/FaqData";
// import ReviewSlider from "../components/Home/Review/ReviewSlider";
// import VideoRecorderModal from "../components/Home/Recorders/VideoRecorderModal";
// import AudioRecorderModal from "../components/Home/Recorders/AudioRecorderModal";
// import ScreenRecorderModal from "../components/Home/Recorders/ScreenRecorderModal";

const ReviewSlider = dynamic(() => import("../components/Home/Review/ReviewSlider"), {
    ssr: false,
});
const VideoRecorderModal = dynamic(() => import("../components/Home/Recorders/VideoRecorderModal"), {
    ssr: false,
});
const AudioRecorderModal = dynamic(() => import("../components/Home/Recorders/AudioRecorderModal"), {
    ssr: false,
});
const ScreenRecorderModal = dynamic(() => import("../components/Home/Recorders/ScreenRecorderModal"), {
    ssr: false,
});

export default function Home() {
    const [startVideo, setStartVideo] = useState("stop");
    const [startAudio, setStartAudio] = useState("stop");
    const [startScreen, setStartScreen] = useState("stop");

    return (
        <Main title="Plugged In | Record Everything Online" className="">
            <Hero />

            <Recorders
                setStartVideo={setStartVideo}
                startVideo={startVideo}
                setStartAudio={setStartAudio}
                startAudio={startAudio}
                setStartScreen={setStartScreen}
                startScreen={startScreen}
            ></Recorders>
            <VideoRecorderModal startVideo={startVideo} setStartVideo={setStartVideo} />
            <AudioRecorderModal startAudio={startAudio} setStartAudio={setStartAudio} />
            <ScreenRecorderModal startScreen={startScreen} setStartScreen={setStartScreen} />
            <HowToRecord />
            <Features />
            <ReviewSlider />
            <FaqData />
        </Main>
    );
}
