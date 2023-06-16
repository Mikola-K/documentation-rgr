import axios from "axios";
import store from "../store/store";

const { accessToken } = store.getState();
const axiosInstance = axios.create({
  baseURL: "http://localhost:8082",
  headers: {
    Authorization: accessToken,
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const { accessToken } = store.getState(); 
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;



// import Axios from "axios";

// const axiosInstance = Axios.create({
//   baseURL: "http://localhost:3000",
//   headers: {
//     Authorization: "jwtToken",
//   },
// });

// export default axiosInstance;