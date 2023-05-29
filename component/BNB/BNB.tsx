"use client";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { HomeIcon, WriteIcon, ProfileIcon } from "@/public";
import { Context } from "@/context";
import * as S from "./BNB.styles";

function BNB() {
  const { userId } = useContext(Context);
  const pathname = usePathname();
  console.log(pathname);
  const router = useRouter();
  const isWritePage = pathname === "/write";
  const isHomePage = pathname === "/";
  const isLoginPage = pathname === "/login";
  const isProfilePage = pathname === `/profile/${userId}`;

  // 버튼 인터렉션과 현재 페이지에 따른 페이지 이동 핸들러
  const handleBNBBtns = (icon: "write" | "home" | "profile") => {
    // 현재 커뮤니티 페이지가 아니면서, 커뮤니티로 요청 이동하면 커뮤니티 페이지로 이동
    if (icon === "home" && !isHomePage) {
      router.push("/");
      return;
    }
    // 현재 메인 페이지가 아니면서, 메인 페이지로 요청 이동하면 메인 페이지로 이동
    if (icon === "write" && !isWritePage) {
      router.push("/write");
      return;
    }
    if (icon === "profile" && !isProfilePage) {
      router.push(`/profile/${userId}`);
      return;
    }
  };
  return (
    <>
      {isLoginPage && <></>}
      {!isLoginPage && (
        <S.Container>
          <S.Btn>
            <HomeIcon
              width="29px"
              height="24px"
              fill={isHomePage ? "#FF4264" : "#8c8c8c"}
              onClick={() => handleBNBBtns("home")}
            />
          </S.Btn>
          <S.Btn>
            <WriteIcon
              width="22px"
              height="23px"
              fill={isWritePage ? "#FF4264" : "#8c8c8c"}
              onClick={() => handleBNBBtns("write")}
            />
          </S.Btn>
          <S.Btn>
            <ProfileIcon
              width="22px"
              height="23px"
              fill={isProfilePage ? "#FF4264" : "#8c8c8c"}
              onClick={() => handleBNBBtns("profile")}
            />
          </S.Btn>
        </S.Container>
      )}
    </>
  );
}

export default BNB;
