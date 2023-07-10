import { getAllPosts, getPostById } from "./post";

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const { html, title } = await getPostById(id);
  return html;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const { title } = await getPostById(id);
  return {
    title,
  };
}
