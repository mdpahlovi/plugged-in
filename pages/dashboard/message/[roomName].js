import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Message from "../../../components/Layout/Message";
import MessageHeader from "../../../components/DashBoard/Message/MessageHeader";
import { useRouter } from "next/router";
import { useAuth } from "../../../hooks/useAuth";
import useGetUser from "../../../hooks/useGetUser";
import { useQuery } from "@tanstack/react-query";
import ScrollToBottom from "react-scroll-to-bottom";
import {
  Icons,
  Link,
  Mic,
  Sent,
} from "../../../components/DashBoard/Message/MessageIcon";
import { SocketContext } from "../../../contexts/SocketProvider";
// import NoPhoto from "../../../public/images/no-photo.jpg";
import { jwt_axios } from "../../../utilities/api";
import EmojiPicker from "emoji-picker-react";
import UserChatBubble from "../../../components/Layout/UserChatBubble";
import OtherChatBubble from "../../../components/Layout/OtherChatBubble";

const ChatSection = () => {
  const { query } = useRouter();
  const { authUser } = useAuth();
  const [oppositeUserEmail, setOppositeUserEmail] = useState("");
  const { userLoading, user } = useGetUser(oppositeUserEmail);
  const { data: room, refetch: roomsRefetch } = useQuery({
    queryKey: ["singleRoom", query],
    queryFn: () =>
      fetch(
        `https://plugged-in-server.onrender.com/singleRoom?roomName=${query?.roomName}`
      ).then((res) => res.json()),
  });

  useEffect(() => {
    if (query?.roomName?.includes("@")) {
      if (authUser?.email === query?.roomName?.split("_")[0]) {
        setOppositeUserEmail(query?.roomName?.split("_")[1]);
      } else {
        setOppositeUserEmail(query?.roomName?.split("_")[0]);
      }
    }
  }, [authUser, query]);
  const { socket } = useContext(SocketContext);
  const [msgContent, setMsgContent] = useState("");
  const [receivedMsg, setReceivedMsg] = useState(null);
  const [typing, setTyping] = useState(null);

  const { data: messages = [], refetch: messagesRefetch } = useQuery({
    queryKey: ["getMessages", query],
    queryFn: () =>
      fetch(
        `https://plugged-in-server.onrender.com/getMessages?roomName=${query?.roomName}`
      ).then((res) => res.json()),
  });

  const handleSendMsg = () => {
    if (msgContent) {
      const msgData = {
        msgContent,
        authorEmail: authUser?.email,
        time:
          new Date(Date()).getMinutes() + ":" + new Date(Date()).getSeconds(),
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
    jwt_axios
      .put("https://plugged-in-server.onrender.com/messageStore", sendingMsg)
      .then((res) => {
        if (res?.data?.acknowledged) {
          messagesRefetch();
          roomsRefetch();
        }
      });
  };

  return (
    <Message>
      <MessageHeader
        user={user}
        roomName={query?.roomName}
        userLoading={userLoading}
      />
      <ScrollToBottom className="h-[70%]">
        <div className="px-4 py-3">
          {messages?.map((message, index) =>
            message?.authorEmail === authUser?.email ? (
              <UserChatBubble kay={index} message={message} />
            ) : (
              <OtherChatBubble kay={index} message={message} />
            )
          )}
          {typing && typing.roomName == query?.roomName && (
            <p className="bg-black px-5 py-2 rounded-xl text-white inline font-bold absolute bottom-0 mb-2">
              Typing...
            </p>
          )}
        </div>
      </ScrollToBottom>
      {/* <MessageFooter /> */}
      <div className="h-max flex items-center justify-between px-4 py-3 border-t gap-3">
        <div className="dropdown dropdown-top">
          <label tabIndex={0}>
            <Icons className="w-8 h-8 cursor-pointer" />
          </label>
          <div
            tabIndex={0}
            className="dropdown-content p-2 shadow bg-base-100 rounded-box w-52"
          >
            <div>
              <EmojiPicker
                onEmojiClick={(event, emojiObject) => {
                  console.log("emoji clicked", event.emoji);
                  setMsgContent(msgContent + event.emoji);
                }}
              />
            </div>
          </div>
        </div>
        <Link className="w-8 h-8 cursor-pointer" />
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
        <Mic className="w-8 h-8 cursor-pointer" />
        <Sent
          onClick={handleSendMsg}
          className="w-8 h-8 rotate-90 cursor-pointer"
        />
      </div>
    </Message>
  );
};

export default ChatSection;
