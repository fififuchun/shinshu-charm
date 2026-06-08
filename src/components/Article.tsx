import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { useParams } from "react-router-dom";

import type { Article as ArticleType } from "@fififuchun/article-system";
import { ClockIcon } from "@fififuchun/article-system";
import { articles } from "@/lib/articles";

const Article = () => {
  const { id } = useParams();
  const article = articles.find((a: ArticleType) => a.id === Number(id));

  if (!article) return <div className="mt-5 mx-5">記事が見つかりません</div>;

  const [year, month, day] = article.date.split("-").map(Number);
  const [ly, lm, ld] = article.latestUpdate.split("-").map(Number);

  return (
    <div className="mt-5 mx-5 max-w-[800px]">
      <div className="h-fit flex items-center">
        <div className="text-center w-[10vw] min-w-16">
          <p className="text-sm">{year}</p>
          <p className="text-2xl -mt-1">
            {month}/{day}
          </p>
        </div>
        <p className="pl-3 font-bold text-2xl border-l border-slate-500">
          {article.title}
        </p>
      </div>

      <div className="flex items-center m-3">
        <ClockIcon className="w-4 h-4 mx-1" />
        <p className="text-sm">
          {ly}年{lm}月{ld}日
        </p>
      </div>

      <img
        src={`/article_imgs/${article.thumbnail}`}
        alt={article.title}
        className="my-5 sm:px-5 w-full"
      />

      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          h2: ({ children }) => (
            <div className="text-green-600 font-bold text-3xl border-b sm:px- sm:mx- mt-16">
              {children}
            </div>
          ),
          h3: ({ children }) => (
            <div className="bg-green-600 w-fit rounded-full text-white text-lg font-bold px-6 ml- sm:ml- mt-4 py-0.5">
              {children}
            </div>
          ),
          h4: ({ children }) => (
            <div className="text-green- font-bold text-base sm:ml-5 mt-4">
              {children}
            </div>
          ),
          p: ({ children }) => (
            <div className="my-5 sm:m-5">
              <p>{children}</p>
            </div>
          ),
          img: ({ src, alt }) => (
            <img
              src={`/article_imgs/${src}`}
              alt={alt ?? ""}
              className="my-5 sm:m-5 w-full"
            />
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:opacity-70 transition block w-fit text-blue-500 border-blue-500 border-b font-bold"
            >
              {children}
            </a>
          ),
        }}
      >
        {article.content}
      </ReactMarkdown>

      <p className="text-right font-bold m-10">担当：{article.staff}</p>
    </div>
  );
};

export default Article;
