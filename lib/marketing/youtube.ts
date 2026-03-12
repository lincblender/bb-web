const YOUTUBE_HANDLE = "@bidblender";
const YOUTUBE_CHANNEL_URL = `https://www.youtube.com/${YOUTUBE_HANDLE}`;
const YOUTUBE_POSTS_URL = `${YOUTUBE_CHANNEL_URL}/posts`;

export interface YouTubeVideo {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  thumbnailUrl: string;
}

export interface YouTubePost {
  id: string;
  text: string;
  publishedLabel?: string;
  url: string;
}

export interface YouTubeMediaFeed {
  channelId: string;
  channelTitle: string;
  channelUrl: string;
  postsUrl: string;
  videos: YouTubeVideo[];
  posts: YouTubePost[];
  postsStatus: "available" | "empty" | "unavailable";
}

function decodeHtml(text: string) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function stripTags(text: string) {
  return decodeHtml(text.replace(/<[^>]+>/g, "").trim());
}

function extractTag(block: string, tag: string) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  return match ? stripTags(match[1]) : "";
}

function extractAttr(block: string, tag: string, attr: string) {
  const match = block.match(new RegExp(`<${tag}[^>]*${attr}="([^"]+)"[^>]*>`));
  return match ? decodeHtml(match[1]) : "";
}

async function fetchText(url: string) {
  const response = await fetch(url, {
    next: { revalidate: 60 * 30 },
    headers: {
      "user-agent":
        "Mozilla/5.0 (compatible; BidBlenderBot/1.0; +https://bidblender.com.au)",
      accept: "text/html,application/xml;q=0.9,*/*;q=0.8",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

async function resolveChannel() {
  const html = await fetchText(YOUTUBE_CHANNEL_URL);
  const channelId = html.match(/"browseId":"(UC[^"]+)"/)?.[1] ?? "";
  const channelTitle =
    html.match(/<title>([^<]+)<\/title>/)?.[1]?.replace(/\s*-\s*YouTube\s*$/, "") ??
    "BidBlender";

  if (!channelId) {
    throw new Error("Unable to resolve YouTube channel ID");
  }

  return {
    channelId,
    channelTitle: decodeHtml(channelTitle.trim()),
  };
}

async function fetchVideos(channelId: string) {
  const xml = await fetchText(
    `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
  );

  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];

  return entries.map((entryMatch) => {
    const block = entryMatch[1];
    const videoId = extractTag(block, "yt:videoId");
    const title = extractTag(block, "title");
    const url = extractAttr(block, "link", "href");
    const publishedAt = extractTag(block, "published");

    return {
      id: videoId,
      title,
      url,
      publishedAt,
      thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    } satisfies YouTubeVideo;
  });
}

async function fetchPosts() {
  try {
    const html = await fetchText(YOUTUBE_POSTS_URL);
    const postIds = [...html.matchAll(/"postId":"([^"]+)"/g)].map((match) => match[1]);

    if (!postIds.length) {
      return {
        posts: [] as YouTubePost[],
        status: "empty" as const,
      };
    }

    // Best-effort parser. If YouTube changes the HTML, the page will still degrade safely.
    const posts = postIds.slice(0, 12).map((postId) => ({
      id: postId,
      text: "YouTube post detected. Open on YouTube to view the full post.",
      url: `${YOUTUBE_POSTS_URL}`,
    }));

    return {
      posts,
      status: "available" as const,
    };
  } catch {
    return {
      posts: [] as YouTubePost[],
      status: "unavailable" as const,
    };
  }
}

function fallbackFeed(): YouTubeMediaFeed {
  return {
    channelId: "",
    channelTitle: "BidBlender",
    channelUrl: YOUTUBE_CHANNEL_URL,
    postsUrl: YOUTUBE_POSTS_URL,
    videos: [],
    posts: [],
    postsStatus: "unavailable",
  };
}

export async function getYouTubeMediaFeed(): Promise<YouTubeMediaFeed> {
  try {
    const { channelId, channelTitle } = await resolveChannel();
    const [videos, postsResult] = await Promise.all([
      fetchVideos(channelId),
      fetchPosts(),
    ]);

    return {
      channelId,
      channelTitle,
      channelUrl: YOUTUBE_CHANNEL_URL,
      postsUrl: YOUTUBE_POSTS_URL,
      videos,
      posts: postsResult.posts,
      postsStatus: postsResult.status,
    };
  } catch {
    return fallbackFeed();
  }
}
