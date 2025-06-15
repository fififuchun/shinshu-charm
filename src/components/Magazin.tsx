// import React from "react";
// import { BACKNUMBER_DATA } from "./datas/Backnumber_data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Magazin = () => {
  // ウィンドウの横幅
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // パラメータから記事のインデックスを取得
  const param = useParams();

  // 記事のインデックス、-1のときは「」
  const index: number = param.id ? Number(param.id) : -1;

  return (
    <>
      <p className="font-bold text-3xl text-center my-10">{index}号目</p>

      <iframe
        src="https://www.docswell.com/slide/5YD36E/embed"
        allowFullScreen={true}
        className="docswell-iframe my-10 pb-10 px-3"
        style={{
          transformOrigin: "top center",
          width: `${width < 635 ? width : 620}px`,
          height: `${873 * ((width < 635 ? width + 50 : 620 + 50) / 620)}px`,
          margin: "0 auto",
        }}
      ></iframe>

      {/* <div>現在の横幅: {width}px</div> */}
      {/* <div>現在の横幅: {width / 620} times</div> */}
    </>
  );
};

export default Magazin;
