"use client";
import { useRouter } from "next/navigation";
import { ProfileEditForm } from "@/component";
import { IProfileEditTemplateProps } from "@/type";
import * as S from "./ProfileEditTemplate.styles";

function ProfileEditTemplate() {
  const router = useRouter();

  return (
    <S.Container>
      <ProfileEditForm />
      <S.EditCancelBtn onClick={() => router.back()}>편집 취소</S.EditCancelBtn>
    </S.Container>
  );
}

export default ProfileEditTemplate;
