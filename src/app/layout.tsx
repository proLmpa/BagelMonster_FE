import type { ReactNode } from "react";

import { cookies } from "next/headers";
import Script from "next/script";

import Header from "@/components/common/header/Header";
import Navigation from "@/components/common/navigation/Navigation";
import Provider from "@/components/common/provider/Provider";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bagel Monster",
  description: "Generated by create next app",
};

const KAKAO_MAP_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="max-w-[560px] mx-auto flexcol items-center relative">
        <Provider cookieValue={cookies().getAll()}>
          <Header />
          <main className="w-full mt-[3vh] mb-20">{children}</main>
          <Navigation />
        </Provider>
        <Script src={KAKAO_MAP_URL} strategy="beforeInteractive" />
      </body>
    </html>
  );
}
