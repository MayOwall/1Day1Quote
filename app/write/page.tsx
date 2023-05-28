"use client";
import { useState } from "react";
import { WriteTemplate } from "@/component";

const dummyCardListData = [
  {
    userData: {
      userId: "user123",
      name: "shin_zzang",
      profileImage:
        "https://item.kakaocdn.net/do/fd0050f12764b403e7863c2c03cd4d2d7154249a3890514a43687a85e6b6cc82",
    },
    contentData: {
      cardId: "cardId1",
      date: "2023.03.12",
      imageURL:
        "https://sojoong.joins.com/wp-content/uploads/sites/4/2018/12/bodo_still06.jpg",
      quote: "나를 사랑할 줄 아는 나, 정말 멋져",
      speaker: "짱구",
      fireCount: 123,
      isFired: false,
      isBookMarked: false,
    },
  },
  {
    userData: {
      userId: "user123",
      name: "shin_zzang",
      profileImage:
        "https://item.kakaocdn.net/do/fd0050f12764b403e7863c2c03cd4d2d7154249a3890514a43687a85e6b6cc82",
    },
    contentData: {
      cardId: "cardId2",
      date: "2023.03.13",
      imageURL:
        "https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/tr/2023/04/05/2757ae48-7932-4091-9611-44aa691bd979.jpg",
      quote: "나를 아낄줄 아는 나, 정말 멋져",
      speaker: "짱구",
      fireCount: 42,
      isFired: true,
      isBookMarked: false,
    },
  },
];

export default function WritePage() {
  const [cardListData, setCardListData] = useState(dummyCardListData);

  // 특정 id의 카드를 추가, 수정, 삭제하는 핸들러
  const handleCardData = (
    type: "add" | "fire" | "bookmark" | "delete",
    cardId?: string,
    newCardData?: any
  ) => {
    console.log("type :", type, "cardId :", cardId);
    if (type === "add") console.log("newCardData :", newCardData);
  };

  return (
    <WriteTemplate
      cardListData={cardListData}
      handleCardData={handleCardData}
    />
  );
}
