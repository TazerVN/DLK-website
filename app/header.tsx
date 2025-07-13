import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky flex justify-center items-center top-0 z-50 w-dvw bg-background/95 rounded-b-xl">
      <div className="container flex h-30 justify-between">
        <Link className="mr-6 flex items-center space-x-3" href="/">
          <Image
            src="/asset/title.png"
            alt="Logo"
            width={150}
            height={150}
          ></Image>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <Link
            href="#about"
            className="flex items-center gap-2 transition-colors font-bold text-2xl hover:text-yellowground/80 text-yellowground/60"
          >
            <Image
              src="/asset/flower.png"
              alt="About Icon"
              width={40}
              height={40}
            />
            Sơ Lược
          </Link>
          <Link
            href="#character"
            className="flex items-center gap-2 transition-colors font-bold text-2xl hover:text-yellowground/80 text-yellowground/60"
          >
            <Image
              src="/asset/wheel.png"
              alt="Contact Icon"
              width={40}
              height={40}
            />
            Nhân Vật
          </Link>
          <Link
            href="#monster"
            className="flex items-center gap-2 transition-colors font-bold text-2xl hover:text-yellowground/80 text-yellowground/60"
          >
            <Image
              src="/asset/boss.png"
              alt="Contact Icon"
              width={40}
              height={40}
            />
            Ma Quỷ
          </Link>
        </nav>
      </div>
    </header>
  );
}
