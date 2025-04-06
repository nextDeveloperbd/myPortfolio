import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import Tabs from "./TabsList";
import { Helmet } from "react-helmet-async";


const Portfolio = () => {
    return (
        <div>
            <Helmet>
                <title>Portfolio | My Portfolio website</title>
            </Helmet>
           <div className="flex flex-col items-center py-8 w-3/4 mx-auto text-center space-y-4">
           <h1 className="text-2xl font-semibold">A collection of my best projects</h1>
            <p className="">With 3+ years in web development and Digital Marketing, I acquired extensive experience working on projects across multiple industries and technologies. Let me show you my best Works.</p>
            <div className="">
                                <Link to="/contact" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium contactBtn text-white inline-block ">
                                    <span className="hireBtn"></span>
                                    <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />Contact Us</span>
                                </Link>
                            </div>
           </div>
           <hr />
           {/* Tabs */}
           <Tabs></Tabs>           
        </div>
    );
};

export default Portfolio;