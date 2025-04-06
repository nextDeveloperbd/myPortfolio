import { Outlet } from "react-router-dom";
import LeftSide from "../Home/LeftSide";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (

        <div className=" grid grid-cols-1 md:grid-cols-5 ">
            <div className="md:col-span-1 md:h-screen md:sticky md:-top-10 ">
                <LeftSide></LeftSide>
            </div>
            <div className="md:col-span-4 ">
                <div className="md:min-h-screen mb-4 px-2 ">
                    <Outlet></Outlet>
                    </div>
                <Footer></Footer>
            </div>
        </div>


    );
};

export default MainLayout;