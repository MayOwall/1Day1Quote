"use client";
import "@/style/reset.css";
import "@/style/globals.css";
import { SessionProvider } from "next-auth/react";
import { BNB, GNB } from "@/component";
import ContextProvider from "@/context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <SessionProvider>
          <ContextProvider>
            <main>
              <GNB />
              {children}
              <BNB />
            </main>
          </ContextProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
