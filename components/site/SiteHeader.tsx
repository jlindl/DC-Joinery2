"use client";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500"
      style={{
        backgroundColor: scrolled ? "color-mix(in srgb, var(--bone) 88%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid color-mix(in srgb, var(--ink) 8%, transparent)"
          : "1px solid transparent",
      }}
    >
      <div className="shell flex items-center justify-between py-5">
        <a
          href="#top"
          aria-label="DC Joinery and Interiors — home"
          className="font-display text-[1.05rem] tracking-tight"
          style={{
            color: scrolled ? "var(--ink)" : "var(--bone)",
            transition: "color 400ms var(--ease-reveal)",
          }}
        >
          DC Joinery <span style={{ opacity: 0.6 }}>and Interiors</span>
        </a>
        <a
          href="#contact"
          className="underline-grow text-sm font-medium"
          style={{
            color: scrolled ? "var(--ink)" : "var(--bone)",
            transition: "color 400ms var(--ease-reveal)",
          }}
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
