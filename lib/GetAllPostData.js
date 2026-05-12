import { staticBlogPosts } from "@/components/static-blogs/staticBlogData";

export default async function GetAllPostData() {
  const bloData = await fetch(
    "https://attorneyrobertjohnson-backend.vercel.app/site/blog",
    {
      next: { revalidate: 200 },
    }
  );
  const remoteBlogs = await bloData.json();

  return {
    ...remoteBlogs,
    data: [...staticBlogPosts, ...(remoteBlogs?.data || [])],
  };
}
