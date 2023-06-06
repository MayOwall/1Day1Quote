"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/context";
import { defaultProfileImage } from "@/public";
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

function ProfileCard({ profileData }: IProfileCardProps) {
  const { userData, userActData } = profileData;
  const pathname = usePathname()?.slice(9);
  const { authData } = useContext(Context);
  const isSelfProfile = authData.id === pathname;
  const { name, imageURL, introduce } = userData;
  const { quoteCount, bookmarkCount } = userActData;

  return (
    <S.Container>
      <S.UserData>
        <div>
          <S.UserName>{name}</S.UserName>
          <S.UserIntroduce>{introduce || "자기소개 없음"}</S.UserIntroduce>
        </div>
        <S.UserImage>
          <Image
            src={imageURL || defaultProfileImage}
            fill
            sizes="30vw"
            alt="user-portrait"
          />
        </S.UserImage>
      </S.UserData>
      <S.UserActData>
        <LabelNum label="작성한 문장 수" num={quoteCount} />
        <LabelNum label="저장한 문장 수" num={bookmarkCount} />
      </S.UserActData>
      {isSelfProfile && (
        <Link href="/profile/edit">
          <S.ProfileEditBtn>프로필 편집</S.ProfileEditBtn>
        </Link>
      )}
    </S.Container>
  );
}

export default ProfileCard;
