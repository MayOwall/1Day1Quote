"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLayoutEffect, useState, useContext, useRef } from "react";
import { getProfile, getUserBookmarkList, getUserQuoteList } from "@/api";
import { ProfileTemplate } from "@/component";
import { IQuoteCardData, IProfileCardData } from "@/type";
import { updateCardData } from "@/util";
import { Context } from "@/context";

export default function ProfilePage() {
  const router = useRouter();
  const pathId = usePathname()?.replace("/profile/", "") || "";
  const [profileData, setProfileData] = useState<IProfileCardData | null>(null);
  const [cardListData, setCardListData] = useState<IQuoteCardData[]>([]);
  const [bookmarkListData, setBookmarkListData] = useState<IQuoteCardData[]>(
    []
  );
  const [selectedType, setSelectedType] = useState<"write" | "bookmark">(
    "write"
  );
  const { authData } = useContext(Context);
  if (!authData) router.push("/login");
  const userQuoteListPage = useRef(1);

  // 현재 선택한 카드 타입 값 핸들러
  const handleSelectedType = () => {
    if (selectedType === "write") {
      setSelectedType(() => "bookmark");
    } else {
      setSelectedType(() => "write");
    }
  };

  // 특정 id의 카드를 추가, 수정, 삭제하는 핸들러
  const handleCardData = (
    type: "fire" | "bookmark" | "delete",
    cardId: string
  ) => {
    updateCardData(type, cardId, cardListData, setCardListData);
  };

  const getUserDBDataInit = async () => {
    const data = await getProfile(pathId);
    if (!data.success) {
      alert("에러 발생");
      return;
    }
    const {
      id,
      name,
      imageURL,
      introduce,
      quoteCount,
      quoteList,
      bookmarkCount,
    } = data.userDBData;

    const nextProfileData = {
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
    setProfileData(() => nextProfileData);
  };

  const handleUserQuoteList = async () => {
    const { data } = await getUserQuoteList(pathId, userQuoteListPage.current);
    const quoteList = data.quoteList.filter((v: IQuoteCardData) => v);
    setCardListData(() => quoteList);
  };

  const handleBookmarkList = async () => {
    const { data } = await getUserBookmarkList(pathId, 1);
    const bookmarkList = data.bookmarkList.filter((v: IQuoteCardData) => !!v);
    setBookmarkListData(() => bookmarkList);
  };

  useLayoutEffect(() => {
    getUserDBDataInit();
    handleUserQuoteList();
    handleBookmarkList();
  }, []);

  return (
    <>
      {!!profileData && (
        <ProfileTemplate
          profileData={profileData}
          selectedType={selectedType}
          handleSelectedType={handleSelectedType}
          cardListData={
            selectedType === "write" ? cardListData : bookmarkListData
          }
          handleCardData={handleCardData}
        />
      )}
    </>
  );
}
