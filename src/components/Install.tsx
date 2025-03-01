// import React from "react";

const Install = () => {
  // const today: Date = new Date();

  return (
    <>
      <div className="text-green-600 font-bold text-3xl border-b px-5 mx-3 mt-5">
        設置場所
      </div>
      <div>
        <div className="bg-green-600 w-fit rounded-full ml-10 mt-4">
          <p className="text-white text-lg font-bold px-6 py-0.5">協賛企業</p>
        </div>
        <ul className="list-disc ml-20 mr-8 mt-4">
          <li>テンホウ全店</li>
        </ul>

        <div className="bg-green-600 w-fit rounded-full ml-10 mt-4">
          <p className="text-white text-lg font-bold px-6 py-0.5">大学</p>
        </div>
        <ul className="list-disc ml-20 mr-8 mt-4">
          <li>信州大学 中央図書館</li>
          <li>信州大学 医学部図書館</li>
          <li>信州大学 繊維学部</li>
          <li>公立諏訪東京理科大学</li>
          <li>松本大学</li>
          <li>佐久大学</li>
          <li>長野県立大学</li>
          <li>長野県福祉大学校</li>
        </ul>

        <div className="bg-green-600 w-fit rounded-full ml-10 mt-4">
          <p className="text-white text-lg font-bold px-6 py-0.5">一般の施設</p>
        </div>
        <ul className="list-disc ml-20 mr-8 mt-4">
          {/* <li>上諏訪駅駅前交流テラスすわっチャオ</li>
          <li>諏訪市役所</li>
          <li>上田市役所</li>
          <li>松本市観光情報センター</li> */}
          <li>
            <a
              href={`https://www.google.co.jp/maps/search/上諏訪駅駅前交流テラスすわっチャオ}`}
              target="_blank"
              rel="noreferrer noopener"
              className="border-b border-blue-400 text-blue-500"
            >
              上諏訪駅駅前交流テラスすわっチャオ
            </a>
          </li>
          <li>
            <a
              href={`https://www.google.co.jp/maps/search/諏訪市役所}`}
              target="_blank"
              rel="noreferrer noopener"
              className="border-b border-blue-400 text-blue-500"
            >
              諏訪市役所
            </a>
          </li>
          <li>
            <a
              href={`https://www.google.co.jp/maps/search/上田市役所}`}
              target="_blank"
              rel="noreferrer noopener"
              className="border-b border-blue-400 text-blue-500"
            >
              上田市役所
            </a>
          </li>
          <li>
            <a
              href={`https://www.google.co.jp/maps/search/松本市観光情報センター}`}
              target="_blank"
              rel="noreferrer noopener"
              className="border-b border-blue-400 text-blue-500"
            >
              松本市観光情報センター
            </a>
          </li>
          <li>
            <a
              href={`https://www.google.co.jp/maps/search/TonaRide}`}
              target="_blank"
              rel="noreferrer noopener"
              className="border-b border-blue-400 text-blue-500"
            >
              TonaRide
            </a>
          </li>
        </ul>
      </div>

      <div className="text-green-600 font-bold text-3xl border-b px-5 mx-3 mt-20">
        配布場所（手配り）
      </div>
      <div>
        <div className="bg-green-600 w-fit rounded-full ml-10 mt-4">
          <p className="text-white text-lg font-bold px-6 py-0.5">大学</p>
        </div>
        <ul className="list-disc ml-20 mr-8 mt-4">
          <li>信州大学各種イベント</li>
          <li>松本大学各種イベント</li>
        </ul>
      </div>

      <p className="text-right my-5 mx-8">2024年11月11日現在</p>
    </>
  );
};

export default Install;
