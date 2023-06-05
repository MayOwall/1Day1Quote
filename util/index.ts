import { IQuoteCardData } from "@/type";

// 카드 리트에서 특정 id의 카드를 추가, 수정, 삭제하는 핸들러
export const updateCardData = (
  type: "add" | "fire" | "bookmark" | "delete",
  cardId: string,
  cardListData: IQuoteCardData[],
  setCardListData: (nextCardListData: IQuoteCardData[]) => void
) => {
  // 카드 불 수정
  if (type === "fire" && cardId) {
    const nextCardListData = cardListData.map((cardData) => {
      if (cardData.contentData.id === cardId) {
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
      if (cardData.contentData.id === cardId) {
        cardData.contentData.isBookMarked = !cardData.contentData.isBookMarked;
        return cardData;
      } else {
        return cardData;
      }
    });
    setCardListData(nextCardListData);
    return;
  }

  // 카드 삭제
  if (type === "delete") {
    const nextCardListData = cardListData.filter(
      (v) => v.contentData.id !== cardId
    );
    setCardListData(nextCardListData);
    return;
  }
};
