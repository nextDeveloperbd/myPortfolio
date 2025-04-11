import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard | orbitshiftbd</title>
                <meta name="description" content="This is your page description for SEO." />
                <meta name="keywords" content="react, seo, meta tags, your-keywords-here" />
            </Helmet>
            <div className='bg-gray-100 w-full md:my-2 h-10 md:fixed top-0 md:mt-12'>
                <nav className="flex items-center gap-2">
                    {/* <NavLink to='/dashboard' className=""><div className="menuBtn ">Dashboard</div></NavLink> */}
                    <NavLink to='/dashboard' className=""><div className="menuBtn rounded-sm ">Admin</div></NavLink>
                    <NavLink to='/dashboard/users' className=""><div className="menuBtn rounded-sm ">Users</div></NavLink>
                    <NavLink to='/dashboard/upload' className=""><div className="menuBtn rounded-sm ">Upload</div></NavLink>
                    <NavLink to='/dashboard/checkOutList' className=""><div className="menuBtn rounded-sm ">CheckOUtList</div></NavLink>
                    <NavLink to='/dashboard/messageList' className=""><div className="menuBtn rounded-sm ">MessageList</div></NavLink>
                    

                </nav>
            </div>
            <div className='md:pt-14'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;