
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import app from "../firebase.config";
const auth = getAuth(app)
const SocialLogin = () => {
    const googleProdiver = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const[error, setError] = useState('')
    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProdiver)
        .then(result => {
            console.log(result.user);
            toast.success('Google Login Successful')
            navigate(from)
        })
        .catch(error => {
            console.log(error.message);
            toast.error(error.message)
            setError(error.message)
        })
        
    };
  
    return (
        <div>
                <h1 className="text-red-600 text-center">{error.split(':')[1]}</h1>
            <div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
		<p className="px-3 text-sm ">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-1 rounded-sm cursor-pointer">
            <img src="https://i.ibb.co.com/21S2h23g/google-logo.png" alt="google logo" className="w-1/4 mx-auto" />
		</button>
		
		
	</div>
        </div>
    );
};

export default SocialLogin;