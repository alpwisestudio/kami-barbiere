import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

const haircuts = [
  {
    name: "Sfumatura di precisione",
    price: "da €35",
    img: "/img/fade.jpg",
    text: "Sfumature perfette, linee nette e rifinitura a rasoio. Su misura per la forma della tua testa e per come porti i capelli.",
  },
  {
    name: "Taglio a forbice",
    price: "da €32",
    img: "/img/cut.jpg",
    text: "Texture e forma costruite a mano, non con la macchinetta. Un taglio che cresce bene e si sistema in pochi secondi.",
  },
  {
    name: "Barba e rasatura",
    price: "da €28",
    img: "/img/shave.jpg",
    text: "Asciugamano caldo, schiuma tiepida e una rasatura precisa e rilassante, oppure una barba scolpita che mantiene la sua forma.",
  },
];

const hours = [
  ["Lunedì", "09:00 – 17:00"],
  ["Martedì – Domenica", "09:00 – 20:00"],
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-3xl font-normal sm:text-4xl">
    {children}
    <span className="mt-4 block h-px w-14 bg-gold" />
  </h2>
);

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* ───────── Hero ───────── */}
        <section id="top" className="relative flex min-h-svh items-center justify-center overflow-hidden text-center">
          <div className="parallax absolute inset-0">
            <div className="kenburns absolute inset-0">
              <Image
                src="/img/hero.jpg"
                alt="Barbiere che rifinisce la barba di un cliente con le forbici"
                fill
                priority
                sizes="100vw"
                className="object-cover grayscale"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-[#0e0e0e]" />

          <div className="relative w-full px-6">
            <p className="rise font-display text-xs tracking-[0.4em] text-white/80" style={{ "--d": "200ms" } as React.CSSProperties}>
              <span className="border-b border-white/40 pb-1">Kami Barbiere · Gallarate</span>
            </p>
            <h1
              className="rise font-display mt-8 text-5xl font-light leading-tight sm:text-7xl"
              style={{ "--d": "380ms" } as React.CSSProperties}
            >
              Barberia classica,<br />
              <span className="text-gold">fatta come si deve</span>
            </h1>
            <p className="rise mx-auto mt-6 max-w-md text-white/70" style={{ "--d": "560ms" } as React.CSSProperties}>
              Tagli di precisione, cura della barba e rasature con asciugamano caldo in una bottega dove nessuno
              ti mette fretta, a Gallarate.
            </p>
            <div className="rise mx-auto mt-10 flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center" style={{ "--d": "740ms" } as React.CSSProperties}>
              <Link href="/book" className="btn-gold bg-gold px-8 py-3.5 text-center text-xs font-medium uppercase tracking-[0.2em] text-black sm:w-auto">
                Prenota un appuntamento
              </Link>
              <a
                href="#haircuts"
                className="border border-white/40 px-8 py-3.5 text-center text-xs font-medium uppercase tracking-[0.2em] transition hover:border-white hover:bg-white hover:text-black"
              >
                Scopri i tagli
              </a>
            </div>
          </div>

          <a href="#haircuts" aria-label="Scorri verso il basso" className="float absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
            <svg width="22" height="34" viewBox="0 0 22 34" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1" y="1" width="20" height="32" rx="10" />
              <path d="M11 8v7" strokeLinecap="round" />
            </svg>
          </a>
        </section>

        {/* ───────── Tagli ───────── */}
        <section id="haircuts" className="bg-[#0e0e0e] py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <SectionTitle>I nostri tagli</SectionTitle>
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {haircuts.map((h, i) => (
                <Reveal key={h.name} delay={i * 140}>
                  <article className="group">
                    <div className="relative aspect-4/3 overflow-hidden bg-neutral-900">
                      <Image src={h.img} alt={h.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="photo object-cover" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="font-display text-lg font-normal">{h.name}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">{h.price}</p>
                      <p className="mt-4 text-sm leading-relaxed text-white/60">{h.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-14 text-center" delay={200}>
              <Link href="/book" className="btn-gold block w-full bg-gold px-8 py-3.5 text-center text-xs sm:inline-block sm:w-auto font-medium uppercase tracking-[0.2em] text-black">
                Prenota il tuo taglio
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── Dove siamo ───────── */}
        <section id="location" className="relative overflow-hidden py-28">
          <Image src="/img/tools.jpg" alt="" fill sizes="100vw" className="object-cover grayscale" />
          <div className="absolute inset-0 bg-black/85" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-5">
            <Reveal variant="left" className="md:col-span-3">
              <div className="aspect-4/3 overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                <iframe
  title="Mappa con la posizione di Kami Barbiere"
                  className="map-frame h-full w-full"
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=8.7840%2C45.6560%2C8.8000%2C45.6640&layer=mapnik&marker=45.6601%2C8.7920"
                />
              </div>
            </Reveal>
            <Reveal variant="right" delay={150} className="md:col-span-2">
              <SectionTitle>Dove siamo</SectionTitle>
              <p className="mt-8 text-sm leading-relaxed text-white/70">
                Ci trovi in centro a Gallarate, in Via Albricci. Prenotando online ti garantisci la tua poltrona all&apos;orario che preferisci.
              </p>
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-gold">Indirizzo</dt>
                  <dd className="mt-1 text-white/80">Via Albricci 2<br />Gallarate (VA)</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-gold">Telefono</dt>
                  <dd className="mt-1 text-white/80">
                    <a href="tel:+393294750224" className="underline-grow pb-0.5 hover:text-white">329 4750224</a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-gold">Orari</dt>
                  <dd className="mt-2 space-y-1.5">
                    {hours.map(([d, h]) => (
                      <div key={d} className="flex w-full justify-between border-b border-white/10 pb-1.5 text-white/80">
                        <span>{d}</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ───────── Chi siamo ───────── */}
        <section id="about" className="bg-[#0e0e0e] py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
            <Reveal variant="image">
              <div className="group relative aspect-4/3 overflow-hidden bg-neutral-900">
                <Image src="/img/interior.jpg" alt="Interno della barberia: tre poltrone in pelle sotto lampade in ottone" fill sizes="(min-width: 768px) 50vw, 100vw" className="photo object-cover" />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionTitle>Cosa ci distingue</SectionTitle>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 leading-relaxed text-white/70">
                  Kami Barbiere è la barberia di Via Albricci, a Gallarate. Una regola sola: nessuno esce finché non si vede e non si
                  sente impeccabile. Meno fretta, più cura, risultati che durano.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-5 leading-relaxed text-white/70">
                  Ogni visita inizia con una chiacchierata e finisce con un asciugamano caldo. Rasoio a mano libera, forbici e
                  attenzione ai dettagli: ci teniamo più a un collo pulito che a un servizio veloce.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <dl className="mt-10 grid grid-cols-3 gap-6">
                  {[
                    ["7/7", "Giorni di apertura"],
                    ["20:00", "Chiusura serale"],
                    ["Online", "Prenotazione facile"],
                  ].map(([n, l]) => (
                    <div key={l}>
                      <dt className="font-display text-4xl font-light text-gold">{n}</dt>
                      <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">{l}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal delay={420}>
                <Link href="/book" className="btn-gold mt-10 block w-full bg-gold px-8 py-3.5 text-center text-xs sm:inline-block sm:w-auto font-medium uppercase tracking-[0.2em] text-black">
                  Prenota un appuntamento
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
