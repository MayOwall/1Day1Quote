"use client";
import { useState, useLayoutEffect, useEffect, useRef } from "react";
import { HomeTemplate } from "@/component";
import { TBtn, IQuoteCardData } from "@/type";
import { getCardList } from "./api/home";

export default function Home() {
  const btnList: TBtn[] = ["최신순", "역대 최고 인기"];
  const [cardListData, setCardListData] = useState<IQuoteCardData[]>([]);
  const [selectedBtn, setSelectedBtn] = useState<TBtn>("최신순");
  const [pageNum, setPageNum] = useState(1);
  const [isLast, setIsLast] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const observer = useRef<any>(null);

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

  // 카드 리스트 조회 및 set 핸들러
  const getHomepageCardlistData = async () => {
    const {
      data,
    }: {
      data: {
        isLast: boolean;
        cardListData: IQuoteCardData[];
      };
    } = await getCardList(selectedBtn, pageNum);

    data.isLast && setIsLast(true);

    const nextCardListData = [...cardListData, ...data.cardListData];

    setCardListData(() => nextCardListData);
    setLoading(() => false);
  };

  // 페이지 넘버 변경 때마다 card list 업데이트
  useLayoutEffect(() => {
    if (!isLast && !isLoading) {
      setLoading(true);
      getHomepageCardlistData();
    }
  }, [pageNum]);

  // 카드 타입 변경 때마다 card list 변경
  useLayoutEffect(() => {
    setLoading(true);
    setCardListData(() => []);
    setPageNum(() => 1);
    getHomepageCardlistData();
  }, [selectedBtn]);

  // cardListData 변경 때마다 observer 부여
  useEffect(() => {
    const quoteCardList = document.querySelectorAll(".quoteCard");
    const lastQuoteCard = quoteCardList[quoteCardList.length - 1];
    if (!!lastQuoteCard) {
      observer.current.observe(lastQuoteCard);
    }
  }, [cardListData]);

  // 무한스크롤 초기 세팅
  useEffect(() => {
    const observerOption = { threshold: 0.1, rootMargin: "100px 0px" };
    const observerCallback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          setPageNum((v) => v + 1);
        }
      });
    };
    observer.current = new IntersectionObserver(
      observerCallback,
      observerOption
    );
  }, []);

  return (
    <HomeTemplate
      isLoading={isLoading}
      isLast={isLast}
      btnListData={{ btnList, selectedBtn, handleSelectedBtn }}
      cardListData={cardListData}
      handleCardData={handleCardData}
    />
  );
}
