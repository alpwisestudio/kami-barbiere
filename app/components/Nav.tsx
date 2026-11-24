"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"],
  ["Tagli", "/#haircuts"],
  ["Dove siamo", "/#location"],
  ["Chi siamo", "/#about"],
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 py-3 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-display text-lg leading-4 tracking-[0.25em]">
          KAMI<span className="text-gold">·</span>BARBIERE
        </Link>
        <ul className="hidden gap-10 text-xs font-medium uppercase tracking-[0.2em] text-white/80 md:flex">
          {links.map(([label, href]) => (
            <li key={label}>
              <Link href={href} className="underline-grow pb-1 transition-colors hover:text-white">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/book"
          className="btn-gold bg-gold px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-black"
        >
          Prenota
        </Link>
      </nav>
    </header>
  );
}
