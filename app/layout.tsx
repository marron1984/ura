import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "生活支援ナビ｜生活保護・公的支援の総合情報サイト",
    template: "%s｜生活支援ナビ",
  },
  description:
    "生活保護の申請方法、公的支援制度、緊急時の相談窓口など、生活に困ったときに必要な情報をまとめた総合ガイドサイトです。",
  metadataBase: new URL("https://seikatsu-shien-navi.jp"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "生活支援ナビ",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0057b7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Header />
        <main className="mx-auto max-w-4xl px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
