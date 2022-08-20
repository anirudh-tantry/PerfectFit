import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;
const token = JSON.parse(localStorage.getItem("persist:users")).token;

console.log(token)

const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token?.slice(1,-1)}` },
});
// : axios.create({
//     withCredentials: true,
//     baseURL: BASE_URL,
//   });

export const userAxios = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}}` },
});

export default instance;
