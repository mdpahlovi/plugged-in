import React, { useContext, useEffect, useRef, useState } from "react";
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
// import RoomModal from "../../../components/DashBoard/Message/RoomModal";
import dynamic from "next/dynamic";
const RoomModal = dynamic(
  () => import("../../../components/DashBoard/Message/RoomModal"),
  { ssr: false }
);

const ChatSection = () => {
  const { query } = useRouter();
  const { user: auth_user } = useAuth();
  const [oppositeUserEmail, setOppositeUserEmail] = useState("");
  const { userLoading, user } = useGetUser(oppositeUserEmail);
  const { theme } = useTheme();
  const [receivedFile, setReceivedFile] = useState(null);
  const { data: room, refetch: roomsRefetch } = useQuery({
    queryKey: ["singleRoom", query],
    queryFn: () =>
      fetch(
        `https://plugged-in-server.onrender.com/singleRoom?roomName=${query?.roomName}`
      ).then((res) => res.json()),
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
  const [fileContent, setfileContent] = useState("");
  const [receivedMsg, setReceivedMsg] = useState(null);
  const [typing, setTyping] = useState(null);

  const {
    data: messages = [],
    isLoading: messagesLoading,
    refetch: messagesRefetch,
  } = useQuery({
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
        authorEmail: auth_user?.email,
        time:
          new Date(Date()).getMinutes() + ":" + new Date(Date()).getSeconds(),
        roomName: query.roomName,
      };
      socket.emit("send_message", msgData);
      sendMsgToDb(msgData);
      setMsgContent("");
      messagesRefetch();
    } else if (fileContent) {
      const fileData = {
        fileContent,
        authorEmail: auth_user?.email,
        time:
          new Date(Date()).getMinutes() + ":" + new Date(Date()).getSeconds(),
        roomName: query?.roomName,
      };
      socket.emit("send_file", fileData);
      sendMsgToDb(fileData);
      setfileContent("");
      messagesRefetch();
    }
  };

  const sendLike = () => {
    const likeData = {
      msgContent: "👍",
      authorEmail: auth_user?.email,
      time: new Date(Date()).getMinutes() + ":" + new Date(Date()).getSeconds(),
      roomName: query?.roomName,
    };
    socket.emit("send_message", likeData);
    sendMsgToDb(likeData);
    setMsgContent("");
    messagesRefetch();
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
      messagesRefetch();
    } else if (receivedFile) {
      sendMsgToDb(receivedFile);
      messagesRefetch();
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

  const handleChange = (files) => {
    console.log(files[0].link);
    setfileContent(files[0].link);
  };

  useEffect(() => {
    socket.on("receive_file", (data) => {
      setReceivedFile(data);
    });
  }, [socket]);

  // const [peerId, setPeerId] = useState("");
  // const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
  // const remoteVideoRef = useRef(null);
  // const currentUserVideoRef = useRef(null);
  // const peerInstance = useRef(null);
  // const [connect, setConnect] = useState(false);

  // console.log(remotePeerIdValue);

  // useEffect(() => {
  //   const peer = new Peer();
  //   peer.on("open", (id) => {
  //     setPeerId(id);
  //     socket.emit("send_peerid", { room: query?.roomName, id });
  //   });

  //   // peer.on("call", (call) => {
  //   //   const getUserMedia =
  //   //     window.navigator?.getUserMedia ||
  //   //     window.navigator?.webkitGetUserMedia ||
  //   //     window.navigator?.mozGetUserMedia;
  //   //   console.log("from Effect", call);
  //   //   getUserMedia(
  //   //     { video: true, audio: true },
  //   //     (mediaStream) => {
  //   //       currentUserVideoRef.current.srcObject = mediaStream;
  //   //       currentUserVideoRef.current.play();

  //   //       // const call = peerInstance.current.call(remotePeerId, mediaStream);

  //   //       call.answer(mediaStream);
  //   //       call.on("stream", function (remoteStream) {
  //   //         console.log("calling");
  //   //         remoteVideoRef.current.srcObject = remoteStream;
  //   //         remoteVideoRef.current.play();
  //   //       });
  //   //     },
  //   //     (error) => {
  //   //       console.error(error);
  //   //     }
  //   //   );
  //   // });

  //   peerInstance.current = peer;
  // }, [query, socket]);

  // useEffect(() => {
  //   socket.on("receive_peerid", (data) => {
  //     if (data?.room === query?.roomName) {
  //       console.log(data);
  //       setRemotePeerIdValue(data?.id);
  //     }
  //   });
  // }, [socket, query]);

  // const call = (remotePeerId) => {
  //   const getUserMedia =
  //     window.navigator?.getUserMedia ||
  //     window.navigator?.webkitGetUserMedia ||
  //     window.navigator?.mozGetUserMedia;

  //   getUserMedia(
  //     { video: true, audio: true },
  //     (mediaStream) => {
  //       currentUserVideoRef.current.srcObject = mediaStream;
  //       currentUserVideoRef.current.play();

  //       const call = peerInstance.current.call(remotePeerId, mediaStream);
  //       console.log("from function", call);

  //       call.on("stream", (remoteStream) => {
  //         console.log("calling");
  //         remoteVideoRef.current.srcObject = remoteStream;
  //         remoteVideoRef.current.play();
  //       });
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // };

  // useEffect(() => {
  //   socket.on("end_call", (data) => {
  //     console.log(data);
  //     if (data?.satus === "callEnd") {
  //       setConnect(false);
  //       currentUserVideoRef.current.pause();
  //       remoteVideoRef.current.pause();
  //     }
  //   });
  // }, [socket]);

  // const handleReceive = (mypeerId) => {
  //   const getUserMedia =
  //     window.navigator?.getUserMedia ||
  //     window.navigator?.webkitGetUserMedia ||
  //     window.navigator?.mozGetUserMedia;

  //   getUserMedia(
  //     { video: true, audio: true },
  //     (mediaStream) => {
  //       currentUserVideoRef.current.srcObject = mediaStream;
  //       currentUserVideoRef.current.play();

  //       const call = peerInstance.current.call(mypeerId, mediaStream);

  //       call.answer(mediaStream);
  //       call.on("stream", function (remoteStream) {
  //         console.log("calling");
  //         remoteVideoRef.current.srcObject = remoteStream;
  //         remoteVideoRef.current.play();
  //       });
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // };

  // return (
  //   <div>
  //     <p>Current user id is : {peerId}</p>
  //     <p>Remote user id is : {remotePeerIdValue}</p>
  //     {/* <input
  //       type="text"
  //       value={remotePeerIdValue}
  //       onChange={(e) => setRemotePeerIdValue(e.target.value)}
  //     /> */}
  //     <button
  //       className="btn"
  //       onClick={() => {
  //         call(remotePeerIdValue);
  //         setConnect(true);
  //       }}
  //     >
  //       Call
  //     </button>
  //     <button
  //       className="btn"
  //       onClick={() => {
  //         setPeerId("");
  //         setRemotePeerIdValue("");
  //         socket.emit("call_end", { room: query?.roomName, satus: "callEnd" });
  //         currentUserVideoRef.current.srcObject === null;
  //         remoteVideoRef.current.srcObject === null;
  //         // setConnect(false);
  //       }}
  //     >
  //       endCall
  //     </button>
  //     {connect && (
  //       <button onClick={() => handleReceive(peerId)}>Receive</button>
  //     )}
  //     <div>
  //       <div>
  //         <video ref={currentUserVideoRef} />
  //       </div>
  //       <div>
  //         <video ref={remoteVideoRef} />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <Message>
      <MessageHeader
        user={user}
        roomName={query?.roomName}
        userLoading={userLoading}
      />
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
            <p className="bg-black px-5 py-2 rounded-xl text-white inline font-bold absolute bottom-0 mb-2">
              Typing...
            </p>
          )}
        </div>
      </ScrollToBottom>
      {fileContent && (
        <div className="bg-gray-500 text-center flex items-center justify-center">
          <h4 className="my-auto text-white font-bold text-xl">
            Sending File...
          </h4>
        </div>
      )}
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
        <DropboxChooser
          appKey={"oka5jjhbg8tfqeo"}
          success={handleChange}
          cancel={() => console.log("canceled")}
        >
          <ImAttachment className="text-2xl cursor-pointer" />
        </DropboxChooser>
        <button onClick={() => call(remotePeerIdValue)}>Call</button>
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
        {msgContent || fileContent ? (
          <MdSend onClick={handleSendMsg} className="text-3xl cursor-pointer" />
        ) : (
          <button onClick={sendLike}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>
          </button>
        )}
      </div>
      <RoomModal />
    </Message>
  );
};

export default ChatSection;
