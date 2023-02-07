import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Message from "../../../components/Layout/Message";
import MessageFooter from "../../../components/DashBoard/Message/MessageFooter";
import MessageHeader from "../../../components/DashBoard/Message/MessageHeader";
import { useRouter } from "next/router";
import { useAuth } from "../../../hooks/useAuth";
import useGetUser from "../../../hooks/useGetUser";
import { useQuery } from "@tanstack/react-query";
import ScrollToBottom from "react-scroll-to-bottom";
import { Icons, Link, Mic, Sent } from "../../../components/DashBoard/Message/MessageIcon";
import { SocketContext } from "../../../contexts/SocketProvider";
import NoPhoto from "../../../public/images/no-photo.jpg";

const ChatSection = () => {
    const { query } = useRouter();
    const { authUser } = useAuth();
    const [oppositeUserEmail, setOppositeUserEmail] = useState("");
    const { userLoading, user, userRefetch } = useGetUser(oppositeUserEmail);
    console.log(query?.roomName?.split("_")[0]);
    console.log(query?.roomName?.split("_")[1]);

    useEffect(() => {
        if (authUser?.email === query?.roomName?.split("_")[0]) {
            setOppositeUserEmail(query?.roomName?.split("_")[1]);
        } else {
            setOppositeUserEmail(query?.roomName?.split("_")[0]);
        }
    }, []);

    const { socket } = useContext(SocketContext);
    const [msgContent, setMsgContent] = useState("");
    const [receivedMsg, setReceivedMsg] = useState(null);

    const { data: messages = [], refetch: messagesRefetch } = useQuery({
        queryKey: ["getMessages"],
        queryFn: () => fetch(`https://plugged-in-server.onrender.com/getMessages?roomName=${query.roomName}`).then((res) => res.json()),
    });

    const handleSendMsg = () => {
        if (msgContent) {
            const msgData = {
                msgContent,
                authorEmail: authUser?.email,
                time: new Date(Date()).getMinutes() + ":" + new Date(Date()).getSeconds(),
                roomName: query.roomName,
            };
            socket.emit("send_message", msgData);
            sendMsgToDb(msgData);
            setMsgContent("");
            messagesRefetch();
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setReceivedMsg(data);
        });
    }, [socket]);

    useEffect(() => {
        if (receivedMsg) {
            console.log(receivedMsg);
        }
    }, [receivedMsg]);

    useEffect(() => {
        if (receivedMsg) {
            sendMsgToDb(receivedMsg);
        }
    }, []);

    const sendMsgToDb = (sendingMsg) => {
        fetch("https://plugged-in-server.onrender.com/messageStore", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(sendingMsg),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data?.acknowledged) {
                    messagesRefetch();
                }
            });
    };

    return (
        <Message>
            <MessageHeader user={user} />
            <ScrollToBottom className="px-4 py-3 overflow-y-scroll h-[500px]">
                {messages?.map((message, index) =>
                    message?.authorEmail === authUser?.email ? (
                        <div key={index} className="chat chat-end">
                            <div className="chat-image avatar">
                                <Image className="mask mask-circle" src={authUser?.photoURL ? authUser.photoURL : NoPhoto} alt="" width={36} height={36} />
                            </div>
                            <div className="chat-header">
                                {authUser?.displayName}
                                <time className="ml-2 text-xs opacity-50">{message?.time}</time>
                            </div>
                            <div className="chat-bubble">{message?.msgContent}</div>
                            <div className="chat-footer opacity-50">Seen at 12:46</div>
                        </div>
                    ) : (
                        <div key={index} className="chat chat-start">
                            <div className="chat-image avatar">
                                <Image className="mask mask-circle" src={user?.avatar ? user.avatar : NoPhoto} alt="" width={36} height={36} />
                            </div>
                            <div className="chat-header">
                                {user?.name}
                                <time className="text-xs opacity-50">12:45</time>
                            </div>
                            <div className="chat-bubble">{message?.msgContent}</div>
                            <div className="chat-footer opacity-50">Delivered</div>
                        </div>
                    )
                )}
            </ScrollToBottom>
            {/* <MessageFooter /> */}
            <div className="h-max flex items-center justify-between px-4 py-3 border-t gap-3">
                <Icons className="w-8 h-8 cursor-pointer" />
                <Link className="w-8 h-8 cursor-pointer" />
                <input
                    type="text"
                    placeholder="Message"
                    className="input rounded-full"
                    value={msgContent}
                    name="message"
                    onChange={(event) => setMsgContent(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.target.key === "Enter") {
                            setMsgContent(event.target.value);
                        }
                    }}
                    required
                />
                <Mic className="w-8 h-8 cursor-pointer" />
                <button onClick={handleSendMsg}>
                    <Sent className="w-8 h-8 rotate-90 cursor-pointer" />
                </button>
            </div>
        </Message>
    );
};

export default ChatSection;
