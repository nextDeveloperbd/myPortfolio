
import { IoMdMenu } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { FiTv } from "react-icons/fi";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { TbDatabaseOff } from "react-icons/tb";

const Feature = () => {
    return (
        <div className="my-8 p-2  text-white ">
            <h1>FEATURES</h1>
            <h1 className="text-3xl">What I Do</h1>
            {/* features Div */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 p-2">
                {/* 1st div */}
                <div className=" shadow-xl shadow-slate-900   text-white space-y-3 bg-gray-900 p-3 rounded-md">
                <IoMdMenu className="text-3xl text-red-700"/>
                <h1 className="text-2xl">Web Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae debitis fugit repellendus delectus laborum modi doloribus consequatur incidunt at unde deserunt commodi aperiam, excepturi nulla aliquam quidem! Aspernatur, impedit!</p>
                </div>
                {/* 2nd div */}
                <div className=" shadow-xl border border-gray-900 shadow-black text-white space-y-3 bg-gray-800 p-3 rounded-md">
                <IoBookOutline className="text-3xl text-red-700"/>
                <h1 className="text-2xl">Web Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae debitis fugit repellendus delectus laborum modi doloribus consequatur incidunt at unde deserunt commodi aperiam, excepturi nulla aliquam quidem! Aspernatur, impedit!</p>
                </div>
                {/* 3rd div */}
                <div className=" shadow-xl border border-gray-900 shadow-black text-white space-y-3 bg-gray-800 p-3 rounded-md">
                <HiOutlineDeviceMobile className="text-3xl text-red-700"/>
                <h1 className="text-2xl">Web Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae debitis fugit repellendus delectus laborum modi doloribus consequatur incidunt at unde deserunt commodi aperiam, excepturi nulla aliquam quidem! Aspernatur, impedit!</p>
                </div>
                {/* 4th div */}
                <div className=" shadow-xl border border-gray-900 shadow-black text-white space-y-3 bg-gray-800 p-3 rounded-md">
                <FiTv className="text-3xl text-red-700"/>
                <h1 className="text-2xl">Landing Page desing</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae debitis fugit repellendus delectus laborum modi doloribus consequatur incidunt at unde deserunt commodi aperiam, excepturi nulla aliquam quidem! Aspernatur, impedit!</p>
                </div>
                {/* 5th div */}
                <div className=" shadow-xl border border-gray-900 shadow-black text-white space-y-3 bg-gray-800 p-3 rounded-md">
                <TbDatabaseOff className="text-3xl text-red-700"/>
                <h1 className="text-2xl">SEO</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae debitis fugit repellendus delectus laborum modi doloribus consequatur incidunt at unde deserunt commodi aperiam, excepturi nulla aliquam quidem! Aspernatur, impedit!</p>
                </div>
                {/* 1st div */}
                <div className=" shadow-xl border border-gray-900 shadow-black text-white space-y-3 bg-gray-800 p-3 rounded-md">
                <IoMdMenu className="text-3xl text-red-700"/>
                <h1 className="text-2xl">Web Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae debitis fugit repellendus delectus laborum modi doloribus consequatur incidunt at unde deserunt commodi aperiam, excepturi nulla aliquam quidem! Aspernatur, impedit!</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;