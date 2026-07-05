import { buildApiUrl } from "@/lib/api-config";

async function fetchBlogsApi(path) {
  const response = await fetch(buildApiUrl(path), {
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
    blog.image ||
    "/website.png"
  );
}

function mapBlog(blog) {
  return {
    id: blog.id,
    slug: String(blog.id),
    title: blog.title || "",
    category: blog.category || "General",
    image: pickFeaturedImage(blog),
    excerpt: blog.excerpt || "",
    date: blog.created_at || blog.updated_at || new Date().toISOString(),
    blocksCount: blog.blocks_count || 0,
  };
}

export async function getBlogs() {
  try {
    const payload = await fetchBlogsApi("/blogs");
    const blogs = Array.isArray(payload?.data) ? payload.data : [];
    return blogs.map(mapBlog);
  } catch (error) {
    console.error("Failed to fetch blogs from API:", error);
    return [];
  }
}

export async function getBlogDetails(id) {
  try {
    const payload = await fetchBlogsApi(`/blogs/${id}`);
    const blog = payload?.data;

    if (!blog) return null;

    const blocks = Array.isArray(blog.blocks)
      ? [...blog.blocks].sort(
          (a, b) => (a.sort_order || 0) - (b.sort_order || 0),
        )
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
  } catch (error) {
    console.error("Failed to fetch blog details from API:", error);
    return null;
  }
}
