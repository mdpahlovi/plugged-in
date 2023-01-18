import Image from "next/image";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";

const Profile = () => {
    const { authUser } = useAuth();

    return (
        <Dashboard title={`${authUser?.displayName} - PluggedIn`}>
            <h1 className="mt-10 text-center">Welcome {authUser?.displayName} To PluggedIn</h1>
            <div className="container mt-28">
                <div className="bg-white relative shadow rounded-lg w-full md:w-full  lg:w-full xl:w-full ">
                    <div className="flex justify-center">
                        <Image
                            src={authUser?.photoURL}
                            alt=""
                            className="rounded-full mx-auto absolute -top-20 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                            width={128}
                            height={128}
                        />
                    </div>

                    <div className="mt-16">
                        <h2 className="text-center">{authUser?.displayName}</h2>
                        <p className="text-center text-sm text-gray-400 font-medium">Online Video Service System</p>
                        <p>
                            <span></span>
                        </p>
                        <div className="my-5 px-6">
                            <a
                                href="#"
                                className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gradient-to-br from-[#2F0D77] via-[#201172] to-[#816EEF] hover:bg-black hover:text-white"
                            >
                                Connect with <span className="font-bold">@pluggedin</span>
                            </a>
                        </div>
                        <div className="flex justify-between items-center my-5 px-6">
                            <a
                                href=""
                                className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                            >
                                Facebook
                            </a>
                            <a
                                href=""
                                className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                            >
                                Twitter
                            </a>
                            <a
                                href=""
                                className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                            >
                                Instagram
                            </a>
                            <a
                                href=""
                                className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                            >
                                Email
                            </a>
                        </div>

                        <div className="w-full">
                            <h3 className="font-medium text-gray-900 text-left px-6">Recent activities</h3>
                            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                <a
                                    href="#"
                                    className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150"
                                >
                                    <Image
                                        src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                                        alt=""
                                        className="rounded-full shadow-md inline-block mr-2"
                                        width={24}
                                        height={24}
                                    />
                                    Joined a Video
                                    <span className="text-gray-500 text-xs ml-2">24 min ago</span>
                                </a>
                                <a
                                    href="#"
                                    className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150"
                                >
                                    <Image
                                        src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                                        alt=""
                                        className="rounded-full shadow-md inline-block mr-2"
                                        width={24}
                                        height={24}
                                    />
                                    Edited Profile settings
                                    <span className="text-gray-500 text-xs ml-2">1 day ago</span>
                                </a>
                                <a
                                    href="#"
                                    className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150"
                                >
                                    <Image
                                        src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                                        alt=""
                                        className="rounded-full shadow-md inline-block mr-2"
                                        width={24}
                                        height={24}
                                    />
                                    You have Record Total 10 Videos
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default Profile;
