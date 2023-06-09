"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Context } from "@/context";
import { useContext } from "react";
import {
  FireIconFill,
  FireIconVacant,
  BookmarkFill,
  BookmarkVacant,
  TrashIcon,
  defaultProfileImage,
} from "@/public";
import {
  IQuoteCardHeaderProps,
  IQuoteCardBodyProps,
  IQuoteCardProps,
} from "@/type";
import { DateFormatter } from "@/hook";
import * as S from "./QuoteCard.styles";
import { postBookmark, postFireNum, deleteQuoteCard } from "@/api";

// 카드 작성 유저. 클릭시 해당 유저 프로필로 이동
function Header({ userData, handleDelete }: IQuoteCardHeaderProps) {
  const { id: userId, name, imageURL } = userData;
  const { authData } = useContext(Context);
  const authId = authData ? authData.id : null;
  return (
    <S.HeaderContainer>
      <div>
        <div>
          <Link href={`/profile/${userId}`}>
            <Image
              src={imageURL || defaultProfileImage}
              fill
              sizes="10rem"
              alt="card-user-portrait"
            />
          </Link>
        </div>
        <span>
          <Link href={`/profile/${userId}`}>{name}</Link>
        </span>
      </div>
      {userId === authId && (
        <S.CardEditBtns>
          <TrashIcon onClick={handleDelete} />
        </S.CardEditBtns>
      )}
    </S.HeaderContainer>
  );
}

// 카드 본문. 버튼을 통해 불 붙이기 & 저장하기 가능
function Body({
  contentData,
  handleFire,
  handleBookmark,
}: IQuoteCardBodyProps) {
  const {
    id: cardId,
    date,
    imageURL,
    quote,
    speaker,
    isFired,
    fireCount,
    isBookMarked,
  } = contentData;
  return (
    <S.BodyContainer data-_id={cardId}>
      <S.BodyDate>{DateFormatter(new Date(date))}</S.BodyDate>
      {imageURL && (
        <S.BodyImage className="card-image">
          <Image src={imageURL} fill sizes="100vw" alt="card-image" />
        </S.BodyImage>
      )}
      <S.BodyQuotes>
        <p>{quote}</p>
        <span>{speaker}</span>
      </S.BodyQuotes>
      <S.BodyBtns>
        <S.FireBtn onClick={handleFire}>
          {isFired ? <FireIconFill /> : <FireIconVacant />}
          <small>{fireCount} fires</small>
        </S.FireBtn>
        {isBookMarked ? (
          <BookmarkFill onClick={handleBookmark} />
        ) : (
          <BookmarkVacant onClick={handleBookmark} />
        )}
      </S.BodyBtns>
    </S.BodyContainer>
  );
}

function QuoteCard({ cardData, handleCardData }: IQuoteCardProps) {
  const { userData, contentData } = cardData;
  const { id: cardId, isFired, isBookMarked } = contentData;
  const { authData } = useContext(Context);
  const router = useRouter();
  // 이 카드를 삭제하는 핸들러
  const handleDelete = async () => {
    // 1. 프론트 카드 리스트 수정
    handleCardData("delete", cardId);

    // 2. 서버 카드 삭제
    const { success, reason } = await deleteQuoteCard(cardId);
    if (!success && reason === "unvalid token") {
      router.push("/login");
    }
  };

  // 이 카드의 불꽃 값을 수정하는 핸들러
  const handleFire = async () => {
    if (!authData) {
      router.push("/login");
      return;
    }
    // 1. 프론트 카드의 불꽃값 수정
    handleCardData("fire", cardId);
    // 2. 서버 카드의 불꽃값 수정
    const { success, reason } = await postFireNum(
      cardId,
      isFired ? "fireDown" : "fireUp"
    );
    if (!success && reason === "unvalid token") {
      router.push("/login");
    }
  };

  // 이 카드의 북마크 값을 수정하는 핸들러
  const handleBookmark = async () => {
    if (!authData) {
      router.push("/login");
      return;
    }
    // 1. 프론트 카드의 북마크값 수정
    handleCardData("bookmark", cardId);
    // 2. 서버 카드의 북마크값 수정
    const { success, reason } = await postBookmark(
      cardId,
      isBookMarked ? "cancelBookmark" : "addBookmark"
    );
    if (!success && reason === "unvalid token") {
      router.push("/login");
    }
  };
  return (
    <S.Container className="quoteCard">
      <Header userData={userData} handleDelete={handleDelete} />
      <Body
        contentData={contentData}
        handleFire={handleFire}
        handleBookmark={handleBookmark}
      />
    </S.Container>
  );
}

export default React.memo(QuoteCard);
