import staticNewsletters from "@/data/newsletters";
import { buildApiUrl } from "@/lib/api-config";
import { normalizeNewsletter } from "@/lib/newsletters-core";

export { slugifyTitle } from "@/lib/newsletters-core";

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

async function fetchNewsletterById(id) {
  const response = await fetch(buildApiUrl(`/newsletters/${id}`), {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Newsletter detail API failed with status ${response.status}`);
  }

  const json = await response.json();

  if (!json?.success || !json.data) {
    throw new Error("Invalid newsletter detail API response");
  }

  return normalizeNewsletter(json.data);
}

export async function getNewsletters() {
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
  const summary = items.find((item) => item.slug === slug) || null;

  if (!summary) {
    return null;
  }

  try {
    const details = await fetchNewsletterById(summary.id);
    return {
      ...summary,
      ...details,
      slug: summary.slug,
      excerpt: details.excerpt || summary.excerpt,
      description: details.description || summary.description,
      content: details.content || summary.content,
      image: details.image || summary.image,
      blocks: details.blocks || summary.blocks || [],
    };
  } catch (error) {
    console.error("Failed to fetch newsletter details from API:", error);
    return summary;
  }
}
