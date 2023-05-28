"use client";
import { RoundButton, QuoteCard, ProfileCard } from "@/component";
import {
  IProfileBtnListProps,
  ICardListProps,
  IProfileTemplateProps,
} from "@/type";
import * as S from "./ProfileTemplate.styles";

// 버튼 리스트
function BtnList({ selectedType, handleSelectedType }: IProfileBtnListProps) {
  return (
    <S.ButtonContainer>
      <RoundButton
        isSelected={selectedType === "write"}
        handleSelect={handleSelectedType}
      >
        작성한 문장
      </RoundButton>
      <RoundButton
        isSelected={selectedType === "bookmark"}
        handleSelect={handleSelectedType}
      >
        저장한 문장
      </RoundButton>
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

function ProfileTemplate({
  profileData,
  selectedType,
  handleSelectedType,
  cardListData,
  handleCardData,
}: IProfileTemplateProps) {
  const { userData, userActData } = profileData;
  return (
    <S.Container>
      <ProfileCard userData={userData} userActData={userActData} />
      <BtnList
        selectedType={selectedType}
        handleSelectedType={handleSelectedType}
      />
      <CardList cardListData={cardListData} handleCardData={handleCardData} />
    </S.Container>
  );
}

export default ProfileTemplate;
