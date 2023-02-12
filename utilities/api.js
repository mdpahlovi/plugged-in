import axios from "axios";

export const api_url = "https://plugged-in-server.onrender.com/";
// https://plugged-in-server.onrender.com/
// https://plugged-in-server.onrender.com
export const jwt_axios = axios.create({
  baseURL: api_url,
  headers: {
    authorization: `Bearer ${
      typeof window !== "undefined" ? localStorage.getItem("plugged-token") : ""
    }`,
  },
});
