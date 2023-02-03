import Dashboard from "../../components/Layout/Dashboard";
import {
  ActiveStatus,
  Icons,
  Link,
  Mic,
  Sent,
} from "../../components/DashBoard/Message/MessageIcon";
import { ImSearch } from "react-icons/im";
import MessageUserChat from "../../components/DashBoard/Message/MessageUserChat";
import faisal from "../../public/images/team/faisal.png";
import Image from "next/image";

const message = () => {
  return (
    <Dashboard title="Message in PluggedIn">
      <div className="border rounded-lg flex">
        <div className="border-r min-w-full sm:min-w-[280px] md:min-w-[320px] xl:min-w-[360px]">
          <div className="mx-4 my-4 relative">
            <ImSearch className="absolute h-full flex items-center left-4" />
            <input
              type="search"
              className="input rounded-full pl-10"
              name="search"
              placeholder="Search"
              required
            />
          </div>
          <ul className="overflow-auto h-[32rem]">
            <h2 className="ml-4 -mt-1 mb-1 text-xl">Chats</h2>
            <div>
              <MessageUserChat />
              <MessageUserChat />
              <MessageUserChat />
            </div>
          </ul>
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="relative flex items-center px-4 py-3 border-b">
            <Image
              className="mask mask-squircle"
              src={faisal}
              alt="username"
              width={40}
              height={40}
            />
            <h3 className="ml-3 text-xl font-bold">Faisal Ahmed</h3>
            <ActiveStatus />
          </div>
          {/* Messages Section */}
          <div className="relative px-4 py-3 overflow-y-auto">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <Image
                  className="mask mask-squircle"
                  src={faisal}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="chat-bubble bg-base-content/30">
                You were the Chosen One!
              </div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <Image
                  className="mask mask-squircle"
                  src={faisal}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="chat-bubble bg-indigo-500">I hate you!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
          </div>
          {/* Submit Section */}
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
        </div>
      </div>
    </Dashboard>
  );
};

export default message;
