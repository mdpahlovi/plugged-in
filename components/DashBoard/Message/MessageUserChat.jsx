import Image from "next/image";
import pahlovi from "../../../public/images/team/pahlovi.png";

const MessageUserChat = () => {
    return (
        <div className="flex items-center px-4 py-2 transition duration-300 border-b cursor-pointer hover:bg-base-content/10">
            <Image className="mask mask-squircle" src={pahlovi} alt="username" width={40} height={40} />
            <div className="w-full">
                <div className="-mb-1 flex justify-between items-center">
                    <h3 className="ml-2 font-semibold">Gobinda</h3>
                    <p className="ml-2 text-sm">25 minutes</p>
                </div>
                <p className="ml-2 text-sm">bye</p>
            </div>
        </div>
    );
};

export default MessageUserChat;
