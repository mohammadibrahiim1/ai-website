import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth= getAuth(app);

const Context = ({children}) => {
  
  

  return (
    <div>
      <AuthContext.Provider>{children}</AuthContext.Provider>
    </div>
  );
};

export default Context;