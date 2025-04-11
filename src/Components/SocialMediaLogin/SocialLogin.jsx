import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import Hooks from "../Hook/Hooks";
import UseAxiosPublic from "../Hook/UseAxiosPublic";
const SocialLogin = () => {
    const axiosPublic = UseAxiosPublic()
    const { googleSignIn } = Hooks()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const [error, setError] = useState('')
    // Google singin
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    createdAt: result.user?.metadata?.creationTime
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if(res.data.insertedId){
                            toast.success('Google Login Successful')
                            navigate(from)
                        }                  
                      })
            })
            .catch(error => {
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