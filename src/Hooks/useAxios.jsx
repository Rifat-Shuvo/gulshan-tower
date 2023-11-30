import axios from 'axios';

const axiosbase = axios.create({
    baseURL: 'https://my-apartment-server.vercel.app'
})
const useAxios = () => {
    return axiosbase
};

export default useAxios;