const Header = ({ className, children }) => {
    return (
        <div className="hero bg-header">
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className={`hero-content flex-col gap-2 text-center text-white py-10 px-6 ${className}`}>{children}</div>
        </div>
    );
};

export default Header;
