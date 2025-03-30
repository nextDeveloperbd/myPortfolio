import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiHandsClappingDuotone } from "react-icons/pi";

const LeftRightTop = () => {
    return (
        <div>
            <div className="flex flex-row md:flex-col items-center justify-center px-2">
                <div className="avatar ">
                    <div className="w-20 md:w-24 rounded-full relative">
                        <img src="https://i.ibb.co.com/018RbZs/Experienced-and-energetic-social-media-manager-and-SEO-specialists.jpg
https://i.ibb.co.com/xq5H9sP1/Experienced-and-energetic-social-media-marketing-manager-and-SEO-specialists.jpg" />
                    </div>
                    <div className="border p-1 rounded-full bg-white absolute -right-1 bottom-2 text-xl"><PiHandsClappingDuotone /></div>
                </div>
                <div>
                    <h3 className='font-bold bg-gradient-to-r from-red-700 via-blue-500 to-yellow-400 text-transparent bg-clip-text animate-gradient bg-300%'>Md Morad Hossain</h3>
                    <h3 className="mb-2">Web Developer and Digital Marketing Specialist</h3>
                    {/* Social icons */}
                    <div className="flex gap-2 justify-center items-center">
                        <Link to='https://www.facebook.com/WebFlexCode' title="Facebook" target="_blank" className="socialBtnHover"><div className="socialIcon">  <CiFacebook /></div></Link>
                        <Link to='https://www.linkedin.com/in/webflexcode/' title="Linkedin" target="_blank" className="socialBtnHover"><div className="socialIcon"><CiLinkedin /></div></Link>
                        <Link to='https://www.instagram.com/webflexcode/' title="Instagram" target="_blank" className="socialBtnHover"><div className="socialIcon"> <FaInstagram /></div></Link>
                        <Link to='https://www.pinterest.com/webflexcode/' title="Pinterest" target="_blank" className="socialBtnHover"><div className="socialIcon"><FaPinterest /></div></Link>
                        <Link to='https://github.com/nextDeveloperbd' title="Github" target="_blank" className="socialBtnHover"><div className="github"> <FaGithub /></div></Link>
                    </div>
                </div>
            </div>
            <div className="divider px-3"></div>
        </div>
    );
};

export default LeftRightTop;