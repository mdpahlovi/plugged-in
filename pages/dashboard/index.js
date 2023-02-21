import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { SpinLoader } from "../../components/Common/Buttons";
import ProfileLoading from "../../components/DashBoard/ProfileLoading";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";
import NoPhoto from "../../public/images/no-photo.jpg";
import { jwt_axios } from "../../utilities/api";
import { getImageUrl } from "../../utilities/getImageUrl";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocalActivity, MdLocationPin } from "react-icons/md";
import UploadProfileModal from "../../components/DashBoard/UploadProfileModal";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { userLoading, user, userRefetch } = useAuth();
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
            const file = event?.type === "change" ? event?.target?.files[0] : event?.avatar[0];
            if (file) {
                getImageUrl(file)
                    .then((data) => {
                        jwt_axios
                            .patch(`/user/${user?.email}`, event?.type !== "change" ? { ...event, avatar: data.url } : { avatar: data.url })
                            .then((res) => {
                                userRefetch();
                                setUpdateLoading(false);
                                setIsOpen(false);
                                toast.success("Profile uploaded successfully");
                            })
                            .catch((error) => console.log(error));
                    })
                    .catch((error) => console.log(error));
            } else {
                jwt_axios
                    .patch(`/user/${user?.email}`, { ...event, avatar: user?.avatar })
                    .then((res) => {
                        userRefetch();
                        setUpdateLoading(false);
                        setIsOpen(false);
                        toast.success("Profile uploaded successfully");
                    })
                    .catch((error) => console.log(error));
            }
        };

        return (
            <Dashboard title={`${user?.name} in PluggedIn`}>
                <h1 className="text-center">Welcome {user?.name} To PluggedIn</h1>
                <div className="relative shadow rounded-lg border pt-16 mt-20">
                    <div className={`flex justify-center mx-auto`}>
                        {user?.avatar ? (
                            <Image src={user.avatar} alt="" width={128} height={128} className="profile-avatar absolute -top-16" />
                        ) : (
                            <div className="flex flex-col items-center">
                                <Image src={NoPhoto} alt="" width={128} height={128} className="profile-avatar absolute -top-16" />
                                <div className="mt-6 relative text-lg text-center px-4 py-2 border rounded-lg">
                                    {updateLoading ? <SpinLoader black>Uploading</SpinLoader> : "Upload Your Profile"}
                                    <input type="file" onChange={(event) => handleProfile(event)} className="absolute w-full h-full inset-0 opacity-0" />
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <button onClick={() => setIsOpen(true)} className="absolute rounded top-0 right-0 px-1.5 py-0.5 flex items-center gap-2 button">
                            <FaUserEdit />
                            Profile
                        </button>
                        <div>
                            <h2 className="py-4 pl-6">Personal Details</h2>
                            <div className="w-full flex flex-col">
                                <h3 className="profile-info">
                                    <FaUser className="text-lg mr-3" />
                                    Name : {user?.name ? user.name : "No Name"}
                                </h3>
                                <h3 className="profile-info">
                                    <MdEmail className="text-lg mr-3" />
                                    Email : {user?.email}
                                </h3>
                                <h3 className="profile-info">
                                    <MdLocationPin className="text-lg mr-3" />
                                    Address : {user?.address ? user.address : <span>Please Set Your Address</span>}
                                </h3>
                                <h3 className="profile-info">
                                    <BsFillTelephoneFill className="text-lg mr-3" />
                                    Contact No : {user?.phone ? user.phone : <span>Please Set Your Contact No</span>}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Recent Activities */}
                <div className="mt-8 shadow rounded-lg border">
                    <h2 className="py-4 pl-6">Recent activities</h2>
                    <div className="w-full flex flex-col items-center overflow-hidden text-sm">
                        <a href="#" className="profile-info">
                            <MdLocalActivity className="text-lg mr-3" />
                            Joined a Video
                            <span className="text-gray-500 text-xs ml-2">24 min ago</span>
                        </a>
                        <a href="#" className="profile-info">
                            <MdLocalActivity className="text-lg mr-3" />
                            Edited Profile settings
                            <span className="text-gray-500 text-xs ml-2">1 day ago</span>
                        </a>
                        <a href="#" className="profile-info">
                            <MdLocalActivity className="text-lg mr-3" />
                            You have Record Total 10 Videos
                        </a>
                    </div>
                </div>
                {/* Update Profile Modal */}
                <UploadProfileModal
                    isOpen={isOpen}
                    handleClose={() => setIsOpen(false)}
                    user={user}
                    handleProfile={handleProfile}
                    updateLoading={updateLoading}
                />
            </Dashboard>
        );
    }
};

export default Profile;
