"use client";
import { QuoteForm, QuoteCard } from "@/component";
import { IWriteTemplateProps } from "@/type";
import * as S from "./WriteTemplate.styles";

function WriteTemplate({ cardListData, handleCardData }: IWriteTemplateProps) {
  return (
    <S.Container>
      <QuoteForm handleCardData={handleCardData} />
      <S.CardList>
        {cardListData.map((cardData, idx) => (
          <QuoteCard
            key={idx}
            cardData={cardData}
            handleCardData={handleCardData}
          />
        ))}
      </S.CardList>
    </S.Container>
  );
}

export default WriteTemplate;
