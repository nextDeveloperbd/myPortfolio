import axios from "axios";
import { useNavigate } from "react-router-dom";
import Hooks from "./Hooks";

const axiosSecure = axios.create({
    baseURL: 'https://portfolio-server-psi-six.vercel.app',
    // baseURL: 'https://api.orbitshiftbd.com/',
    // baseURL: 'http://localhost:5000',
});

const UseAxiosSecure = () => {
    const navigate = useNavigate()
    const{logOut} = Hooks()
    //request interceptor to add authorization header from every secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`        
        return config;
    }, function(error){
        return Promise.reject(error)
    });
    //intercepts for 401 and 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async(error)=>{
        const status = error.response;
        console.log('status error in the interceptors', status);
        //For 401 or 403 logout the user and move the user to the login
        if(status === 401 || status === 403){
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })


    return axiosSecure
};

export default UseAxiosSecure;