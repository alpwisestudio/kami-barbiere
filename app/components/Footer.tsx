import Link from "next/link";

function Social({ label, href = "#", children }: { label: string; href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid size-8 place-items-center rounded-full bg-white text-black transition duration-300 hover:-translate-y-0.5 hover:bg-gold hover:shadow-[0_8px_20px_-8px_rgba(183,154,91,0.8)]"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        {children}
      </svg>
    </a>
  );
}

const Icons = {
  x: (
    <path d="M18.9 2H22l-7.2 8.2L23.3 22h-6.7l-5.2-6.8L5.4 22H2.3l7.7-8.8L1.9 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
  ),
  instagram: (
    <>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" />
      <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      <circle cx="17.5" cy="6.5" r="1.2" />
    </>
  ),
  facebook: (
    <path d="M13.5 22v-8.2h2.8l.4-3.300h-3.200V8.400c0-.9.300-1.600 1.600-1.600h1.700V3.900c-.3 0-1.300-.1-2.500-.1-2.500 0-4.100 1.500-4.100 4.200v2.500H7.400v3.300h2.800V22h3.300Z" />
  ),
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 pt-14">
        {/* Top row: socials · logo · socials */}
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="hidden md:block" aria-hidden />

          <Link href="/" className="font-display text-center text-2xl leading-6 tracking-[0.25em]">
            KAMI<br />BARBIERE
          </Link>

          <div className="flex items-center justify-center gap-3 md:justify-end">
            <a href="tel:+393294750224" className="underline-grow mr-1 pb-0.5 text-xs text-white/60 transition hover:text-white">
              Chiamaci
            </a>
            <Social label="Facebook">{Icons.facebook}</Social>
            <Social label="X">{Icons.x}</Social>
            <Social label="Instagram">{Icons.instagram}</Social>
          </div>
        </div>

        {/* Short description */}
        <p className="mx-auto mt-8 max-w-md text-center text-xs leading-relaxed text-white/45">
          Kami Barbiere · Via Albricci 2, Gallarate. Tagli di precisione, cura della barba e rasature con asciugamano
          caldo. Aperti tutti i giorni.
        </p>

        {/* Bottom row */}
        <div className="mt-12 grid gap-3 border-t border-white/10 py-6 text-center text-[11px] tracking-wide text-white/50 md:grid-cols-3">
          <a href="tel:+393294750224" className="transition hover:text-white md:text-left">
            ☎ 329 4750224
          </a>
          <p>Copyright © 2026 Kami Barbiere</p>
          <Link href="/book" className="transition hover:text-white md:text-right">
            Prenota un appuntamento
          </Link>
        </div>
      </div>
    </footer>
  );
}
