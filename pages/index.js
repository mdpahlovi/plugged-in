import dynamic from "next/dynamic";
import Main from "../components/Layout/Main";
import Hero from "../components/Home/Hero";
const Recorders = dynamic(() => import("../components/Home/Recorders"), {
  ssr: false,
});
import HowToRecord from "../components/Home/HowToRecord/HowToRecord";
import Features from "../components/Home/Features";
// import ReviewSlider from "../components/Home/Review/ReviewSlider";
const ReviewSlider = dynamic(
  () => import("../components/Home/Review/ReviewSlider"),
  {
    ssr: false,
  }
);
import FaqData from "../components/Home/Faq/FaqData";
import VideoRecorderModal from "../components/Home/VideoRecorderModal";
import AudioRecorderModal from "../components/Home/AudioRecorderModal";
import ScreenRecorderModal from "../components/Home/ScreenRecorderModal";
import { useState } from "react";

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
      <VideoRecorderModal
        startVideo={startVideo}
        setStartVideo={setStartVideo}
      />
      <AudioRecorderModal
        startAudio={startAudio}
        setStartAudio={setStartAudio}
      />
      <ScreenRecorderModal
        startScreen={startScreen}
        setStartScreen={setStartScreen}
      />
      <HowToRecord />
      <Features />
      <ReviewSlider />
      <FaqData />
    </Main>
  );
}
