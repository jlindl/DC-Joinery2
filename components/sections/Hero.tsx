"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { images, blurDataURL } from "@/lib/placeholders";

export function Hero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 ken-burns">
        <Image
          src={images.hero}
          alt="Bespoke joinery in a warmly lit Newcastle workshop"
          fill
          sizes="100vw"
          quality={90}
          preload
          placeholder="blur"
          blurDataURL={blurDataURL}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,24,20,0.40) 0%, rgba(26,24,20,0.05) 25%, rgba(26,24,20,0.05) 55%, rgba(26,24,20,0.75) 100%)",
        }}
      />

      <div
        className="absolute inset-0 flex flex-col"
        style={{ color: "var(--bone)" }}
      >
        {/* Top eyebrow */}
        <div className="shell pt-28 sm:pt-32 md:pt-36 flex">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-3 text-[0.65rem] sm:text-xs font-medium uppercase tracking-[0.28em]"
          >
            <span
              aria-hidden="true"
              className="inline-block"
              style={{
                width: 28,
                height: 1,
                background: "currentColor",
                opacity: 0.6,
              }}
            />
            Bespoke joinery, by commission
          </motion.div>
        </div>

        {/* Bottom block — headline left, scroll cue right */}
        <div className="shell mt-auto pb-14 sm:pb-20 md:pb-28 flex flex-col gap-12 md:gap-16 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              aria-hidden="true"
              className="hero-rule"
              style={{ background: "var(--bone)" }}
            />
            <h1
              id="hero-heading"
              className="hero-headline"
              style={{ color: "var(--bone)" }}
            >
              <span>Joinery, made by hand.</span>
              <span>Fitted with care.</span>
            </h1>
            <motion.p
              className="mt-8 sm:mt-10 text-[0.7rem] sm:text-xs font-medium tracking-[0.22em] uppercase"
              style={{ opacity: 0.85 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Newcastle upon Tyne · By commission
            </motion.p>
          </motion.div>

          <motion.a
            href="#manifesto"
            aria-label="Scroll to read more"
            className="hero-scroll self-start md:self-end md:pb-2"
            style={{ color: "var(--bone)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{
              duration: 0.8,
              delay: 1.0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Scroll
          </motion.a>
        </div>
      </div>
    </section>
  );
}
