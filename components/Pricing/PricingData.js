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
            { icon: <FaCheckCircle className="text-primary" />, detail: "Record and store media" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Share recordings" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Delete recordings" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Add a title to recordings" },
            {
                icon: <MdOutlineClose className="border border-primary rounded-full text-primary" />,
                detail: "Text editor for adding to-do lists",
            },
            {
                icon: <MdOutlineClose className="border border-primary rounded-full text-primary" />,
                detail: "Video trimming feature",
            },
            {
                icon: <MdOutlineClose className="border border-primary rounded-full text-primary" />,
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
            { icon: <FaCheckCircle className="text-primary" />, detail: "Record and store media" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Share recordings" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Delete recordings" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Add a title to recordings" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Text editor for adding to-do lists" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Video trimming feature" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Communicate with teammate" },
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
            { icon: <FaCheckCircle className="text-primary" />, detail: "Record and store media" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Share recordings" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Delete recordings" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Add a title to recordings" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Text editor for adding to-do lists" },
            { icon: <FaCheckCircle className="text-primary" />, detail: "Video trimming feature" },
            { icon: <MdOutlineClose className="border border-primary rounded-full text-primary" />, detail: "Communicate with teammate" },
        ],
        cta: "Start Free Trial",
        mostpopuler: false,
    },
];
