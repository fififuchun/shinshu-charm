// import React from "react"
import formIcon from "@/assets/webp/googleForm_Icon.webp";

const Form = () => {
  return (
    <>
      <div className="text-green-600 font-bold text-3xl border-b px-5 mx-3 mt-5">
        CONTACT
      </div>

      <div className="bg-green-600 w-fit rounded-full ml-10 mt-4 text-white text-lg font-bold px-6 py-0.5">
        メールアドレス
      </div>

      <div className="ml-20 mr-4 mt-4">
        <p>shinshu.charm@gmail.com</p>
      </div>

      <div className="bg-green-600 w-fit rounded-full ml-10 mt-4">
        <p className="text-white text-lg font-bold px-6 py-0.5">
          Googleフォーム
        </p>
      </div>

      <a
        href="https://forms.gle/b8UWiebsecKSYRTu8"
        target="_blank"
        rel="noreferrer noopener"
        className="flex w-fit h-32 mx-10 sm:mx-20 my-6 py-2 border border-gray-400 rounded-2xl"
      >
        <div className="flex">
          <img src={formIcon} className="h-full" />
          <div className="flex flex-col justify-center p-4">
            <p className="font-bold">GoogleForm - お問い合わせ</p>
            <p className="text-sm pt-1">外部サイトに移動します</p>
          </div>
        </div>
      </a>

      <div className="text-green-600 font-bold text-3xl border-b px-5 mx-3 mt-20">
        JOIN
      </div>

      <div className="bg-green-600 w-fit rounded-full ml-10 mt-4">
        <p className="text-white text-lg font-bold px-6 py-0.5">
          信州Charmを置きたい方
        </p>
      </div>
      <div className="ml-20 mr-8 mt-4">
        <p>『信州Charmを置きたい』と上記いずれかの媒体にお送りください</p>
      </div>

      <div className="bg-green-600 w-fit rounded-full ml-10 mt-4">
        <p className="text-white text-lg font-bold px-6 py-0.5">
          信州Charmに協賛したい方
        </p>
      </div>
      <div className="ml-20 mr-8 mt-4">
        <p>企業名・担当者名を上記いずれかの媒体にお送りください</p>
      </div>

      <div className="bg-green-600 w-fit rounded-full ml-10 mt-4">
        <p className="text-white text-lg font-bold px-6 py-0.5">
          信州Charmメンバーに加入したい方
        </p>
      </div>
      <div className="ml-20 mr-8 mt-4">
        <p>『興味があります』とだけでも、上記いずれかの媒体にお送りください</p>
      </div>

      <div className="bg-green-600 w-fit rounded-full ml-10 mt-4">
        <p className="text-white text-lg font-bold px-6 py-0.5">
          その他ご用件の方
        </p>
      </div>
      <div className="ml-20 mr-8 mt-4">
        <p>名前・お問い合わせ内容を上記いずれかの媒体にお送りください</p>
      </div>

      {/* <div className="mx-10 my-5">
        <p>これから作っていきます</p>
        <p>載せる情報: googleform・メールアドレス・メンバー加入方法等</p>
      </div> */}
    </>
  );
};

export default Form;
