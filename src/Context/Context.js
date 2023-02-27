import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { addToDb } from "../Utilities/StoredData";

export const AuthContext = createContext();

const auth = getAuth(app);

const Context = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleAddtoFavourite = (product) => {
    console.log(product);

    let isPresent = false;

    cart.forEach((item) => {
      if (product.id === item.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, product]);
    console.log(cart);
    addToDb(product._id);
    // let newTools = [];
    // const exists = tools.find((ai) => ai._id !== item._id);
    // if (!exists) {
    //   item.quantity = 1;
    //   newTools = [...tools, item];
    // } else {
    //   const rest = tools.filter((ai) => ai._id !== item._id);
    //   exists.quantity = exists.quantity + 1;
    //   newTools = [...rest, exists];
    // }

    // setTools(newTools);
    // addToDb(item._id);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    signInWithGoogle,
    logOut,
    updateUserProfile,
    user,
    loading,
    handleAddtoFavourite,
    cart,
    setCart,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Context;
