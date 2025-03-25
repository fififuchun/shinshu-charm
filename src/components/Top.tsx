// import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import top_about from "@/assets/webp/top_about_shinshucharm.webp";
import pic1 from "@/assets/webp/picture_1_shinshucharm.webp";
import pic2 from "@/assets/webp/picture_2_shinshucharm.webp";
import intro from "@/assets/webp/about_intro_shinshucharm.webp";

import latest from "@/assets/webp/latestUpdate.webp";

import { ARTICLE_DATA } from "./datas/Article_data";

export default function Top() {
  return (
    <>
      <div className="text-green-600 font-bold text-3xl border-b px-5 mx-3 mt-5">
        ABOUT
      </div>
      <div className="w-fit ml-10 mt-4">
        <img src={intro} alt="shinshucharm?" className="w-56" />
      </div>

      <div className="md:mx-12 my-6 md:flex">
        <div className="md:w-1/2 my-auto py-4 text-center">
          <p>信州Charmは</p>
          <p className="text-2xl py-1 font-bold">
            長野県の大学生を<span className="text-green-600">信州人に</span>
          </p>
          <p>を目標に活動している団体です</p>

          <div className=" flex flex-col">
            <motion.button
              className="mt-8"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
            >
              <Link
                to="/about"
                className="bg-green-600 px-6 py-2 rounded-full font-bold text-white transition active:opacity-50 sm:hover:opacity-50"
              >
                私たちを詳しく知りたい&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="font-bold">→</span>
              </Link>
            </motion.button>

            <motion.button
              className="my-8"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
            >
              <Link
                to="/backnumber"
                className="bg-green-600 px-6 py-2 rounded-full font-bold text-white transition active:opacity-50 sm:hover:opacity-50"
              >
                フリーペーパーを詳しく知りたい&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="font-bold">→</span>
              </Link>
            </motion.button>
          </div>
        </div>

        <img
          src={top_about}
          alt="信州charm冊子"
          className="md:w-1/2 mx-auto rounded-3xl max-w-80"
        />
      </div>

      <div className="text-green-600 font-bold text-3xl border-b px-5 mx-3 mt-5">
        CONTACT
      </div>
      <div className="bg-green-600 w-fit rounded-full ml-10 mt-4">
        <p className="text-white text-lg font-bold px-6 py-0.5">
          興味があるときは？
        </p>
      </div>

      <div className="md:mx-12 my-6 md:flex">
        <div className="md:w-1/2 my-auto py-4 text-center">
          <p>信州Charmの活動に興味がある方はお気軽にご連絡ください！</p>

          <motion.button
            className="my-8 hover:opacity-"
            // onClick={clickMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
          >
            <Link
              to="/contact"
              className="bg-green-600 px-6 py-2 rounded-full font-bold text-white transition active:opacity-50 sm:hover:opacity-50"
            >
              興味がある&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="font-bold">→</span>
            </Link>
          </motion.button>
        </div>

        <img
          src={pic2}
          alt="信州charm冊子"
          className="md:w-1/2 mx-auto rounded-3xl max-w-80"
        />
      </div>

      <div className="text-green-600 font-bold text-3xl border-b px-5 mx-3 mt-5">
        INSTALL
      </div>
      <div className="bg-green-600 w-fit rounded-full ml-10 mt-4">
        <p className="text-white text-lg font-bold px-6 py-0.5">
          どこで手に入る？
        </p>
      </div>

      <div className="md:mx-12 my-6 md:flex">
        <div className="md:w-1/2 my-auto py-4 text-center">
          <p>
            信州Charmは協賛いただいている<span className="font-bold">企業</span>
            や、メンバーの在籍する<span className="font-bold">大学</span>
            等に置かせていただいています
          </p>
          <motion.button
            className="my-8 hover:opacity-"
            // onClick={clickMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
          >
            <Link
              to="/install"
              className="bg-green-600 px-6 py-2 rounded-full font-bold text-white transition active:opacity-50 sm:hover:opacity-50"
            >
              詳細場所を見る&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="font-bold">→</span>
            </Link>
          </motion.button>
        </div>

        <img
          src={pic1}
          alt="信州charm冊子"
          className="md:w-1/2 mx-auto rounded-3xl max-w-80"
        />
      </div>

      <div className="text-green-600 font-bold text-3xl border-b px-5 mx-3 mt-5">
        ARTICLE
      </div>
      <div className="bg-green-600 w-fit rounded-full ml-10 mt-4">
        <p className="text-white text-lg font-bold px-6 py-0.5">最新の記事</p>
      </div>

      <div className="h-fit p-[3vh] mx-[5vw] my-6 text-center rounded-2xl bg-green-100">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* 記事紹介 */}

          {/* <motion.div
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 0.8, opacity: 0.7 }}
            whileTap={{ scale: 0.8, opacity: 0.7 }}
          >
            <div className="w-full aspect-golden">
              <img
                src={article0}
                alt=""
                className="object-cover aspect-golde"
              />
            </div>
            <div className="mx-4">
              <p className="font-bold text-xl my-4">記事名</p>
              <p className="mb-">最終更新日時</p>
            </div>
          </motion.div> */}

          {ARTICLE_DATA.map((data, index) => (
            <motion.div
              whileHover={{ scale: 0.8, opacity: 0.7 }}
              whileTap={{ scale: 0.8, opacity: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              <Link to={`/article/${ARTICLE_DATA.length - index - 1}`}>
                <div
                  className="relative w-full"
                  style={{ paddingTop: "61.8%" }}
                >
                  <img
                    src={`/article_imgs/art_${
                      ARTICLE_DATA.length - index - 1
                    }.webp`}
                    alt=""
                    className="absolute top-0 left-0 object-cover w-full h-full"
                  />
                </div>

                <div className="text-left mx-1">
                  <p className="font-bold text-xl my-4">{data.title}</p>
                  <div className="flex items-center">
                    <img
                      src={latest}
                      alt="最終更新日時"
                      className="w-4 h-4 mx-1"
                    />
                    <p className="text-sm">
                      {data.latestUpdate[0]}年{data.latestUpdate[1]}月
                      {data.latestUpdate[2]}日
                    </p>
                  </div>
                  {/* <p>index: {ARTICLE_DATA.length - index - 1}</p> */}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="mt-8 hover:opacity-"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
        >
          <Link
            to="/article"
            className="bg-green-600 px-6 py-2 rounded-full font-bold text-white transition active:opacity-50 sm:hover:opacity-50"
          >
            記事一覧を見る&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="font-bold">→</span>
          </Link>
        </motion.button>
      </div>
    </>
  );
}
