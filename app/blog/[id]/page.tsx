import { getAllBlogs, getBlogById } from "@/features/Blog";
import BlogMarkdown from "./BlogMarkdown";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { markdown, title, date } = await getBlogById(id);

  return <BlogMarkdown title={title} date={date} markdown={markdown} />;
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();

  return blogs.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const { title } = await getBlogById(id);
  return {
    title,
  };
}
