import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export async function getBlogById(id: string) {
  const realId = id.replace(/\.md$/, "");
  const fullPath = join("blog", `${realId}.md`);

  const postStr = await fs.promises.readFile(fullPath, "utf-8");

  const { data, content } = matter(postStr);

  return {
    id: realId,
    title: data.title,
    date: data.date,
    markdown: content,
  };
}

export async function getAllBlogs() {
  const posts = await Promise.all(
    fs.readdirSync("blog").map((id) => getBlogById(id))
  );
  return posts;
}

export async function getAllBlogsTitles() {
  const posts = await Promise.all(
    fs
      .readdirSync("blog")
      .map((id) => getBlogById(id).then((post) => post.title))
  );
  return posts;
}
