"use client";
import { useState, useLayoutEffect } from "react";
import { RoundButton, QuoteCard } from "@/component";
import { AnnounceIcon } from "@/public";
import { IHomeBtnListProps, IHomeTemplateProps, ICardListProps } from "@/type";
import * as S from "./HomeTemplate.styles";

// 공지사항
function Announce() {
  return (
    <S.Announce>
      <AnnounceIcon />
      <p>다른 사람이 공유한 문장에 불을 붙여보세요 🔥</p>
    </S.Announce>
  );
}

// 카드 정렬 버튼
function BtnList({ btnListData }: IHomeBtnListProps) {
  const { btnList, selectedBtn, handleSelectedBtn } = btnListData;

  return (
    <S.ButtonContainer>
      {btnList.map((btnName) => (
        <RoundButton
          key={btnName}
          isSelected={selectedBtn === btnName}
          handleSelect={() => handleSelectedBtn(btnName)}
        >
          {btnName}
        </RoundButton>
      ))}
    </S.ButtonContainer>
  );
}

// 카드 리스트
function CardList({ cardListData, handleCardData }: ICardListProps) {
  return (
    <S.CardList>
      {cardListData.map((cardData, idx) => (
        <QuoteCard
          key={idx}
          cardData={cardData}
          handleCardData={handleCardData}
        />
      ))}
    </S.CardList>
  );
}

function HomeTemplate({
  isLast,
  isLoading,
  btnListData,
  cardListData,
  handleCardData,
}: IHomeTemplateProps) {
  const [last, setLast] = useState(false);
  useLayoutEffect(() => {
    setLast(isLast);
  }, [isLast]);
  return (
    <S.Container>
      <Announce />
      <BtnList btnListData={btnListData} />
      <CardList cardListData={cardListData} handleCardData={handleCardData} />
      {isLoading && <small>loading...</small>}
      {last && <small>마지막 카드입니다.</small>}
    </S.Container>
  );
}

export default HomeTemplate;
