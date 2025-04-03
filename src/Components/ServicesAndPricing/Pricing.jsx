import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const[prices, setPrices] = useState([]);
    useEffect(()=>{
        axios.get(`https://portfolio-server-psi-six.vercel.app/services`)
        .then(res => {
            setPrices(res.data)
        })
    },[])
    return (
        <div>
            <section className="py-4 md:py-20">
                <div className="container mx-auto">
                    <div className="max-w-2xl mx-auto mb-2 md:mb-8 text-center">

                        <h2 className="text-2xl md:text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            prices?.map(price => <div key={price._id} className="flex w-full lg:mb-0">
                                <div className="priceCard ">
                                    <div className="space-y-2 bg-[#1a3c3d] text-white text-center p-1 rounded">
                                        <h4 className="text-2xl font-bold">{price.plan}<span className='text-xl ml-2'>{price.icon}</span></h4>
                                        <h3>Starts from <span className="text-2xl md:text-4xl font-bold">$<span className='text-white'>{price.price}</span>
                                            <span className="text-sm tracking-wide">/month</span>
                                        </span></h3>
                                    </div>
                                    <p className="leading-relaxed font-semibold">{price.title}</p>
                                    <ul className="space-y-2 ">
                                        {
                                            price?.features?.map((feature, idx) =><li key={idx} className="flex items-start space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-green-400 dark:text-violet-600">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>{feature}</span>
                                        </li> )
                                        }
                                       
                                    </ul>
                                    <div className="mx-auto">
                                        <Link href="#_" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-[#1a3c3d]  text-white inline-block ">
                                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                                            <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />More Details Contact Us</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        }                      

                    </div>
                                       
                </div>
            </section>
            {/* */}
            <div className="flex flex-col items-center py-2 md:py-8 w-3/4 mx-auto text-center space-y-4">
                <h1 className="text-2xl font-semibold">Want to hire me for custom package?</h1>
                <p className="">I have 10+ years of development experience building software for the web and mobile devices. You can take a look at my online resume and project portfolio to find out more about my skills and experiences.</p>
                <div className="">
                    <Link href="#_" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-[#5271ff]  text-white inline-block ">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />Hire Me</span>
                    </Link>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Pricing;