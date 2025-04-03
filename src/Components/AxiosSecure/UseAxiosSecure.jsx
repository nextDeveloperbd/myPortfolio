import React, { useEffect } from 'react';
import axios from "axios";

 const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // withCredentials: true 
})

const UseAxiosSecure = () => {
    //logout should import form auth context
    //navigate should import 
   useEffect(()=>{
     axiosSecure.interceptors.response.use(res => {
        return res
    }, async error => {
        console.log('error from axios interceptors', error.response)
        if(error.response.status === 401 || error.response.status === 403){
            //logout
            //navigate to login
        }        
    }
)
   },[])
   return axiosSecure;
    
};

export default UseAxiosSecure;