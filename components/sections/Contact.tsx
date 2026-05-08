"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { images, blurDataURL } from "@/lib/placeholders";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden"
      style={{ minHeight: "min(820px, 100svh)" }}
      aria-labelledby="contact-heading"
    >
      <Image
        src={images.contactBg}
        alt=""
        fill
        sizes="100vw"
        quality={85}
        placeholder="blur"
        blurDataURL={blurDataURL}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,24,20,0.55) 0%, rgba(26,24,20,0.7) 50%, rgba(26,24,20,0.85) 100%)",
        }}
      />

      <div
        className="relative section-pad"
        style={{ color: "var(--bone)" }}
      >
        <div className="shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[40ch]"
          >
            <Eyebrow>
              <span style={{ color: "var(--bone)", opacity: 0.85 }}>
                Start a commission
              </span>
            </Eyebrow>
            <h2
              id="contact-heading"
              className="display-h2 mt-6"
              style={{ color: "var(--bone)" }}
            >
              Tell us what you’re thinking.
            </h2>
          </motion.div>

          <motion.dl
            className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.6,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div>
              <dt
                className="eyebrow"
                style={{ color: "var(--bone)", opacity: 0.6 }}
              >
                Phone
              </dt>
              <dd className="mt-2">
                <a
                  href="tel:+447595024878"
                  className="underline-grow font-display text-2xl"
                >
                  07595 024878
                </a>
              </dd>
            </div>
            <div>
              <dt
                className="eyebrow"
                style={{ color: "var(--bone)", opacity: 0.6 }}
              >
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href="mailto:cdean_weston@me.com"
                  className="underline-grow font-display text-2xl break-all"
                >
                  cdean_weston@me.com
                </a>
              </dd>
            </div>
            <div>
              <dt
                className="eyebrow"
                style={{ color: "var(--bone)", opacity: 0.6 }}
              >
                Instagram
              </dt>
              <dd className="mt-2">
                <a
                  href="https://www.instagram.com/dcjoineryandinteriors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-grow font-display text-2xl"
                >
                  @dcjoineryandinteriors
                </a>
              </dd>
            </div>
            <div>
              <dt
                className="eyebrow"
                style={{ color: "var(--bone)", opacity: 0.6 }}
              >
                Workshop
              </dt>
              <dd className="mt-2 font-display text-2xl">
                Newcastle upon Tyne
              </dd>
            </div>
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
