import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import app from "../firebase.config";
import UseAxiosPublic from "../Hook/UseAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = UseAxiosPublic()

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
          photoURL: photo,
        })
      }
      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
             setUser(currentUser)
             console.log(currentUser);
             if(currentUser){
                //Get token and store
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    console.log(res.data);
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }                    
                })

             }else{
                //Remove token
                localStorage.removeItem('access-token')
             }
              // Show loader for at least 3 seconds
                /* setTimeout(() => {
                setLoading(false);
            }, 4000); */
             setLoading(false)
         });
         return () => {
             return unSubscribe()
         }
     },[axiosPublic])
     
    const authInfo = {
        user,createUser,logIn, setUser, googleSignIn,loading, logOut, updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;