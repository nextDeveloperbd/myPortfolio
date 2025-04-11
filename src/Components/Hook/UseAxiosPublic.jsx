import axios from 'axios';

 const axiosPublic = axios.create({
    baseURL: 'https://portfolio-server-psi-six.vercel.app',
    // baseURL: 'https://api.orbitshiftbd.com/',
    // baseURL: 'http://localhost:5000',
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;