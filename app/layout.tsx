import type { Metadata } from "next";
import Header from "./header";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import localFont from "next/font/local";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["vietnamese", "latin"],
});

const localwriting = localFont({
  src: "../public/asset/Font/writing/writing.ttf",
  variable: "--font-writing",
});

const localTitle = localFont({
  src: "../public/asset/Font/title/LostVietnam-Regular.otf",
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Dị Linh Ký",
  description: "by Lạc Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${localwriting.variable} ${inter.variable} ${localTitle.variable} antialiased`}
      >
        <Header></Header>
        <div className="fixed inset-0 opacity-20 bg-background -z-10">
          <Image
            className="object-cover"
            src={"/asset/world/4.png"}
            alt="background"
            fill
            priority
            quality={40}
            placeholder="blur"
          ></Image>
        </div>
        {children}
      </body>
    </html>
  );
}
