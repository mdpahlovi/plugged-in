import Features from "../components/Features";
import Main from "../components/Layout/Main";
import RevisewSlider from "../components/Review/ReviewSlider";
import FaqData from "../components/Faq/FaqData"
import ScreenRecorder from "../components/ScreenRecorder";

export default function Home() {
  return (
    <Main title="Plugged In | Record Everything Online" className="w-full">
      <ScreenRecorder></ScreenRecorder>
      <Features></Features>
      <RevisewSlider></RevisewSlider>
      <FaqData></FaqData>
    </Main>
  );
}
