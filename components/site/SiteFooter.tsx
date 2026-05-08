export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t"
      style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" }}
    >
      <div className="shell flex flex-col gap-3 py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p style={{ opacity: 0.7 }}>
          DC Joinery and Interiors · Newcastle upon Tyne · © {year}
        </p>
        <a
          href="https://www.instagram.com/dcjoineryandinteriors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="DC Joinery on Instagram"
          className="underline-grow self-start sm:self-auto"
          style={{ opacity: 0.7 }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
