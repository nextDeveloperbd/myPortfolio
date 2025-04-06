import { IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import LeftRightTop from "./LeftRightTop";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { motion } from "motion/react"
import { MdLogin, MdLogout } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const LeftSide = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logout Successfull");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-6 gap-1 '>
            <div className=' md:col-span-1 md:h-screen md:space-y-2 space-x-4 md:space-x-0 px-2 text-center flex flex-row md:flex-col  items-center pt-2 md:pt-10 justify-between md:justify-normal'>
                <div className="flex flex-row md:flex-col gap-2 items-center md:space-y-2 text-2xl">
                    <Link to="/" title="Home "><IoHomeOutline /></Link>
                    <div className="indicator">
                        <span className="indicator-item top-1 badge h-4 p-1 text-[10px] text-white bg-[#1a3c3d]">2</span>
                        <IoCartOutline title="Cart" className="text-2xl" />
                    </div>
                    {/* <Link to="/register" title="Login"><MdLogin /></Link> */}
                    {
                        user ? <button onClick={handleLogOut} title="LogOut" className="text-red-500 "><MdLogout /></button> :
                            <Link to="/register" title="Login" className="text-green-600"><MdLogin /></Link>
                    }
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
                        {"Web Flex Code".split("").map((char, index) => (
                            <span key={index}>{char}</span>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className=' md:col-span-5 md:h-screen py-4 flex-col items-center text-center bg-gray-100'>
                <LeftRightTop></LeftRightTop>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default LeftSide;