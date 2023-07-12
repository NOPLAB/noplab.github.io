import { marked } from "marked";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import "highlightjs/styles/tomorrow-night-eighties.css";
import { markedHighlight } from "marked-highlight";
import hljs from "highlightjs";

export async function getBlogById(id: string) {
  const realId = id.replace(/\.md$/, "");
  const fullPath = join("blog", `${realId}.md`);

  const postStr = await fs.promises.readFile(fullPath, "utf-8");

  const { data, content } = matter(postStr);

  marked.use(
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlightAuto(code, [language]).value;
      },
    }),
    {
      mangle: false,
      headerIds: false,
    }
  );

  const html = marked(content);

  return {
    id: realId,
    title: data.title,
    date: data.date,
    html: (
      <main className="min-h-screen w-screen flex flex-col space-y-4 px-12 pt-10">
        <h1>{data.title}</h1>
        <div className="pt-10" dangerouslySetInnerHTML={{ __html: html }}></div>
      </main>
    ),
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
