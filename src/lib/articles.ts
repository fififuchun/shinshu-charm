import { createArticles } from "@fififuchun/article-system";

// src/articles/内のmdファイルを取得する
// キー：パス・値：ファイルの内容のRecord<string, string>型
const rawFiles = import.meta.glob("../articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// Recordを渡すと、内容ごとに区切られたArticle型の配列が返ってくる
export const articles = createArticles(rawFiles);
