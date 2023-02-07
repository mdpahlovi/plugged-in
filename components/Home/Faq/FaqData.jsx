import { useState } from "react";
import FaqCard from "./FaqCard";
import FAQ from "../../../public/images/faq.png";
import Image from "next/image";

const FaqData = () => {
    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        }
        setOpen(index);
    };

    const qusNAns = [
        {
            question: "What is PluggedIn?",
            answer: "PluggedIn is an online meeting recording platform that allows you to capture high-quality audio and video of your online meetings. You can store, share, and manage your recordings all in one place, making it easy to keep track of important discussions and decisions.",
        },
        {
            question: "What makes PluggedIn special from existing one?",
            answer: "PluggedIn provides a better solution for recording and managing online meetings than other platforms. Whether you're a small business or a large enterprise, we have the tools you need to make your online meetings more productive and organized. It has also affordable pricing and user-friendly interface",
        },
        {
            question: "How does it work?",
            answer: "Simply create an account on PluggedIn, click on any recording mode to begin capturing audio and video. When the meeting is over, click the Stop Recording icon. It will automatically save the recording to the platform. From there, you can share the recording with others, add a title, and manage your recordings as needed.",
        },

        {
            question: "How much does it cost?",
            answer: "We offer three pricing options to meet the needs of all types of online meeting attendees. Basic users can use the platform for free, while team users can enjoy additional features for $15/month and pro users can enjoy extra features for $5/month.",
        },
        {
            question: "What features are included with each pricing option?",
            answer: "Basic users can record and store online meetings, share recordings, add a title to recordings, and delete recordings as needed. Pro users can enjoy all basic features, as well as a text editor for adding to-do lists about meeting minutes. Team users can enjoy all the feature of basic and pro user additionally communicate team.",
        },
    ];

    return (
        <div className="section-gap grid lg:grid-cols-2 gap-x-8 max-w-screen-sm lg:max-w-full mx-auto">
            <div>
                <h1 className="lg:text-left">Frequently Asked Questions</h1>
                <Image src={FAQ} alt="" className="hidden lg:block max-w-sm my-auto mx-auto" />
            </div>
            <div className="space-y-6">
                {qusNAns.map((data, index) => {
                    return <FaqCard key={index} open={index === open} question={data.question} answer={data.answer} toggle={() => toggle(index)}></FaqCard>;
                })}
            </div>
        </div>
    );
};

export default FaqData;
