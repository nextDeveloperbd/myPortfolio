import { Outlet } from "react-router-dom";
import LeftSide from "../Home/LeftSide";
import Footer from "../Footer/Footer";
import '../test/ScrollArea.css'
import TopHeader from "./TopHeader";

const MainLayout = () => {
    return (

        <div className=" grid grid-cols-1 md:grid-cols-5 ">
            <div className="md:col-span-1 md:h-screen md:bg-gray-50">
                <div className="md:scroll-area ">
                    <LeftSide></LeftSide>
                </div>
            </div>
            <div className="md:col-span-4 ">                
                <TopHeader></TopHeader>                
                <div className="md:min-h-screen mb-4 px-2 ">
                    {/* Right layout */}
                    <div className="scroll-area ">
                        <Outlet></Outlet>
                    </div>
                </div>
                <Footer></Footer>

            </div>
        </div>


    );
};

export default MainLayout;