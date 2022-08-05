import axios from "axios";

const $axios = axios.create({
  url: process.env.BACKEND_URL,
  headers: {
    "Content-type": "application/json",
  },
});

// Response interceptor for API calls
$axios.interceptors.response.use((response) => {
  const token = localStorage.getItem("token");
  response.headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  };
  return response;
});

export { $axios };
