"use client";
import Link from "next/link";
import { Logo } from "@/public";
import { IGNBProps } from "@/type";
import * as S from "./GNB.styles";

function GNB({ isAuth }: IGNBProps) {
  const handleLogoutBtn = () => {};
  return (
    <S.Container>
      <S.Logo>
        <Logo width="35px" height="35px" />
        <span>1DAY 1QUOTE</span>
      </S.Logo>
      {isAuth ? (
        <S.LogoutBtn onClick={handleLogoutBtn}>로그아웃</S.LogoutBtn>
      ) : (
        <Link href="/login">
          <S.LoginBtn>로그인</S.LoginBtn>
        </Link>
      )}
    </S.Container>
  );
}

export default GNB;