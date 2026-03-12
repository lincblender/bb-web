interface MediaPlaceholderProps {
  eyebrow?: string;
  title: string;
  description: string;
  variant?: "video" | "interactive" | "product";
  caption?: string;
  youtubeVideoId?: string;
}

const variantLabel = {
  video: "YouTube Walkthrough",
  interactive: "Interactive Placeholder",
  product: "Product Preview",
};

export function MediaPlaceholder({
  eyebrow,
  title,
  description,
  variant = "product",
  caption,
  youtubeVideoId,
}: MediaPlaceholderProps) {
  const resolvedCaption =
    caption ??
    (variant === "video"
      ? "Reserved for a future YouTube walkthrough embed."
      : variant === "interactive"
        ? "Poster state for a future interactive module."
        : "Poster state for a future product walkthrough.");

  return (
    <div className="rounded-3xl border border-dashed border-bb-powder-blue/40 bg-gradient-to-br from-bb-dark-elevated to-[#111820] p-8 shadow-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          {eyebrow ? (
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-bb-powder-blue">
              {eyebrow}
            </p>
          ) : null}
          <h3 className="mt-2 text-2xl font-semibold text-gray-100">{title}</h3>
        </div>
        <span className="rounded-full border border-gray-600 px-3 py-1 text-xs text-gray-400">
          {variantLabel[variant]}
        </span>
      </div>
      <div className="mt-8 rounded-2xl border border-gray-700/60 bg-black/20 p-8">
        <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-xs text-gray-400">
          <span className="uppercase tracking-[0.18em]">{variantLabel[variant]}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-gray-300">
            {variant === "video" ? "YouTube slot" : "Poster"}
          </span>
        </div>
        {variant === "video" && youtubeVideoId ? (
          <div className="overflow-hidden rounded-2xl border border-white/8 bg-black shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)]">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`}
                title={title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <div className="flex min-h-[220px] items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(134,179,213,0.18),_transparent_45%),linear-gradient(180deg,_rgba(253,116,123,0.08),_rgba(15,20,25,0.65))]">
            <div className="max-w-md text-center">
              {variant === "video" ? (
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-bb-coral/40 bg-bb-coral/15 text-white shadow-[0_0_0_6px_rgba(253,116,123,0.08)]">
                  <span className="ml-1 text-lg font-semibold">▶</span>
                </div>
              ) : (
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-bb-powder-blue/40 bg-bb-powder-blue/10 text-bb-powder-blue">
                  <span className="text-lg font-semibold">BB</span>
                </div>
              )}
              <p className="mt-5 text-sm leading-6 text-gray-300">{description}</p>
              {variant === "video" ? (
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-bb-coral-light">
                  Future YouTube embed
                </p>
              ) : null}
            </div>
          </div>
        )}
        <p className="mt-4 text-sm leading-6 text-gray-400">{resolvedCaption}</p>
      </div>
    </div>
  );
}
