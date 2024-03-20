'use client';

import { PropsWithChildren, createContext, useState } from "react";

type userType = {
  email: String,
  name: String | null,
  category: String[]
}

interface ContextType {
    user: userType | undefined,
    setUser: (user: any) => void,
    errorMsg: String,
    setError: (errorMsg: any) => void,
    isLoggedIn: Boolean,
    setIsLoggedIn: (isLoggedIn: Boolean) => void
  };

export const GlobalContext = createContext<ContextType | null>(null);

export const GlobalContextWrapper = ({children}: PropsWithChildren<{}>) => {
    const [user,setUser] = useState<userType>({
      email: "demo@gmail.com",
      name: "John Doe",
      category: []
    });
    const [errorMsg,setError] = useState<ContextType["errorMsg"]>("");
    const [isLoggedIn, setIsLoggedIn] = useState<ContextType["isLoggedIn"]>(false);

    return (<GlobalContext.Provider value={{user, setUser, errorMsg, setError, isLoggedIn, setIsLoggedIn}}>{children}</GlobalContext.Provider>)
}