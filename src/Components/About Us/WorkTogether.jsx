import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WorkTogether = () => {
    return (
        <div
            className="hero object-cover h-48 md:min-h-[75vh]"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/j9xHyqbP/Meet-Together-orbitshiftbd-com.jpg)",
            }}>
            <div className="hero-overlay"></div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-6 items-center md:px-2 ">
                    <div className="col-span-3 p-2 mt-1 md:mt-52 hidden md:block">
                        {/*  <h1 className="mb-1 md:mb-5 text-2xl md:text-5xl text-white font-bold w-4/5">Let’s Work together on your next Project</h1>
                        <p className="md:mb-5 text-white">
                        We are available for freelance projects. Hire Us and get your project done.
                        </p> */}
                    </div>
                    <div className=" col-span-3  justify-end mt-48">
                        <div className='col-span-2 flex justify-end '>
                            <div className='hidden md:block'>
                                <Link to="/contact" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-[#1a3c3d] text-white inline-block ">
                                    <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />Let's Get In Touch</span>
                                </Link>
                            </div>
                        </div>
                        <div className=" p-2 mt-1 hidden md:block">
                            <h1 className="mb-1 md:mb- text-2xl md:text-4xl text-white font-bold ">Let’s Work together on your next Project</h1>

                        </div>

                    </div>

                </div>
                <p className=" mt-8 text-[#2E91FB] font-semibold text-center text-xl hidden md:block">
                    We are available for freelance projects. Hire Us and get your project done.
                </p>
            </div>

        </div>



    );
};

export default WorkTogether;