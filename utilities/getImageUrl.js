import axios from "axios";

export const getImageUrl = async (image) => {
    if (image) {
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=2e62b0372ad021474fc2fd26c812f9d7`;
        const res = await axios.post(url, formData);
        return res.data.data;
    }
};
