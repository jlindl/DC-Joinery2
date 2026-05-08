"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { images, blurDataURL } from "@/lib/placeholders";

export function Workshop() {
  return (
    <section
      className="section-pad"
      style={{ background: "var(--linen)" }}
      aria-labelledby="workshop-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <motion.div
            className="col-span-12 md:col-span-6 md:sticky md:top-24"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-6 gap-3 md:gap-5">
              <div
                className="col-span-4 relative w-full"
                style={{ aspectRatio: "5 / 7" }}
              >
                <Image
                  src={images.workshopPortrait}
                  alt="A pair of hands planing oak in the Newcastle workshop"
                  fill
                  sizes="(max-width: 768px) 65vw, 32vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 60%",
                  }}
                />
              </div>
              <div className="col-span-2 flex flex-col gap-3 md:gap-5 pt-8 md:pt-16">
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "3 / 4" }}
                >
                  <Image
                    src={images.workshopDetail}
                    alt="Workshop tools and timber detail"
                    fill
                    sizes="(max-width: 768px) 30vw, 14vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <Image
                    src={images.gallery[6]}
                    alt="Hand-cut joinery detail"
                    fill
                    sizes="(max-width: 768px) 30vw, 14vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-6 md:pl-4 lg:pl-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Eyebrow>The workshop</Eyebrow>
            <h2
              id="workshop-heading"
              className="display-h2 mt-6"
              style={{ maxWidth: "20ch" }}
            >
              One pair of hands. One workshop. Every piece.
            </h2>
            <p
              className="body-prose mt-6"
              style={{ maxWidth: "52ch", opacity: 0.82 }}
            >
              {/* TODO: confirm operator name */}
              DC Joinery is run by [Operator name] from a workshop in
              Newcastle upon Tyne. Drawings, machining, finishing and
              fitting all happen under one roof, and one signature. Most
              work comes by referral, from clients who have seen a piece in
              someone else’s home and asked who made it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
