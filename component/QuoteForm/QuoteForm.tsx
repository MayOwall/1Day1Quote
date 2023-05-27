"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { IQuoteFormProps } from "@/type";
import { saveImageFormData } from "@/hook";
import * as S from "./QuoteForm.styles";

function QuoteForm({
  formValue,
  handleFormValue,
  handleSubmit,
}: IQuoteFormProps) {
  const { quote, speaker } = formValue;
  const [imagePreview, setImagePreview] = useState("");
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [quoteHeight, setQuoteHeight] = useState(30);

  // QuoteInput value 핸들러
  const handleQuote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    handleFormValue({ quote: value });
  };

  // SpeakerInput value 핸들러
  const handleSpeaker = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleFormValue({ speaker: value });
  };

  // ImagePreview value 핸들러
  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (!data.target) return;
      const nextImagePreview = data.target.result;
      if (nextImagePreview) setImagePreview(() => nextImagePreview.toString());
    };
  };

  // 이미지 값 변경 핸들러
  const handleImageValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    handleImagePreview(e);
    const nextImageUrl = await saveImageFormData(e);
    handleFormValue({ imageUrl: nextImageUrl.toString() });
  };

  // 이미지 추가 & 이미지 변경 버튼 핸들러
  const handleImageBtn = (e: React.MouseEvent) => {
    e.preventDefault();
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  // 이미지 삭제 버튼 핸들러
  const handleImageDelBtn = (e: React.MouseEvent) => {
    e.preventDefault();
    setImagePreview(() => "");
    handleFormValue({ imageUrl: "" });
  };

  // 오늘의 문장 제출 핸들러
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit();
    setImagePreview(() => "");
  };

  // Quote값이 변경될 때마다 자동 갱신되는 QuoteInput 높이
  useEffect(() => {
    if (quoteRef.current) {
      setQuoteHeight(quoteRef.current.clientHeight);
    }
  }, [formValue.quote]);

  return (
    <S.Container onSubmit={onSubmit}>
      <div>
        <S.Date>2023.03.13</S.Date>
        <div>
          <S.ImageBtn onClick={handleImageBtn}>
            이미지 {!!imagePreview ? "변경" : "추가"}
          </S.ImageBtn>
          {!!imagePreview && (
            <S.ImageDelBtn onClick={handleImageDelBtn}>
              이미지 삭제
            </S.ImageDelBtn>
          )}
        </div>
        <S.ImageInput
          type="file"
          ref={imageInputRef}
          onChange={handleImageValue}
        />
        {!!imagePreview && (
          <S.ImagePreview>
            <Image src={imagePreview} fill sizes="100vw" alt="preview" />
          </S.ImagePreview>
        )}
        <S.QuoteInput
          placeholder="오늘의 문장을 입력해 주세요"
          value={quote}
          onChange={handleQuote}
          height={quoteHeight}
          maxLength={100}
        />
        <S.DummyQuote ref={quoteRef}>{quote}</S.DummyQuote>
        <S.SpeakerInput
          maxLength={20}
          placeholder="출처를 입력해 주세요"
          value={speaker}
          onChange={handleSpeaker}
        />
      </div>
      <S.SubmitBtn type="submit">오늘의 문장 추가하기</S.SubmitBtn>
    </S.Container>
  );
}

export default QuoteForm;
