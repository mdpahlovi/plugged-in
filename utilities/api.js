import axios from "axios";

export const api_url = "https://plugged-in-server.vercel.app";

export const jwt_axios = axios.create({
  baseURL: api_url,
  headers: {
    authorization: `Bearer ${
      typeof window !== "undefined" ? localStorage.getItem("plugged-token") : ""
    }`,
  },
});
