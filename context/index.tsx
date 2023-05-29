"use client";
import { createContext, ReactNode, useState } from "react";

export const Context = createContext<any>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const userId = "user123";
  const [userData, setUserData] = useState({
    nickname: "shin_zzang",
    introduce: "천방지축 어리둥절 빙글빙글",
    imageURL:
      "https://item.kakaocdn.net/do/fd0050f12764b403e7863c2c03cd4d2d7154249a3890514a43687a85e6b6cc82",
  });
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
