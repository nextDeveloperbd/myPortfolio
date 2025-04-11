import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer gap-y-4 md:gap-y-0 bg-gray-50 sm:footer-horizontal items-center p-4">
                <aside className="grid-flow-col items-center">
                    <img src="https://i.ibb.co.com/xVtg9Rz/Nexa-Boost-Marketing.jpg" className="w-8 h-8 rounded-3xl" alt="" />
                    <div className="flex flex-col md:flex-row gap-1 items-center">
                    <p>Copyright © orbitshiftbd.com 2022 - {new Date().getFullYear()}</p>
                    <span className="hidden md:block">|</span>
                    <p> All right reserved | Designed By <a href='http:/https://www.facebook.com/WebFlexCode' target="_blank" className="hover:text-[#5271ff] duration-300 font-semibold text-[#13393a]">Web flex code</a></p>
                    </div>
                    
                </aside>
                <nav className="grid-flow-col gap-4 place-self-center md:justify-self-end">
                    <div className="flex gap-2 justify-center text-2xl">
                        <Link to='https://www.facebook.com/orbitshiftbd' target="_blank" className="socialBtnHover"><div className="socialIcon">  <CiFacebook /></div></Link>
                        <Link to='https://www.linkedin.com/company/orbitshift-bd/?viewAsMember=true' target="_blank" className="socialBtnHover"><div className="socialIcon"><CiLinkedin /></div></Link>
                        <Link to='https://www.instagram.com/orbitshiftbd/' target="_blank" className="socialBtnHover"><div className="socialIcon"> <FaInstagram /></div></Link>
                        <Link to='https://www.pinterest.com/webflexcode/' target="_blank" className="socialBtnHover"><div className="socialIcon"><FaPinterest /></div></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;