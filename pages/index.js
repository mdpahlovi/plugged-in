import Main from "../components/Layout/Main";
import Hero from "../components/Home/Hero";
import ScreenRecorder from "../components/Home/ScreenRecorder";
import HowToRecord from "../components/Home/HowToRecord/HowToRecord";
import Features from "../components/Home/Features";
import ReviewSlider from "../components/Home/Review/ReviewSlider";
import FaqData from "../components/Home/Faq/FaqData";

export default function Home() {
    return (
        <Main title="Plugged In | Record Everything Online" className="">
            <Hero />
            <ScreenRecorder />
            <HowToRecord />
            <Features />
            <ReviewSlider />
            <FaqData />
        </Main>
    );
}
