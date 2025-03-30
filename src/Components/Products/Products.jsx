import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLocationArrow } from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <Helmet>
                <title>Products | My Portfolio website</title>
            </Helmet>
            <div className="flex flex-col items-center py-8 w-3/4 mx-auto text-center space-y-4">
                <h1 className="text-2xl font-semibold">Check Out What I've Created for You</h1>
                <p className="">Explore a collection of projects where creativity meets code. From sleek, responsive designs to intuitive user experiences, each project represents a unique solution tailored to meet client needs. Dive in to see how ideas transform into digital realities.</p>
                <div className="">
                    <Link to="/contact" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-[#5271ff]  text-white inline-block ">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />Hire Me</span>
                    </Link>
                </div>
            </div>
            <hr />

            {/* Products menu starts */}
            <div className='my-8'>
                <nav className='flex gap-2 justify-center my-4 text-xl '>
                    <Link className='border-b-2 border-blue-600'>All</Link>
                    <Link className='border-b-2 border-blue-600'>Ebooks</Link>
                    <Link className='border-b-2 border-blue-600'>Courses</Link>
                    <Link className='border-b-2 border-blue-600'>Assests</Link>
                </nav>
                {/* Products card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-4 md:py-8">
                    {/* 1st card */}
                    <div className="">
                        <img className="border border-gray-400  hover:border hover:border-white h-96 w-full " src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                        <div className=" my-4 px-3">
                            <h2 className="text-2xl font-semibold hover:text-[#5271ff] duration-300 mb-2">React Dashboard Template</h2>
                            <p>Develop modern, beautiful, and responsive applications in half the time.</p>
                            <p className='text-xl font-semibold'>Price: $<span>120</span> USd</p>
                        </div>
                        {/* Title  */}
                        <div className="flex items-center gap-4 px-3 mt-2">
                            <div className="">
                                <Link href="#_" className="px-5 py-2 rounded relative group overflow-hidden font-medium bg-[#5271ff]  text-white inline-block ">
                                    <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white flex items-center gap-2">Add To Cart</span>
                                </Link>
                            </div>
                            <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward className=" " /></button>

                        </div>
                    </div>
                    {/* 1st card end*/}
                    {/* 2nd card */}
                    <div className="">
                        <img className="border border-gray-400  hover:border hover:border-white h-96 w-full " src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                        <div className=" my-4 px-3">
                            <h2 className="text-2xl font-semibold hover:text-[#5271ff] duration-300 mb-2">React Dashboard Template</h2>
                            <p>Develop modern, beautiful, and responsive applications in half the time.</p>
                            <p className='text-xl font-semibold'>Price: $<span>120</span> USd</p>
                        </div>
                        {/* Title  */}
                        <div className="flex items-center gap-4 px-3 mt-2">
                            <div className="">
                                <Link href="#_" className="px-5 py-2 rounded relative group overflow-hidden font-medium bg-[#5271ff]  text-white inline-block ">
                                    <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white flex items-center gap-2">Add To Cart</span>
                                </Link>
                            </div>
                            <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward className=" " /></button>

                        </div>
                    </div>
                    {/* 2nd card end*/}
                    {/* 3rd card */}
                    <div className="">
                        <img className="border border-gray-400  hover:border hover:border-white h-96 w-full " src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                        <div className=" my-4 px-3">
                            <h2 className="text-2xl font-semibold hover:text-[#5271ff] duration-300 mb-2">React Dashboard Template</h2>
                            <p>Develop modern, beautiful, and responsive applications in half the time.</p>
                            <p className='text-xl font-semibold'>Price: $<span>120</span> USd</p>
                        </div>
                        {/* Title  */}
                        <div className="flex items-center gap-4 px-3 mt-2">
                            <div className="">
                                <Link href="#_" className="px-5 py-2 rounded relative group overflow-hidden font-medium bg-[#5271ff]  text-white inline-block ">
                                    <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white flex items-center gap-2">Add To Cart</span>
                                </Link>
                            </div>
                            <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward className=" " /></button>

                        </div>
                    </div>
                    {/* 3rd card end*/}
                    {/* 4th card */}
                    <div className="">
                        <img className="border border-gray-400  hover:border hover:border-white h-96 w-full " src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                        <div className=" my-4 px-3">
                            <h2 className="text-2xl font-semibold hover:text-[#5271ff] duration-300 mb-2">React Dashboard Template</h2>
                            <p>Develop modern, beautiful, and responsive applications in half the time.</p>
                            <p className='text-xl font-semibold'>Price: $<span>120</span> USd</p>
                        </div>
                        {/* Title  */}
                        <div className="flex items-center gap-4 px-3 mt-2">
                            <div className="">
                                <Link href="#_" className="px-5 py-2 rounded relative group overflow-hidden font-medium bg-[#5271ff]  text-white inline-block ">
                                    <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white flex items-center gap-2">Add To Cart</span>
                                </Link>
                            </div>
                            <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward className=" " /></button>

                        </div>
                    </div>
                    {/* 4th card end*/}

                </div>

            </div>

        </div>
    );
};

export default Products;