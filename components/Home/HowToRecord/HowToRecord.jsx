import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import HowToRecordCard from "./HowToRecordCard";
import Image01 from "../../../public/images/howToRecord/1.jpg";
import Image from "next/image";

const data = [
    { title: "Select Layout", body: "Choose the recording mode, region, and audio settings.", btn_style: "text-cyan-500 bg-cyan-200" },
    {
        title: "Record Screen and Audio",
        body: "Start recording your screen, webcam, and microphone after the countdown.",
        btn_style: "text-violet-500 bg-violet-200",
    },
    {
        title: "Download & Edit",
        body: "Stop recording, then download your screen cast or edit it with a built-in video editor.",
        btn_style: "text-yellow-500 bg-yellow-200",
    },
];

const HowToRecord = () => {
    const [plan, setPlan] = useState("Select Layout");

    return (
        <div className="section-gap max-w-screen-sm lg:max-w-full mx-auto grid gap-x-12 lg:grid-cols-2 items-center">
            <div>
                <h1 className="lg:text-left">How to Record Screen Online</h1>
                <RadioGroup value={plan} onChange={setPlan}>
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
