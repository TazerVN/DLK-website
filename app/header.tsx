'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky flex justify-center items-center top-0 z-50 w-dvw border-b-2 border-yellowground bg-background/95 rounded-b-xl">
      <div className="container flex h-30 justify-between">
        <Link className="mr-6 flex items-center space-x-3" href="/">
          <Image
            src="/title/title.png"
            alt="Logo"
            width={150}
            height={150}
          ></Image>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <Link href="/" className="flex items-center gap-2 transition-colors font-bold text-2xl hover:text-yellowground/80 text-yellowground/60">
            <Image src="/Iconi/fire.png" alt="Home Icon" width={40} height={40} />
            Home
          </Link>
          <Link href="/about" className="flex items-center gap-2 transition-colors font-bold text-2xl hover:text-yellowground/80 text-yellowground/60">
            <Image src="/Iconi/water.png" alt="About Icon" width={40} height={40} />
            About
          </Link>
          <Link href="/contact" className="flex items-center gap-2 transition-colors font-bold text-2xl hover:text-yellowground/80 text-yellowground/60">
            <Image src="/Iconi/kim.png" alt="Contact Icon" width={40} height={40} />
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex item-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
            <nav className="flex flex-col items-center gap-4 p-4">
              <Link href="/" className="flex items-center gap-2 transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setIsMenuOpen(false)}>
                <Image src="/Iconi/Untitled_Artwork-1.png" alt="Home Icon" width={20} height={20} />
                Home
              </Link>
              <Link href="/about" className="flex items-center gap-2 transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setIsMenuOpen(false)}>
                <Image src="/Iconi/Untitled_Artwork-2.png" alt="About Icon" width={20} height={20} />
                About
              </Link>
              <Link href="/contact" className="flex items-center gap-2 transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setIsMenuOpen(false)}>
                <Image src="/Iconi/Untitled_Artwork-3.png" alt="Contact Icon" width={20} height={20} />
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
