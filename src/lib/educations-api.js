import { buildApiUrl } from "@/lib/api-config";

function extractYoutubeId(link = "") {
  const value = String(link || "").trim();
  if (!value) return null;

  try {
    const url = new URL(value);

    if (url.hostname.includes("youtu.be")) {
      return url.pathname.split("/").filter(Boolean)[0] || null;
    }

    if (url.searchParams.get("v")) {
      return url.searchParams.get("v");
    }

    const embedMatch = url.pathname.match(/\/embed\/([^/]+)/);
    if (embedMatch?.[1]) return embedMatch[1];

    const shortsMatch = url.pathname.match(/\/shorts\/([^/]+)/);
    if (shortsMatch?.[1]) return shortsMatch[1];
  } catch {
    // fall through to regex
  }

  const match = value.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/,
  );

  return match?.[1] || null;
}

function normalizeEducation(item) {
  const youtubeLink = item.youtube_link || "";

  return {
    id: item.id,
    title: item.title || "",
    category: item.category || "General",
    youtubeLink,
    youtubeId: extractYoutubeId(youtubeLink),
    date: item.created_at || item.updated_at || null,
  };
}

async function fetchEducationsPage(page = 1) {
  const response = await fetch(
    buildApiUrl(`/educations?per_page=50&page=${page}`),
    {
      headers: { Accept: "application/json" },
    },
  );

  if (!response.ok) {
    throw new Error(`Educations API failed with status ${response.status}`);
  }

  const json = await response.json();

  if (!json?.success || !Array.isArray(json.data)) {
    throw new Error("Invalid educations API response");
  }

  return {
    items: json.data.map(normalizeEducation),
    lastPage: json.meta?.last_page || 1,
  };
}

export async function getEducations() {
  try {
    const allItems = [];
    let page = 1;
    let lastPage = 1;

    do {
      const result = await fetchEducationsPage(page);
      allItems.push(...result.items);
      lastPage = result.lastPage;
      page += 1;
    } while (page <= lastPage);

    return allItems;
  } catch (error) {
    console.error("Failed to fetch educations from API:", error);
    return [];
  }
}
