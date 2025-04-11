import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiHandsClappingDuotone } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const LeftRightTop = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="hidden md:block">
            <h3 className="text-center md:mb-2">Welcome: <span className="font-semibold">{user ? user?.displayName : 'Guest'}</span></h3>
            <div className="flex flex-row md:flex-col text-center items-center justify-center px-2 gap-2">
                <div className="avatar ">
                    <div className="w-20 md:w-[88px] h-20 md:h-[88px] ml-2 md:ml-0 overflow-hidden rounded-full relative">
                        <img className="scale-150" src="https://i.ibb.co.com/xWmHTfg/wev-developer.jpg" />
                    </div>
                    <div className="border p-1 rounded-full bg-white absolute -right-2 top-2 text-xl"><PiHandsClappingDuotone /></div>
                </div>
                <div className="md:space-y-1 ml-4 md:ml-0">
                    <div className="text-left md:text-center">
                        <h3 className='font-bold bg-gradient-to-r from-red-700 via-blue-500 to-green-600 text-transparent bg-clip-text animate-gradient bg-300% text-xl md:text-2xl'>Orbitshiftbd</h3>
                        <h3 className="mb-2">Web Development and Digital Marketing Agency</h3>
                    </div>
                    {/* Social icons */}
                    <div className="flex gap-2 md:justify-center items-center">
                        <Link to='https://www.facebook.com/orbitshiftbd' title="Facebook" target="_blank" className="socialBtnHover"><div className="socialIcon">  <CiFacebook /></div></Link>
                        <Link to='https://www.linkedin.com/company/orbitshift-bd/?viewAsMember=true' title="Linkedin" target="_blank" className="socialBtnHover"><div className="socialIcon"><CiLinkedin /></div></Link>
                        <Link to='https://www.instagram.com/orbitshiftbd/' title="Instagram" target="_blank" className="socialBtnHover"><div className="socialIcon"> <FaInstagram /></div></Link>
                        <Link to='https://www.pinterest.com/webflexcode/' title="Pinterest" target="_blank" className="socialBtnHover"><div className="socialIcon"><FaPinterest /></div></Link>
                        <Link to='https://github.com/nextDeveloperbd' title="Github" target="_blank" className="socialBtnHover"><div className="github"> <FaGithub /></div></Link>
                    </div>
                </div>
            </div>
            <div className="divider my-2 px-3"></div>
        </div>
    );
};

export default LeftRightTop;