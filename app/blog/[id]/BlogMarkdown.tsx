"use client";

import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";
import CodeBlock from "./CodeBlock";
import { useTheme, Text } from "@nextui-org/react";

const tocOptions = {
  headings: ["h1", "h2"],
  cssClasses: {
    toc: "",
    list: "",
    listItem: "",
    link: "",
  },
};

export default function BlogMarkdown({
  title,
  date,
  markdown,
}: {
  title: string;
  date: Date;
  markdown: string;
}) {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col items-center">
      <article
        className={
          "w-full pt-10 px-2 prose lg:prose-2xl" +
          (isDark ? " prose-invert" : "")
        }
      >
        <Text h1>{title}</Text>
        <Text size={"$md"} className="pb-12">
          {date.toLocaleDateString("en-us", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </Text>
        <h2>目次</h2>
        <ReactMarkdown
          rehypePlugins={[rehypeSlug, [rehypeToc, tocOptions]]}
          components={{ code: CodeBlock }}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  );
}
