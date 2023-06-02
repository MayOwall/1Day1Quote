"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { WriteTemplate } from "@/component";
import { Context } from "@/context";

export default function WritePage() {
  const session = useSession();
  const { authData } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (session.status !== "authenticated") {
      router.push("/login");
    }
  }, []);

  return <>{!!authData && <WriteTemplate />}</>;
}
