"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { images, blurDataURL } from "@/lib/placeholders";

const steps = [
  {
    number: "01",
    title: "Drawn",
    body: "We start with measurements taken on site and a conversation about how the piece will be used.",
    image: images.process01,
    alt: "Pencil sketch of a joinery piece on workshop paper",
    aspect: "3 / 4",
    offset: "md:mt-0",
  },
  {
    number: "02",
    title: "Made",
    body: "Built in our Newcastle workshop, dry-fitted, finished, photographed.",
    image: images.process02,
    alt: "A pair of hands working timber at a tablesaw, shavings in mid-air",
    aspect: "4 / 5",
    offset: "md:mt-16",
  },
  {
    number: "03",
    title: "Fitted",
    body: "Installed in your home or studio. The same hands, start to finish.",
    image: images.process03,
    alt: "Finished bespoke joinery installed in a lived-in interior",
    aspect: "3 / 4",
    offset: "md:mt-8",
  },
];

export function Process() {
  return (
    <section
      className="section-pad"
      style={{ background: "var(--linen)" }}
      aria-labelledby="process-heading"
    >
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>How it’s made</Eyebrow>
          <h2 id="process-heading" className="sr-only">
            How it’s made
          </h2>
          <DisplayHeading level={2} className="mt-6 max-w-[20ch]">
            Drawn. Made. Fitted.
          </DisplayHeading>
        </motion.div>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={step.offset}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className="relative w-full"
                style={{ aspectRatio: step.aspect }}
              >
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="mt-6 flex items-baseline gap-4">
                <span
                  className="font-display text-sm tracking-[0.18em]"
                  style={{ opacity: 0.6 }}
                >
                  {step.number}
                </span>
                <h3 className="display-h3" style={{ fontStyle: "italic" }}>
                  {step.title}
                </h3>
              </div>
              <p
                className="body-prose mt-4"
                style={{ maxWidth: "32ch", opacity: 0.82 }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
