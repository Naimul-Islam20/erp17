import { buildApiUrl } from "@/lib/api-config";

function buildBlogsApiUrl(path = "") {
  return buildApiUrl(path);
}

async function fetchBlogsApi(path) {
  const response = await fetch(buildBlogsApiUrl(path), {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs API: ${response.status}`);
  }

  return response.json();
}

function pickFeaturedImage(blog) {
  if (blog.featured_image_url) return blog.featured_image_url;
  return (
    blog.blocks?.find((block) => block.type === "image")?.image_url ||
    "/website.png"
  );
}

export async function getBlogs() {
  const payload = await fetchBlogsApi("/blogs");
  const blogs = Array.isArray(payload?.data) ? payload.data : [];

  return blogs.map((blog) => ({
    id: blog.id,
    slug: String(blog.id),
    title: blog.title || "",
    category: blog.category || "General",
    image: pickFeaturedImage(blog),
    excerpt: blog.excerpt || "",
    date: blog.created_at || blog.updated_at || new Date().toISOString(),
    blocksCount: blog.blocks_count || 0,
  }));
}

export async function getBlogDetails(id) {
  const payload = await fetchBlogsApi(`/blogs/${id}`);
  const blog = payload?.data;

  if (!blog) {
    return null;
  }

  const blocks = Array.isArray(blog.blocks)
    ? [...blog.blocks].sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
    : [];

  return {
    id: blog.id,
    slug: String(blog.id),
    title: blog.title || "",
    category: blog.category || "General",
    image: pickFeaturedImage(blog),
    excerpt:
      blocks.find((block) => block.type === "description")?.body || "",
    date: blog.created_at || blog.updated_at || new Date().toISOString(),
    blocks,
  };
}
