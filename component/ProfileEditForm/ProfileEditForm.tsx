"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useRef, useEffect, useContext } from "react";
import { saveImageFormData } from "@/hook";
import { IProfileEditFormProps } from "@/type";
import * as S from "./ProfileEditForm.styles";
import { Context } from "@/context";

function ProfileEditForm({ formDataInit }: IProfileEditFormProps) {
  const { userId, setUserData } = useContext(Context);
  const router = useRouter();
  const [formData, setFormData] = useState(formDataInit);
  const [imagePreview, setImagePreview] = useState(formDataInit.imageURL);
  const [isSubmitAble, setSubmitAble] = useState(false);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const nextFormData = {
      ...formData,
      nickname: value,
    };
    setFormData(nextFormData);
  };

  const handleIntroduce = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const nextFormData = {
      ...formData,
      introduce: value,
    };
    setFormData(nextFormData);
  };

  const handleImageURL = async (e: React.ChangeEvent<HTMLInputElement>) => {
    handleImagePreview(e);
    const nextImageURL = await saveImageFormData(e);
    const nextFormData = {
      ...formData,
      imageURL: nextImageURL,
    };
    setFormData(nextFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserData(() => formData);
    // 서버에 유저 데이터 저장 작업 필요
    router.push(`/profile/${userId}`);
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
    const nextFormData = {
      ...formData,
      imageURL: "",
    };
    setFormData(() => nextFormData);
  };

  // 미리보기 이미지 값 핸들러
  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (!data.target) return;
      const nextImagePreview = data.target.result;
      if (nextImagePreview) setImagePreview(nextImagePreview.toString());
    };
  };

  useEffect(() => {
    if (!!formData.nickname && !!formData.imageURL) {
      setSubmitAble(true);
    }
  }, [formData]);

  return (
    <S.Container onSubmit={handleSubmit}>
      <div>
        <S.Label htmlFor="nickname">닉네임</S.Label>
        <S.Input
          name="nickname"
          value={formData.nickname}
          onChange={handleNickname}
        />
        <S.Label htmlFor="introduce">한줄 자기소개</S.Label>
        <S.Input
          name="introduce"
          value={formData.introduce}
          onChange={handleIntroduce}
        />
        <S.ImageContainer>
          <S.Label htmlFor="imageURL">프로필 사진</S.Label>
          <S.ImagePreview>
            {imagePreview && (
              <Image src={imagePreview} fill sizes="100vw" alt="preview" />
            )}
            {!imagePreview && <small>이미지 없음</small>}
          </S.ImagePreview>
          <S.Input
            type="file"
            accept="image/*"
            name="imageURL"
            ref={imageInputRef}
            onChange={handleImageURL}
          />
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
        </S.ImageContainer>
      </div>
      <S.SubmitBtn isSubmitAble={isSubmitAble}>프로필 변경하기</S.SubmitBtn>
    </S.Container>
  );
}

export default ProfileEditForm;
