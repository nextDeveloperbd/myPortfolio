import React, { useEffect, useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './blogs.css'
import { Helmet } from 'react-helmet-async';
import UseAxiosSecure from '../Hook/UseAxiosSecure';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const axiosSecure = UseAxiosSecure()
    console.log(blogs);
    useEffect(() => {
        axiosSecure.get(`/blogs`)
            .then(res => {
                setBlogs(res.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);
    return (
        <div>
            <Helmet>
                <title>Blogs | My Portfolio website</title>
                <meta name="description" content="This is your page description for SEO." />
                <meta name="keywords" content="react, seo, meta tags, your-keywords-here" />
            </Helmet>
            <div className="flex flex-col items-center md:py-8 py-2 md:w-3/4 mx-auto text-center space-y-4">
                <h1 className="text-2xl font-semibold">A Blog About Web Development And Digital Marketing</h1>
                <p className="">Welcome to our blogs. Search and get our latest blog post in front of you.</p>
                <div className="flex flex-col md:flex-row md:justify-between gap-2 items-center w-full">
                    {/* search */}
                    <div className="w-full flex">
                        <input type="search" name="Search" placeholder="Search..." className=" flex-1 py-4 pl-4 text-sm rounded-full sm:w-auto focus:outline-none border border-gray-400" />
                    </div>

                    {/* search */}
                    <Link href="#_" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium contactBtn  text-white inline-block ">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2">Search</span>
                    </Link>
                </div>
            </div>
            <hr />
            {/* all Blogs*/}
            {/* featured card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 md:mt-8">
                {
                    blogs?.map(blog => <div key={blog._id} className="blogCss">
                        <div>
                            <figure>
                                {
                                    blog?.images?.slice(0, 1).map((image, idx) => <img key={idx} className='w-full h-[160px] object-cover md:h-[320px] mx-auto rounded' src={image} alt={blog?.title} />)
                                }
                            </figure></div>
                        <div className="flex gap-2 mt-4 px-1 md:px-3">
                            <h2>{blog?.uploadedAt}</h2>

                        </div>
                        {/* Title  */}
                        <Link to={`/blogDetails/${blog._id}`}>
                            <div className="flex justify-between px-3 mt-2">
                                <h2 className="text-2xl font-semibold hover:text-[#5271ff] duration-300">{blog?.title}</h2>
                            </div>
                        </Link>
                    </div>)
                }

            </div>
            {/* all Blogs end */}

            {/* pagination */}
            <div className='my-8'>
                <div className="flex justify-center space-x-1 dark:text-gray-800">
                    <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600">1</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100" title="Page 2">2</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100" title="Page 3">3</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100" title="Page 4">4</button>
                    <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            {/* pagination */}
        </div>
    );
};

export default Blogs;