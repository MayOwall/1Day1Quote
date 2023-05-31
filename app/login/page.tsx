"use client";
import { useSession } from "next-auth/react";
import { LoginTemplate } from "@/component";
import { useRouter } from "next/navigation";
import { useContext, useLayoutEffect } from "react";
import { Context } from "@/context";

export default function LoginPage() {
  const { setUserData } = useContext(Context);
  const router = useRouter();
  const session = useSession();

  useLayoutEffect(() => {
    if (session.status === "authenticated") {
      setUserData(() => session.data.user);
      router.push("/");
    }
  });

  return <LoginTemplate />;
}
