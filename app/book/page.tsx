import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import BookingForm from "../BookingForm";

export const metadata: Metadata = {
  title: "Prenota un appuntamento — Kami Barbiere",
};

export default function BookPage() {
  return (
    <>
      <Nav />
      <main className="relative min-h-svh overflow-hidden pt-36 pb-28">
        <Image src="/img/chair.jpg" alt="" fill sizes="100vw" className="object-cover grayscale" priority />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <h1 className="font-display text-4xl font-normal sm:text-5xl">
              Prenota il tuo appuntamento
              <span className="mt-4 block h-px w-14 bg-gold" />
            </h1>
            <p className="mt-8 max-w-md text-white/70">
              Scegli un servizio, seleziona l&apos;orario e lascia i tuoi dati. Ti confermeremo l&apos;appuntamento per telefono o email.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <BookingForm />
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
