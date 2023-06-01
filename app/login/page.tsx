"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { LoginTemplate } from "@/component";
import { Context } from "@/context";

export default function LoginPage() {
  const { setAuthData } = useContext(Context);
  const router = useRouter();
  const session = useSession();

  if (session.status === "authenticated") {
    const { userId, userName, userImageURL, userIntroduce, authToken }: any =
      session.data.user;

    const nextAuthData = {
      userId,
      userName,
      userImageURL,
      userIntroduce,
    };
    setAuthData(() => nextAuthData);
    if (window) {
      sessionStorage.setItem("authToken", authToken);
    }

    router.push("/");
  }

  return <LoginTemplate />;
}
