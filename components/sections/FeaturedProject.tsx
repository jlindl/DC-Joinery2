"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { images, blurDataURL } from "@/lib/placeholders";

export function FeaturedProject() {
  return (
    <section
      className="section-pad"
      style={{ background: "var(--linen)" }}
      aria-labelledby="featured-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div
            className="col-span-12 md:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative w-full"
              style={{ aspectRatio: "4 / 5" }}
            >
              <Image
                src={images.jesmondTable}
                alt="Oversized bespoke oak table and feature units made for a design studio in Jesmond, Newcastle"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                quality={85}
                placeholder="blur"
                blurDataURL={blurDataURL}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Eyebrow>Recent work</Eyebrow>
            <h2
              id="featured-heading"
              className="display-h2 mt-6"
              style={{ maxWidth: "16ch" }}
            >
              A design studio in Jesmond.
            </h2>
            <p
              className="body-prose mt-6"
              style={{ maxWidth: "44ch", opacity: 0.82 }}
            >
              An oversized table and a wall of feature units, made to the
              studio’s brief. Workshop-built, site-assembled. The painting
              was theirs. The joinery was ours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
