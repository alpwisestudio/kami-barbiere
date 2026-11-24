"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  variant?: "up" | "left" | "right" | "image";
};

/** Fades/slides children in once when they scroll into view. */
export default function Reveal({ children, className = "", delay = 0, variant = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // The image wipe uses clip-path, which can make the element itself count as
  // "not intersecting" — so observe an unclipped wrapper and clip the inner node.
  if (variant === "image") {
    return (
      <div ref={ref} className={className}>
        <div
          className={`reveal-img ${shown ? "in" : ""}`}
          style={{ "--d": `${delay}ms` } as React.CSSProperties}
        >
          {children}
        </div>
      </div>
    );
  }

  const base = `reveal ${variant === "left" ? "reveal-left" : variant === "right" ? "reveal-right" : ""}`;

  return (
    <div
      ref={ref}
      className={`${base} ${shown ? "in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
