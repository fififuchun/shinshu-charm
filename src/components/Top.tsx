// import React from "react";

export default function Top() {
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-green-600 font-bold text-3xl my-10">信州チャーム</p>

        <p>テスト版です</p>
        <p>
          最新情報は
          <a
            href="https://x.com/ShinshuCharm"
            className="text-blue-700 border-b border-blue"
          >
            公式X
          </a>
          からご覧ください
        </p>
      </div>
    </>
  );
}
