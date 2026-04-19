"use client";

function normalizeEnvUrl(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  let v = raw.trim();
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    v = v.slice(1, -1).trim();
  }
  return v || undefined;
}

const googleReviewsUrl = normalizeEnvUrl(
  process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED_SRC
);

/**
 * Google review listing URLs cannot be embedded in third-party iframes (blocked by Google).
 * This section links out to the official Google reviews page when NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED_SRC is set (same env name as before; value should be the reviews page URL).
 */
export default function GoogleReviewsEmbed() {
  if (!googleReviewsUrl) {
    return null;
  }

  return (
    <section
      className="w-full max-w-4xl mx-auto"
      aria-labelledby="google-reviews-heading"
    >
      <h2
        id="google-reviews-heading"
        className="text-2xl sm:text-3xl font-semibold text-black text-center mb-2"
      >
        Google reviews
      </h2>
      <p className="text-center text-black/80 text-sm sm:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
        Verified patient feedback lives on Google. Open the link below to read full reviews and ratings in a new tab.
      </p>

      <div className="rounded-xl border border-[#8B9D7F]/25 bg-white/90 shadow-md px-6 py-8 sm:px-10 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
          <div
            className="flex items-center gap-0.5 text-[#75866D]"
            aria-hidden="true"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                className="w-8 h-8 sm:w-9 sm:h-9"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3.1l2.5 5.1 5.7.8-4.1 4 1 5.6L12 16.9 6.9 18.5l1-5.6-4.1-4 5.7-.8L12 3.1z" />
              </svg>
            ))}
          </div>
          <p className="text-center text-sm text-black/70 max-w-md">
            Google does not allow this reviews list to be embedded directly on outside websites. Use the button to view the official profile.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#75866D] px-6 py-3.5 text-center text-base font-semibold text-white shadow hover:bg-[#677560] transition-colors"
          >
            Read reviews on Google
            <span className="sr-only"> (opens in new tab)</span>
            <svg
              className="w-5 h-5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
