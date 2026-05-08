// Placeholder photography sourced from Unsplash, used until real client
// photography is delivered. URLs go through next/image's optimizer.
// TODO: replace each entry below with a local /public/images/... path
// once the workshop ships real photography.

const UNSPLASH = "https://images.unsplash.com/photo-";
const PARAMS = "?w=2400&q=85&auto=format&fit=crop";

const u = (id: string) => `${UNSPLASH}${id}${PARAMS}`;

export const images = {
  hero: u("1773325035245-66f793d71d5c"),
  jesmondTable: u("1758977404683-d04c315a005b"),
  imageBreak: u("1760533388345-8450d79751ca"),
  process01: u("1503387762-592deb58ef4e"),
  process02: u("1497219055242-93359eeed651"),
  process03: u("1604062527894-55b0712bbee3"),
  workshopPortrait: u("1685022515782-534dfba3a2c4"),
  workshopDetail: u("1725916631418-7c000895345f"),
  contactBg: u("1769430838012-8e1270d41f46"),
  gallery: [
    u("1636250301575-6260b0484995"),
    u("1561435373-f378b4917e31"),
    u("1593069337927-be2586604a9c"),
    u("1594620302200-9a762244a156"),
    u("1724641474810-73b748545821"),
    u("1771888703720-6a55f70dcbed"),
    u("1711675253036-475a06cdd9aa"),
    u("1772207896656-4210003d65ee"),
    u("1772442363851-738a548f6c5c"),
  ],
} as const;

// A single 8×10 warm-tone SVG used as a generic blur-up placeholder.
// Once real JPGs land, generate per-image base64 blurs with plaiceholder
// and replace this with a per-key map.
export const blurDataURL =
  "data:image/svg+xml;base64," +
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 10"><rect width="8" height="10" fill="#cdbfa6"/></svg>`,
  ).toString("base64");
