"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FireIconFill,
  FireIconVacant,
  BookmarkFill,
  BookmarkVacant,
} from "@/public";
import {
  ICommunityCardHeaderProps,
  ICommunityCardBodyProps,
  ICommunityCardProps,
} from "@/type";
import * as S from "./CommunityCard.styles";

// 카드 작성 유저. 클릭시 해당 유저 프로필로 이동
function Header({ userData }: ICommunityCardHeaderProps) {
  const { _id, name, portrait } = userData;
  return (
    <S.HeaderContainer>
      <div>
        <Link href={`/profile/${_id}`}>
          <Image src={portrait} fill sizes="10rem" alt="card-user-portrait" />
        </Link>
      </div>
      <span>
        <Link href={`/profile/${_id}`}>{name}</Link>
      </span>
    </S.HeaderContainer>
  );
}

// 카드 본문. 버튼을 통해 불 붙이기 & 저장하기 가능
function Body({ bodyData }: ICommunityCardBodyProps) {
  const { contentData, handleFire, handleBookmark } = bodyData;
  const { _id, date, image, quote, speaker, isFired, fireCount, isBookMarked } =
    contentData;
  return (
    <S.BodyContainer data-_id={_id}>
      <S.BodyDate>{date}</S.BodyDate>
      {image && (
        <S.BodyImage className="card-image">
          <Image src={image} fill sizes="100vw" alt="card-image" />
        </S.BodyImage>
      )}
      <S.BodyQuotes>
        <p>{quote}</p>
        <span>{speaker}</span>
      </S.BodyQuotes>
      <S.BodyBtns>
        <S.FireBtn onClick={() => handleFire(_id)}>
          {isFired ? <FireIconFill /> : <FireIconVacant />}
          <small>{fireCount} fires</small>
        </S.FireBtn>
        {isBookMarked ? (
          <BookmarkFill onClick={() => handleBookmark(_id)} />
        ) : (
          <BookmarkVacant onClick={() => handleBookmark(_id)} />
        )}
      </S.BodyBtns>
    </S.BodyContainer>
  );
}

function CommunityCard({ userData, bodyData }: ICommunityCardProps) {
  return (
    <S.Container>
      <Header userData={userData} />
      <Body bodyData={bodyData} />
    </S.Container>
  );
}

export default React.memo(CommunityCard);
