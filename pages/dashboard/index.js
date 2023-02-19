import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, ButtonOutline } from "../../components/Common/Buttons";
import ProfileLoading from "../../components/DashBoard/ProfileLoading";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";
import NoPhoto from "../../public/images/no-photo.jpg";
import { jwt_axios } from "../../utilities/api";
import { getImageUrl } from "../../utilities/getImageUrl";
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { MdLocationPin } from 'react-icons/md'
import {BsFillTelephoneFill } from 'react-icons/bs'

const Profile = () => {
    const { userLoading, user, updateUserAvatar, authRefetch, setAuthRefetch } = useAuth();
    const [updateLoading, setUpdateLoading] = useState(false);

    if (userLoading) {
        return (
            <Dashboard title={`User in PluggedIn`}>
                <ProfileLoading />
            </Dashboard>
        );
    } else {
        const handleProfile = (event) => {
            setUpdateLoading(true);
            const file = event.target.files[0];
            getImageUrl(file)
                .then((data) => {
                    jwt_axios
                        .patch(`/user/${user?.email}`, { avatar: data.url })
                        .then((res) => {
                            updateUserAvatar(data.url)
                                .then(() => {
                                    setAuthRefetch(!authRefetch);
                                    setUpdateLoading(false);
                                    toast.success("Profile Uploaded");
                                })
                                .catch((error) => console.log(error));
                        })
                        .catch((error) => console.log(error));
                })
                .catch((error) => console.log(error));
        };

        return (
            <Dashboard title={`${user?.name} in PluggedIn`}>
                  <div className="bg-base-100 antialiased">
            <div className="container mx-auto my-20">
                    <div className="bg-base-100 relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto border  border-shadow-lg">
                        <div className={`flex justify-center mx-auto ${user?.avatar ? "-mb-16" : "-mb-32"} w-max h-max`}>
                    {user?.avatar ? (
                        <Image src={user.avatar} alt="" width={128} height={128} className="profile-avatar absolute -top-20" />
                    ) : (
                        <div className="flex flex-col items-center">
                            <Image src={NoPhoto} alt="" width={128} height={128} className="profile-avatar absolute -top-20" />
                            <div className="mt-16 relative text-lg text-center px-4 py-2 border rounded-lg">
                                {updateLoading ? "Updating..." : "Upload Your Profile"}
                                <input type="file" onChange={(event) => handleProfile(event)} className="absolute w-full h-full inset-0 opacity-0" />
                            </div>
                        </div>
                    )}
                </div>


                        <div className={`${user?.avatar?  "mt-32" : "mt-16" }`}>
                        <div className="flex justify-end">  
                        <button className="absolute top-0 text-white p-1 bg-gradient-to-br from-secondary via-primary to-accent  hover:from-accent hover:via-primary hover:to-secondary cursor-pointer">Edit Profile</button>
                    </div>  
                            <h1 className="font-bold text-center text-3xl mb-0">{user.name}</h1>
                            <p className="text-center text-sm font-medium">{user.email}</p>

                            <div className="w-full">
                                <h3 className="font-semibold text-left my-2 px-6">Personal details</h3>
                                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                    <a className="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                    <FaUser className='inline mr-3 text-lg font-bold' />
                                        <span className="text-sm block">User name : </span>
                                        <span className="ml-2 text-base block">{user.name}</span>
                                    </a>

                                    <a className="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                    <MdEmail className='inline mr-3 text-lg font-bold' />
                                        <span className="text-sm block">User email : </span>
                                        <span className="ml-2 text-base block">{user.email}</span>
                                    </a>
                                    {
                                        user.address ?
                                            <a className="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                             < MdLocationPin className='inline mr-3 text-lg font-bold' />
                                                <span className="text-sm block">Address : </span>
                                                <span className="ml-2 text-sm block">Road: {user.road}, House: {user.house}</span>
                                            </a> :
                                            <a className="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                              < MdLocationPin className='inline mr-3 text-lg font-bold' />
                                                <span className="text-sm block">Address : </span>
                                                <span className="ml-2 text-base block text-red-500">Please Set Your Address</span>
                                            </a>
                                    }
                                    {
                                        user.phone ?
                                            <a className="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                                 < BsFillTelephoneFill className='inline mr-3 text-lg font-bold' />
                                                <span className="text-sm block">Contact no. : </span>
                                                <span className="ml-2 text-base block">{user.phone}</span>
                                            </a> :
                                            <a className="w-full border-t border-gray-100 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150 flex justify-start items-center">
                                              < BsFillTelephoneFill className='inline mr-3 text-lg font-bold' />   
                                                <span className="text-sm block">Contact no. : </span>
                                                <span className="ml-2 text-base block text-red-500">Please Set Your Contact No</span>
                                            </a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
  {/* Start Recent Activities */}
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
                    {/* End Recent Activities */}
            </div>
        </div>
        
            </Dashboard>
        );
    }
};

export default Profile;
