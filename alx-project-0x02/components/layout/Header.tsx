import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center gap-4 p-4">
        <Link href="/" className="text-lg font-bold">
          ALX 0x02
        </Link>
        <ul className="ml-auto flex items-center gap-6">
          <li>
            <Link href="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
