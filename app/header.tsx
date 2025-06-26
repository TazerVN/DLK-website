import Link from "next/link";

export default function Header() {
  return (
    <header className="text-foreground p-4 ml-4 mr-4 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center z-10">
        <h1 className="text-3xl font-bold">Di Linh Ky</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline text-yellowground">
            Home
          </Link>
          <Link href="/about" className="hover:underline text-yellowground">
            About
          </Link>
          <Link href="/contact" className="hover:underline text-yellowground">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
