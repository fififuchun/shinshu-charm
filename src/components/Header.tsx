import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import logo from "@/assets/webp/logo_shinshucharm.webp";
import imgTop from "@/assets/webp/header_shinshucharm.webp";
import imgContact from "@/assets/webp/flower_shinshucharm.webp";

import useIsMobile from "./IsMobile";

export default function TopHeader() {
  // モバイルかどうか
  const isMobile = useIsMobile();

  // サイドバーが開いているかどうか
  const [open, setOpen] = useState(false);
  const clickMenu = () => {
    setOpen(!open);
  };

  // スクロール関連
  useEffect(() => {
    if (open) {
      // スクロール無効化
      document.body.style.overflow = "hidden";
    } else {
      // スクロール有効化
      document.body.style.overflow = "";
    }

    // コンポーネントがアンマウントされたときにスクロールを有効化
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // 今どこのディレクトリにいるか
  const location = useLocation();

  // パスに応じたロゴ画像を選択
  let headImg;
  let explainText: string[] = ["", ""];

  switch (location.pathname) {
    case "/":
      headImg = imgTop;
      break;
    case "/about":
      headImg = imgContact;
      explainText = ["ABOUT", "私たちについて"];
      break;
    case "/contact":
      headImg = imgContact;
      explainText = ["CONTACT", "お問い合わせ"];
      break;
    case "/install":
      headImg = imgContact;
      explainText = ["INSTALL", "配布場所"];
      break;
    case "/article":
      headImg = imgContact;
      explainText = ["ARTICLE", "記事"];
      break;
    default:
      headImg = imgTop;
      break;
  }

  return (
    <header className="flex justify-center relative">
      {/* topなら100%、じゃないなら50% */}
      <div className="relative">
        <img
          src={headImg}
          alt="信州チャーム"
          className={`w-lvw object-cover ${
            location.pathname === "/" ? "h-lvh bg-green-300" : "h-[50vh]"
          }`}
          style={
            location.pathname === "/" ? { objectPosition: "20% 100%" } : {}
          }
        />

        {location.pathname !== "/" && (
          <div className="absolute inset-0 bg-white top-1/2 left-1/2 transform -translate-x-1/2 w-80 h-28 opacity-70 flex flex-col items-center justify-center text-black rounded-xl">
            <p className="text-4xl font-bold">{explainText[0]}</p>
            <p className="text-">{explainText[1]}</p>
          </div>
        )}
      </div>

      {isMobile ? (
        <>
          <div
            className={`h-16 w-11/12 mt-6 rounded-full bg-white flex justify-center items-center z-10 ${
              open ? "fixed top-0" : "absolute"
            }`}
          >
            <Link
              to="/"
              className="h-full flex items-center justify-center transition active:opacity-40"
              onClick={open ? clickMenu : () => {}}
            >
              <img
                src={logo}
                alt="信州チャームロゴ"
                className="h-2/3 object-scale-down"
              />
            </Link>

            <motion.button
              className="w-10 flex flex-col items-center transition-opacity absolute right-6"
              onClick={clickMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
            >
              {/* 1 */}
              <motion.div
                className="bg-green-600 rounded-full list-none w-9 pb-0.5 mt-2.5"
                animate={{
                  rotate: open ? 45 : 0,
                  translateY: open ? 12 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
              {/* 2 */}
              <motion.div
                className="bg-green-600 rounded-full list-none w-9 pb-0.5 mt-2.5"
                initial={{ opacity: 1 }}
                animate={{ opacity: open ? 0 : 1 }}
              />
              {/* 3 */}
              <motion.div
                className="bg-green-600 rounded-full list-none w-9 pb-0.5 mt-2.5"
                animate={{
                  rotate: open ? -45 : 0,
                  translateY: open ? -12 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
              {/* テキスト */}
              <p className="text-green-600 font-bold text-sm">
                {open ? "CLOSE" : "MENU"}
              </p>
            </motion.button>
          </div>

          <div className="fixed">
            {/* 背景 */}
            {open && (
              <div>
                <motion.button
                  className="fixed w-full h-full bg-black left-0 top-0"
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  onClick={clickMenu}
                />
              </div>
            )}

            {/* サイドバー */}
            <motion.nav
              className="fixed top- right-0 bottom-0 w-72 rounded-tl-[250px] min-h-ful text-black flex flex-col justify-end items-center bg-green-100 opacity-95 z-20"
              animate={{ x: open ? 0 : 520 }}
            >
              <div className="h-[10vh] bg-slate-40 w-10"></div>
              <p className="font-bold text-5xl text-green-700">Menu</p>
              <p className="font-bold text-xl mb-[4vh] text-green-700">
                メニュー
              </p>

              <Link
                to="/"
                className="w-2/3 h-[11vh] flex justify-center font-bold text-2xl border-y border-green-300 hover:opacity-50 transition-opacity"
                onClick={clickMenu}
              >
                <p className="content-center">トップ</p>
              </Link>

              <Link
                to="/about"
                className="w-2/3 h-[11vh] flex justify-center font-bold text-2xl border-b border-green-300 hover:opacity-50 transition-opacity"
                onClick={clickMenu}
              >
                <p className="content-center">私たちについて</p>
              </Link>

              <Link
                to="/contact"
                className="w-2/3 h-[11vh] flex justify-center font-bold text-2xl border-b border-green-300 hover:opacity-50 transition-opacity"
                onClick={clickMenu}
              >
                <p className="content-center">お問い合わせ</p>
              </Link>

              <Link
                to="/install"
                className="w-2/3 h-[11vh] flex justify-center font-bold text-2xl border-b border-green-300 hover:opacity-50 transition-opacity"
                onClick={clickMenu}
              >
                <p className="content-center">配布場所</p>
              </Link>

              <Link
                to="/article"
                className="w-2/3 h-[11vh] flex justify-center font-bold text-2xl border-b border-green-300 hover:opacity-50 transition-opacity mb-[1vh]"
                onClick={clickMenu}
              >
                <p className="content-center">記事</p>
              </Link>
            </motion.nav>
          </div>
        </>
      ) : (
        <div className="h-16 w-11/12 mt-6 rounded-full bg-white absolute flex items-center pl-10">
          <Link
            to="/"
            className="w-1/3 h-full flex items-center justify-center transition hover:opacity-40"
          >
            <img
              src={logo}
              alt="信州チャームロゴ"
              className="h-5/6 object-scale-down"
            />
          </Link>

          <ul className="flex justify-around font-bold ml-auto mr-10 lg:space-x-8 md:space-x-6">
            <Link
              to="/about"
              className="transition lg:hover:opacity-40 active:opacity-40"
            >
              私たちについて
            </Link>
            <Link
              to="/contact"
              className="transition lg:hover:opacity-40 active:opacity-40"
            >
              お問い合わせ
            </Link>
            <Link
              to="/install"
              className="transition lg:hover:opacity-40 active:opacity-40"
            >
              配布場所
            </Link>
            <Link
              to="/article"
              className="transition lg:hover:opacity-40 active:opacity-40"
            >
              記事
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
