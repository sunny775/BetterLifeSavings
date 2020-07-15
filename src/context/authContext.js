import React, { createContext } from "react";
import useGetUser from '../hooks/auth';
import useTransactions from '../hooks/transactions'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = useGetUser()
  const transactions = useTransactions()


  return (
    <AuthContext.Provider value={{...user, ...transactions}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;