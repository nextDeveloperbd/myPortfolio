import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommonTitle from '../Commont Title/CommonTitle';
import { FaLocationArrow } from 'react-icons/fa';
import UseAxiosSecure from '../Hook/UseAxiosSecure';

const LatestBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const axiosSecure = UseAxiosSecure()

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
        <div className='my-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center'>
                <div className='col-span-3'>
                    <CommonTitle title={'Latest Blog Posts'} description={`More than 400+ clients using our services`}></CommonTitle>
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
                        <div>
                        {blog.images?.slice(0,1).map((image, idx) =>  <figure key={idx}>
                                <img className="border border-gray-200  hover:border hover:border-white md:h-72 w-full " src={image} alt="" />
                            </figure>)}
                           </div>
                        <div className="mt-4 px-1 md:px-1">
                            <h2>{blog?.uploadedAt}</h2>   
                            <Link  to={`/blogDetails/${blog._id}`}>
                            <h2 className="md:text-2xl font-semibold  duration-300">{blog?.title}</h2>
                            </Link>                         
                        </div>
                        
                    </div>)
                }
            </div>

        </div>
    );
};

export default LatestBlogs;