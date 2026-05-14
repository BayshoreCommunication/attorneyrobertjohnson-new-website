import { staticBlogPosts } from "@/components/static-blogs/staticBlogData";

export default async function GetAllPostData() {
  const bloData = await fetch(
    "https://attorneyrobertjohnson-backend.vercel.app/site/blog",
    {
      next: { revalidate: 200 },
    }
  );
  const remoteBlogs = await bloData.json();
  const sortedBlogs = [...staticBlogPosts, ...(remoteBlogs?.data || [])].sort(
    (a, b) => new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0)
  );

  return {
    ...remoteBlogs,
    data: sortedBlogs,
  };
}
