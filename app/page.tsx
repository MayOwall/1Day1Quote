"use client";
import { useState } from "react";
import { HomeTemplate } from "@/component";
import { TBtn } from "@/type";

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
      quote: "첫번째 카드",
      speaker: "짱구",
      fireCount: 123,
      isFired: false,
      isBookMarked: false,
    },
  },
  {
    userData: {
      userId: "user456",
      name: "boe-zzang",
      profileImage:
        "https://cdn.themission.co.kr/news/photo/202211/58650_63198_2559.jpg",
    },
    contentData: {
      cardId: "cardId2",
      imageURL:
        "https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/tr/2023/04/05/2757ae48-7932-4091-9611-44aa691bd979.jpg",
      quote: "두번째 카드",
      speaker: "짱구",
      date: "2023.03.13",
      fireCount: 42,
      isFired: true,
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
      cardId: "cardId3",
      date: "2023.03.12",
      imageURL:
        "https://sojoong.joins.com/wp-content/uploads/sites/4/2018/12/bodo_still06.jpg",
      quote: "세번째 카드",
      speaker: "짱구",
      fireCount: 123,
      isFired: false,
      isBookMarked: false,
    },
  },
  {
    userData: {
      userId: "user456",
      name: "boe-zzang",
      profileImage:
        "https://cdn.themission.co.kr/news/photo/202211/58650_63198_2559.jpg",
    },
    contentData: {
      cardId: "cardId4",
      date: "2023.03.12",
      imageURL:
        "https://sojoong.joins.com/wp-content/uploads/sites/4/2018/12/bodo_still06.jpg",
      quote: "네번째 카드",
      speaker: "짱구",
      fireCount: 123,
      isFired: false,
      isBookMarked: false,
    },
  },
];

export default function Home() {
  const btnList: TBtn[] = ["최신순", "이번주 인기", "역대 최고 인기"];
  const [cardListData, setCardListData] = useState(dummyCardListData);
  const [selectedBtn, setSelectedBtn] = useState<TBtn>("최신순");

  // 선택한 버튼 값 핸들러
  const handleSelectedBtn = (selectedBtn: TBtn) => setSelectedBtn(selectedBtn);

  // 특정 id의 카드를 추가, 수정, 삭제하는 핸들러
  const handleCardData = (
    type: "add" | "fire" | "bookmark" | "delete",
    cardId: string
  ) => {
    // 카드 불 수정
    if (type === "fire" && cardId) {
      const nextCardListData = cardListData.map((cardData) => {
        if (cardData.contentData.cardId === cardId) {
          cardData.contentData.isFired
            ? (cardData.contentData.fireCount -= 1)
            : (cardData.contentData.fireCount += 1);
          cardData.contentData.isFired = !cardData.contentData.isFired;
          return cardData;
        } else {
          return cardData;
        }
      });
      setCardListData(nextCardListData);
      return;
    }

    // 카드 북마크 수정
    if (type === "bookmark" && cardId) {
      const nextCardListData = cardListData.map((cardData) => {
        if (cardData.contentData.cardId === cardId) {
          cardData.contentData.isBookMarked =
            !cardData.contentData.isBookMarked;
          return cardData;
        } else {
          return cardData;
        }
      });
      setCardListData(() => nextCardListData);
      return;
    }

    // 카드 삭제
    if (type === "delete") {
      const nextCardListData = cardListData.filter(
        (v) => v.contentData.cardId !== cardId
      );
      setCardListData(nextCardListData);
      return;
    }
  };

  return (
    <HomeTemplate
      btnListData={{ btnList, selectedBtn, handleSelectedBtn }}
      cardListData={cardListData}
      handleCardData={handleCardData}
    />
  );
}
