
import toast from "react-hot-toast";
import SocialLogin from "../SocialMediaLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Hooks from "../Hook/Hooks";
import Lottie from "lottie-react";
import register from '../../assets/Registration file.json'
import { Helmet } from "react-helmet-async";
import UseAxiosPublic from "../Hook/UseAxiosPublic";


const Register = () => {
	const axiosPublic = UseAxiosPublic()
	const { createUser, setUser, updateUserProfile, logOut } = Hooks()
	const [error, setError] = useState('');
	const [passError, setPassError] = useState('')
	const [termsError, setTermsError] = useState('')
	const [showPassword, setShowPassword] = useState(false);
	const [confirmShowPassword, setConfirmShowPassword] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const handleRegister = e => {
		e.preventDefault();
		const form = new FormData(e.target);
		const name = form.get('name')
		const email = form.get('email');
		const password = form.get('password');
		const confirmPassword = form.get('confirmPassword');
		const terms = form.get('terms')
		setPassError("")
		setTermsError("")
		setError("")
		// password validation
		if (password.length < 6) {
			setPassError('Password must be at least 6 characters');
			return
		}
		else if (password.length > 15) {
			setPassError('Password must be less than 15 characters');
			return
		}
		else if (!/(?=.*?[a-z])/.test(password)) {
			setPassError('Password must include at least one lowercase letter');
			return;
		}
		else if (!/(?=.*?[A-Z])/.test(password)) {
			setPassError('Password must include at least one Uppercase letter');
			return;
		}
		else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
			setPassError('Password must include at least one Special character');
			return;
		}
		else if (password !== confirmPassword) {
			setPassError('Password does not match')
			return
		}
		else if (!terms) {
			setTermsError("Please accept terms and conditions");
			return;
		}
		else {
			toast.success("Registration successfull");
		}

		const regUserData = { name, email, password, confirmPassword }
		console.log(regUserData);

		// Create user
		createUser(email, password)
			.then(result => {
				const newUser = result.user;
				console.log(newUser);
				setUser(newUser)
				// update profile
				updateUserProfile(name, email)
					.then(() => {
						const userInfo = {
							name: name, email: email
						}
						axiosPublic.post('/users', userInfo)
							.then(res => {
								console.log(res.data);
								if (res.data.insertedId) {
									toast.success('Registration successful');
									logOut()
										.then(() => {
											navigate('/login')
										})
								}

							})
					})
			})
			.catch(error => {
				setError(error.message)
			})
	};

	return (
		<div>
			<Helmet>
				<title>Sign Up | My Portfolio website</title>
			</Helmet>
			<div className="w-full p-2 md:p-6 space-y-1 rounded-xl mx-auto my-2">
				<h3 className="text-center text-red-500">{error.split(':')[1]}</h3>
				<h1 className="text-2xl font-bold text-center">Sign Up</h1>
				{/* password error */}
				{
					passError ? <span className="text-red-500">{passError}</span> : ""
				}
				{/* password error */}
				{
					termsError ? <span className="text-red-500">{termsError}</span> : ""
				}
				{/* start */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
					<div>
						<form onSubmit={handleRegister} className="space-y-2">
							{/* User Name */}
							<div className="space-y-1 text-sm">
								<label htmlFor="name" className="block ">Your Name</label>
								<input type="text" name="name" id="name" placeholder="name" className="w-full px-4 py-3 rounded-md border border-[#1a3c3d] focus:border-violet-400" />
							</div>
							{/* Email */}
							<div className="space-y-1 text-sm">
								<label htmlFor="email" className="block">Email</label>
								<input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md border border-[#1a3c3d] focus:border-violet-400" />
							</div>
							{/* photo */}
							<div className="text-sm">
								{/*  <label name="pictureLabel" className="block dark:text-gray-400">
              Select Image
            </label> */}
								<input
									type="file"
									name="image"
									id="image"
									accept="image/*"
									className="w-full  py-1 rounded-md border-red-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
								/>
							</div>
							{/* password field */}
							<div className="flex flex-col md:flex-row md:justify-between gap-2">
								{/* Password */}
								<div className="space-y-1 text-sm relative w-full">
									<div className="flex justify-between">
										<label htmlFor="password" className="block ">Password</label>

									</div>
									<input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="Exp: Aa123#?!@$%^&*-" className="w-full px-4 py-3 rounded-md border border-[#1a3c3d] focus:border-violet-400" />
									<span
										onClick={() => setShowPassword(!showPassword)}
										className="absolute bottom-[15px] right-4"
									>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
									</span>
								</div>

								{/* Confirm Password */}
								<div className="space-y-1 text-sm relative w-full">
									<label htmlFor="confirmPassword" className="block ">Confirm Password</label>
									<input type={confirmShowPassword ? 'text' : 'password'} name="confirmPassword" id="confirmPassword" placeholder="confirmPassword" className="w-full px-4 py-3 rounded-md border border-[#1a3c3d] focus:border-violet-400" />
									<span
										onClick={() => setConfirmShowPassword(!confirmShowPassword)}
										className="absolute bottom-[15px] right-4"
									>{confirmShowPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
									</span>

								</div>
							</div>
							{/* Terms and conditions */}
							<div className="flex justify-between text-xs dark:text-gray-400">
								<div className="flex gap-1 items-center ">
									<input type="checkbox" name="terms" id="terms" />
									<a rel="noopener noreferrer" href="#">
										Accept terms and conditions
									</a>
								</div>

							</div>
							<button className="block w-full p-3 text-center rounded text-gray-100 bg-[#1a3c3d] cursor-pointer">Sign Up</button>
						</form>
						{/* Social Icons */}
						<SocialLogin></SocialLogin>
						<p className="text-xs text-center sm:px-6 ">Already have an account?
							<Link to='/login' rel="noopener noreferrer" className="underline text-[#831ada] font-bold"> Sign in</Link>
						</p>
					</div>

					{/* lotti */}
					<Lottie className="hidden md:block" animationData={register} loop={true} />
				</div>

			</div>

		</div>
	);
};

export default Register;