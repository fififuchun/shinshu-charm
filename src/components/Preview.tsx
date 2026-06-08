import { ArticlePreview } from "@fififuchun/article-system";

const Preview = () => {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <ArticlePreview
        imageBasePath="/article_imgs/"
        dateLabel="最終更新日時"
        defaultValue={`---\ntitle: タイトル\ndate: 2026-01-01\nlatestUpdate: 2026-01-01\nstaff: スタッフ名\nthumbnail: art_0.webp\n---\n\n## 見出し2\n\n### 見出し3\n\n#### 見出し4\n\n本文\n\n[URL](url)\n\n---\n\n![](writer-kainuma.webp)\n`}
        classNames={{
          wrapper: "flex h-full",
          editorPane: "w-1/2 flex flex-col border-r border-slate-300",
          textarea:
            "flex-1 w-full font-mono text-sm p-4 resize-none outline-none bg-slate-50",
          previewPane: "w-1/2 overflow-y-auto p-6",
        }}
        articleClassNames={{
          wrapper: "mt-5 mx-5 max-w-[800px]",
          headerWrapper: "h-fit flex items-center",
          dateWrapper: "text-center w-[10vw] min-w-16",
          dateYear: "text-sm",
          dateDay: "text-2xl -mt-1",
          title: "pl-3 font-bold text-2xl border-l border-slate-500",
          latestUpdate: "flex items-center m-3",
          dateIcon: "w-4 h-4 mx-1",
          thumbnail: "my-5 sm:px-5 w-full",
          heading:
            "text-green-600 font-bold text-3xl border-b px-3 sm:px-5 sm:mx-3 mt-16",
          subheading:
            "bg-green-600 w-fit rounded-full text-white text-lg font-bold ml-3 sm:ml-10 mt-4 px-6 py-0.5",
          subsubheading: "font-bold text-base ml-3 sm:ml-5 mt-4 px-6",
          paragraph: "my-5 sm:m-5 px-6",
          image: "my-5 sm:m-5 px-6 w-full",
          footer: "text-right font-bold m-10",
        }}
      />
    </div>
  );
};

export default Preview;
