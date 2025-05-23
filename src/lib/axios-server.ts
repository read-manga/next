import axios from "axios";

export const axiosServer = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_AUTH_URL,
    withCredentials: true,
  });
};
