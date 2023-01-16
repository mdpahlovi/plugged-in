export const Button = ({ children }) => {
    return (
        <div className="px-6 py-3 text-white transition-all duration-300 rounded-full bg-gradient-to-br from-[#2F0D77] via-[#201172] to-[#816EEF]  hover:from-[#816EEF] hover:via-[#201172] hover:to-[#2F0D77] md:w-auto">
            {children}
        </div>
    );
};

export const ButtonOutline = ({ children, onClick, sm }) => {
    return (
        <div onClick={onClick} className="relative h-max p-[1px] flex items-center justify-center overflow-hidden group rounded-full">
            <span className="w-full h-full bg-gradient-to-br from-[#2F0D77] via-[#201172] to-[#816EEF]  group-hover:from-[#816EEF] group-hover:via-[#201172] group-hover:to-[#2F0D77] absolute"></span>
            <span
                className={`relative ${
                    sm ? "px-4 py-1.5" : "px-6 py-[11px]"
                } transition-all ease-out bg-base-100 rounded-full group-hover:bg-opacity-0 duration-400`}
            >
                <span className="relative text-base-content group-hover:text-white">{children}</span>
            </span>
        </div>
    );
};

export const IconButton = ({ children, className, onClick }) => {
    return (
        <div onClick={onClick} className={`${className} relative p-[1px] inline-flex items-center justify-center overflow-hidden group rounded-full`}>
            <span className="w-full h-full bg-gradient-to-br from-[#2F0D77] via-[#201172] to-[#816EEF]  group-hover:from-[#816EEF] group-hover:via-[#201172] group-hover:to-[#2F0D77] absolute"></span>
            <span className="relative p-2 transition-all ease-out bg-base-100 rounded-full group-hover:bg-opacity-0 duration-400">
                <span className="relative text-base-content group-hover:text-white">{children}</span>
            </span>
        </div>
    );
};
