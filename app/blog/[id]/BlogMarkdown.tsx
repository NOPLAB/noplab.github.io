'use client';

import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
import CodeBlock from './CodeBlock';
import { useTheme } from 'next-themes';

const tocOptions = {
  headings: ['h1', 'h2'],
  cssClasses: {
    toc: '',
    list: '',
    listItem: '',
    link: '',
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
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center">
      <article
        className={
          'w-full pt-10 px-2 prose lg:prose-2xl' +
          (theme === 'dark' ? ' prose-invert' : '')
        }
      >
        <h1>{title}</h1>
        <p className="pb-12">
          {date.toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          })}
        </p>
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
