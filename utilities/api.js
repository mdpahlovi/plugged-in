import axios from "axios";

export const api_url = "http://localhost:5000";

export const jwt_axios = axios.create({
  baseURL: api_url,
  headers: {
    authorization: `Bearer ${
      typeof window !== "undefined" ? localStorage.getItem("plugged-token") : ""
    }`,
  },
});
