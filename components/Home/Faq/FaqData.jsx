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
            id: 3,
            question: "The main features of this app?",
            answer: "There are lot of features we have implement in this app already. You can video conference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.",
        },
        {
            id: 4,
            question: "The main features of this app?",
            answer: "There are lot of features we have implement in this app already. You can video conference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.",
        },
        {
            id: 1,
            question: "How Many Participant can join at a time?",
            answer: "Plugged in is multi dimensional meeting platform. Here more than 500 persons can join at a time. Our research and development team is working regularly and we hope that it will be increased in 1000 person.",
        },
        {
            id: 2,
            question: "What is the pricing?",
            answer: "At initial we are keep it free for 60 mins for once meeting where maximum 50 persons can join at a time. Up to 100 persons and time limit 2 hr it will be charged $9 per hour. Up to 1000 persons and time limit 5 hr it will be charged $19 per hour. Up to 1000 persons and time limit 12 hr it will be charged $99 per hour.",
        },
        {
            id: 3,
            question: "The main features of this app?",
            answer: "There are lot of features we have implement in this app already. You can video conference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.",
        },
    ];

    return (
        <div className="section-gap grid lg:grid-cols-2 gap-x-8 max-w-screen-sm lg:max-w-full mx-auto">
            <div>
                <h1 className="lg:text-left">Frequently Asked Questions</h1>
                <Image src={FAQ} alt="" className="hidden lg:block max-w-sm mx-auto" />
            </div>
            <div className="space-y-6">
                {qusNAns.map((data, index) => {
                    return <FaqCard key={data.id} open={index === open} question={data.question} answer={data.answer} toggle={() => toggle(index)}></FaqCard>;
                })}
            </div>
        </div>
    );
};

export default FaqData;
