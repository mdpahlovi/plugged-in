import Image from "next/image";
import { Button, ButtonOutline } from "../../components/Buttons";
import ProfileLoading from "../../components/DashBoard/ProfileLoading";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";
import useGetUser from "../../hooks/useGetUser";
import Avatar from "../../public/images/avatar.png";

const Profile = () => {
    const { loading, authUser } = useAuth();
    const { userLoading, user } = useGetUser(authUser?.email);

    if (userLoading || loading) {
        return (
            <Dashboard title={`User in PluggedIn`}>
                <ProfileLoading />
            </Dashboard>
        );
    } else {
        return (
            <Dashboard title={`${user?.name} in PluggedIn`}>
                <h1 className="mt-10 text-center">Welcome {user?.name} To PluggedIn</h1>
                <div className="mt-28">
                    <div className="relative shadow rounded-lg w-full md:w-full lg:w-full xl:w-full">
                        <div className="flex justify-center">
                            {user?.avatar ? (
                                <Image
                                    src={user?.avatar}
                                    alt=""
                                    className="rounded-full mx-auto absolute -top-20 shadow-md border-4 border-base-100 transition duration-200 transform hover:scale-110"
                                    width={128}
                                    height={128}
                                />
                            ) : (
                                <div>
                                    <Image
                                        src={Avatar}
                                        alt=""
                                        className="rounded-full mx-auto absolute -top-20 shadow-md border-4 border-base-100 transition duration-200 transform hover:scale-110"
                                        width={128}
                                        height={128}
                                    />
                                    <div className="relative text-lg text-center mt-20 -mb-10 px-4 py-2 border rounded-lg">
                                        Upload Your Profile
                                        <input type="file" className="absolute w-full h-full inset-0 opacity-0" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-16">
                            <h2 className="text-center">{user?.name}</h2>
                            <p className="text-center text-sm">Online Video Service System</p>
                            <div className="my-5 px-6">
                                <Button className="w-full">
                                    Connect with <span className="font-bold">@pluggedin</span>
                                </Button>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5 px-6">
                                <ButtonOutline>Facebook</ButtonOutline>
                                <ButtonOutline>Twitter</ButtonOutline>
                                <ButtonOutline>Instagram</ButtonOutline>
                                <ButtonOutline>Email</ButtonOutline>
                            </div>

                            <div className="w-full">
                                <h3 className="font-medium px-6">Recent activities</h3>
                                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                    <a href="#" className="w-full border-t opacity-75 py-4 pl-6 pr-3 block hover:bg-base-content/10 transition">
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
                                    <a href="#" className="w-full border-t opacity-75 py-4 pl-6 pr-3 block hover:bg-base-content/10 transition">
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
                                    <a href="#" className="w-full border-t opacity-75 py-4 pl-6 pr-3 block hover:bg-base-content/10 transition">
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
    }
};

export default Profile;
