import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const Context = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser]= useState();
  const [loading,setLoading]=useState(true);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut=  ()=> {
    return signOut(auth);
  };

  const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser,profile);
  }



  useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    })
    return()=>{
      return unsubscribe;
    }
  } ,[]);



  const authInfo = {
    signInWithGoogle,
    logOut,
    updateUserProfile,
    user,
    loading,
  };


  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Context;
