import { IoMdArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tabList.css'

const TabsList = () => {
    return (
        <div className=' mt-8 '>
            <Tabs>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Web Developments</Tab>
                </TabList>
                {/* all content  */}
                <TabPanel>
                    {/* featured card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 md:mt-8">
                        {/* 1st card */}
                        <div className="portfolioHove">
                            <figure>
                        <img className="border border-gray-400  hover:border hover:border-white h-96 w-full " src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                    </figure>
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
                                <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward className=" " /></button>

                            </div>
                        </div>
                        {/* 1st card end*/}
                        {/* 2nd card */}
                        <div className="portfolioHove">
                        <figure>
                        <img className="border border-gray-400  hover:border hover:border-white h-96 w-full " src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                    </figure>
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
                                <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward className=" " /></button>

                            </div>
                        </div>
                        {/* 2nd card end*/}
                        {/* 2nd card */}
                        <div className="portfolioHove">
                        <figure>
                        <img className="border border-gray-400  hover:border hover:border-white h-96 w-full " src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                    </figure>
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
                                <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward className=" " /></button>

                            </div>
                        </div>
                        {/* 2nd card end*/}
                        {/* 2nd card */}
                        <div className="portfolioHove">
                        <figure>
                        <img className="border border-gray-400  hover:border hover:border-white h-96 w-full " src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                    </figure>
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
                                <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward className=" " /></button>

                            </div>
                        </div>
                        {/* 2nd card end*/}
                        {/* 2nd card */}
                        <div className="portfolioHove">
                        <figure>
                        <img className="border border-gray-400  hover:border hover:border-white h-96 w-full " src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                    </figure>
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
                                <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward className=" " /></button>

                            </div>
                        </div>
                        {/* 2nd card end*/}
                        {/* 2nd card */}
                        <div className="portfolioHove">
                        <figure>
                        <img className="border border-gray-400  hover:border hover:border-white h-96 w-full " src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" />
                    </figure>
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
                                <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward className=" " /></button>

                            </div>
                        </div>
                        {/* 2nd card end*/}

                    </div>
                </TabPanel>
                {/* web development content */}
                <TabPanel>
                    <h2>Web development here</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsList;