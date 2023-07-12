import { marked } from "marked";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import "highlightjs/styles/tomorrow-night-eighties.css";
import { markedHighlight } from "marked-highlight";
import hljs from "highlightjs";

export class Post {
  constructor(
    public id: string,
    public title: string,
    public html: JSX.Element
  ) {}
}

export async function getBlogById(id: string): Promise<Post> {
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

  const post = new Post(
    realId,
    data.title,
    (
      <article className="min-h-screen px-20">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </article>
    )
  );

  return post;
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
