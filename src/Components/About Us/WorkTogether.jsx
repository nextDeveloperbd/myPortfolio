import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WorkTogether = () => {
    return (
        <div>
            <div
                className="hero min-h-[50vh]"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center">
                    <div className="col-span-3 p-2">
                        <h1 className="mb-5 text-5xl text-white font-bold w-4/5">Let’s Work together on your next Project</h1>
                        <p className="mb-5 text-white">
                        I am available for freelance projects. Hire me and get your project done.
                        </p>
                    </div>
                    <div className=" col-span-1 flex justify-end">
                        <Link href="#_" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-[#5271ff]  text-white inline-block ">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />Let's Get In Touch</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkTogether;