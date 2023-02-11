import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../components/Common/Buttons";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";
import UploadMedia from "../../public/images/file-upload.svg";
import { readFileAsBase64 } from "../../utilities/readFile";

const AddMedia = () => {
    const { authUser } = useAuth();
    const [uploadLoading, setUploadLoading] = useState(false);
    const [updatedMedia, setUpdatedMedia] = useState();
    const [updatedMediaUrl, setUpdatedMediaUrl] = useState();

    const handleAddMedia = async (event) => {
        const file = event.target.files[0];
        setUpdatedMedia(file);
        setUpdatedMediaUrl(await readFileAsBase64(file));
    };

    const handleUploadMedia = (event, media) => {
        event.preventDefault();
        setUploadLoading(true);
        const formData = new FormData();
        formData.append("file", media);
        formData.append("upload_preset", "x2ijvhxw");
        axios
            .post("https://api.cloudinary.com/v1_1/dkgx3tgyq/video/upload", formData)
            .then((res) => {
                const mediaData = {
                    date: new Date(),
                    authorEmail: authUser?.email,
                    mediaType: updatedMedia.type.split("/")[0],
                    mediaUrl: res.data.url,
                    title: event.target.title.value,
                };
                axios
                    .post("https://plugged-in-server.onrender.com/userRecords", mediaData)
                    .then((res) => {
                        setUploadLoading(false);
                        setUpdatedMediaUrl("");
                        toast.success("Media Updated Successfully");
                    })
                    .catch((error) => console.error(error.message));
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    return (
        <Dashboard title="Add Media" className="max-w-[508px] mx-auto">
            <div className="text-center">
                <h2>File Upload!</h2>
                <p className="mt-0.5">Add title and update your file.</p>
            </div>
            <form onSubmit={(event) => handleUploadMedia(event, updatedMedia)} className="mt-4 space-y-3">
                <div className="grid grid-cols-1 space-y-2">
                    <label className="font-bold tracking-wide">Title</label>
                    <input type="text" name="title" className="input" placeholder="Add media title" />
                </div>
                <div className="grid grid-cols-1 space-y-2">
                    <label className="font-bold tracking-wide">Attach Document</label>
                    {updatedMediaUrl ? (
                        <video src={updatedMediaUrl} className="video" controls autoPlay></video>
                    ) : (
                        <label className="flex items-center rounded-lg border-4 border-dashed aspect-video group text-center">
                            <div className="text-center mx-auto">
                                <Image className="h-36 object-center" src={UploadMedia} alt="" />
                                <p>
                                    Drag and drop files here <br /> or <span className="text-blue-600 hover:underline mr-1">select a file</span>
                                    from your computer
                                </p>
                            </div>
                            <input type="file" className="hidden" onChange={(event) => handleAddMedia(event)} accept="video/*" />
                        </label>
                    )}
                </div>
                <p className="text-sm">
                    <span>File type: mp4,mp3,types of audio or video</span>
                </p>
                {updatedMedia ? (
                    <Button type="submit" className="w-full">
                        {uploadLoading ? "Uploading..." : "Upload"}
                    </Button>
                ) : (
                    ""
                )}
            </form>
        </Dashboard>
    );
};

export default AddMedia;
