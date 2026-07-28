import GetAllPostData from "@/lib/GetAllPostData";
import { areasOfPractice } from "@/config/areasOfPracticeData";
import { staticBlogPosts } from "@/components/static-blogs/staticBlogData";

export default async function sitemap() {
  const baseUrl = "https://www.attorneyrobertjohnson.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/areas-served",
    "/blog",
    "/car-accidents",
    "/contact",
    "/personal-injury",
    "/privacy-policy",
    "/services",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Services/practice areas routes
  const serviceRoutes = areasOfPractice.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Static blog routes
  const staticBlogRoutes = staticBlogPosts.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.createdAt || new Date()),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Blog routes
  let blogRoutes = [];
  try {
    const blogData = await GetAllPostData();
    if (blogData && blogData.data) {
      blogRoutes = blogData.data.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.createdAt || new Date()),
        changeFrequency: "weekly",
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
  }

  return [...staticRoutes, ...serviceRoutes, ...staticBlogRoutes, ...blogRoutes];
}
