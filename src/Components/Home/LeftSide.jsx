import { IoBriefcaseOutline, IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import LeftRightTop from "./LeftRightTop";
import Navbar from "../Navbar/Navbar";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react"
import { MdLogin, MdLogout, MdOutlineEmail } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import UseCart from "../Hook/UseCart";
import { FaRegAddressBook, FaRegUser } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { PiReadCvLogoLight } from "react-icons/pi";
import UseAdmin from "../Hook/UseAdmin";

const LeftSide = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = UseCart()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    // TODO: Get admin form the database
    const [isAdmin] = UseAdmin()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logout Successfull");
                navigate(from)
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };


    return (
        <div className='grid grid-cols-1 md:grid-cols-6 gap-1 '>
            <div className=' md:col-span-1 md:h-screen md:space-y-2 space-x-4 md:space-x-0 px-2 text-center flex flex-row md:flex-col  items-center pt-2 md:pt-10 justify-between md:justify-normal bg-gray-100 mt-6'>
                <div className="flex justify-between w-full ">
                    {/*mobile menu  */}
                    <div className="md:hidden block ">
                        <div className="navbar shadow-sm ">
                            <div className="navbar-start">
                                <div className="dropdown ">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                    </div>
                                    <nav
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-40 mt-3 w-52 p-2 shadow">
                                        <NavLink to='/' className=""><div className="menuBtn "><FaRegUser className="hidden md:block" />Home</div></NavLink>
                                        <NavLink to='/portfolio' className=""><div className="menuBtn"><PiReadCvLogoLight className="hidden md:block" />Portfolio</div></NavLink>
                                        <NavLink to="/services" className=""><div className="menuBtn"><IoBriefcaseOutline className="hidden md:block" />Services & Pricing</div></NavLink>
                                        <NavLink to='/products' className=""><div className="menuBtn"><RiShoppingBag3Line className="hidden md:block" />Products</div></NavLink>
                                        <NavLink to='/blogs' className=""><div className="menuBtn"><FaRegAddressBook className="hidden md:block" />Blog</div></NavLink>
                                        <NavLink to='/teamMembers' className=""><div className="menuBtn "><FaRegUser className="hidden md:block" />Team Members</div></NavLink>
                                        {
                                            isAdmin ? <NavLink to='/dashboard' className=""><div className="menuBtn "><FaRegUser className="hidden md:block" />dashboard</div></NavLink> : ""
                                        }

                                        <NavLink to='/contact' className=""><div className="menuBtn"><MdOutlineEmail className="hidden md:block" />Contact</div></NavLink>
                                    </nav>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* home and login */}
                    <div className="flex flex-row md:flex-col gap-2 items-center md:space-y-2 text-2xl">
                        <Link to="/" title="Home "><IoHomeOutline /></Link>
                        {
                            user ? <Link to='/shoppingCart' className="indicator">
                                <span className="indicator-item top-1 badge h-4 p-1 text-[10px] text-white bg-[#1a3c3d]">{cart.length}</span>
                                <IoCartOutline title="Cart" className="text-2xl" />
                            </Link> : ""
                        }

                        {/* <Link to="/register" title="Login"><MdLogin /></Link> */}
                        {
                            user ? <button onClick={handleLogOut} title="LogOut" className="text-red-500 md:ml-0 ml-2 "><MdLogout /></button> :
                                <Link to="/register" title="Login" className="text-green-600 "><MdLogin /></Link>
                        }
                    </div>

                </div>

                {/*  <div >
                    <IoMoonOutline />
                </div> */}
                {/* লম্বালম্বি লেখা */}
                <div className="hidden md:block pt-4">
                    <motion.div animate={{
                        y: [0, 20, 0],
                        color: ['#FF0000', '#008000', '#FFC300']
                    }}

                        transition={{
                            duration: 5,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 0,
                        }} className="  flex flex-col text-xl font-bold items-center md:text-xl bg-gradient-to-r from-red-700 via-blue-500 to-violet-600 text-transparent bg-clip-text animate-gradient bg-300%">
                        {"Orbitshiftbd".split("").map((char, index) => (
                            <span key={index}>{char}</span>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className=' md:col-span-5 md:min-h-screen md:py-4 py-2 flex-col items-center text-center'>
                <LeftRightTop></LeftRightTop>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default LeftSide;