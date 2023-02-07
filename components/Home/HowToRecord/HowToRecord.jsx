import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import HowToRecordCard from "./HowToRecordCard";
import Image01 from "../../../public/images/howToRecord/1.jpg";
import Image from "next/image";

const data = [
    {
        title: "Select a recording mode",
        body: "When you're in a meeting or you want record you screen, webcam or audio, simply click to to the prefer recording mode button to begin capturing audio and video.",
        btn_style: "text-cyan-500 bg-cyan-200",
    },
    {
        title: "Preview, Download and Store",
        body: "When the meeting is over, click the Stop Recording button. I will automatically start preview. Their also have download button and if you are logged in you media will automatically stored our server",
        btn_style: "text-violet-500 bg-violet-200",
    },
    {
        title: "Manage, Share or Delete",
        body: "Our user's can access their recording anytime from their account dashboard. They can share it to the social media and also can delete.",
        btn_style: "text-yellow-500 bg-yellow-200",
    },
];

const HowToRecord = () => {
    const [plan, setPlan] = useState("Select Layout");

    return (
        <div className="section-gap max-w-screen-sm lg:max-w-full mx-auto grid lg:grid-cols-2 items-center">
            <div>
                <h1 className="lg:text-left">How to Record and Manage media with PluggedIn</h1>
                <RadioGroup value={plan} onChange={setPlan} className="mr-8">
                    {data.map((data, index) => (
                        <HowToRecordCard key={index} data={data} index={index} />
                    ))}
                </RadioGroup>
            </div>
            <Image className="w-full rounded-lg shadow-lg lg:max-w-lg ml-auto" src={Image01} alt="" />
        </div>
    );
};

export default HowToRecord;
