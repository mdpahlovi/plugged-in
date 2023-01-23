import axios from "axios";
import { useEffect, useState } from "react";

const useSetMediaToDb = (media, blob_url) => {
    const [confirmation, setConfirmation] = useState("");

    useEffect(() => {
        if (media && blob_url) {
            fetch(blob_url)
                .then((response) => response.blob())
                .then((blob) => {
                    const myFile = new File([blob], `demo.mp4`, { type: blob.type });
                    const formData = new FormData();
                    formData.append("file", myFile);
                    formData.append("upload_preset", "x2ijvhxw");
                    axios
                        .post("https://api.cloudinary.com/v1_1/dkgx3tgyq/video/upload", formData)
                        .then((res) => {
                            media.mediaUrl = res.data.url;
                            axios
                                .post("https://plugged-in-server.vercel.app/userRecords", media)
                                .then((res) => setConfirmation(res.data))
                                .catch((error) => console.log(error.message));
                        })
                        .catch((error) => {
                            console.error(error.message);
                        });
                });
            //
        }
    }, [media, blob_url]);

    return { confirmation };
};

export default useSetMediaToDb;
