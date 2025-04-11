import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { PiReadCvLogoLight } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiShoppingBag3Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { FaUsers } from "react-icons/fa6";
import Hooks from "../Hook/Hooks";
import UseAdmin from "../Hook/UseAdmin";

const Navbar = () => {
    const { user } = Hooks()
    const [isAdmin] = UseAdmin()
    return (
        <div className="px-1 md:px-4 ">
            <div className="hidden md:block">
                <nav className="flex md:flex-col flex-row justify-center flex-wrap">
                    <NavLink to='/' className=""><div className="menuBtn "><FcAbout className="hidden md:block text-gray-400" /> Home</div></NavLink>
                    <NavLink to='/portfolio' className=""><div className="menuBtn"><PiReadCvLogoLight className="hidden md:block" />Portfolio</div></NavLink>
                    <NavLink to="/services" className=""><div className="menuBtn"><IoBriefcaseOutline className="hidden md:block" />Services & Pricing</div></NavLink>
                    <NavLink to='/products' className=""><div className="menuBtn"><RiShoppingBag3Line className="hidden md:block" />Products</div></NavLink>
                    <NavLink to='/blogs' className=""><div className="menuBtn"><FaRegAddressBook className="hidden md:block" />Blog</div></NavLink>
                    <NavLink to='/teamMembers' className=""><div className="menuBtn "><FaUsers className="hidden md:block" />Team Members</div></NavLink>
                    {
                        isAdmin ? <NavLink to='/dashboard' className=""><div className="menuBtn "><FaRegUser className="hidden md:block" />dashboard</div></NavLink> : ""
                    }
                    <NavLink to='/contact' className=""><div className="menuBtn"><MdOutlineEmail className="hidden md:block" />Contact Us</div></NavLink>

                </nav>
                {/* <div className="w-full mt-2">
                    <Link to="/contact" className="px-5 py-1 rounded-full relative group overflow-hidden font-medium bg-[#1a3c3d]  text-white inline-block ">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />Contact Us</span>
                    </Link>
                </div> */}
            </div>

        </div>
    );
};

export default Navbar;

