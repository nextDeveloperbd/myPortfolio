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
                    <h1 className='text-2xl  font-bold inline-block'>Welcome To Our Agency</h1>
                    <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%  '>Design, Development and Digital Marketing Solutions here</h2>
                    <p className='md:pb-4'><span className='font-bold'>Web Flex Code</span> is a performance-focused web development and digital marketing company committed to assisting businesses in growing online. We are experts in creating high-performance websites and implementing strategic marketing campaigns that generate traffic, engagement, and conversions. Whether you require a stylish website, SEO optimization, or social media growth, we provide solutions that make a difference. Let's grow your business to the next level! <Link to='/blogs' className='text-blue-600'>blog</Link>, <Link to='/portfolio' className='text-blue-600'>project portfolio</Link> and <Link to='/resume' className='text-blue-600'>online resume</Link>.</p>
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
                    <motion.div  animate={{
                         y:[0,20,0],
                // scale: [1, 1.05, 1, 0.9, 1],
                // rotate: [0, 0, 0, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"], 
                colorAdjust:['#FF0000', '##008000', '#FFC300']
            }}
            
            transition={{
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0,
            }}
                    className=' bg-[#5271ff] p-1 rounded-md'>
                        <img className='md:w-[300px] md:h-[360px] rounded-md' src="https://i.ibb.co.com/bmBZdVT/Portable-Electric-Kettle.jpg" alt="" />
                    </motion.div>
                </div>
            </div>
            <Experience></Experience>

        </div>
    );
};

export default ProfileAndImage;