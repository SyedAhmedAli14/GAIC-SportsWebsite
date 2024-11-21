// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1>Sports Central</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
      </nav>
    </header>
  );
}
