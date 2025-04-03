import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Details = () => {
    const[details, setDetails] = useState([])
    
            
           useEffect(()=>{
            axios.get(`https://portfolio-server-psi-six.vercel.app/details/67eed2aa7ba894425ea8163b`)
            .then(res =>{
                setDetails(res.data)        
            })
           },[]);
    return (
        <div>
            <h1>Details: {details._id}</h1>
        </div>
    );
};

export default Details;