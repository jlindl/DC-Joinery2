"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { images, blurDataURL } from "@/lib/placeholders";

export function Hero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "560px" }}
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
            "linear-gradient(to bottom, rgba(26,24,20,0.55) 0%, rgba(26,24,20,0.25) 35%, rgba(26,24,20,0.05) 60%, rgba(26,24,20,0.55) 100%)",
        }}
      />

      <div className="absolute inset-0 flex">
        <div
          className="shell flex w-full flex-col justify-end pb-10 sm:pb-14 md:pb-20"
          style={{ color: "var(--bone)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[28ch]"
          >
            <h1
              id="hero-heading"
              className="hero-headline"
              style={{ color: "var(--bone)" }}
            >
              Joinery, made by hand.
              <br />
              Fitted with care.
            </h1>
          </motion.div>

          <motion.p
            className="mt-5 text-[0.7rem] sm:text-xs font-medium tracking-[0.22em] uppercase"
            style={{ opacity: 0.85 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Newcastle upon Tyne · By commission
          </motion.p>
        </div>
      </div>
    </section>
  );
}
