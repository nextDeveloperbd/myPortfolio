
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TeamMembers = () => {
    const[members, setMembers] = useState([])
    
   useEffect(()=>{
    axios.get(`https://portfolio-server-psi-six.vercel.app/members`)
    .then(res =>{
        setMembers(res.data)        
    })
   },[]);

    return (
        <div>
            <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold my-8 text-blue-700 border-b-2 pb-2 inline-block ">Our Team Members {members.length}</h2>
            </div>
            {/* 1st  */}
           {
            members?.slice(0,1).map(member =>  <div key={member._id} className="mx-auto text-center">
                <div className="rounded-md inline-block  md:h-52 p-2 shadow-lg">
                    <div className="">
                        <img className="w-20 h-20 mx-auto rounded-full object-cover" src={member?.img_url ?member.img_url: ''} alt={member.name} />
                    </div>
                    <div className=" text-center">
                        <h2 className="text-xl font-semibold">{member?.name}</h2>
                        <p className="">{member?.designation}</p>
                        <p>{member?.education}</p>
                        <p>{member?.university}</p>
                        {
                            member.socialLink?<a href={member?.socialLink} target='_blank' className='hover:bg-sky-600 hover:text-white duration-300 text-blue-700 font-semibold px-2 py-1 border rounded-md inline-block mt-1'>
                            <button>Social Links</button>
                            </a> : ''
                        }
                        
                    </div>
                </div>
            </div>)
           }
            {/* nexts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-between items-center my-8 ">
                {
                    members?.slice(1,members.length).map(member => <div key={member?._id} className=" shadow-lg  rounded-md inline-block  md:h-52 p-2">
                        <div className="">
                            <img className="w-20 h-20 mx-auto rounded-full object-cover" src={member?.img_url ?member.img_url: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="" />
                        </div>
                        <div className=" text-center">
                            <h2 className="text-xl font-semibold">{member?.name}</h2>
                            <p className="">{member?.designation}</p>
                            <p>{member?.jobTitle}</p>
                            {
                            member?.socialLink?<a href={member?.socialLink} target='_blank' className='hover:text-[#1a3c3d] duration-300 text-blue-700 font-semibold px-2 py-1 inline-block mt-1'>
                            <button>Social Link</button>
                            </a> : ''
                        }
                        </div>
                    </div>)
                }
               
            </div>
        </div>

    );
};

export default TeamMembers;