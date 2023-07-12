import { getAllBlogsTitles } from "@/features/blog";

export default async function Blog() {
  const titles = await getAllBlogsTitles();

  return (
    <main className="flex flex-col pt-10 items-center">
      <h1>ブログ一覧</h1>
      {(() => {
        let htmlTitles: JSX.Element[] = [];
        for (let title of titles) {
          htmlTitles.push(<h2>{title}</h2>);
        }
        return htmlTitles;
      })()}
    </main>
  );
}
