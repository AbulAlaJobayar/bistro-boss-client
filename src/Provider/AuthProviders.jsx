import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProviders = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

const singIn=(email,password)=>{
    setLoading(true);
   return signInWithEmailAndPassword(auth, email, password)
}

const logOut=()=>{
    setLoading(true);
    return signOut(auth)
}


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        });
        return () => {
            return unSubscribe();
        }
    }, [])

   


    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;