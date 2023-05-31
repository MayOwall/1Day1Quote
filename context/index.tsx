"use client";
import { createContext, ReactNode, useState } from "react";

export const Context = createContext<any>(null);

interface IUserData {
  userId: string;
  userName: string;
  userImageURL: string;
}
const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const userId = "user123";
  const [userData, setUserData] = useState<IUserData | null>(null);

  return (
    <Context.Provider
      value={{
        isLogin,
        setIsLogin,
        userId,
        userData,
        setUserData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
