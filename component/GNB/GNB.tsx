"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useContext } from "react";
import { Logo } from "@/public";
import { Context } from "@/context";
import * as S from "./GNB.styles";

function GNB() {
  const { authData } = useContext(Context);
  const pathname = usePathname();
  const isLoginPage = pathname ? pathname.includes("/login") : false;

  return (
    <>
      {isLoginPage && <></>}
      {!isLoginPage && (
        <S.Container>
          <S.Logo>
            <Logo width="35px" height="35px" />
            <span>1DAY 1QUOTE</span>
          </S.Logo>
          {!authData && (
            <Link href="/login">
              <S.LoginBtn>로그인</S.LoginBtn>
            </Link>
          )}
          {authData && (
            <S.LogoutBtn onClick={() => signOut({ callbackUrl: "/" })}>
              로그아웃
            </S.LogoutBtn>
          )}
        </S.Container>
      )}
    </>
  );
}

export default GNB;
