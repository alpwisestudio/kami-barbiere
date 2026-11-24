"use client";

import { useEffect, useState } from "react";

const services = [
  { name: "Sfumatura di precisione", price: 35, mins: 45 },
  { name: "Cura della barba", price: 25, mins: 30 },
  { name: "Rasatura con asciugamano caldo", price: 40, mins: 40 },
  { name: "Taglio e barba", price: 55, mins: 70 },
];

const times = ["09:00", "10:00", "11:00", "12:00", "13:30", "14:30", "15:30", "16:30", "17:30"];

const field =
  "w-full border border-black/30 bg-white px-4 py-3 text-sm outline-none transition focus:border-black";

export default function BookingForm() {
  const [service, setService] = useState(services[0].name);
  const [time, setTime] = useState("");
  const [done, setDone] = useState<null | { name: string; summary: string }>(null);

  // Computed after mount: Cache Components disallows new Date() during prerender.
  const [today, setToday] = useState<string | undefined>();
  useEffect(() => setToday(new Date().toISOString().split("T")[0]), []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (!time) return;
    setDone({
      name: String(f.get("name")),
      summary: `${service} · ${f.get("date")} alle ${time}`,
    });
  }

  if (done) {
    return (
      <div className="border border-white/30 p-10 text-center">
        <h3 className="font-display text-3xl">Grazie, {done.name}.</h3>
        <p className="mt-4 text-white/70">Richiesta ricevuta: {done.summary}</p>
        <p className="mt-2 text-sm text-white/50">Ti confermeremo a breve per telefono o email.</p>
        <button
          onClick={() => {
            setDone(null);
            setTime("");
          }}
          className="mt-8 border border-white px-6 py-3 text-sm hover:bg-white hover:text-black"
        >
          Prenota ancora
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 text-black">
      <div className="grid grid-cols-2 gap-3">
        {services.map((s) => (
          <button
            type="button"
            key={s.name}
            onClick={() => setService(s.name)}
            aria-pressed={service === s.name}
            className={`border px-4 py-3 text-left text-sm transition ${
              service === s.name
                ? "border-white bg-white text-black"
                : "border-white/30 text-white hover:border-white"
            }`}
          >
            <span className="block font-medium">{s.name}</span>
            <span className="opacity-60">
              €{s.price} · {s.mins} min
            </span>
          </button>
        ))}
      </div>

      <input type="date" name="date" required min={today} className={field} aria-label="Data" />

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        {times.map((t) => (
          <button
            type="button"
            key={t}
            onClick={() => setTime(t)}
            aria-pressed={time === t}
            className={`border px-2 py-2 text-sm transition ${
              time === t
                ? "border-white bg-white text-black"
                : "border-white/30 text-white hover:border-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Nome e cognome" className={field} />
        <input name="phone" required type="tel" placeholder="Telefono" className={field} />
      </div>
      <input name="email" type="email" placeholder="Email (facoltativa)" className={field} />

      <button
        type="submit"
        disabled={!time}
        className="w-full bg-white px-6 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {time ? "Richiedi appuntamento" : "Scegli un orario per continuare"}
      </button>
    </form>
  );
}
