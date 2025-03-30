import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-gray-100 sm:footer-horizontal items-center p-4">
                <aside className="grid-flow-col items-center">
                    <img src="https://i.ibb.co.com/xVtg9Rz/Nexa-Boost-Marketing.jpg" className="w-8 h-8 rounded-3xl" alt="" />
                    <p>Copyright © 2022 - {new Date().getFullYear()} - All right reserved | <Link className="hover:text-[#5271ff] duration-300 font-semibold text-green-600">Web flex code</Link></p>
                </aside>
                <nav className="grid-flow-col gap-4 place-self-center md:justify-self-end">
                    <div className="flex gap-2 justify-center text-2xl">
                        <Link to='https://www.facebook.com/WebFlexCode' target="_blank" className="socialBtnHover"><div className="socialIcon">  <CiFacebook /></div></Link>
                        <Link to='https://www.linkedin.com/in/webflexcode/' target="_blank" className="socialBtnHover"><div className="socialIcon"><CiLinkedin /></div></Link>
                        <Link to='https://www.instagram.com/webflexcode/' target="_blank" className="socialBtnHover"><div className="socialIcon"> <FaInstagram /></div></Link>
                        <Link to='https://www.pinterest.com/webflexcode/' target="_blank" className="socialBtnHover"><div className="socialIcon"><FaPinterest /></div></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;