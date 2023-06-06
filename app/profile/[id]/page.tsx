"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { getProfile, getUserBookmarkList, getUserQuoteList } from "@/api";
import { ProfileTemplate } from "@/component";
import { IQuoteCardData, IProfileCardData } from "@/type";
import { updateCardData } from "@/util";

export default function ProfilePage() {
  const userId = usePathname()?.replace("/profile/", "") || "";
  const [profile, setProfile] = useState<IProfileCardData | null>(null);
  const [writeCardList, setWriteCardList] = useState<IQuoteCardData[]>([]);
  const [bookmarkCardList, setBookmarkCardList] = useState<IQuoteCardData[]>(
    []
  );
  const [selectedBtn, setSelectedBtn] = useState<"write" | "bookmark">("write");

  // 현재 선택한 카드 타입 값 핸들러
  const handleSelectedType = () => {
    const nextSelectedBtn = selectedBtn === "write" ? "bookmark" : "write";
    setSelectedBtn(nextSelectedBtn);
  };

  // 특정 id의 카드의 불, 북마크, 삭제를 담당하는 핸들러
  const handleCardData = (
    type: "fire" | "bookmark" | "delete",
    cardId: string
  ) => {
    const cardListData =
      selectedBtn === "write" ? writeCardList : bookmarkCardList;
    const setCardListData =
      selectedBtn === "write" ? setWriteCardList : setBookmarkCardList;
    updateCardData(type, cardId, cardListData, setCardListData);
  };

  // 프로필카드 데이터를 가져오는 핸들러
  const handleProfileCard = async () => {
    try {
      const data = await getProfile(userId);
      const { id, name, imageURL, introduce, quoteCount, bookmarkCount } =
        data.userDBData;
      const nextProfile = {
        userData: {
          id,
          name,
          introduce,
          imageURL,
        },
        userActData: {
          quoteCount,
          bookmarkCount,
        },
      };
      setProfile(() => nextProfile);
    } catch (err) {
      console.log("error from handleProfileCardData", err);
    }
  };

  // 유저가 작성한 카드 리스트 데이터를 가져오는 핸들러
  const handleWriteCardList = async () => {
    const { data } = await getUserQuoteList(userId, 1);
    const quoteList = data.quoteList.filter((v: IQuoteCardData) => v);
    setWriteCardList(() => quoteList);
  };

  // 유저가 북마크한 카드 리스트 데이터를 가져오는 핸들러
  const handleBookmarkList = async () => {
    const { data } = await getUserBookmarkList(userId, 1);
    const bookmarkList = data.bookmarkList.filter((v: IQuoteCardData) => !!v);
    setBookmarkCardList(() => bookmarkList);
  };

  // 유저 정보, 유저 작성 카드, 유저 북마크 카드 정보 초기화
  useLayoutEffect(() => {
    handleProfileCard();
    handleWriteCardList();
    handleBookmarkList();
  }, []);

  return (
    <>
      <ProfileTemplate
        profileData={profile}
        selectedType={selectedBtn}
        handleSelectedType={handleSelectedType}
        cardListData={
          selectedBtn === "write" ? writeCardList : bookmarkCardList
        }
        handleCardData={handleCardData}
      />
    </>
  );
}
