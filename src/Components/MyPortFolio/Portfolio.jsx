import { IoBookOutline } from "react-icons/io5";
import CommonTitle from "../CommonTitle/CommonTitle";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="mb-12">
      <CommonTitle
        subTitle={"Visit my portfolio and share your review"}
        title={"PORTFOLIO"}
      ></CommonTitle>
      {/* portfolio div */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 p-2">
        {/* 1st div */}
        <div className=" shadow-xl border border-gray-900 shadow-black text-white space-y-3 bg-gray-900 p-3 rounded-md">
          <div className="w-full h-60 overflow-hidden">
          <img
            src="/public/images/team01.png"
            alt=""
            className="w-full h-60 object-cover rounded-md hover:scale-105 duration-500"
          />
          </div>
          
          <div className="mt-2 px-2">
            <div className="flex justify-between mb-4">
              <h1 className="text-red-600">Gym </h1>
              <IoBookOutline />
            </div>
            <h1 className="text-xl">Web Development desings here</h1>
            <div className="flex justify-between mt-4">
            <Link to='https://github.com/merndeveloperdhk/gym' target="_blank" className="px-4 py-1  bg-gray-700 flex items-center justify-center rounded shadow-2xl shadow-white">
                    Github link
                    </Link>
                    <Link to='https://merndeveloperdhk.github.io/gym/' target="_blank" className="px-4 py-1  bg-gray-700 flex items-center justify-center rounded shadow-2xl shadow-white">
                    Live link
                    </Link>
            </div>
          </div>
        </div>
        {/* 2nd div */}
        <div className=" shadow-xl border border-gray-900 shadow-black text-white space-y-3 bg-gray-800 p-3 rounded-md">
         <div className="w-full h-60 overflow-hidden ">
         <img
            src="./public/images/Real state.png"
            alt=""
            className="w-full h-60 object-cover rounded-md hover:scale-105 duration-500 "
          />
         </div>
          <div className="mt-2 px-2">
            <div className="flex justify-between mb-4">
              <h1 className="text-red-600">Real State</h1>
              <IoBookOutline />
            </div>
            <h1 className="text-xl">Web Development desings here</h1>
            <div className="flex justify-between mt-4">
            <Link to='https://github.com/merndeveloperdhk/realState' target="_blank" className="px-4 py-1  bg-gray-700 flex items-center justify-center rounded shadow-2xl shadow-white">
                    Github link
                    </Link>
                    <Link to='https://merndeveloperdhk.github.io/realState/' target="_blank" className="px-4 py-1  bg-gray-700 flex items-center justify-center rounded shadow-2xl shadow-white">
                    Live link
                    </Link>
            </div>
          </div>
        </div>
        {/* 1st div */}
        <div className=" shadow-xl border border-gray-900 shadow-black text-white space-y-3 bg-gray-800 p-3 rounded-md">
        <div className="w-full h-60 overflow-hidden">
        <img
            src="./public/images/Social marketing.jpg"
            alt=""
            className="w-full h-60  rounded-md hover:scale-105 duration-500"
          />
        </div>
          <div className="mt-2 px-2">
            <div className="flex justify-between mb-4">
              <h1 className="text-red-600">Social media Manager</h1>
              <IoBookOutline />
            </div>
            <h1 className="text-xl">Web Development desings here</h1>
            <div className="flex justify-between mt-4">
            <Link to='https://www.pinterest.com/webflexcode/' target="_blank" className="px-4 py-1  bg-gray-700 flex items-center justify-center rounded shadow-2xl shadow-white">
                    Pinterest link
                    </Link>
                    <Link to='https://www.instagram.com/p/DAGYFQxsrXk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target="_blank" className="px-4 py-1  bg-gray-700 flex items-center justify-center rounded shadow-2xl shadow-white">
                    Instagram link
                    </Link>
            </div>
          </div>
        </div>
        {/* 4th div */}
        <div className=" shadow-lg border border-gray-900 shadow-black text-white space-y-3 bg-gray-800 p-3 rounded-md">
         <div className="w-full h-60 overflow-hidden">
         <img
            src="./public/images/instagram follower.jpg"
            alt=""
            className="w-full h-60  rounded-md hover:scale-105 duration-500"
          />
         </div>
          <div className="mt-2 px-2">
            <div className="flex justify-between mb-4">
              <h1 className="text-red-600">Instagram</h1>
              <IoBookOutline />
            </div>
            <h1 className="text-xl">Web Development desings here</h1>
            <div className="flex justify-between mt-4">
            <Link to='https://www.facebook.com/WebWaveDigitalMarketing' target="_blank" className="px-4 py-1  bg-gray-700 flex items-center justify-center rounded shadow-2xl shadow-white">
                    Facebook Link
                    </Link>
                    <Link to='https://www.instagram.com/p/DAfAokQvwjw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target="_blank" className="px-4 py-1  bg-gray-700 flex items-center justify-center rounded shadow-2xl shadow-white">
                    Instagram Link
                    </Link>
            </div>
          </div>
        </div>
        {/* 5th div */}
        <div className=" shadow-lg  shadow-slate-900 text-white space-y-3 bg-gray-900 p-3 rounded-md">
          <div className="w-full h-60 overflow-hidden">
          <img
            src="./public/images/Architechture desinging site.png"
            alt=""
            className="w-full h-60 object-cover rounded-md hover:scale-105 duration-500"
          />
          </div>
          
          <div className="mt-2 px-2">
            <div className="flex justify-between mb-4">
              <h1 className="text-red-600">Architecture</h1>
              <IoBookOutline />
            </div>
            <h1 className="text-xl">Web Development desings here</h1>
            <div className="flex justify-between mt-4">
            <Link to='https://github.com/merndeveloperdhk/assingment2' target="_blank" className="px-4 py-1  bg-gray-700 flex items-center justify-center rounded shadow-2xl shadow-white">
                    Github link
                    </Link>
                    <Link to='https://merndeveloperdhk.github.io/assingment2/' target="_blank" className="px-4 py-1  bg-gray-700 flex items-center justify-center rounded shadow-2xl shadow-white">
                    Live link
                    </Link>
            </div>
          </div>
        </div>
        {/* 6th div */}
        <div className=" shadow-lg border border-gray-900 shadow-black text-white space-y-3 bg-gray-800 p-3 rounded-md">
          <div className="w-full h-60 overflow-hidden">
          <img
            src="./public/images/Justice website.png"
            alt=""
            className="w-full h-60 object-cover rounded-md hover:scale-105 duration-500"
          />
          </div>
          <div className="mt-2 px-2">
            <div className="flex justify-between mb-4">
              <h1 className="text-red-600">Justice</h1>
              <IoBookOutline />
            </div>
            <h1 className="text-xl">Web Development desings here</h1>
            <div className="flex justify-between mt-4">
            <Link to='https://github.com/merndeveloperdhk/assignment3' target="_blank" className="px-4 py-1  bg-gray-700 flex items-center justify-center rounded shadow-2xl shadow-white">
                    Github link
                    </Link>
                    <Link to='https://merndeveloperdhk.github.io/assignment3/' target="_blank" className="px-4 py-1  bg-gray-700 flex items-center justify-center rounded shadow-2xl shadow-white">
                    Live link
                    </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
