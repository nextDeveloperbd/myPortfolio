import React from 'react';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaInstagram, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return (
        <div className='md:mt-8'>
            <div className="h-10 p-3 bg-[#1a3c3d] text-white fixed top-0 z-30  flex justify-between items-center w-full md:w-[80%]">
            <div className='z-30'>
                    <h2 className="text-sm md:text-md">info@orbitshiftbd.com</h2>

                </div>
                <div className="flex gap-1 md:gap-2 md:justify-center items-center">
                    <Link to='https://www.facebook.com/orbitshiftbd' title="Facebook" target="_blank" className="socialBtnHover"><div className="socialIcon text-sm">  <CiFacebook className='text-white'/></div></Link>
                    <Link to='https://www.linkedin.com/company/orbitshift-bd/?viewAsMember=true' title="Linkedin" target="_blank" className="socialBtnHover"><div className="socialIcon text-sm"><CiLinkedin className='text-white' /></div></Link>
                    <Link to='https://www.instagram.com/orbitshiftbd/' title="Instagram" target="_blank" className="socialBtnHover"><div className="socialIcon text-sm"> <FaInstagram className='text-white' /></div></Link>
                    <Link to='https://www.pinterest.com/webflexcode/' title="Pinterest" target="_blank" className="socialBtnHover"><div className="socialIcon text-sm"><FaPinterest className='text-white' /></div></Link>
                    
                </div>
                
                
            </div>


        </div>
    );
};

export default TopHeader;