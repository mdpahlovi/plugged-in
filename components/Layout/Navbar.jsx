import { useState } from "react";
import Link from "next/link";
import Logo from "../../public/logo/logo.png";
import Image from "next/image";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import ThemeToggle from "../ThemeToggle";
import SecButton from "../Button/SecButton";
import IconButton from "../Button/IconButton";

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
        <nav className="border-b fixed w-full z-10 bg-base-100">
            <div className="navbar justify-between container mx-auto px-6 sm:px-8">
                <Link href="/" className="navbar-start w-max">
                    <Image src={Logo} alt="logo" width={100} />
                </Link>

                <div className="navbar-end w-max gap-4">
                    <div className="mr-2 hidden md:flex gap-6">
                        <NavItems />
                    </div>
                    <SecButton href="/login">Login</SecButton>
                    <ThemeToggle />
                    <label className="swap swap-rotate md:hidden">
                        <input type="checkbox" onClick={() => setOpen(!open)} />
                        <IconButton className="swap-off text-xl">
                            <CgMenuRightAlt />
                        </IconButton>
                        <IconButton className="swap-on text-xl">
                            <CgClose />
                        </IconButton>
                    </label>
                </div>
            </div>

            <div
                className={`w-[calc(100%-3rem)] fixed mx-6 mt-2 p-4 border rounded-lg bg-base-100 flex flex-col items-center gap-4 ${
                    open ? "scale-y-100" : "scale-y-0"
                } transition-all origin-top duration-500 md:hidden`}
            >
                <NavItems />
            </div>
        </nav>
    );
};

export default Navbar;
