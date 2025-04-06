import { IoMdArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tabList.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabsList = () => {
     const[portfolios, setPortfolios] = useState([])
        
       useEffect(()=>{
        axios.get(`https://portfolio-server-psi-six.vercel.app/portfolio`)
        .then(res =>{
            setPortfolios(res.data)        
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
                                        portfolio?.category?.map((cat,idx) => <div key={idx}  className="px-1 md:px-5 py-1 md:py-2 rounded-full relative group overflow-hidden font-medium inline-block border border-black">
                                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 "></span>
                                            <span className=" flex items-center gap-2">{cat}</span>
                                        </div>)
                                    }
                                </div>
                                {/* Title  */}
                                <div className="flex justify-between px-3 mt-2">
                                    <Link to={`/details/${portfolio._id}`} className="text-xl font-bold hover:text-[#5271ff] duration-300">{portfolio?.title}</Link>
                                    <button className="bg-gray-300 p-3 rounded-full rotate-[-60deg] hover:rotate-[0deg] duration-300 hover:bg-[#5271ff] hover:text-white"><IoMdArrowForward className=" " /></button>
    
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