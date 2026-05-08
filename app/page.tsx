// Placeholder photography is sourced from Unsplash via lib/placeholders.ts.
// Swap each entry there for a local /public/images/... path once real
// client photography is delivered.
import { SkipToContent } from "@/components/primitives/SkipToContent";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { ImageBreak } from "@/components/sections/ImageBreak";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Gallery } from "@/components/sections/Gallery";
import { Workshop } from "@/components/sections/Workshop";
import { Testimonial } from "@/components/sections/Testimonial";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SkipToContent />
      <SiteHeader />
      <main id="main">
        <span id="top" />
        <Hero />
        <Manifesto />
        <ImageBreak />
        <FeaturedProject />
        <Services />
        <Process />
        <Gallery />
        <Workshop />
        <Testimonial />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
