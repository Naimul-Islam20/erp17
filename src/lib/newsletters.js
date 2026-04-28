const NEWSLETTER_API_URL = "http://127.0.0.1:8000/api/newsletters";

export function slugifyTitle(title = "") {
  return title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeNewsletter(item) {
  return {
    id: item.id,
    title: item.title || "",
    slug: slugifyTitle(item.title || ""),
    category: item.category || "Newsletter",
    date: item.date || null,
    image: item.image_url || "/img/home/Banner.svg",
    description: item.description || item.desc || "",
  };
}

export async function getNewsletters() {
  const response = await fetch(NEWSLETTER_API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch newsletters");
  }

  const result = await response.json();
  const items = Array.isArray(result?.data) ? result.data : [];

  return items.map(normalizeNewsletter);
}
