import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "Bitrix24 в Кыргызстане — Внедрение, интеграция и поддержка | b24.kaymak.pro",
  description:
    "Экспертное внедрение, интеграция, автоматизация и поддержка CRM Битрикс24 для бизнеса в Кыргызстане. Помогаем компаниям увеличивать продажи, автоматизировать процессы и экономить ресурсы. Бесплатная консультация и индивидуальные решения под ваши задачи.",
  keywords: [
    "Bitrix24",
    "Битрикс24 Кыргызстан",
    "CRM внедрение",
    "Автоматизация бизнеса",
    "Интеграция CRM",
    "Поддержка Битрикс24",
    "Битрикс24 для бизнеса",
    "Автоматизация продаж",
    "Внедрение CRM Кыргызстан",
    "b24.kaymak.pro"
  ].join(", ")
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
