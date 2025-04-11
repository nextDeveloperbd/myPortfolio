
import { useEffect, useState } from "react";
import UseAxiosSecure from "../Hook/UseAxiosSecure";

const Skils = () => {
    const[skills, setSkills] = useState([])
         const axiosSecure = UseAxiosSecure()
            
           useEffect(()=>{
            axiosSecure.get(`/serviceCart`)
            .then(res =>{
                setSkills(res.data)        
            })
           },[]);
    return (
        <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                skills?.map(skill => <div key={skill._id} className="serviceCart">
                    <img src={skill?.img_url} alt={skill?.title} className="w-12 h-12" />
                        <h2 className="text-xl font-semibold">{skill?.title}</h2>
                        <p>{skill?.description}</p>
                    </div>)
            }
        </div>
    );
};

export default Skils;