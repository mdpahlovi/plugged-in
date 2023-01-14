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

export default function Home() {
  return (
    <Main title="Plugged In | Record Everything Online" className="">
      <Hero />
      <Recorders></Recorders>
      <VideoRecorderModal />
      <AudioRecorderModal />
      <ScreenRecorderModal />
      <HowToRecord />
      <Features />
      <ReviewSlider />
      <FaqData />
    </Main>
  );
}
