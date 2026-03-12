import Link from "next/link";
import { format } from "date-fns";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { SignalBadges } from "@/components/marketing/SignalBadges";
import { JsonLd } from "@/components/marketing/JsonLd";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { buildBreadcrumbSchema } from "@/lib/marketing/schema";
import { getYouTubeMediaFeed } from "@/lib/marketing/youtube";

export const metadata = buildMarketingMetadata({
  title: "Media",
  description:
    "Watch BidBlender videos and follow channel content from the official YouTube presence.",
  path: "/media",
});

function formatPublished(date: string) {
  try {
    return format(new Date(date), "d MMM yyyy");
  } catch {
    return date;
  }
}

export default async function MediaPage() {
  const feed = await getYouTubeMediaFeed();

  return (
    <MarketingLayout>
      <JsonLd data={buildBreadcrumbSchema("Media", "/media")} />

      <MarketingSection>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bb-powder-blue">
              Official media
            </p>
            <div className="mt-4">
              <MarketingPageHeader
                title="BidBlender media"
                intro="This page auto-pulls from the official BidBlender YouTube channel. Videos are served directly from the channel feed, and the page is structured to accommodate YouTube posts as they start to appear."
              />
            </div>
            <SignalBadges
              className="mt-6"
              items={[
                "YouTube-powered",
                "Videos auto-detected",
                "Posts-ready",
              ]}
            />
          </div>

          <div className="rounded-3xl border border-white/8 bg-bb-dark-elevated/70 p-5 text-sm text-gray-300 shadow-card">
            <p className="font-medium text-gray-100">{feed.channelTitle}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={feed.channelUrl}
                className="rounded-full border border-bb-coral/30 bg-bb-coral/10 px-4 py-2 text-sm font-medium text-bb-coral-light transition hover:border-bb-coral/50 hover:text-white"
              >
                Open channel
              </Link>
              <Link
                href={feed.postsUrl}
                className="rounded-full border border-bb-powder-blue/30 bg-bb-powder-blue/10 px-4 py-2 text-sm font-medium text-bb-powder-blue-light transition hover:border-bb-powder-blue/50 hover:text-white"
              >
                Open posts
              </Link>
            </div>
          </div>
        </div>
      </MarketingSection>

      <MarketingSection>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bb-coral">
              Videos
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-100">
              YouTube walkthroughs and uploads
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-300">
              As videos are published to the BidBlender YouTube channel, they will appear here
              automatically. No manual page editing should be required.
            </p>
          </div>
        </div>

        {feed.videos.length ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {feed.videos.map((video) => (
              <article
                key={video.id}
                className="overflow-hidden rounded-3xl border border-white/8 bg-bb-dark-elevated/80 shadow-card"
              >
                <Link href={video.url} className="block">
                  <div
                    className="aspect-video bg-cover bg-center"
                    style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
                  >
                    <div className="flex h-full items-end bg-gradient-to-t from-black/70 via-black/15 to-transparent p-5">
                      <span className="inline-flex rounded-full border border-bb-coral/30 bg-bb-coral/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-bb-coral-light">
                        Watch on YouTube
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                    {formatPublished(video.publishedAt)}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-gray-100">
                    <Link href={video.url} className="transition hover:text-bb-powder-blue-light">
                      {video.title}
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-bb-coral/30 bg-bb-dark-elevated/60 p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bb-coral-light">
              No videos yet
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-gray-100">
              The first channel uploads will appear here automatically
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-300">
              The page is already connected to the official channel feed. Once walkthroughs,
              explainers, or demos are published on YouTube, they should populate here without
              manual upkeep.
            </p>
          </div>
        )}
      </MarketingSection>

      <MarketingSection>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bb-powder-blue">
              Posts
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-100">
              Channel posts and updates
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-300">
              YouTube posts are a different surface from videos, so the page handles them
              separately. The ingestion layer is ready for posts even though the channel does not
              currently expose visible post content here.
            </p>
          </div>
          <span className="rounded-full border border-bb-powder-blue/30 bg-bb-powder-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-bb-powder-blue-light">
            {feed.postsStatus === "available"
              ? "Posts detected"
              : feed.postsStatus === "empty"
                ? "No posts yet"
                : "Posts unavailable"}
          </span>
        </div>

        {feed.posts.length ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {feed.posts.map((post) => (
              <article
                key={post.id}
                className="rounded-3xl border border-white/8 bg-bb-dark-elevated/80 p-6 shadow-card"
              >
                {post.publishedLabel ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                    {post.publishedLabel}
                  </p>
                ) : null}
                <p className="mt-3 text-sm leading-7 text-gray-300">{post.text}</p>
                <Link
                  href={post.url}
                  className="mt-5 inline-flex text-sm font-medium text-bb-powder-blue transition hover:text-white"
                >
                  View on YouTube
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-bb-powder-blue/30 bg-bb-dark-elevated/60 p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bb-powder-blue-light">
              Posts-ready
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-gray-100">
              The page is ready to surface YouTube posts when they appear
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-300">
              YouTube does not expose posts in the same clean feed format as videos, so the page
              uses a separate posts adapter. That adapter is already part of the media pipeline, which
              means the display logic is in place even though there is no visible channel post content
              yet.
            </p>
          </div>
        )}
      </MarketingSection>
    </MarketingLayout>
  );
}
