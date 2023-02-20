import React, { useContext, useEffect, useState } from "react";
import Message from "../../../components/Layout/Message";
import MessageHeader from "../../../components/DashBoard/Message/MessageHeader";
import MessageLoading from "../../../components/DashBoard/Message/MessageLoading";
import { useRouter } from "next/router";
import { useAuth } from "../../../hooks/useAuth";
import useGetUser from "../../../hooks/useGetUser";
import { useQuery } from "@tanstack/react-query";
import ScrollToBottom from "react-scroll-to-bottom";
import { SocketContext } from "../../../contexts/SocketProvider";
import { jwt_axios } from "../../../utilities/api";
import EmojiPicker from "emoji-picker-react";
import UserChatBubble from "../../../components/DashBoard/Message/UserChatBubble";
import OtherChatBubble from "../../../components/DashBoard/Message/OtherChatBubble";
import { GrEmoji } from "react-icons/gr";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";
import { useTheme } from "../../../hooks/useTheme";
import DropboxChooser from "react-dropbox-chooser";

const ChatSection = () => {
    const { query } = useRouter();
    const { user: auth_user } = useAuth();
    const [oppositeUserEmail, setOppositeUserEmail] = useState("");
    const { userLoading, user } = useGetUser(oppositeUserEmail);
    const { theme } = useTheme();
    const [receivedFile, setReceivedFile] = useState(null);
    const { data: room, refetch: roomsRefetch } = useQuery({
        queryKey: ["singleRoom", query],
        queryFn: () => fetch(`https://plugged-in-server.onrender.com/singleRoom?roomName=${query?.roomName}`).then((res) => res.json()),
    });

    useEffect(() => {
        if (query?.roomName?.includes("@")) {
            if (auth_user?.email === query?.roomName?.split("_")[0]) {
                setOppositeUserEmail(query?.roomName?.split("_")[1]);
            } else {
                setOppositeUserEmail(query?.roomName?.split("_")[0]);
            }
        }
    }, [auth_user, query]);
    const { socket } = useContext(SocketContext);
    const [msgContent, setMsgContent] = useState("");
    const [receivedMsg, setReceivedMsg] = useState(null);
    const [typing, setTyping] = useState(null);

    const {
        data: messages = [],
        isLoading: messagesLoading,
        refetch: messagesRefetch,
    } = useQuery({
        queryKey: ["getMessages", query],
        queryFn: () => fetch(`https://plugged-in-server.onrender.com/getMessages?roomName=${query?.roomName}`).then((res) => res.json()),
    });

    const handleSendMsg = () => {
        if (msgContent) {
            const msgData = {
                msgContent,
                authorEmail: auth_user?.email,
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

    const handleChange = (files) => {
        console.log(files[0].link);

        const fileData = {
            fileContent: files[0].link,
            authorEmail: auth_user?.email,
            time: new Date(Date()).getMinutes() + ":" + new Date(Date()).getSeconds(),
            roomName: query?.roomName,
        };

        socket.emit("send_file", fileData);
    };

    useEffect(() => {
        socket.on("receive_file", (data) => {
            setReceivedFile(data);
        });
    }, [socket]);

    useEffect(() => {
        if (receivedFile) {
            if (receivedFile?.roomName === query?.roomName) {
                console.log(receivedFile);
                sendMsgToDb(receivedFile);
            }
        }
    }, [receivedFile, query]);

    return (
        <Message>
            <MessageHeader user={user} roomName={query?.roomName} userLoading={userLoading} />
            <ScrollToBottom className="overflow-y-auto">
                <div className="px-4 py-3">
                    {messagesLoading ? (
                        <MessageLoading />
                    ) : (
                        messages?.map((message, index) =>
                            message?.authorEmail === auth_user?.email ? (
                                <UserChatBubble key={index} message={message} />
                            ) : (
                                <OtherChatBubble key={index} message={message} />
                            )
                        )
                    )}
                    {typing && typing.roomName == query?.roomName && (
                        <p className="bg-black px-5 py-2 rounded-xl text-white inline font-bold absolute bottom-0 mb-2">Typing...</p>
                    )}
                </div>
            </ScrollToBottom>
            {/* <MessageFooter /> */}
            <div className="h-max flex items-center justify-between px-4 py-3 border-t gap-3">
                <div className="dropdown dropdown-top">
                    <label tabIndex={0}>
                        <GrEmoji className="text-3xl cursor-pointer" />
                    </label>
                    <div tabIndex={0} className="dropdown-content mb-5">
                        <EmojiPicker
                            theme={theme}
                            width={300}
                            onEmojiClick={(event, emojiObject) => {
                                console.log("emoji clicked", event.emoji);
                                setMsgContent(msgContent + event.emoji);
                            }}
                        />
                    </div>
                </div>
                <DropboxChooser appKey={"oka5jjhbg8tfqeo"} success={handleChange} cancel={() => console.log("canceled")}>
                    <ImAttachment className="text-2xl cursor-pointer" />
                </DropboxChooser>
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
                <MdSend onClick={handleSendMsg} className="text-3xl cursor-pointer" />
            </div>
        </Message>
    );
};

export default ChatSection;
