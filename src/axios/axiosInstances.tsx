import axios from "axios";


const axiosInstance = axios.create({
    baseURL:"https://social-media-rest-apis-1.onrender.com/api/"
});


axiosInstance.interceptors.response.use((response) => {
    return response;
},(error) => {
    return Promise.reject(error);
})


export default axiosInstance; 