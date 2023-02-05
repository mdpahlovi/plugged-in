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
import { useAuth } from "../../../hooks/useAuth";
import useGetUser from "../../../hooks/useGetUser";
import { useQuery } from "@tanstack/react-query";
import {
  Icons,
  Link,
  Mic,
  Sent,
} from "../../../components/DashBoard/Message/MessageIcon";

// const users = [
//     { name: "MD Pahlovi", avatar: pahlovi, email: "mdpahlovi07@gmail.com" },
//     { name: "Pran Gobinda", avatar: pran, email: "p.gobinda.cb@gmail.com" },
//     { name: "Safayet Nur", avatar: safayet, email: "safayetnurelectra@gmail.com" },
//     { name: "MD Ashiqur Ragman", avatar: ashiq, email: "web3.0.ashiq@gmail.com" },
// ];

const ChatSection = () => {
  const { query } = useRouter();
  const { authUser } = useAuth();
  const { userLoading, user, userRefetch } = useGetUser(authUser?.email);
  const chatFriend = user?.friendList?.find(
    (friend) => friend?.email === query?.email
  );
  console.log(chatFriend);

  //   const { friends = [] } = useQuery({
  //     queryKey: ["friends"],
  //     queryFn: () =>
  //       fetch(`http://localhost:5000/friends?email=${authUser?.email}`).then(
  //         (res) => res.json()
  //       ),
  //   });
  //   console.log(friends);

  return (
    <Message>
      <MessageHeader user={user} />
      <div className="relative px-4 py-3 overflow-y-auto">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            {user?.avatar && (
              <img
                className="mask mask-squircle"
                src={user?.avatar}
                alt=""
                width={32}
                height={32}
              />
            )}
          </div>
          <div className="chat-bubble bg-base-content/30">
            You were the Chosen One!
          </div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            {user?.photoURL && (
              <img
                className="mask mask-squircle"
                src={authUser?.photoURL}
                alt=""
                width={32}
                height={32}
              />
            )}
          </div>
          <div className="chat-bubble bg-indigo-500">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
      {/* <MessageFooter /> */}
      <div className="h-max flex items-center justify-between px-4 py-3 border-t gap-3">
        <Icons className="w-8 h-8 cursor-pointer" />
        <Link className="w-8 h-8 cursor-pointer" />
        <input
          type="text"
          placeholder="Message"
          className="input rounded-full"
          name="message"
          required
        />
        <Mic className="w-8 h-8 cursor-pointer" />
        <Sent className="w-8 h-8 rotate-90 cursor-pointer" />
      </div>
    </Message>
  );
};

export default ChatSection;
