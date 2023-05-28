import "@/style/reset.css";
import "@/style/globals.css";
import { Metadata } from "next";
import { BNB, GNB } from "@/component";
import ContextProvider from "@/context";

export const metadata: Metadata = {
  title: "1Day1Quote",
  description: "하루 한문장, 작성하고 공유하세요!",
  applicationName: "1Day1Quote",
  authors: { name: "MayOwall", url: "github.com/MayOwall" },
  keywords: [
    "하루",
    "한문장",
    "공유",
    "한줄 일기",
    "명언",
    "명대사",
    "1일 1문장",
    "1Day1Quote",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ContextProvider>
          <main>
            <GNB isAuth={false} />
            {children}
            <BNB />
          </main>
        </ContextProvider>
      </body>
    </html>
  );
}
