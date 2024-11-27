import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedinIn,
  FaNodeJs,
  FaPinterest,
  FaReact,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbBrandMongodb } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

const Banner = () => {
  return (
    <section className="bg-gray-900 text-gray-100 rounded-md mt-16 md:mt-0 pt-8 ">
      <div className="container flex flex-col gap-2 justify-center p-2 md:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col w-full md:w-full lg:w-[70%] p-2 justify-center">
          <div className="text-center md:text-left space-y-2 mb-4">
            <h1>Welcome To My World</h1>
            <h1 className="text-2xl md:text-3xl lg:text-3xl ">
              Hi, I'm A Junior{" "}
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-none sm:text-6xl">
              <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient"> Web Developer </span>
              <span className="block text-2xl">and</span>
              <span className="bg-gradient-to-r from-green-700 via-blue-500 to-pink-400 text-transparent bg-clip-text animate-gradient">Digital Marketer</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-[70%] justify-between mx-auto md:mx-0">
            <div>
              <h1 className="mb-2">Find with me</h1>
              <div className="flex gap-2">
                <Link to="https://www.facebook.com/WebFlexCode" target="_blank" className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-sm shadow-2xl shadow-white">
                  <FaFacebook />
                </Link>
                <Link to="https://www.linkedin.com/in/md-morad-hossain-786a30157/" target="_blank" className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-sm shadow-2xl shadow-white">
                  <FaLinkedinIn />
                </Link>
                <Link to="https://www.instagram.com/webflexcode/" target="_blank" className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-sm shadow-2xl shadow-white">
                  <FaInstagramSquare className="text-lg " />
                </Link>
                <Link to="https://www.pinterest.com/webflexcode/" target="_blank" className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-sm shadow-2xl shadow-white">
                  <FaPinterest className="text-lg " />
                </Link>
                <Link to="https://x.com/WebFlexCode" target="_blank" className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-sm shadow-2xl shadow-white">
                  <FaXTwitter className="text-lg " />
                </Link>
              </div>
            </div>
            <div>
              <h1 className="mb-2">Best Skills on</h1>
              <div className="flex gap-2">
                <Link className="w-8 h-8 bg-gray-700  flex items-center justify-center rounded-sm shadow-2xl shadow-white">
                  <IoLogoJavascript />
                </Link>
                <Link className="w-8 h-8 bg-gray-700  flex items-center justify-center rounded-sm shadow-2xl shadow-white">
                  <FaReact />
                </Link>
                <Link className="w-8 h-8 bg-gray-700  flex items-center justify-center rounded-sm shadow-2xl shadow-white">
                  <TbBrandMongodb />
                </Link>
                <Link className="w-8 h-8 bg-gray-700  flex items-center justify-center rounded-sm shadow-2xl shadow-white">
                  <FaNodeJs />
                </Link>
                <Link className="w-8 h-8 bg-gray-700  flex items-center justify-center rounded-sm shadow-2xl shadow-white">
                  <SiTailwindcss />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left">
            <a
              href="./public/images/CV of Md Morad.pdf"
              download
              className="px-4 py-2 rounded-md bg-[#814ff3]"
            >
              <button>Download CV</button>
            </a>
          </div>
        </div>
        <div className="md:w-[30%] w-full flex items-center justify-center ">
          <img
            src="https://i.ibb.co.com/88HKS9j/architect.png"
            alt=""
            className="object-contain w-[100%]  "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
