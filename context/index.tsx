"use client";
import { createContext, ReactNode, useState } from "react";

export const Context = createContext<any>(null);

interface IAuthData {
  userId: string;
  userName: string;
  userImageURL: string;
  userIntroduce: string;
}

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [authData, setAuthData] = useState<IAuthData | null>(null);

  return (
    <Context.Provider
      value={{
        authData,
        setAuthData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
