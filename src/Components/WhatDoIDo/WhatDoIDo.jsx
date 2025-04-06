import React from 'react';
import CommonTitle from '../Commont Title/CommonTitle';
import { Link } from 'react-router-dom';
import { FaLocationArrow } from 'react-icons/fa';

const WhatDoIDo = () => {
    return (
        <div className='my-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center'>
                <div className='col-span-3'>
                <CommonTitle title={'What I do'} description={`I help businesses grow via web development and online marketing. I create fast, responsive websites using the MERN stack and create SEO-driven marketing campaigns for better visibility, lead generation, and engagement at Web Flex Code. From a high-performing website to a strong online presence, I deliver results that matter.`}></CommonTitle>
                </div>
                <div className="flex justify-end">
                    <Link href="#_" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-[#1a3c3d]  text-white inline-block ">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />Services & Pricing</span>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default WhatDoIDo;