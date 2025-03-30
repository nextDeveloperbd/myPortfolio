import { Link } from "react-router-dom";
import CommonTitle from "../Commont Title/CommonTitle";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";


const FeaturedProjects = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center mt-8'>
                <div className='col-span-3'>
                    <CommonTitle title={'Featured Projects'} description={'My step-by-step guide ensures a smooth project journey, from the initial consultation to the final delivery. I take care of every detail, allowing you to focus on what you do best.'}></CommonTitle>
                </div>
                <div className="flex justify-end">
                    <Link href="#_" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-[#5271ff]  text-white inline-block ">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />View Portfolio</span>
                    </Link>
                </div>
            </div>
            {/* featured card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 md:mt-8">
                {/* 1st card */}
                <div className="">
                    <img className="border border-gray-400  hover:border hover:border-white w-full h-[220px] md:h-[280px]" src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                    <div className="flex gap-2 mt-4 px-3">
                        <Link href="#_" className="px-5 py-2 rounded-full relative group overflow-hidden font-medium   inline-block border border-black">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                            <span className=" flex items-center gap-2">React Js</span>
                        </Link>
                        <Link href="#_" className="px-5 py-2 rounded-full relative group overflow-hidden font-medium   inline-block border border-black">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                            <span className=" flex items-center gap-2">Node js</span>
                        </Link>
                        <Link href="#_" className="px-5 py-2 rounded-full relative group overflow-hidden font-medium   inline-block border border-black">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                            <span className=" flex items-center gap-2">Web development</span>
                        </Link>
                    </div>
                    {/* Title  */}
                    <div className="flex justify-between px-3 mt-2">
                        <h2 className="text-2xl font-semibold hover:text-[#5271ff] duration-300">Crypto Website Development for DeFi X</h2>
                        <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward  className=" "/></button>
                        
                    </div>
                </div>
                {/* 1st card end*/}
                {/* 2nd card */}
                <div className="">
                    <img className="border border-gray-400  hover:border hover:border-white w-full h-[220px] md:h-[280px]" src="https://i.ibb.co.com/RpLpjtVP/Add-campaign-result.jpg" alt="" />
                    <div className="flex gap-2 mt-4 px-3">
                        <Link href="#_" className="px-5 py-2 rounded-full relative group overflow-hidden font-medium   inline-block border border-black">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                            <span className=" flex items-center gap-2">facebook</span>
                        </Link>
                        <Link href="#_" className="px-5 py-2 rounded-full relative group overflow-hidden font-medium   inline-block border border-black">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                            <span className=" flex items-center gap-2">Instagram</span>
                        </Link>
                        <Link href="#_" className="px-5 py-2 rounded-full relative group overflow-hidden font-medium   inline-block border border-black">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                            <span className=" flex items-center gap-2">Pinterest</span>
                        </Link>
                    </div>
                    {/* Title  */}
                    <div className="flex justify-between px-3 mt-2">
                        <h2 className="text-2xl font-semibold hover:text-[#5271ff] duration-300">Facebook Ads campaign</h2>
                        <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward  className=" "/></button>
                        
                    </div>
                </div>
                {/* 2nd card end*/}
                {/* 2nd card */}
                <div className="">
                    <img className="border border-gray-400  hover:border hover:border-white w-full h-[220px] md:h-[280px]" src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                    <div className="flex gap-2 mt-4 px-3">
                        <Link href="#_" className="px-5 py-2 rounded-full relative group overflow-hidden font-medium   inline-block border border-black">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                            <span className=" flex items-center gap-2">React Js</span>
                        </Link>
                        <Link href="#_" className="px-5 py-2 rounded-full relative group overflow-hidden font-medium   inline-block border border-black">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                            <span className=" flex items-center gap-2">Node js</span>
                        </Link>
                        <Link href="#_" className="px-5 py-2 rounded-full relative group overflow-hidden font-medium   inline-block border border-black">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                            <span className=" flex items-center gap-2">Web development</span>
                        </Link>
                    </div>
                    {/* Title  */}
                    <div className="flex justify-between px-3 mt-2">
                        <h2 className="text-2xl font-semibold hover:text-[#5271ff] duration-300">Crypto Website Development for DeFi X</h2>
                        <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward  className=" "/></button>
                        
                    </div>
                </div>
                {/* 2nd card end*/}
                {/* 2nd card */}
                <div className="">
                    <img className="border border-gray-400  hover:border hover:border-white w-full h-[220px] md:h-[280px]" src="https://i.ibb.co.com/shdMmKt/pinterest-marketing-manager-and-tailwind-expert.jpg" alt="" />
                    <div className="flex gap-2 mt-4 px-3">
                        <Link href="#_" className="px-5 py-2 rounded-full relative group overflow-hidden font-medium   inline-block border border-black">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                            <span className=" flex items-center gap-2">Pinterest</span>
                        </Link>
                        <Link href="#_" className="px-5 py-2 rounded-full relative group overflow-hidden font-medium   inline-block border border-black">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                            <span className=" flex items-center gap-2">Linkedin</span>
                        </Link>
                        <Link href="#_" className="px-5 py-2 rounded-full relative group overflow-hidden font-medium   inline-block border border-black">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                            <span className=" flex items-center gap-2">Facebook</span>
                        </Link>
                    </div>
                    {/* Title  */}
                    <div className="flex justify-between px-3 mt-2">
                        <h2 className="text-2xl font-semibold hover:text-[#5271ff] duration-300">Pinteresting Marketing</h2>
                        <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward  className=" "/></button>
                        
                    </div>
                </div>
                {/* 2nd card end*/}
            </div>
        </div>
    );
};

export default FeaturedProjects;