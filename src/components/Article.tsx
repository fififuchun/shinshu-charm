// import React from "react";
import { ARTICLE_DATA } from "./datas/Article_data";
import { useParams } from "react-router-dom";

import latest from "@/assets/webp/latestUpdate.webp";

const Article = () => {
  const param = useParams();

  // 記事のインデックス、-1のときは「」
  const index: number = param.id
    ? ARTICLE_DATA.length - Number(param.id) - 1
    : -1;

  const art = ARTICLE_DATA[index];

  return (
    <div className="mt-5 mx-5 max-w-[800px]">
      {/* 全てにMAX:800pxを効かしたい */}
      <div className="h-fit flex items-center bg-green-00">
        <div className="text-center w-[10vw] min-w-16">
          <p className="text-sm">{art.date[0]}</p>
          <p className="text-2xl -mt-1">
            {art.date[1]}/{art.date[2]}
          </p>
        </div>

        <p className="pl-3 font-bold text-2xl border-l border-slate-500">
          {art.title}
        </p>
      </div>

      <div className="flex items-center m-3">
        <img src={latest} alt="最終更新日時" className="w-4 h-4 mx-1" />
        <p className="text-sm">
          {art.latestUpdate[0]}年{art.latestUpdate[1]}月{art.latestUpdate[2]}日
        </p>
      </div>

      <img
        src={`/article_imgs/article_${Number(param.id)}_shinshucharm.webp`}
        alt={`${index}番目の記事`}
        className="my-5 sm:px-5 w-full"
      />

      {art.main.map((main) => (
        <>
          <div className="text-green-600 font-bold text-3xl border-b px-3 sm:px-5 sm:mx-3 mt-16">
            {main.head}
          </div>

          {main.body.map((body) => (
            <>
              {body.caption === "" ? (
                <div></div>
              ) : (
                <div className="bg-green-600 w-fit rounded-full text-white text-lg font-bold ml-3 sm:ml-10 mt-4 px-6 py-0.5">
                  {body.caption}
                </div>
              )}
              <div className="my-5 sm:m-5 px-6">
                {body.text.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </>
          ))}
        </>
      ))}

      <p className="text-right font-bold m-10">担当：{art.staff}</p>
    </div>
  );
};

export default Article;
