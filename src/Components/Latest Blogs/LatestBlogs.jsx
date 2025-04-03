import React from 'react';
import { Link } from 'react-router-dom';
import CommonTitle from '../Commont Title/CommonTitle';
import { FaLocationArrow } from 'react-icons/fa';

const LatestBlogs = () => {
    return (
        <div className='my-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center'>
                <div className='col-span-3'>
                <CommonTitle title={'Latest Blog Posts'} description={`More than 1500+ agencies using Portfolify`}></CommonTitle>
                </div>
                <div className="flex justify-end">
                    <Link to="/blogs" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-[#5271ff]  text-white inline-block ">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />See all articles</span>
                    </Link>
                </div>
            </div>
             {/* Latest blogs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 md:mt-8">
                            {/* 1st card */}
                            <div className="">
                                <img className="border border-gray-400  hover:border hover:border-white" src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                                <div className="flex gap-2 mt-4 px-3">
                                    <p  className=" font-medium ">March 29, 2025 </p>
                                    <p>/</p>
                                    <p>Category Name</p>
                                    
                                </div>
                                {/* Title  */}
                                <div className="flex justify-between px-3 mt-2">
                                    <h2 className="text-2xl font-semibold hover:text-[#5271ff] duration-300">Crypto Website Development for DeFi X</h2>                                                          
                                </div>
                            </div>
                            {/* 1st card end*/}
                            {/* 1st card */}
                            <div className="">
                                <img className="border border-gray-400  hover:border hover:border-white" src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                                <div className="flex gap-2 mt-4 px-3">
                                    <p  className=" font-medium ">March 29, 2025 </p>
                                    <p>/</p>
                                    <p>Category Name</p>
                                    
                                </div>
                                {/* Title  */}
                                <div className="flex justify-between px-3 mt-2">
                                    <h2 className="text-2xl font-semibold hover:text-[#5271ff] duration-300">Crypto Website Development for DeFi X</h2>                                                          
                                </div>
                            </div>
                            {/* 1st card end*/}
                            {/* 1st card */}
                            <div className="">
                                <img className="border border-gray-400  hover:border hover:border-white" src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                                <div className="flex gap-2 mt-4 px-3">
                                    <p  className=" font-medium ">March 29, 2025 </p>
                                    <p>/</p>
                                    <p>Category Name</p>
                                    
                                </div>
                                {/* Title  */}
                                <div className="flex justify-between px-3 mt-2">
                                    <h2 className="text-2xl font-semibold hover:text-[#5271ff] duration-300">Crypto Website Development for DeFi X</h2>                                                          
                                </div>
                            </div>
                            {/* 1st card end*/}
                           
                            
                            
                        </div>

        </div>
    );
};

export default LatestBlogs;