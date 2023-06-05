"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLayoutEffect, useEffect, useState, useContext } from "react";
import { getProfile } from "@/api";
import { ProfileTemplate } from "@/component";
import { IQuoteCardData, IProfileCardData } from "@/type";
import { updateCardData } from "@/util";
import { Context } from "@/context";

export default function ProfilePage() {
  const router = useRouter();
  const pathId = usePathname()?.replace("/profile/", "") || "";
  const [profileData, setProfileData] = useState<IProfileCardData | null>(null);
  const [cardListData, setCardListData] = useState<IQuoteCardData[]>([]);
  const [selectedType, setSelectedType] = useState<"write" | "bookmark">(
    "write"
  );
  const { authData } = useContext(Context);

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

  if (!authData) router.push("/login");
  useLayoutEffect(() => {
    getUserDBDataInit();
  }, []);

  useEffect(() => {
    console.log("profileData", profileData);
  }, [profileData]);

  return (
    <>
      {!!profileData && (
        <ProfileTemplate
          profileData={profileData}
          selectedType={selectedType}
          handleSelectedType={handleSelectedType}
          cardListData={cardListData}
          handleCardData={handleCardData}
        />
      )}
    </>
  );
}
