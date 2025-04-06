import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialMediaLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Lottie from "lottie-react";
import loginicon from '../../assets/Login- 1702981686742.json'
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const LogIn = () => {
	const { logIn, setUser } = useContext(AuthContext);
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState('')
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/'
	
	const handleLogin = e => {
		e.preventDefault();
		const form = new FormData(e.target);
		const email = form.get('email');
		const password = form.get('password');
		const regUserData = { email, password };		
		setError("")
		logIn(email, password)
			.then(result => {
				const newUser = result.user;
				setUser(newUser)
				toast.success('Login Successfull')
				navigate(from)
			})
			.catch(error => {
				setError(error.message)
			})
	};
	return (
		<div>
			<Helmet>
				<title>Sing In | My Portfolio website</title>
				</Helmet>
			<div className="w-full mx-auto p-2 md:p-6 space-y-3 rounded-xl text-black m-4 min-h-screen border">

				<h1 className="text-2xl font-bold text-center">Sign In</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
					<div className="self-center">
						<form onSubmit={handleLogin} action="" className="space-y-6">
							<div className="space-y-1 text-sm">
								<label htmlFor="email" className="block ">Email</label>
								<input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md border border-[#1a3c3d] focus:border-violet-400" />
							</div>
							<div className="space-y-1 text-sm relative">
								<label htmlFor="password" className="block">Password</label>
								<input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-[#1a3c3d] focus:border-violet-400" />
								<span
									onClick={() => setShowPassword(!showPassword)}
									className="absolute bottom-[35px] right-4"
								>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
								</span>
								<div className="flex justify-between text-xs text-gray-900">
									{
										error ? <h3 className="text-center text-red-500">{error.split(':')[1]}</h3> : ""
									}
									<a rel="noopener noreferrer" href="#">Forgot Password?</a>
								</div>
							</div>

							<button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-100 bg-[#1a3c3d] cursor-pointer">Sign in</button>
						</form>
						<SocialLogin></SocialLogin>
						<p className="text-xs text-center sm:px-6">Do not have an account?
							<Link to='/register' rel="noopener noreferrer" href="#" className="underline text-[#831ada] font-bold"> Sign up</Link>
						</p>
					</div>
					{/* lottie */}
					<Lottie className="hidden md:block self-center" animationData={loginicon} loop={true} />
				</div>


			</div>
		</div>
	);
};

export default LogIn;