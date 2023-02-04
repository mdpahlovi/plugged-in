import { Icons, Link, Mic, Sent } from "./MessageIcon";

const MessageFooter = () => {
    return (
        <div className="h-max flex items-center justify-between px-4 py-3 border-t gap-3">
            <Icons className="w-8 h-8 cursor-pointer" />
            <Link className="w-8 h-8 cursor-pointer" />
            <input type="text" placeholder="Message" className="input rounded-full" name="message" required />
            <Mic className="w-8 h-8 cursor-pointer" />
            <Sent className="w-8 h-8 rotate-90 cursor-pointer" />
        </div>
    );
};

export default MessageFooter;
