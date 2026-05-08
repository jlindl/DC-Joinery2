"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { images, blurDataURL } from "@/lib/placeholders";

export function ImageBreak() {
  return (
    <section
      aria-hidden="true"
      className="relative w-full overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      <motion.div
        className="relative w-full"
        style={{ aspectRatio: "21 / 9", minHeight: "320px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      >
        <Image
          src={images.imageBreak}
          alt=""
          fill
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL={blurDataURL}
          style={{ objectFit: "cover" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,24,20,0.10) 0%, rgba(26,24,20,0) 30%, rgba(26,24,20,0) 70%, rgba(26,24,20,0.10) 100%)",
          }}
        />
      </motion.div>
    </section>
  );
}
