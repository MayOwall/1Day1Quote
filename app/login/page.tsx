"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useLayoutEffect } from "react";
import { LoginTemplate } from "@/component";
import { Context } from "@/context";

export default function LoginPage() {
  const { setAuthData } = useContext(Context);
  const router = useRouter();
  const session = useSession();

  useLayoutEffect(() => {
    if (session.status === "authenticated") {
      const { authToken, id, name, imageURL, introduce }: any =
        session.data.user;
      const nextAuthData = {
        id,
        name,
        imageURL,
        introduce,
      };
      setAuthData(() => nextAuthData);
      sessionStorage.setItem("authToken", authToken);
      router.push("/");
    }
  }, [session]);

  return <LoginTemplate />;
}
