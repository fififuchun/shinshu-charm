// import React from "react";
// import axios from "axios";
import mountain from "@/assets/webp/mountain_l.webp";
import intro from "@/assets/webp/about_intro_shinshucharm.webp";
// import shinshucharm from "@/assets/webp/about1_shinshucharm.webp";

const About = () => {
  return (
    <>
      <div className="text-green-600 font-bold text-3xl border- px-5 mx-3 mt-5">
        VISION
      </div>

      {/* <img src={intro} alt="WhatIsShinshucharm?" className="px-5 mt-5 w-80" /> */}

      <div className="relative mt-4 mb-8 flex justify-center items-center -z-10">
        <div className="absolute inset-0 bg-slate-900 opacity-40"></div>

        <img
          src={mountain}
          alt="mountain"
          className="w-full h-[600px] object-cover"
        />

        <img
          src={intro}
          alt="WhatIsShinshucharm?"
          className="absolute top-10 px-5 mt-5 w-80"
        />

        {/* <div className="mx-4 sm:mx-10 absolute top-10 bottom-10">
          <img
            src={shinshucharm}
            alt="信州Charm"
            className="opacity-80 rounded-3xl"
          />
        </div> */}

        {/* <div className="mx-4 sm:mx-10 font-bold sm:text-xl max-w-full sm:max-w-[600px] text-white absolute top-10">
          <p>信州Charmは、</p>
          <p className="text-2xl sm:text-3xl font-bold py-1 sm:py-3">
            長野県の大学生を<span className="text-green-800">信州人に</span>
          </p>
          <p>を目標に活動している団体です</p>
        </div>

        <div className="mx-4 sm:mx-10 font-bold text-sm sm:text-base max-w-full sm:max-w-[600px] text-white absolute bottom-10">
          <p>長野県外で就職を希望している大学生の割合は約70%です。</p>
          <p>
            実際、信州大学の卒業生の約60%が長野県外で就職をしており、長野県内での人材不足が深刻な問題となっています。
          </p>
          <p className="mt-4">
            そこで、私たちはこの状況を変えたいとの思いから行動を起こすことにしました。長野県の大学の卒業生が長野県に就職や定住をすることを促し、長野県のさらなる発展に寄与したいと考えています。
          </p>
          <p className="mt-4">
            そのために長野県に来てよかったな、ここに住もうかな、このフリーペーパーを読んで生活が豊かになったなと思ってもらえるような情報を、長野県が大好きな同世代の私たちが発信しよう！と思い、立ち上がったのが、フリーペーパー団体『信州Charm』です。
          </p>
        </div> */}

        <div className="mx-4 sm:mx-10 font-bold text-sm sm:text-base max-w-full sm:max-w-[600px] text-white absolute bottom-20 space-y-2">
          <p className="text-lg sm:text-xl mb-10">
            信州Charmは
            <span className="text-yellow-200 text-xl sm:text-2xl px-1">
              長野県の大学生
            </span>
            が
            <span className="text-yellow-200 text-xl sm:text-2xl px-1">
              長野県外に就職してしまう
            </span>
            状況を変えたい！
          </p>
          <p>
            そう思い、同年代が発信するフリーペーパーを介して、「知らなかった！」「長野県いいかも！」と長野県に住む理由を見つけてもらうために発行しています。
          </p>
          <p>
            多くの長野県の大学生に長野県のことを知ってもらい、長野県に愛着を持ってもらえるように活動を頑張っていきます！
          </p>
          <p>
            そこで、活動に賛同していただける仲間を絶賛募集中です！
            詳しくはトップページのお問い合わせからどうぞ！お待ちしております。
          </p>
        </div>
      </div>

      <div className="text-green-600 font-bold text-3xl border-b px-5 mx-3 mt-5">
        MEMBER
      </div>

      <div className="bg-green-700 w-fit rounded-full ml-10 mt-4">
        <p className="text-white text-lg font-bold px-6 py-0.5">リーダー</p>
      </div>

      <div className="flex flex-col items-center sm:flex-row sm:items-center">
        <img
          src="/photos/信州大学_海沼怜_かいぬま.jpeg"
          alt=""
          className="w-60 h-60 rounded-full m-10 object-cover"
        />

        <div className="mx-6">
          <p className="mb-2">信州大学</p>
          {/* <p>
            <span className="font-bold text-xl">海沼 怜</span>
            &nbsp;/&nbsp;かいぬま
          </p> */}
          <p className="font-bold text-xl">かいぬま</p>
        </div>
      </div>

      <div className="bg-green-600 w-fit rounded-full ml-10 mt-4">
        <p className="text-white text-lg font-bold px-6 py-0.5">メンバー</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* メンバー紹介 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/photos/信州大学OB_向山尚樹_向山尚樹.jpeg"
            alt=""
            className="w-48 h-48 rounded-full m-10 object-cover"
          />
          <div className="mx-4">
            <p className="mb-2">信州大学OB</p>
            <p>
              <span className="font-bold text-xl">向山 尚樹</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="/photos/信州大学_廣村壮吾_ひろむら.JPG"
            alt=""
            className="w-48 h-48 rounded-full m-10 object-cover"
          />
          <div className="mx-4">
            <p className="mb-2">信州大学</p>
            <p>
              <span className="font-bold text-xl">ひろむら</span>
              {/* &nbsp;/&nbsp;ひろむら */}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/photos/信州大学_大浦快斗_おおうら.jpeg"
            alt=""
            className="w-48 h-48 rounded-full m-10 object-cover"
          />
          <div className="mx-4">
            <p className="mb-2">信州大学</p>
            <p>
              <span className="font-bold text-xl">おおうら</span>
              {/* &nbsp;/&nbsp;おおうら */}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="/photos/信州大学_鈴木敏和_とっしー.jpeg"
            alt=""
            className="w-48 h-48 rounded-full m-10 object-cover"
          />
          <div className="mx-4">
            <p className="mb-2">信州大学</p>
            <p>
              <span className="font-bold text-xl">とっしー</span>
              {/* &nbsp;/&nbsp;とっしー */}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/photos/長野大学_武舎冴門_アイザック.jpg"
            alt=""
            className="w-48 h-48 rounded-full m-10 object-cover"
          />
          <div className="mx-4">
            <p className="mb-2">長野大学</p>
            <p>
              <span className="font-bold text-xl">アイザック</span>
              {/* &nbsp;/&nbsp;アイザック */}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/photos/松本大学_鈴木悠太_ゆうた.jpeg"
            alt=""
            className="w-48 h-48 rounded-full m-10 object-cover"
          />
          <div className="mx-4">
            <p className="mb-2">松本大学</p>
            <p>
              <span className="font-bold text-xl">ゆうた</span>
              {/* &nbsp;/&nbsp;ゆうた */}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/photos/信州大学_竹村萌花_もえか.webp"
            alt=""
            className="w-48 h-48 rounded-full m-10 object-cover"
          />
          <div className="mx-4">
            <p className="mb-2">信州大学</p>
            <p>
              <span className="font-bold text-xl">もえか</span>
              {/* &nbsp;/&nbsp;ゆうた */}
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 bg-green-700 rounded-full flex items-center justify-center m-10 flex-shrink-0">
            メンバー2
          </div>
          <p className="mx-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            dicta quasi sit porro est. Ab, quod! Sed soluta, animi vitae est aut
            assumenda molestias, repellendus, quae cum aspernatur at reiciendis!
          </p>
        </div> */}
      </div>
    </>
  );
};

export default About;
