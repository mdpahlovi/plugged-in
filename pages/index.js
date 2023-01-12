import Features from "../components/Features";
import HowToRecord from "../components/HowToRecord";
import Main from "../components/Layout/Main";

export default function Home() {
    return (
        <Main title="Plugged In | Record Everything Online" className="">
            <HowToRecord></HowToRecord>
            <Features></Features>
        </Main>
    );
}
