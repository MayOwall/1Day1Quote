import { postLogin } from "@/app/api/auth";
import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
const KAKAO_CLIENT_SECRET = process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET;

const authOptions = {
  providers: [
    KakaoProvider({
      clientId: KAKAO_CLIENT_ID || "",
      clientSecret: KAKAO_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      const userData = {
        userId: token.sub,
        userName: session.user.name,
        userImageURL: session.user.image || "",
      };
      const { userData: userDBData } = await postLogin(userData);
      session.user = userDBData;
      return session;
    },
  },
};

export default NextAuth(authOptions);
