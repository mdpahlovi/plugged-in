import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Message from "../../../components/Layout/Message";
import MessageHeader from "../../../components/DashBoard/Message/MessageHeader";
import { useRouter } from "next/router";
import { useAuth } from "../../../hooks/useAuth";
import useGetUser from "../../../hooks/useGetUser";
import { useQuery } from "@tanstack/react-query";
import ScrollToBottom from "react-scroll-to-bottom";
import { SocketContext } from "../../../contexts/SocketProvider";
import NoPhoto from "../../../public/images/no-photo.jpg";
import { jwt_axios } from "../../../utilities/api";
import EmojiPicker from "emoji-picker-react";
import { RiAttachment2, RiSendPlaneFill } from "react-icons/ri";
import { GrEmoji } from "react-icons/gr";

const ChatSection = () => {
    const { query } = useRouter();
    const { authUser } = useAuth();
    const [oppositeUserEmail, setOppositeUserEmail] = useState("");
    const { userLoading, user } = useGetUser(oppositeUserEmail);
    const [coMembers, setComembers] = useState([]);
    const { data: rooms = [], refetch: roomsRefetch } = useQuery({
        queryKey: ["getRooms"],
        queryFn: () => fetch("https://plugged-in-server.onrender.com/getRooms").then((res) => res.json()),
    });

    useEffect(() => {
        if (query?.roomName?.includes("@")) {
            if (authUser?.email === query?.roomName?.split("_")[0]) {
                setOppositeUserEmail(query?.roomName?.split("_")[1]);
            } else {
                setOppositeUserEmail(query?.roomName?.split("_")[0]);
            }
        } else {
            rooms?.map((room) => room?.roomType === "team" && setComembers(room.members));
        }
    }, [authUser, query]);

    useEffect(() => {
        if (coMembers) {
            coMembers.map((member) => setOppositeUserEmail(member));
        }
    }, [coMembers]);

    const { socket } = useContext(SocketContext);
    const [msgContent, setMsgContent] = useState("");
    const [receivedMsg, setReceivedMsg] = useState(null);
    const [typing, setTyping] = useState(null);

    const { data: messages = [], refetch: messagesRefetch } = useQuery({
        queryKey: ["getMessages", query],
        queryFn: () => fetch(`https://plugged-in-server.onrender.com/getMessages?roomName=${query?.roomName}`).then((res) => res.json()),
    });
    console.log(messages);
    console.log(query?.roomName);

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
        socket.on("typing_res", (data) => {
            console.log(data);
            setTyping(data);
        });
    }, [socket]);

    if (typing) {
        setTimeout(() => {
            setTyping(null);
        }, 1000);
    }

    useEffect(() => {
        if (receivedMsg) {
            sendMsgToDb(receivedMsg);
        }
    }, [receivedMsg]);

    const sendMsgToDb = (sendingMsg) => {
        jwt_axios.put("https://plugged-in-server.onrender.com/messageStore", sendingMsg).then((res) => {
            if (res?.data?.acknowledged) {
                messagesRefetch();
                roomsRefetch();
            }
        });
    };

    return (
        <Message>
            <MessageHeader user={user} userLoading={userLoading} />
            <ScrollToBottom className="overflow-y-auto">
                <div className="px-4 py-3">
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
                                <div className="chat-bubble chat-bubble-accent break-all">{message?.msgContent}</div>
                                <div className="chat-footer opacity-50">Seen at 12:46</div>
                            </div>
                        ) : (
                            <div key={index} className="chat chat-start">
                                <div className="chat-image avatar">
                                    <Image className="mask mask-circle" src={user?.avatar ? user.avatar : NoPhoto} alt="" width={36} height={36} />
                                </div>
                                <div className="chat-header">
                                    {user?.name}
                                    <time className="ml-2 text-xs opacity-50">12:45</time>
                                </div>
                                <div className="chat-bubble break-all">{message?.msgContent}</div>
                                <div className="chat-footer opacity-50">Delivered</div>
                            </div>
                        )
                    )}
                    {typing && typing.roomName == query?.roomName && (
                        <p className="bg-black px-5 py-2 rounded-xl text-white inline font-bold absolute bottom-0 mb-2">Typing...</p>
                    )}
                </div>
            </ScrollToBottom>
            {/* <MessageFooter /> */}
            <div className="flex items-center px-4 border-t gap-3">
                <div className="dropdown dropdown-top">
                    <label tabIndex={0}>
                        <GrEmoji className="text-3xl" />
                    </label>
                    <div tabIndex={0} className="dropdown-content mb-5">
                        <EmojiPicker
                            onEmojiClick={(event, emojiObject) => {
                                console.log("emoji clicked", event.emoji);
                                setMsgContent(msgContent + event.emoji);
                            }}
                        />
                    </div>
                </div>
                <RiAttachment2 className="text-4xl" />
                <input
                    type="text"
                    placeholder="Message"
                    className="input rounded-full"
                    value={msgContent}
                    name="message"
                    onChange={(event) => {
                        setMsgContent(event.target.value);
                        socket.emit("typing", {
                            msgContent,
                            roomName: query?.roomName,
                        });
                    }}
                    required
                />
                <RiSendPlaneFill onClick={handleSendMsg} className="text-3xl" />
            </div>
        </Message>
    );
};

export default ChatSection;
