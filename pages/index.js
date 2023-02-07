import { useState } from "react";
import dynamic from "next/dynamic";
import Main from "../components/Layout/Main";
import Hero from "../components/Home/Hero";
import Recorders from "../components/Home/Recorders/Recorders";
import HowToRecord from "../components/Home/HowToRecord/HowToRecord";
import Features from "../components/Home/Features";
import FaqData from "../components/Home/Faq/FaqData";
// import ReviewSlider from "../components/Home/Review/ReviewSlider";
import ScreenRecorderModal from "../components/Home/Recorders/ScreenRecorderModal";
import VideoRecorderModal from "../components/Home/Recorders/VideoRecorderModal";
import AudioRecorderModal from "../components/Home/Recorders/AudioRecorderModal";
import PrivicyPolicy from "./privicy&policy";

const ReviewSlider = dynamic(() => import("../components/Home/Review/ReviewSlider"), {
    ssr: false,
});
// const ScreenRecorderModal = dynamic(() => import("../components/Home/Recorders/ScreenRecorderModal"), {
//     ssr: false,
// });
// const VideoRecorderModal = dynamic(() => import("../components/Home/Recorders/VideoRecorderModal"), {
//     ssr: false,
// });
// const AudioRecorderModal = dynamic(() => import("../components/Home/Recorders/AudioRecorderModal"), {
//     ssr: false,
// });

export default function Home() {
    const [startScreen, setStartScreen] = useState("stop");
    const [startVideo, setStartVideo] = useState("stop");
    const [startAudio, setStartAudio] = useState("stop");

    return (
        <Main title="Plugged In | Record Everything Online" className="container">
            <Hero />
            <Recorders
                setStartScreen={setStartScreen}
                startScreen={startScreen}
                setStartVideo={setStartVideo}
                startVideo={startVideo}
                setStartAudio={setStartAudio}
                startAudio={startAudio}
            ></Recorders>
            <ScreenRecorderModal startScreen={startScreen} setStartScreen={setStartScreen} />
            <VideoRecorderModal startVideo={startVideo} setStartVideo={setStartVideo} />
            <AudioRecorderModal startAudio={startAudio} setStartAudio={setStartAudio} />
            <HowToRecord />
            <Features />
            <ReviewSlider />
            <FaqData />
            <PrivicyPolicy></PrivicyPolicy>
        </Main>
    );
}
