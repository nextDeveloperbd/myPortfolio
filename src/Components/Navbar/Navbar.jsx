import { NavLink, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import moment from "moment";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const{user, logOut} = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogOut = () =>{
    logOut()
    .then(result => {
      console.log(result.user);
      toast.success('Log Out Success')
      navigate('/signIn')
    })
    .catch(error => {
      console.log(error.message);
      
    })
  }
  return (
    <div className=" ">
      <header className="fixed w-full z-40 top-0 opacity-90">
        <div className="hidden md:block">
        <aside className="text-center flex justify-between px-2 py-1 bg-gray-900  text-white ">
          <div className="flex w-[60%] justify-between flex-1">
          <p >Welcome : {user ? <span>{user?.displayName  || user?.email}</span> :"Guest"} </p>
          <p >{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
          </div>
          <p className="flex w-[40%] items-center justify-end gap-2"><span className="flex items-center gap-1"><FaWhatsapp className="text-green-500" /> +8801576580080 </span> <span className="flex items-center gap-1"><MdOutlineMailOutline className="text-sky-500" /> Email: merndevelpler@gmail.com </span></p>
        </aside>
        </div>
        <div className="navbar px-1 py-0 bg-gray-900 text-white ">
          <div className="navbar-start">
            <div className="dropdown flex items-center justify-center">
              <ul
                tabindex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="pricing">Pricing</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
              </ul>
            </div>
            <NavLink className="flex gap-2 text-xl font-bold items-center text-[#814ff3]">
              <img
                className="w-8 h-8"
                src="https://i.ibb.co.com/2smhFSb/wev-developer.jpg"
                alt=""
              />{" "}
              <span className="text-sm">Webflexcode</span>
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-2 ">
            <LuShoppingCart className="text-2xl" />
            <div className="hidden md:block">
              {
                user ? <button onClick={handleLogOut} className="px-2 py-1 rounded-md bg-green-500">Sign out</button>:
                <NavLink to='/register' className="btn primary-button border-0 rounded-xl font-bold ">
                Sign In
              </NavLink>
              }
              
            </div>

            <div className="dropdown flex items-center justify-center relative lg:hidden ">
              <div tabindex="0" role="button" className="btn btn-ghost ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabindex="0"
                className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-[1] mt-3 w-40 p-2 shadow absolute right-1 top-8"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="pricing">Pricing</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* <Banner></Banner> */}
    </div>
  );
};

export default Navbar;
