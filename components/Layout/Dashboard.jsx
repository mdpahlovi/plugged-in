import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo/logo.png";
import { ImSearch } from "react-icons/im";
import { MdMenuOpen } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { ButtonOutline, IconButton } from "../Buttons";
import ThemeToggle from "../ThemeToggle";
import { useAuth } from "../../hooks/useAuth";

const Dashboard = ({ children, className }) => {
    const { logout } = useAuth();

    return (
        <div className="drawer z-10 drawer-mobile">
            <input id="drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Header Section */}
                <div class="min-h-[64px] fixed border-b w-full flex items-center justify-between px-6 lg:w-[calc(100%-18rem)]">
                    <div className="flex items-center gap-5">
                        <label htmlFor="drawer" className="lg:hidden mt-1">
                            <IconButton>
                                <MdMenuOpen className="text-xl" />
                            </IconButton>
                        </label>
                        <h2>PluggedIn</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div hidden class="relative h-full sm:flex items-center">
                            <ImSearch className="absolute text-xl left-2.5" />
                            <div className="absolute w-[1px] h-full bg-base-content/10 left-[38px]" />
                            <input type="search" name="search" placeholder="Search here" class="input h-10 focus:outline-none pl-12" />
                        </div>
                        <IconButton className="h-max sm:hidden">
                            <ImSearch className="text-xl" />
                        </IconButton>
                        <ThemeToggle />
                    </div>
                </div>
                <div className="py-8"></div>
                {/*  Content Here */}
                <main className={`p-6 ${className}`}>{children}</main>
            </div>
            <div className="drawer-side">
                <label htmlFor="drawer" className="drawer-overlay"></label>
                <div className="w-[18rem] h-screen flex flex-col justify-between bg-base-100 border-r p-6">
                    <div>
                        <Link href="/" className="block pb-6">
                            <Image src={Logo} alt="logo" width={144} />
                        </Link>

                        <button
                            href="#"
                            aria-label="dashboard"
                            class="relative flex items-center space-x-4 rounded-xl bg-gradient-to-br from-[#2F0D77] via-[#201172] to-[#816EEF] px-4 py-3 text-white"
                        >
                            <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                                    class="dark:fill-slate-600 fill-current text-secondary"
                                ></path>
                                <path
                                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                                    class="fill-current text-error group-hover:text-cyan-300"
                                ></path>
                                <path
                                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                                    class="fill-current group-hover:text-sky-300"
                                ></path>
                            </svg>
                            <span class="-mr-1 font-medium">Dashboard</span>
                        </button>

                        <button href="#" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    class="fill-current text-gray-300 group-hover:text-violet-900"
                                    fill-rule="evenodd"
                                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                    clip-rule="evenodd"
                                />
                                <path
                                    class="fill-current text-gray-600 group-hover:text-secondary dark:group-hover:text-sky-400"
                                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                />
                            </svg>
                            <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Categories</span>
                        </button>

                        <button href="#" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    class="fill-current text-gray-600 group-hover:text-violet-900 dark:group-hover:text-sky-400"
                                    fill-rule="evenodd"
                                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                    clip-rule="evenodd"
                                />
                                <path class="fill-current text-gray-300 group-hover:text-secondary" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                            <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Recording</span>
                        </button>

                        <button href="#" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    class="fill-current text-gray-600 group-hover:text-violet-900 dark:group-hover:text-cyan-400"
                                    d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                                />
                                <path class="fill-current text-gray-300 group-hover:text-secondary" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                            <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Other data</span>
                        </button>
                    </div>

                    <div>
                        <ButtonOutline onClick={logout}>
                            <div className="flex items-center gap-2">
                                <HiOutlineLogout className="text-xl" />
                                Log Out
                            </div>
                        </ButtonOutline>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
