import { Reveal } from "@/components/primitives/Reveal";

export function Testimonial() {
  return (
    <section
      className="section-pad"
      style={{ background: "var(--bone)" }}
      aria-labelledby="testimonial-heading"
    >
      <div className="shell">
        <h2 id="testimonial-heading" className="sr-only">
          Client testimonial
        </h2>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-9">
            {/* TODO: replace with verified client quote */}
            <Reveal>
              <blockquote className="display-quote">
                <span aria-hidden="true">“</span>It fits like it was always
                meant to be there.<span aria-hidden="true">”</span>
              </blockquote>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                className="mt-8 font-display italic text-base"
                style={{ opacity: 0.7 }}
              >
                — Client, Jesmond
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
