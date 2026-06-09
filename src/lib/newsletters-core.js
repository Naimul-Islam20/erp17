export function slugifyTitle(title = "") {
  return title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function parseDateParts(dateValue) {
  if (!dateValue) return { month: null, day: null, year: null };

  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) return { month: null, day: null, year: null };

  return {
    month: parsed.toLocaleString("en-US", { month: "long" }),
    day: parsed.getDate(),
    year: parsed.getFullYear(),
  };
}

export function formatNewsletterDate(item) {
  if (item.month && item.day && item.year) {
    return `${item.month} ${item.day}, ${item.year}`;
  }

  if (item.date) {
    const parsed = new Date(item.date);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }
  }

  return null;
}

const monthToNumber = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

function cleanText(value = "") {
  return String(value).replace(/\r\n/g, "\n").trim();
}

export function stripHtml(value = "") {
  return String(value)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>\s*<p[^>]*>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&ldquo;/g, "\u201C")
    .replace(/&rdquo;/g, "\u201D")
    .replace(/&rsquo;/g, "\u2019")
    .replace(/&lsquo;/g, "\u2018")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function isHtmlContent(value = "") {
  return /<[a-z][\s\S]*>/i.test(String(value));
}

export function normalizeNewsletter(item) {
  const slug = item.slug || slugifyTitle(item.title || "");
  const dateParts =
    item.month && item.day && item.year
      ? { month: item.month, day: item.day, year: item.year }
      : parseDateParts(item.date);

  const date =
    item.date ||
    (dateParts.month && dateParts.day && dateParts.year
      ? `${dateParts.year}-${monthToNumber[dateParts.month] || "01"}-${String(dateParts.day).padStart(2, "0")}`
      : null);

  const descriptionHtml = cleanText(
    item.excerpt || item.description || item.desc || "",
  );
  const content = cleanText(item.content || descriptionHtml);
  const excerpt = stripHtml(descriptionHtml);

  const categories = Array.isArray(item.categories)
    ? item.categories.filter(Boolean)
    : item.category
      ? [item.category]
      : ["General"];

  return {
    id: item.id,
    title: item.title || "",
    slug,
    status: item.status || null,
    categories,
    month: dateParts.month,
    day: dateParts.day,
    year: dateParts.year,
    time: item.time || null,
    timezone: item.timezone || null,
    author: item.author || null,
    excerpt,
    content,
    category: categories[0] || "General",
    date,
    image: item.image_url || item.image || null,
    description: descriptionHtml,
  };
}
