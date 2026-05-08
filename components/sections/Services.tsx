import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";

const services = [
  {
    title: "Fitted furniture",
    body: "Wardrobes, alcove units, dressers, media walls.",
  },
  {
    title: "Bespoke tables",
    body: "Dining, console, boardroom. Solid timber and veneer.",
  },
  {
    title: "Interior joinery",
    body: "Panelling, shelving, media walls, window seats, bookcases.",
  },
];

export function Services() {
  return (
    <section
      className="section-pad"
      style={{ background: "var(--bone)" }}
      aria-labelledby="services-heading"
    >
      <div className="shell">
        <Reveal>
          <Eyebrow>What we make</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 id="services-heading" className="sr-only">
            What we make
          </h2>
          <DisplayHeading level={2} className="mt-6 max-w-[24ch]">
            Three things, made well.
          </DisplayHeading>
        </Reveal>
        <div
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12"
          style={{
            borderTop:
              "1px solid color-mix(in srgb, var(--ink) 14%, transparent)",
          }}
        >
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="pt-10">
                <h3 className="display-h3" style={{ maxWidth: "14ch" }}>
                  {service.title}
                </h3>
                <p
                  className="body-prose mt-4"
                  style={{ maxWidth: "28ch", opacity: 0.78 }}
                >
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
