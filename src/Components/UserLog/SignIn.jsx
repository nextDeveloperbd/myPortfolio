import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const SignIn = () => {
    const {googleSignIn, logIn} = useContext(AuthContext);
	const[show, setShow] = useState(true);
	const navigate = useNavigate()
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            console.log(result.user);
            toast.success('Google Sing in Success')
			navigate('/')
        })
        .catch(error => {
            console.log(error.message);
            
        })
    }
    const handleLogIn = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userData = { email, password};
        console.log(userData);
        logIn(email, password)
        .then(result => {
            console.log(result.user);
            toast.success("Signin Successful");
			updateProfile(auth.currentUser, {
                displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
            navigate('/')
        })
        .catch(error =>{
            console.log(error.message);
            
        })
    }
    return (
        <div className='pt-16 md:pt-28'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100 mx-auto ">
	<h1 className="text-2xl font-bold text-center bg-gradient-to-r from-orange-400 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Sign In</h1>
	<form onSubmit={handleLogIn} className="space-y-6">
		<div className="space-y-1 text-sm">
			<label for="email" className="block text-gray-400">Email</label>
			<input type="text" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm relative">
			<label for="password" className="block text-gray-400">Password</label>
			<input type= {show?"password": "text"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
			<div onClick={() => setShow(!show)} className="absolute right-2 bottom-8">
                {
                    show? <span><FaEye /></span>: <span><FaEyeSlash /></span>
                }
        </div>
			<div className="flex justify-end items-center text-xs text-gray-400 gap-1">
                <input type="checkbox" name="" id="" />Remember Password
				
			</div>
		</div>
		<button type="submit" className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign In</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
		<p className="px-3 text-sm text-gray-400">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
		<FaGoogle className="text-sky-500 text-xl"/>
		</button>
		<button  aria-label="Log in with Twitter" className="p-3 rounded-sm">
        <FaXTwitter className="text-xl"/>
		</button>
		<button aria-label="Log in with GitHub" className="p-3 rounded-sm">
        <FaGithub className="text-xl"/>
		</button>
	</div>
	<p className="text-xs text-center sm:px-6 text-gray-400">Do not have an account?
		<Link to='/register' rel="noopener noreferrer" href="#" className="underline text-green-400 ml-2 ">Sign Up</Link>
	</p>
</div>
        </div>
    );
};

export default SignIn;