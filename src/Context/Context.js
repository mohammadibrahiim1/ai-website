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

export const AuthContext = createContext();

const cartFromlocalStorage = JSON.parse(
  localStorage.getItem("newCart") || "[]"
);

const auth = getAuth(app);

const Context = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(cartFromlocalStorage);
  // const [warning, setWarning] = useState(false);
  console.log(cart);

  const handleAddtoFavourite = (product) => {
    console.log(product);
    let newCart = [];
    const exists = cart.find((item) => item._id === product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((item) => item._id !== product._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    console.log(newCart);
    localStorage.setItem("newCart", JSON.stringify(newCart));
  };

  const removeFromDb = (_id) => {
    const storedCart = localStorage.getItem("newCart");
    if (storedCart) {
      const newCart = JSON.parse(storedCart);
      if (_id in newCart) {
        delete newCart[_id];
        localStorage.setItem("newCart", JSON.stringify(newCart));
      }
    }
  };
  

  const handleRemoveProduct = (product) => {
    console.log(product);

  const rest = cart.filter( item => item._id !== product._id);
  setCart(rest);
  removeFromDb(product._id);
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
    handleRemoveProduct,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Context;
