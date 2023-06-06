"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { AppGuide } from "@/component";
import { Logo, kakaologo } from "@/public";
import * as S from "./LoginTemplate.styles";

function LoginTemplate() {
  return (
    <S.Container>
      <S.Upper>
        <AppGuide />
      </S.Upper>
      <S.Bottom>
        <S.Logo>
          <Logo width="3rem" />
          1DAY 1QUOTE
        </S.Logo>
        <p>하루에 하나씩 문장을 쌓고 공유해봐요!</p>
        <S.KakaoBtn onClick={() => signIn("kakao")}>
          <Image src={kakaologo} width={24} height={24} alt="" />
          카카오로 3초만에 시작하기
        </S.KakaoBtn>
      </S.Bottom>
    </S.Container>
  );
}

export default LoginTemplate;
