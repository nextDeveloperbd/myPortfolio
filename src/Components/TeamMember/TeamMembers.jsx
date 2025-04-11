
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const TeamMembers = () => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        axios.get(`https://portfolio-server-psi-six.vercel.app/members`)
            .then(res => {
                setMembers(res.data)
            })
    }, []);

    return (
        <div>
            <Helmet>
                <title>Team Members | orbitshiftbd</title>
                <meta name="description" content="This is your page description for SEO." />
                <meta name="keywords" content="react, seo, meta tags, your-keywords-here" />
            </Helmet>
            <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold py-2 md:my-8 text-blue-700 border-b-2 pb-2 inline-block ">Our Team Members</h2>
            </div>
            {/* 1st  */}
            {
                members?.slice(0, 1).map(member => <div key={member._id} className="mx-auto text-center">
                    <div className="rounded-md inline-block w-full md:w-[360px]  md:h-52 p-2 shadow-lg">
                        <div className="">
                            <img className="w-20 h-20 mx-auto rounded-full object-cover" src={member?.img_url ? member.img_url : ''} alt={member.name} />
                        </div>
                        <div className=" text-center space-y-1">
                            <h2 className="text-xl font-semibold">{member?.name}</h2>
                            <p className="">{member?.designation}</p>
                            <p>{member?.education}</p>
                            <p>{member?.university}</p>
                        </div>
                    </div>
                </div>)
            }
            {/* nexts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-between items-center my-2 md:my-8 ">
                {
                    members?.slice(1, members.length).map(member => <div key={member?._id} className=" shadow-lg  rounded-md inline-block  md:h-52 p-2">
                        <div className="">
                            <img className="w-20 h-20 mx-auto rounded-full object-cover" src={member?.img_url ? member.img_url : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="" />
                        </div>
                        <div className=" text-center space-y-1">
                            <h2 className="text-xl font-semibold">{member?.name}</h2>
                            <p className="">{member?.designation}</p>
                            <p>{member?.jobTitle}</p>

                        </div>
                    </div>)
                }

            </div>
        </div>

    );
};

export default TeamMembers;