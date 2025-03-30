import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Experience from './Experience';
import { motion } from "motion/react"


const ProfileAndImage = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 items-center min-h-[90vh]'>
                <div className='space-y-2 md:space-y-4 md:col-span-2'>
                    <h1 className='text-2xl typing-text font-bold inline-block'>Hi, I am freelancer</h1>
                    <h2 className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% uppercase'>Developer and Designer</h2>
                    <p className='md:pb-4'>I'm a software engineer specializing in scalable web apps. Explore my <Link className='text-blue-600'>blog</Link>, <Link className='text-blue-600'>project portfolio</Link> and <Link className='text-blue-600'>online resume</Link>.</p>
                    <div className="flex gap-2 ">
                        <Link href="#_" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-[#5271ff]  text-white inline-block ">
                            <span className="btnPortfolio"></span>
                            <span className="relative group-hover:text-white flex items-center md:gap-2"><FaLocationArrow className='hidden md:block'/><span className='hidden md:block'>View</span> Portfolio</span>
                        </Link>
                        <Link href="#_" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-gray-800 text-white inline-block ">
                            <span className="btnPortfolio"></span>
                            <span className="relative group-hover:text-white flex items-center md:gap-2"><FaLocationArrow className='hidden md:block'/>View Resume</span>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-end col-span-1 '>
                    <div className=' bg-[#5271ff] p-1 rounded-md'>
                        <img className='md:w-[300px] md:h-[360px] rounded-md' src="https://i.ibb.co.com/bmBZdVT/Portable-Electric-Kettle.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Experience></Experience>

        </div>
    );
};

export default ProfileAndImage;