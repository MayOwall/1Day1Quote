"use client";

import Image from "next/image";
import { useState } from "react";
import { mockup1, mockup2 } from "@/public";
import * as S from "./AppGuide.styles";

function AppGuide() {
  const [selectedMeatball, setSelectedMeatball] = useState("meatball-1");

  const handleMeatball = (e: React.MouseEvent) => {
    const { classList } = e.target as HTMLSpanElement;
    const nextSelectedMeatball = classList.item(0) as string;
    setSelectedMeatball(nextSelectedMeatball);
  };

  return (
    <S.Container>
      <S.CardContainer>
        <div>
          <Image
            src={selectedMeatball === "meatball-1" ? mockup1 : mockup2}
            fill
            alt=""
          />
        </div>
      </S.CardContainer>
      <S.CardComment>
        {selectedMeatball === "meatball-1"
          ? "오늘의 문장을 적어주세요"
          : "나만의 문장을 다른 사람과 공유하세요"}
      </S.CardComment>
      <S.MeatballContainer>
        <S.Meatball
          className="meatball-1"
          isSelected={selectedMeatball === "meatball-1"}
          onClick={handleMeatball}
        />
        <S.Meatball
          className="meatball-2"
          isSelected={selectedMeatball === "meatball-2"}
          onClick={handleMeatball}
        />
      </S.MeatballContainer>
    </S.Container>
  );
}

export default AppGuide;
