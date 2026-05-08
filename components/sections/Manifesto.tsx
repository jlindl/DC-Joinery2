import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/Eyebrow";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="section-pad"
      style={{ background: "var(--bone)" }}
      aria-labelledby="manifesto-heading"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-start-2 md:col-span-9 lg:col-start-2 lg:col-span-7">
            <Reveal>
              <Eyebrow>A note from the workshop</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="manifesto-heading" className="sr-only">
                A note from the workshop
              </h2>
              <p className="mt-8 display-h3" style={{ maxWidth: "32ch" }}>
                We make pieces that belong to the rooms they’re in.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p
                className="body-prose mt-6"
                style={{ maxWidth: "60ch", opacity: 0.82 }}
              >
                A table sized to the window it sits beneath. Cabinetry built
                for the alcove, not the catalogue. Drawn, machined, sanded
                and finished in a workshop in Newcastle. Then carried in and
                made to fit, by the same hands that made it.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
