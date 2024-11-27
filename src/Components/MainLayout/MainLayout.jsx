import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-300px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;