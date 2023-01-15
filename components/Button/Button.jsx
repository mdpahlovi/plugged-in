import Link from "next/link";

const Button = ({ children, href }) => {
    return (
        <Link
            href={href}
            className="px-6 py-3 text-white transition-all duration-300 rounded-full bg-gradient-to-br from-[#2F0D77] via-[#201172] to-[#816EEF]  hover:from-[#816EEF] hover:via-[#201172] hover:to-[#2F0D77] md:w-auto"
        >
            {children}
        </Link>
    );
};

export default Button;
