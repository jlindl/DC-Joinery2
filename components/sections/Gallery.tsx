"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { images, blurDataURL } from "@/lib/placeholders";

type Tile = {
  src: string;
  alt: string;
  aspect: string;
  caption: string;
  column: "left" | "right";
};

const tiles: Tile[] = [
  {
    src: images.gallery[0],
    alt: "Oak shelving fitted into an alcove in a Jesmond townhouse",
    aspect: "4 / 5",
    caption: "Alcove shelving, Jesmond",
    column: "left",
  },
  {
    src: images.gallery[1],
    alt: "Detail of a hand-finished walnut tabletop edge",
    aspect: "1 / 1",
    caption: "Walnut edge, detail",
    column: "right",
  },
  {
    src: images.gallery[2],
    alt: "Built-in media wall with integrated bookshelves",
    aspect: "4 / 5",
    caption: "Built-in media wall",
    column: "right",
  },
  {
    src: images.gallery[3],
    alt: "A pair of bespoke wardrobes finished in painted oak",
    aspect: "3 / 4",
    caption: "Painted oak wardrobes",
    column: "left",
  },
  {
    src: images.gallery[4],
    alt: "Window seat with a hinged storage lid in a bay window",
    aspect: "1 / 1",
    caption: "Window seat, bay",
    column: "left",
  },
  {
    src: images.gallery[5],
    alt: "Long boardroom table in solid oak with through-tenon joinery",
    aspect: "3 / 2",
    caption: "Boardroom table",
    column: "right",
  },
  {
    src: images.gallery[6],
    alt: "Hand-cut dovetails on a small drawer",
    aspect: "1 / 1",
    caption: "Hand-cut dovetails",
    column: "right",
  },
  {
    src: images.gallery[7],
    alt: "Floor-to-ceiling fluted timber panelling in a hallway",
    aspect: "4 / 5",
    caption: "Fluted panelling",
    column: "left",
  },
  {
    src: images.gallery[8],
    alt: "Dining table in a sunlit Tynemouth kitchen",
    aspect: "3 / 2",
    caption: "Dining, Tynemouth",
    column: "left",
  },
];

function Tile({ tile, index }: { tile: Tile; index: number }) {
  return (
    <motion.figure
      className="gallery-tile"
      style={{ aspectRatio: tile.aspect }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Image
        src={tile.src}
        alt={tile.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px"
        quality={85}
        placeholder="blur"
        blurDataURL={blurDataURL}
        style={{ objectFit: "cover" }}
      />
      <figcaption className="gallery-caption">{tile.caption}</figcaption>
    </motion.figure>
  );
}

export function Gallery() {
  const left = tiles.filter((t) => t.column === "left");
  const right = tiles.filter((t) => t.column === "right");

  return (
    <section
      className="section-pad"
      style={{ background: "var(--bone)" }}
      aria-labelledby="gallery-heading"
    >
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>A few pieces</Eyebrow>
          <h2 id="gallery-heading" className="sr-only">
            Gallery
          </h2>
          <DisplayHeading level={2} className="mt-6 max-w-[22ch]">
            Recent commissions.
          </DisplayHeading>
        </motion.div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="flex flex-col gap-6 md:gap-10 md:mt-12">
            {left.map((t, i) => (
              <Tile key={t.src} tile={t} index={i} />
            ))}
          </div>
          <div className="flex flex-col gap-6 md:gap-10">
            {right.map((t, i) => (
              <Tile key={t.src} tile={t} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
