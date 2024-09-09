import type { Metadata } from "next";
import Header from "@/components/organism/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "芝犬の小屋",
  description: "サークル「芝犬の小屋」の公式サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
