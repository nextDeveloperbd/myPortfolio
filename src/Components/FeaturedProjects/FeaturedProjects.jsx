import { Link } from "react-router-dom";
import CommonTitle from "../Commont Title/CommonTitle";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../Hook/UseAxiosSecure";


const FeaturedProjects = () => {
    const[portfolios, setPortfolios] = useState([])
    const axiosSecure = UseAxiosSecure()
            
           useEffect(()=>{
            axiosSecure.get(`/portfolio`)
            .then(res =>{
                setPortfolios(res.data)        
            })
            .catch(error => {
                console.log(error.message);                
            })
           },[]);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center mt-8'>
                <div className='col-span-3'>
                    <CommonTitle title={'Featured Projects'} description={'Our step-by-step guide ensures a smooth project journey, from the initial consultation to the final delivery. I take care of every detail, allowing you to focus on what you do best.'}></CommonTitle>
                </div>
                <div className="flex justify-end">
                    <Link to="/portfolio" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-[#1a3c3d]  text-white inline-block ">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />View Portfolio</span>
                    </Link>
                </div>
            </div>
            {/* featured card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-8">
            {
                            portfolios?.map(portfolio => <Link   to={`/details/${portfolio._id}`}key={portfolio._id} className="portfolioHove">
                                <figure>
                            <img className="border border-gray-400  hover:border hover:border-white md:h-72 w-full " src={portfolio?.img_url} alt="" />
                        </figure>
                                <div className="flex gap-2 mt-4 px-1 md:px-3">
                                    {
                                        portfolio?.category?.map((cat,idx) => <div key={idx}  className="px-1 md:px-5 py-1 md:py-2 rounded-full relative group overflow-hidden font-medium inline-block border border-black">
                                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                                            <span className=" flex items-center gap-1">{cat}</span>
                                        </div>)
                                    }
                                </div>
                                {/* Title  */}
                                <div className="flex justify-between px-2 mt-2 items-center">
                                    <h3 className="text-lg font-bold duration-300">{portfolio?.title}</h3>
                                    <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward className=" " /></button>
    
                                </div>
                            </Link>)
                        }
            </div>
        </div>
    );
};

export default FeaturedProjects;