import { useState } from "react";
import dynamic from "next/dynamic";
import Main from "../components/Layout/Main";
import Hero from "../components/Home/Hero";
import Recorders from "../components/Home/Recorders/Recorders";
import HowToRecord from "../components/Home/HowToRecord/HowToRecord";
import Features from "../components/Home/Features/Features";
import FaqData from "../components/Home/Faq/FaqData";
// import ReviewSlider from "../components/Home/Review/ReviewSlider";
import ScreenRecorder from "../components/Home/Recorders/ScreenRecorder";
import VideoRecorder from "../components/Home/Recorders/VideoRecorder";
import AudioRecorder from "../components/Home/Recorders/AudioRecorder";
import { BrowserView, MobileView } from "react-device-detect";
import MobileScreen from "../components/Home/Recorders/MobileScreen";

const ReviewSlider = dynamic(() => import("../components/Home/Review/ReviewSlider"), {
    ssr: false,
});

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
            <BrowserView>
                <ScreenRecorder startScreen={startScreen} setStartScreen={setStartScreen} />
            </BrowserView>
            <MobileView>
                <MobileScreen />
            </MobileView>
            <VideoRecorder startVideo={startVideo} setStartVideo={setStartVideo} />
            <AudioRecorder startAudio={startAudio} setStartAudio={setStartAudio} />
            <HowToRecord />
            <Features />
            <ReviewSlider />
            <FaqData />
        </Main>
    );
}
