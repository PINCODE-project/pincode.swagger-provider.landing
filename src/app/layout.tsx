import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const geist = Geist({
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swagger-provider.com"),
  title: "Swagger Provider - Discover & Document APIs",
  description:
    "Платформа для централизованного управления OpenAPI схемами с автоматическими уведомлениями, ченджлогами и удобными инструментами для разработчиков",
  keywords: [
    "Swagger",
    "API Documentation",
    "OpenAPI",
    "Swagger Provider",
    "Документация",
    "Разработка API",
    "Всё в одном",
    "Автоматические уведомления",
    "Ченджлог",
    "CI/CD интеграция",
  ],
  authors: [
    {
      name: "Команда ПИН-КОД",
    },
  ],
  applicationName: "Swagger Provider",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://swagger-provider.com",
    siteName: "Swagger Provider",
    title: "Swagger Provider - единая платформа для Swagger схем",
    description:
      "Объединяем Swagger схемы в одном месте с автоматическими уведомлениями, ченджлогами и интеграцией с CI/CD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swagger Provider - единая платформа для Swagger схем",
    description:
      "Объединяем Swagger схемы в одном месте с автоматическими уведомлениями и ченджлогами",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://swagger-provider.ru",
  },
  category: "IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru" className={geist.className} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://swagger-provider.com" />
        <title>Swagger Provider</title>
      </head>
      <body className={cn("dark relative h-full font-sans antialiased")}>
        <main className="relative flex min-h-screen flex-col">
          <div className="flex-1 flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
}
