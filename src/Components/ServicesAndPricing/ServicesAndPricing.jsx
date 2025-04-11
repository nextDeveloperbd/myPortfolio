import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CommonTitle from '../Commont Title/CommonTitle';
import Pricing from './Pricing';
import Faq from '../PortFolio/Faq';
import { Helmet } from 'react-helmet-async';

const ServicesAndPricing = () => {
    return (
        <div>
            <Helmet>
                <title>Servicing and Pricing | My Portfolio website</title>
                <meta name="description" content="This is your page description for SEO." />
                <meta name="keywords" content="react, seo, meta tags, your-keywords-here" />
            </Helmet>
            <div className="flex flex-col items-center md:py-8 py-2 md:w-3/4 mx-auto text-center space-y-4">
                <h1 className="text-2xl font-semibold">Services & Pricing</h1>
                <p className="">We have 3+ years of development experience building software for the web and mobile devices. You can take a look at my online resume and project portfolio to find out more about my skills and experiences.</p>
                <div className="">
                    <Link to="/contact" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium contactBtn text-white inline-block ">
                        <span className="hireBtn"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />Contact Us</span>
                    </Link>
                </div>
            </div>
            <hr />

            {/*  */}
            <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center mt-8'>
                <div className='col-span-3'>
                    <CommonTitle title={'Service Packages'} description={'Explore the range of services I provide to help bring your projects to life. From initial concept to final delivery, I am committed to delivering high-quality results tailored to your needs.'}></CommonTitle>
                </div>

            </div>
            <Pricing></Pricing>
            <Faq></Faq>

        </div>
    );
};

export default ServicesAndPricing;