import { IoMdArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tabList.css'
import { useEffect, useState } from 'react';
import UseAxiosSecure from '../Hook/UseAxiosSecure';

const TabsList = () => {
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
        <div className=' mt-8 '>
            <Tabs>
                <TabList>
                    <Tab>Portfolios </Tab>
                </TabList>
                {/* all content  */}
                <TabPanel>
                    {/* featured card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 md:mt-8">
                        {
                            portfolios?.map(portfolio => <div key={portfolio._id} className="portfolioHove">
                                <figure>
                            <img className="border border-gray-400  hover:border hover:border-white md:h-72 w-full " src={portfolio?.img_url} alt="" />
                        </figure>
                                <div className="flex gap-2 mt-4 px-1 md:px-3">
                                    {
                                        portfolio?.category?.map((cat,idx) => <div key={idx}  className="px-2 md:px-4 py-1 md:py-2 rounded-full relative group overflow-hidden font-medium inline-block border border-black">
                                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                                            <span className=" flex items-center gap-2 text-sm md:text-md">{cat}</span>
                                        </div>)
                                    }
                                </div>
                                {/* Title  */}
                                <div className="flex justify-between px-2 mt-2">
                                    <Link to={`/details/${portfolio._id}`} className="text-md md:text-xl font-bold hover:text-[#5271ff] duration-300 ">{portfolio?.title}</Link>
                                    <Link to={`/details/${portfolio._id}`}>
                                    <button className="bg-gray-300 p-3 w-10 h-10 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward className=" " /></button>
                                    </Link>
    
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                {/* web development content */}
               
            </Tabs>
        </div>
    );
};

export default TabsList;