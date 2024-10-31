import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import Banner from "../Banner/Banner";
import moment from 'moment';

const Navbar = () => {

  return (
   
    <div className=" mb-2">
      
      <aside className='text-center flex justify-between p-2 text-white'>
    <p>Welcome : Guest </p>
    <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
  </aside>
      
     <header className="  sticky  top-0">
      <div className="navbar px-1 py-0 bg-gray-600 text-white ">
        <div className="navbar-start">
          <div className="dropdown flex items-center justify-center">
           
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to="/">Home</Link></li>
              <li><Link>Services </Link></li>
              <li><Link>Portfolio</Link></li>
              <li><Link>Blogs</Link></li>
              <li><Link>Pricing</Link></li>
              <li><Link>Contact us</Link></li>
            </ul>
          </div>
          <Link className="flex gap-2 text-xl font-bold items-center text-[#814ff3]"><img className="w-8 h-8" src="./public/wev developer.jpg" alt="" /> <span className="text-sm">Webflexcode</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link>Services </Link></li>
            <li><Link>Portfolio</Link></li>
            <li><Link>Blogs</Link></li>
            <li><Link>Pricing</Link></li>
            <li><Link>Contact us</Link></li>
          </ul>
        </div>
        <div className="navbar-end gap-2 ">
        <LuShoppingCart className="text-2xl" />
          <div className="hidden md:block">
            <Link className="btn primary-button rounded-xl font-bold ">Contact us</Link>
          </div>
         
          <div className="dropdown flex items-center justify-center relative lg:hidden ">
            <div tabindex="0" role="button" className="btn btn-ghost ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow absolute right-1 top-8">
              <li><Link to="/">Home</Link></li>
              <li><Link>Services </Link></li>
              <li><Link>Portfolio</Link></li>
              <li><Link>Blogs</Link></li>
              <li><Link>Pricing</Link></li>
              <li><Link>Contact us</Link></li>
            </ul>
          </div>
        </div>
      </div>
         
    </header>
        <Banner></Banner>
  
    </div>
  );
};

export default Navbar;
