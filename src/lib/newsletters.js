import staticNewsletters from "@/data/newsletters";
import { buildApiUrl } from "@/lib/api-config";
import { normalizeNewsletter } from "@/lib/newsletters-core";

export { slugifyTitle } from "@/lib/newsletters-core";

function shouldUseStaticNewsletters() {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  return /^(https?:\/\/)?(127\.0\.0\.1|localhost)(:\d+)?\/?$/i.test(apiBase);
}

async function fetchNewsletterPage(page = 1) {
  const response = await fetch(
    buildApiUrl(`/newsletters?per_page=50&page=${page}`),
    {
      headers: { Accept: "application/json" },
    },
  );

  if (!response.ok) {
    throw new Error(`Newsletters API failed with status ${response.status}`);
  }

  const json = await response.json();

  if (!json?.success || !Array.isArray(json.data)) {
    throw new Error("Invalid newsletters API response");
  }

  return {
    items: json.data.map(normalizeNewsletter),
    lastPage: json.meta?.last_page || 1,
  };
}

async function fetchNewslettersFromApi() {
  const allItems = [];
  let page = 1;
  let lastPage = 1;

  do {
    const result = await fetchNewsletterPage(page);
    allItems.push(...result.items);
    lastPage = result.lastPage;
    page += 1;
  } while (page <= lastPage);

  return allItems;
}

export async function getNewsletters() {
  if (shouldUseStaticNewsletters()) {
    return staticNewsletters.map(normalizeNewsletter);
  }

  try {
    const items = await fetchNewslettersFromApi();
    if (items.length > 0) {
      return items.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      });
    }
  } catch (error) {
    console.error("Failed to fetch newsletters from API:", error);
  }

  return staticNewsletters.map(normalizeNewsletter);
}

export async function getNewsletterBySlug(slug) {
  const items = await getNewsletters();
  return items.find((item) => item.slug === slug) || null;
}
