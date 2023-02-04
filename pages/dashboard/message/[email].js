import React from "react";
import Image from "next/image";
import pahlovi from "../../../public/images/team/pahlovi.png";
import safayet from "../../../public/images/team/safayet.png";
import ashiq from "../../../public/images/team/ashiqur.png";
import pran from "../../../public/images/team/gobinda.png";
import Message from "../../../components/Layout/Message";
import MessageFooter from "../../../components/DashBoard/Message/MessageFooter";
import MessageHeader from "../../../components/DashBoard/Message/MessageHeader";
import { useRouter } from "next/router";

const users = [
    { name: "MD Pahlovi", avatar: pahlovi, email: "mdpahlovi07@gmail.com" },
    { name: "Pran Gobinda", avatar: pran, email: "p.gobinda.cb@gmail.com" },
    { name: "Safayet Nur", avatar: safayet, email: "safayetnurelectra@gmail.com" },
    { name: "MD Ashiqur Ragman", avatar: ashiq, email: "web3.0.ashiq@gmail.com" },
];

const ChatSection = () => {
    const { query } = useRouter();
    const user = users.find((user) => user.email === query.email);

    return (
        <Message>
            <MessageHeader user={user} />
            <div className="relative px-4 py-3 overflow-y-auto">
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <Image className="mask mask-squircle" src={user.avatar} alt="" width={32} height={32} />
                    </div>
                    <div className="chat-bubble bg-base-content/30">You were the Chosen One!</div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <Image className="mask mask-squircle" src={user.avatar} alt="" width={32} height={32} />
                    </div>
                    <div className="chat-bubble bg-indigo-500">I hate you!</div>
                    <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
            </div>
            <MessageFooter />
        </Message>
    );
};

export default ChatSection;
