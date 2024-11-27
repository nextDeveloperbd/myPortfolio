import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    
    const logOut = () =>{
        return signOut(auth)
    }
     onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser)
         
          // ...
        }
      });
     
    const authInfo = {
        user,createUser,logIn, googleSignIn, logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;