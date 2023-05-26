"use client";
import { usePathname, useRouter } from "next/navigation";
import { WriteIcon, CommunityIcon } from "@/public";
import * as S from "./BNB.styles";

function BNB() {
  const router = useRouter();
  const isMain = !usePathname().includes("community");
  const isLoginPage = usePathname().includes("/login");

  // 버튼 인터렉션과 현재 페이지에 따른 페이지 이동 핸들러
  const handleBNBBtns = (icon: "main" | "community") => {
    // 현재 메인 페이지가 아니면서, 메인 페이지로 요청 이동하면 메인 페이지로 이동
    if (icon === "main" && !isMain) {
      router.push("/");
      return;
    }
    // 현재 커뮤니티 페이지가 아니면서, 커뮤니티로 요청 이동하면 커뮤니티 페이지로 이동
    if (icon === "community" && isMain) {
      console.log(isMain);

      router.push("/community");
      return;
    }
  };
  return (
    <>
      {isLoginPage && <></>}
      {!isLoginPage && (
        <S.Container>
          <S.Btn>
            <WriteIcon
              width="22px"
              height="23px"
              fill={isMain ? "#FF4264" : "black"}
              onClick={() => handleBNBBtns("main")}
            />
          </S.Btn>
          <S.Btn>
            <CommunityIcon
              width="29px"
              height="24px"
              fill={!isMain ? "#FF4264" : "black"}
              onClick={() => handleBNBBtns("community")}
            />
          </S.Btn>
        </S.Container>
      )}
    </>
  );
}

export default BNB;
