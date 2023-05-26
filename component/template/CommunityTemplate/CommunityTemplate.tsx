"use client";
import { RoundButton, CommunityCard } from "@/component";
import { AnnounceIcon } from "@/public";
import {
  ICommunityBtnListProps,
  ICommunityCardProps,
  ICommunityTemplateProps,
} from "@/type";
import * as S from "./CommunityTemplate.styles";

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
function ButtonList({ btnListData }: ICommunityBtnListProps) {
  const { selectedBtn, handleSelectedBtn } = btnListData;
  return (
    <S.ButtonContainer>
      <RoundButton
        isSelected={selectedBtn === "recent"}
        handleSelect={() => handleSelectedBtn("recent")}
      >
        최신순
      </RoundButton>
      <RoundButton
        isSelected={selectedBtn === "weekly"}
        handleSelect={() => handleSelectedBtn("weekly")}
      >
        이번주 인기
      </RoundButton>
      <RoundButton
        isSelected={selectedBtn === "whole"}
        handleSelect={() => handleSelectedBtn("whole")}
      >
        역대 최고 인기
      </RoundButton>
    </S.ButtonContainer>
  );
}

function CardList({ cardListData }: { cardListData: ICommunityCardProps[] }) {
  return (
    <S.CardList>
      {cardListData.map(({ userData, bodyData }, idx) => (
        <CommunityCard key={idx} userData={userData} bodyData={bodyData} />
      ))}
    </S.CardList>
  );
}

function CommunityTemplate({
  btnListData,
  cardListData,
}: ICommunityTemplateProps) {
  return (
    <S.Container>
      <Announce />
      <ButtonList btnListData={btnListData} />
      <CardList cardListData={cardListData} />
    </S.Container>
  );
}

export default CommunityTemplate;
