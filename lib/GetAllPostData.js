import { staticBlogPosts } from "@/components/static-blogs/staticBlogData";

export default async function GetAllPostData() {
  let remoteBlogs = { data: [] };
  try {
    const bloData = await fetch(
      "https://attorneyrobertjohnson-backend.vercel.app/site/blog",
      {
        next: { revalidate: 200 },
      }
    );
    if (bloData.ok) {
      remoteBlogs = await bloData.json();
    } else {
      console.error("Failed to fetch remote blogs: status", bloData.status);
    }
  } catch (error) {
    console.error("Error fetching remote blogs, falling back to static blogs only:", error);
  }

  const sortedBlogs = [...staticBlogPosts, ...(remoteBlogs?.data || [])].sort(
    (a, b) => new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0)
  );

  return {
    ...remoteBlogs,
    data: sortedBlogs,
  };
}

