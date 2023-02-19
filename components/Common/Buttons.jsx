import { ThreeCircles } from "react-loader-spinner";

export const Button = ({ children, onClick, className, type }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-6 py-3 text-white transition-all duration-300 rounded-full bg-gradient-to-br from-secondary via-primary to-accent  hover:from-accent hover:via-primary hover:to-secondary cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
};

export const ButtonOutline = ({ children, onClick, sm }) => {
    return (
        <div onClick={onClick} className="relative h-max p-[1px] flex items-center justify-center overflow-hidden group rounded-full cursor-pointer">
            <span className="w-full h-full bg-gradient-to-br from-secondary via-primary to-accent  group-hover:from-accent group-hover:via-primary group-hover:to-secondary absolute"></span>
            <span
                className={`w-full text-center relative ${
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
        <div
            onClick={onClick}
            className={`${className} relative p-[1px] inline-flex items-center justify-center overflow-hidden group rounded-full cursor-pointer`}
        >
            <span className="w-full h-full bg-gradient-to-br from-secondary via-primary to-accent  group-hover:from-accent group-hover:via-primary group-hover:to-secondary absolute"></span>
            <span className="relative p-2 transition-all ease-out bg-base-100 rounded-full group-hover:bg-opacity-0 duration-400">
                <span className="relative text-base-content group-hover:text-white">{children}</span>
            </span>
        </div>
    );
};

export const SpinLoader = ({ children, black }) => {
    return (
        <div className="flex items-center justify-center gap-2.5">
            <ThreeCircles height="24" width="24" color={black ? "#000" : "#fff"} />
            {children ? children : "Loading"}
        </div>
    );
};
