import axios from "axios";

export const request = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

export const get = async (path, option = {}) => {
  const res = await request.get(path, option);

  return res.data;
};
