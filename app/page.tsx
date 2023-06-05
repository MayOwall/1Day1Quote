"use client";
import { useState, useLayoutEffect, useEffect, useRef } from "react";
import { HomeTemplate } from "@/component";
import { TBtn, IQuoteCardData, IHomePageCardListData } from "@/type";
import { getCardList } from "@/api";
import { updateCardData } from "@/util";

export default function Home() {
  const btnList: TBtn[] = ["최신순", "역대 최고 인기"];
  const [cardListData, setCardListData] = useState<IQuoteCardData[]>([]);
  const [selectedBtn, setSelectedBtn] = useState<TBtn>("최신순");
  const [isLoading, setLoading] = useState(false);
  const observer = useRef<any>(null);
  const pageNum = useRef(1);
  const isLast = useRef(false);

  // 특정 id의 카드를 추가, 수정, 삭제하는 핸들러
  const handleCardData = (
    type: "add" | "fire" | "bookmark" | "delete",
    cardId: string
  ) => {
    updateCardData(type, cardId, cardListData, setCardListData);
  };

  // 카드 리스트 데이터 초기화
  const resetCardlistData = async (selectedBtn: TBtn) => {
    if (!isLoading) {
      setLoading(true);
      const { data }: IHomePageCardListData = await getCardList(
        selectedBtn,
        pageNum.current
      );

      // last 처리

      if (data.isLast) isLast.current = true;
      setCardListData(() => data.cardListData);
      setLoading(false);
    }
  };

  // 카드 리스트 데이터 추가
  const addHomepageCardlistData = async () => {
    setLoading(true);
    const { data }: IHomePageCardListData = await getCardList(
      selectedBtn,
      pageNum.current
    );

    if (data.isLast) isLast.current = true;

    const nextCardListData = [...cardListData, ...data.cardListData];
    setCardListData(() => nextCardListData);
    setLoading(false);
  };

  // 버튼 값이 변경되었을 때
  const handleSelectedBtn = (selectedBtn: TBtn) => {
    setSelectedBtn(selectedBtn);
    isLast.current = false;
    pageNum.current = 1;
    resetCardlistData(selectedBtn);
  };

  // observe 할 마지막 카드 설정
  const setObserver = () => {
    const quoteCardList = document.querySelectorAll(".quoteCard");
    const lastQuoteCard = quoteCardList[quoteCardList.length - 1];
    if (!!lastQuoteCard) observer.current.observe(lastQuoteCard);
  };

  // 초기 카드리스트 데이터 설정
  useLayoutEffect(() => {
    resetCardlistData(selectedBtn);
  }, []);

  // 페이지 넘버 변경 때마다 card list 업데이트
  useLayoutEffect(() => {
    if (!isLoading && !isLast) addHomepageCardlistData();
  }, [pageNum.current]);

  // 무한스크롤 초기 세팅
  useEffect(() => {
    const observerOption = { threshold: 0.1 };
    const observerCallback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          if (!isLast) pageNum.current += 1;
        }
      });
    };
    observer.current = new IntersectionObserver(
      observerCallback,
      observerOption
    );
  }, []);

  // cardListData가 변경될 때 마다 observer 설정
  useEffect(() => {
    setObserver();
  }, [cardListData]);

  return (
    <>
      <HomeTemplate
        isLoading={isLoading}
        isLast={isLast.current}
        btnListData={{ btnList, selectedBtn, handleSelectedBtn }}
        cardListData={cardListData}
        handleCardData={handleCardData}
      />
    </>
  );
}
