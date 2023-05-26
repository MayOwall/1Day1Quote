"use client";
import React from "react";
import { IRoundButtonProps } from "@/type";
import * as S from "./RoundButton.styles";

function RoundButton({
  isSelected,
  handleSelect,
  children,
}: IRoundButtonProps) {
  const handleButton = () => {
    handleSelect(!isSelected);
  };

  return (
    <S.Button isSelected={isSelected} onClick={handleButton}>
      {children}
    </S.Button>
  );
}

export default React.memo(RoundButton);
