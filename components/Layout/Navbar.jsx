import { useState } from "react";
import Link from "next/link";
import LightLogo from "../../public/logo/light-logo.png";
import Image from "next/image";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

const NavItems = () => {
    return (
        <>
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>
                <Link href="/pricing">Pricing</Link>
            </div>
            <div>
                <Link href="/about">About Us</Link>
            </div>
        </>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="navbar px-6 border-b">
                <Link href="/" className="navbar-start">
                    <Image src={LightLogo} alt="logo" width={90} />
                </Link>

                <div className="navbar-end gap-4 md:gap-6">
                    <div className="hidden md:flex gap-6">
                        <NavItems />
                    </div>
                    <Link href="/login" className="btn btn-primary btn-outline btn-sm">
                        Login
                    </Link>
                    <label className="swap swap-rotate text-xl btn btn-primary btn-outline btn-sm md:hidden">
                        <input type="checkbox" onClick={() => setOpen(!open)} />
                        <CgMenuRightAlt className="swap-off" />
                        <CgClose className="swap-on" />
                    </label>
                </div>
            </nav>

            <div
                className={`w-[calc(100%-3rem)] fixed mx-6 mt-2 p-4 border rounded-lg bg-base-100 flex flex-col items-center gap-4 ${
                    open ? "scale-y-100" : "scale-y-0"
                } transition-all origin-top duration-500 md:hidden`}
            >
                <NavItems />
            </div>
        </>
    );
};

export default Navbar;
