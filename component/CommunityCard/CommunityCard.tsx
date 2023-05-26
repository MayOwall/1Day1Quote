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

function Header({ userInfo }: ICommunityCardHeaderProps) {
  const { _id, name, portrait } = userInfo;
  return (
    <S.HeaderContainer>
      <div>
        <Link href={`/profile/${_id}`}>
          <Image src={portrait} fill alt="card-user-portrait" />
        </Link>
      </div>
      <span>
        <Link href={`/profile/${_id}`}>{name}</Link>
      </span>
    </S.HeaderContainer>
  );
}

function Body({
  cardData,
  handleFire,
  handleBookmark,
}: ICommunityCardBodyProps) {
  const { _id, date, image, quote, speaker, isFired, fireCount, isBookMarked } =
    cardData;
  return (
    <S.BodyContainer data-_id={_id}>
      <S.BodyDate>{date}</S.BodyDate>
      {image && (
        <S.BodyImage className="card-image">
          <Image src={image} fill alt="card-image" />
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

function CommunityCard({
  userInfo,
  cardData,
  handleFire,
  handleBookmark,
}: ICommunityCardProps) {
  return (
    <S.Container>
      <Header userInfo={userInfo} />
      <Body
        cardData={cardData}
        handleFire={handleFire}
        handleBookmark={handleBookmark}
      />
    </S.Container>
  );
}

export default React.memo(CommunityCard);
