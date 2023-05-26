"use client";
import { useState } from "react";
import { CommunityTemplate } from "@/component";

const handleFire = (_id: string) => console.log("fireId :", _id);
const handleBookmark = (_id: string) => console.log("bookmarkId :", _id);

const dummyUserData = {
  _id: "dummyuser1",
  name: "shin_zzang",
  portrait:
    "https://item.kakaocdn.net/do/fd0050f12764b403e7863c2c03cd4d2d7154249a3890514a43687a85e6b6cc82",
};

const dummyBodyData = {
  contentData: {
    _id: "dummycard1",
    date: "2023.03.03",
    image:
      "https://cdn.indiepost.co.kr/uploads/images/2018/10/12/05pldD-700x393.jpeg",
    quote:
      "내 인생은 그렇게 하찮은 삶이 아니야! 가족이 주는 행복이 얼마나 큰지, 너한테 알려주고 싶을 정도다",
    speaker: "신형만",
    isFired: false,
    fireCount: 123,
    isBookMarked: false,
  },
  handleFire: handleFire,
  handleBookmark: handleBookmark,
};

const dummyCardListData = [
  {
    userData: dummyUserData,
    bodyData: dummyBodyData,
  },
  {
    userData: dummyUserData,
    bodyData: dummyBodyData,
  },
];

export default function Home() {
  const [selectedBtn, setSelectedBtn] = useState<"recent" | "weekly" | "whole">(
    "recent"
  );
  const btnListData = {
    selectedBtn,
    handleSelectedBtn: (nextSelectedBtn: "recent" | "weekly" | "whole") =>
      setSelectedBtn(nextSelectedBtn),
  };

  return (
    <CommunityTemplate
      btnListData={btnListData}
      cardListData={dummyCardListData}
    />
  );
}
