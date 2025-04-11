import React from 'react';
import Hooks from './Hooks';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from './UseAxiosSecure';

const UseAdmin = () => {
    const axiosSecure = UseAxiosSecure()
   const{user} = Hooks()
   const {data : isAdmin=[]} = useQuery({
    queryKey : [user?.email, 'isAdmin'],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/user/admin/${user.email}`)
        console.log(res.data);        
        return res.data.admin;
    }
   })
   return [isAdmin, axiosSecure]
};

export default UseAdmin;