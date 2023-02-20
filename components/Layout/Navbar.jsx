import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Light from "../../public/logo/light.png";
import Dark from "../../public/logo/dark.png";
import ThemeToggle from "../Common/ThemeToggle";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { ButtonOutline, IconButton, SpinLoader } from "../Common/Buttons";
import { useAuth } from "../../hooks/useAuth";
import NoPhoto from "../../public/images/no-photo.jpg";
import { useTheme } from "../../hooks/useTheme";

const navItems = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/price", name: "Pricing" },
    { href: "/contact", name: "Contact" },
    { href: "/blogs", name: "Blogs" },
];

const Navbar = () => {
    const { theme } = useTheme();
    const { pathname } = useRouter();
    const [open, setOpen] = useState(false);
    const { user, loading, userLoading } = useAuth();

    return (
        <nav className="border-b fixed w-full z-10 bg-base-100">
            <div className="navbar justify-between container mx-auto px-6 sm:px-8">
                <Link href="/" className="navbar-start w-max">
                    <Image src={theme === "dark" ? Dark : Light} alt="logo" width={100} />
                </Link>

                <div className="navbar-end w-max gap-4">
                    <div className="mr-2 hidden md:flex gap-6">
                        {navItems.map(({ href, name }, index) => (
                            <div
                                key={index}
                                className={
                                    pathname === href
                                        ? "active-link tracking-wider font-semibold"
                                        : "active-link hover:tracking-wider after:scale-x-0 hover:after:scale-x-105"
                                }
                            >
                                <Link href={href}>{name}</Link>
                            </div>
                        ))}
                    </div>
                    {loading || userLoading ? (
                        <div>
                            <ButtonOutline sm>
                                <SpinLoader black>
                                    <span className="hidden xs:block">Loading</span>
                                </SpinLoader>
                            </ButtonOutline>
                        </div>
                    ) : user?._id ? (
                        <div className="relative">
                            <Image
                                src={user?.avatar ? user.avatar : NoPhoto}
                                alt=""
                                width={34}
                                height={34}
                                className="absolute rounded-full top-0.5 left-0.5 z-10"
                            />
                            <Link href="/dashboard">
                                <ButtonOutline sm>
                                    <div className="pl-6">
                                        D<span className="hidden xs:inline-block">ashboard</span>
                                    </div>
                                </ButtonOutline>
                            </Link>
                        </div>
                    ) : (
                        <Link href="/login">
                            <ButtonOutline sm>Login</ButtonOutline>
                        </Link>
                    )}
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
                {navItems.map(({ href, name }, index) => (
                    <div
                        key={index}
                        className={
                            pathname === href ? "active-link tracking-wider" : "active-link hover:tracking-wider after:scale-x-0 hover:after:scale-x-105"
                        }
                    >
                        <Link href={href}>{name}</Link>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
