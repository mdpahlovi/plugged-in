import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, SpinLoader } from "../../components/Common/Buttons";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";
import Light from "../../public/images/file_upload/light.svg";
import Dark from "../../public/images/file_upload/dark.svg";
import { readFileAsBase64 } from "../../utilities/readFile";
import { useTheme } from "../../hooks/useTheme";

const AddMedia = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [uploadLoading, setUploadLoading] = useState(false);
  const [updatedMedia, setUpdatedMedia] = useState();
  const [updatedMediaUrl, setUpdatedMediaUrl] = useState();

  const handleAddMedia = async (event) => {
    const file = event.target.files[0];
    console.log(file);
    setUpdatedMedia(file);
    setUpdatedMediaUrl(await readFileAsBase64(file));
  };

  const handleDrag = async (event) => {
    event.preventDefault();
    const draggedFile = event?.dataTransfer?.files[0];
    console.log(draggedFile);
    setUpdatedMedia(draggedFile);
    setUpdatedMediaUrl(await readFileAsBase64(draggedFile));
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
          authorEmail: user?.email,
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
        <h1 className="mb-0">Upload Media!</h1>
        <p className="mt-0.5">Add title and update your media to store.</p>
      </div>
      <form
        onSubmit={(event) => handleUploadMedia(event, updatedMedia)}
        className="mt-4 space-y-3"
      >
        <div className="grid grid-cols-1 space-y-2">
          <label className="font-bold tracking-wide">Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Add media title"
          />
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <label className="font-bold tracking-wide">Attach Document</label>
          {updatedMediaUrl ? (
            <video
              src={updatedMediaUrl}
              className="video"
              controls
              autoPlay
            ></video>
          ) : (
            <label className="flex items-center rounded-lg border-4 border-dashed aspect-video group text-center">
              <div
                onDragOver={(event) => {
                  event.preventDefault();
                }}
                onDrop={handleDrag}
                className="text-center mx-auto"
              >
                <Image
                  className="h-36 object-center"
                  src={theme === "light" ? Light : Dark}
                  alt=""
                />
                <h5>
                  Drag and drop files here <br /> or{" "}
                  <span className="font-bold text-primary hover:underline mr-1">
                    select a file
                  </span>
                  from your computer
                </h5>
              </div>
              <input
                type="file"
                className="hidden"
                onChange={(event) => handleAddMedia(event)}
                accept="video/*"
              />
            </label>
          )}
        </div>
        <p className="text-sm">
          <span>File type: mp4,mp3,types of audio or video</span>
        </p>
        {updatedMedia ? (
          <Button type="submit" className="w-full">
            {uploadLoading ? <SpinLoader>Uploading</SpinLoader> : "Upload"}
          </Button>
        ) : (
          ""
        )}
      </form>
    </Dashboard>
  );
};

export default AddMedia;
