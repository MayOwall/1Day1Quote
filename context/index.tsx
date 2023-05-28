"use client";
import { createContext, ReactNode, useState } from "react";

export const Context = createContext<any>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const userId = "user123";
  return (
    <Context.Provider
      value={{
        isLogin,
        setIsLogin,
        userId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
