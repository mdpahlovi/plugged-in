import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

export const PricingPlans = [
    {
        name: "Basic",
        title: "GET THE BASIC, FREE",
        price: 0,
        frequency: "/one time",
        description: "For individuals that need to record & manage videos.",
        features: [
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Record and store media" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Share recordings" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Delete recordings" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Add a title to recordings" },
            {
                icon: <MdOutlineClose className="border border-[#201172] rounded-full text-[#201172]" />,
                detail: "Text editor for adding to-do lists",
            },
            {
                icon: <MdOutlineClose className="border border-[#201172] rounded-full text-[#201172]" />,
                detail: "Video trimming feature",
            },
            {
                icon: <MdOutlineClose className="border border-[#201172] rounded-full text-[#201172]" />,
                detail: "Communicate with teammate",
            },
        ],
        cta: "Get Basic For Free",
        mostpopuler: false,
    },
    {
        name: "Team",
        title: "EVERTING IN PRO, PLUS",
        price: 15,
        frequency: "/one time",
        description: "For individuals teams that need advanced sharing & reporting.",
        features: [
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Record and store media" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Share recordings" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Delete recordings" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Add a title to recordings" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Text editor for adding to-do lists" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Video trimming feature" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Communicate with teammate" },
        ],
        cta: "Start Free Trial",
        mostpopuler: true,
    },
    {
        name: "Pro",
        title: "EVERTING IN BASIC, PLUS",
        price: 5,
        frequency: "/one time",
        description: "For individuals that need advanced recording & editing.",
        features: [
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Record and store media" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Share recordings" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Delete recordings" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Add a title to recordings" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Text editor for adding to-do lists" },
            { icon: <FaCheckCircle className="text-[#201172]" />, detail: "Video trimming feature" },
            { icon: <MdOutlineClose className="border border-[#201172] rounded-full text-[#201172]" />, detail: "Communicate with teammate" },
        ],
        cta: "Start Free Trial",
        mostpopuler: false,
    },
];
