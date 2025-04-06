import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommonTitle from '../Commont Title/CommonTitle';
import { FaLocationArrow } from 'react-icons/fa';
import axios from 'axios';

const LatestBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get(`https://portfolio-server-psi-six.vercel.app/blogs`)
            .then(res => {
                setBlogs(res.data)
            })
    }, []);
    return (
        <div className='my-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center'>
                <div className='col-span-3'>
                    <CommonTitle title={'Latest Blog Posts'} description={`More than 1500+ agencies using Portfolify`}></CommonTitle>
                </div>
                <div className="flex justify-end">
                    <Link to="/blogs" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-[#1a3c3d]  text-white inline-block ">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />See all articles</span>
                    </Link>
                </div>
            </div>
            {/* Latest blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 md:mt-8">
                {
                    blogs?.slice(0,4).map(blog => <div key={blog._id} className="blogCss">
                        <Link to={`/blogDetails/${blog._id}`}>
                            <figure>
                                <img className="border border-gray-400  hover:border hover:border-white md:h-72 w-full " src={blog?.img_url} alt="" />
                            </figure></Link>
                        <div className="flex gap-2 mt-4 px-1 md:px-3">
                            <h2>{blog?.post_date}</h2>
                            {/* <h2>/</h2> */}
                            
                        </div>
                        {/* Title  */}
                        <div className="flex justify-between px-3 mt-2">
                            <h2 className="md:text-2xl font-semibold  duration-300">{blog?.title}</h2>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default LatestBlogs;