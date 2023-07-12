import { getAllBlogs, getAllBlogsTitles } from "@/features/blog";
import BlogTitle from "./blogTitle";
import { join } from "path";

export default async function Blog() {
  const blogs = await getAllBlogs();

  return (
    <main className="min-h-screen w-screen flex flex-col space-y-12 pt-10">
      <h1 className="text-center">ブログ一覧</h1>
      <div className="px-14 flex flex-col space-y-8">
        {(() => {
          let htmlTitles: JSX.Element[] = [];
          for (let blog of blogs) {
            htmlTitles.push(
              <BlogTitle
                str={blog.title}
                link={join("blog", blog.id)}
              ></BlogTitle>
            );
          }
          return htmlTitles;
        })()}
      </div>
    </main>
  );
}
