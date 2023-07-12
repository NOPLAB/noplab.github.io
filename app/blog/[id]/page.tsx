import { getAllBlogs, getBlogById } from "../../../features/blog";

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const { html } = await getBlogById(id);
  return html;
}

export async function generateStaticParams() {
  const posts = await getAllBlogs();

  return posts.map((post) => ({
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
