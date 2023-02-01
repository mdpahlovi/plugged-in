import Image from "next/image";
import { useState } from "react";
import { Button, ButtonOutline } from "../../components/Buttons";
import ProfileLoading from "../../components/DashBoard/ProfileLoading";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";
import useGetUser from "../../hooks/useGetUser";
import Avatar from "../../public/images/avatar.png";
import { api_url, jwt_axios } from "../../utilities/api";
import { getImageUrl } from "../../utilities/getImageUrl";

const Profile = () => {
    const { loading, authUser, updateUserAvatar } = useAuth();

    if (loading) {
        return (
            <Dashboard title={`User in PluggedIn`}>
                <ProfileLoading />
            </Dashboard>
        );
    } else {
        const handleProfile = (event) => {
            const file = event.target.files[0];
            getImageUrl(file)
                .then((data) => {
                    updateUserAvatar(data.url)
                        .then(() => toast.success("Profile Uploaded"))
                        .catch((error) => console.log(error));
                })
                .catch((error) => console.log(error));
        };

        return (
            <Dashboard title={`${authUser?.displayName} in PluggedIn`}>
                <h1 className="mt-8 mb-5 text-center">Welcome {authUser?.displayName} To PluggedIn</h1>
                <div className={`mx-auto ${authUser?.photoURL ? "-mb-16" : "-mb-32"} w-max h-max`}>
                    {authUser?.photoURL ? (
                        <Image src={authUser.photoURL} alt="" width={128} height={128} className="profile-avatar" />
                    ) : (
                        <div className="flex flex-col items-center">
                            <Image src={Avatar} alt="" width={128} height={128} className="profile-avatar" />
                            <div className="mt-6 relative text-lg text-center px-4 py-2 border rounded-lg">
                                Upload Your Profile
                                <input type="file" onChange={(event) => handleProfile(event)} className="absolute w-full h-full inset-0 opacity-0" />
                            </div>
                        </div>
                    )}
                </div>
                <div className={`shadow rounded-lg space-y-6 ${authUser?.photoURL ? "pt-20" : "pt-36"} px-6`}>
                    <div className="text-center">
                        <h2>{authUser?.displayName}</h2>
                        <p className="text-sm -mb-2">Online Video Service System</p>
                    </div>
                    <Button className="w-full">
                        Connect with <span className="font-bold">@pluggedin</span>
                    </Button>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <ButtonOutline>Facebook</ButtonOutline>
                        <ButtonOutline>Twitter</ButtonOutline>
                        <ButtonOutline>Instagram</ButtonOutline>
                        <ButtonOutline>Email</ButtonOutline>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-medium -mt-2">Recent activities</h3>
                        <div className="w-full flex flex-col items-center overflow-hidden text-sm">
                            <a href="#" className="w-full border-t opacity-75 py-4 block hover:bg-base-content/10 transition">
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
                            <a href="#" className="w-full border-t opacity-75 py-4 block hover:bg-base-content/10 transition">
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
                            <a href="#" className="w-full border-t opacity-75 py-4 block hover:bg-base-content/10 transition">
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
            </Dashboard>
        );
    }
};

export default Profile;
