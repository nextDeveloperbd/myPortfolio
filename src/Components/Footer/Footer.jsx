import React from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='pb-4'>
            <footer className="footer bg-base-900 p-10 text-white mt-8">
  <aside>
  <Link className="flex gap-2 text-xl font-bold items-center text-[#814ff3]"><img className="w-20 h-20" src="./public/wev developer.jpg" alt="" /> <span className="text-sm">Webflexcode</span></Link>
    <p>
      Webflexcode company ltd.
      <br />
      Providing reliable tech since 2022
    </p>
    <div className="flex gap-2">
                    <Link className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-sm shadow-2xl shadow-white">
                    <FaFacebook />
                    </Link>
                    <Link className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-sm shadow-2xl shadow-white">
                    <FaLinkedinIn />
                    </Link>
                    <Link className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-sm shadow-2xl shadow-white">
                    <FaInstagramSquare className="text-lg " />
                    </Link>
                    
                    
                    
                </div>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<hr className='w-10/12 mx-auto mb-4'/>
<aside className='text-center text-slate-500 space-y-2'>
    <p>Copyright © 2022 - {new Date().getFullYear()} ; All right reserved by <a href="#" className='text-white'>Webflexcocde</a></p>
    <p>Designed By <a href="#" className='text-green-500'>Webflexcocde</a></p>
  </aside>
        </div>
    );
};

export default Footer;