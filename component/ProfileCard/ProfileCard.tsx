"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/context";
import { IProfileCardProps } from "@/type";
import * as S from "./ProfileCard.styles";

interface ILabelNumProps {
  label: string;
  num: number;
}

function LabelNum({ label, num }: ILabelNumProps) {
  return (
    <S.LabelNum>
      <S.Label>{label}</S.Label>
      <S.Num>{num}</S.Num>
    </S.LabelNum>
  );
}

function ProfileCard({ userData, userActData }: IProfileCardProps) {
  const curUserId = useContext(Context).userId;
  const { userId, userName, userIntroduce, userImageURL } = userData;
  const { userQuoteNum, userBookmarkNum } = userActData;
  return (
    <S.Container>
      <S.UserData>
        <div>
          <S.UserName>{userName}</S.UserName>
          <S.UserIntroduce>{userIntroduce}</S.UserIntroduce>
        </div>
        <S.UserImage>
          <Image src={userImageURL} fill sizes="30vw" alt="user-portrait" />
        </S.UserImage>
      </S.UserData>
      <S.UserActData>
        <LabelNum label="작성한 문장 수" num={userQuoteNum} />
        <LabelNum label="저장한 문장 수" num={userBookmarkNum} />
      </S.UserActData>
      {userId === curUserId && (
        <Link href="/profile/edit">
          <S.ProfileEditBtn>프로필 편집</S.ProfileEditBtn>
        </Link>
      )}
    </S.Container>
  );
}

export default ProfileCard;
