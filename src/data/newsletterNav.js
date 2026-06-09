export function getNewsletterCategories(newsletterItems = []) {
  const fromPosts = newsletterItems.flatMap((item) => item.categories || []);
  return [...new Set(fromPosts.filter(Boolean))].sort((a, b) =>
    a.localeCompare(b),
  );
}
