import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WorkTogether = () => {
    return (
        <div
                className="hero min-h-[60vh] bg-fixed"
                style={{
                    backgroundImage: "url(https://www.socialchamp.io/wp-content/uploads/2023/12/Content-Blog-Banner_Q4-2023_1125x600_35_Social-Media-Manager.png)",
                }}>
                <div className="hero-overlay"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center md:px-2">
                    <div className="col-span-3 p-2">
                        <h1 className="mb-5 text-2xl md:text-5xl text-white font-bold w-4/5">Let’s Work together on your next Project</h1>
                        <p className="mb-5 text-white">
                        I am available for freelance projects. Hire me and get your project done.
                        </p>
                    </div>
                    <div className=" col-span-1 flex justify-end">
                        <Link to="/contact" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-[#1a3c3d]  text-white inline-block ">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />Let's Get In Touch</span>
                        </Link>
                    </div>
                </div>
            </div>
    
           
        
    );
};

export default WorkTogether;