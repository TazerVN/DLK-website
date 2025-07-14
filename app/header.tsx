"use client";
import Link from "next/link";
import Image from "next/image";
import title from "../public/asset/title.png";
import flower from "../public/asset/flower.png";
import wheel from "../public/asset/wheel.png";
import boss from "../public/asset/boss.png";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky flex justify-center items-center top-0 z-50 w-dvw bg-background/95 rounded-b-xl">
      <div className="container flex h-30 justify-between items-center">
        <Link className="mr-6 flex items-center space-x-3" href="/">
          <Image
            src={title}
            alt="Logo"
            width={150}
            height={150}
            quality={50}
            placeholder="blur"
          ></Image>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <Link
            href="#about"
            className="flex items-center gap-2 transition-colors font-bold text-2xl hover:text-yellowground/80 text-yellowground/60"
          >
            <Image
              src={flower}
              alt="About Icon"
              width={40}
              height={40}
              quality={50}
              placeholder="blur"
            />
            Sơ Lược
          </Link>
          <Link
            href="#character"
            className="flex items-center gap-2 transition-colors font-bold text-2xl hover:text-yellowground/80 text-yellowground/60"
          >
            <Image
              src={wheel}
              alt="Contact Icon"
              width={40}
              height={40}
              quality={50}
              placeholder="blur"
            />
            Nhân Vật
          </Link>
          <Link
            href="#monster"
            className="flex items-center gap-2 transition-colors font-bold text-2xl hover:text-yellowground/80 text-yellowground/60"
          >
            <Image
              src={boss}
              alt="Contact Icon"
              width={40}
              height={40}
              quality={50}
              placeholder="blur"
            />
            Ma Quỷ
          </Link>
        </nav>
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center p-16">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-background/95 flex flex-col items-center gap-4 py-4">
          <Link
            href="#about"
            className="flex items-center gap-2 transition-colors font-bold text-2xl hover:text-yellowground/80 text-yellowground/60"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={flower}
              alt="About Icon"
              width={40}
              height={40}
              quality={50}
              placeholder="blur"
            />
            Sơ Lược
          </Link>
          <Link
            href="#character"
            className="flex items-center gap-2 transition-colors font-bold text-2xl hover:text-yellowground/80 text-yellowground/60"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={wheel}
              alt="Contact Icon"
              width={40}
              height={40}
              quality={50}
              placeholder="blur"
            />
            Nhân Vật
          </Link>
          <Link
            href="#monster"
            className="flex items-center gap-2 transition-colors font-bold text-2xl hover:text-yellowground/80 text-yellowground/60"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={boss}
              alt="Contact Icon"
              width={40}
              height={40}
              quality={50}
              placeholder="blur"
            />
            Ma Quỷ
          </Link>
        </nav>
      )}
    </header>
  );
}
