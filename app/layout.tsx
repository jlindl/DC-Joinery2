import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dcjoineryandinteriors.co.uk"),
  title: "DC Joinery and Interiors — Bespoke joinery, Newcastle upon Tyne",
  description:
    "Workshop-made fitted furniture, bespoke tables and interior joinery for homes and studios in Newcastle and the North East. By commission.",
  openGraph: {
    title: "DC Joinery and Interiors",
    description:
      "Bespoke joinery, made by hand in Newcastle upon Tyne.",
    type: "website",
    locale: "en_GB",
    siteName: "DC Joinery and Interiors",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DC Joinery and Interiors",
    description: "Bespoke joinery, made by hand in Newcastle upon Tyne.",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DC Joinery and Interiors",
  description:
    "Bespoke joinery, fitted furniture and interior joinery, workshop-made in Newcastle upon Tyne.",
  telephone: "+44 7595 024878",
  email: "cdean_weston@me.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Newcastle upon Tyne",
    addressRegion: "Tyne and Wear",
    addressCountry: "GB",
  },
  areaServed: "Newcastle upon Tyne and the North East",
  sameAs: [
    "https://www.instagram.com/dcjoineryandinteriors",
    "https://www.facebook.com/DCJoineryConstruction",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
