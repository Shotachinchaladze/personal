import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "პირველი ქართული წიგნი ბრენდინგზე",
  description: "აღმოაჩინე ბრენდინგის ხელოვნება და მეცნიერება ქართულ ენაზე. სრულყოფილი სახელმძღვანელო თანამედროვე ბიზნესისთვის.",
  keywords: "ბრენდინგი, ქართული წიგნი, მარკეტინგი, ბიზნესი, ბრენდის სტრატეგია",
  authors: [{ name: "ბრენდინგის წიგნი" }],
  openGraph: {
    title: "პირველი ქართული წიგნი ბრენდინგზე",
    description: "აღმოაჩინე ბრენდინგის ხელოვნება და მეცნიერება ქართულ ენაზე",
    type: "website",
    locale: "ka_GE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
