import { useEffect /*, useState*/ } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// import { IsSide } from "./IsSide";

import logo from "@/assets/webp/logo/logo_shinshucharm.webp";
// import imgAbout from "@/assets/webp/header_about_shinshucharm.webp";
import imgContact from "@/assets/webp/flower_shinshucharm.webp";
import imgInstall from "@/assets/webp/header_install_shinshucharm.webp";
import imgArticle from "@/assets/webp/header_article.webp";

import useIsMobile from "./IsMobile";
import { useSidebar } from "@/components/SidebarContext";

const Header = () => {
  // モバイルかどうか
  const isMobile = useIsMobile();

  // サイドバーが開いているかどうか
  const { open, setOpen } = useSidebar();
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

  //ヘッダー画像群
  const headImgs = [imgContact, imgInstall, imgArticle];

  // パスに応じたロゴ画像を選択
  let headImg;
  let explainText: string[] = ["", ""];

  switch (true) {
    case location.pathname === "/":
      headImg = headImgs[getRandomInt(0, headImgs.length - 1)];
      break;
    case location.pathname === "/about":
      headImg = imgContact;
      explainText = ["ABOUT", "私たちについて"];
      break;
    case location.pathname === "/contact":
      headImg = imgContact;
      explainText = ["CONTACT", "お問い合わせ"];
      break;
    case location.pathname === "/install":
      headImg = imgInstall;
      explainText = ["INSTALL", "設置場所"];
      break;
    case location.pathname === "/article":
      headImg = imgArticle;
      explainText = ["ARTICLE", "記事"];
      break;
    case /^\/article\/\d+$/.test(location.pathname): // /article/の後に数字が続くパス
      headImg = imgArticle;
      explainText = ["ARTICLE", "記事"];
      break;
    case location.pathname === "/backnumber":
      headImg = imgArticle;
      explainText = ["BACKNUMBER", "刊行済み冊子"];
      break;
    default:
      headImg = imgContact;
      explainText = ["OTHER", "その他"];
      break;
  }

  // const styleMap: { [key: string]: { objectPosition: string } } = {
  //   "/about": { objectPosition: "50% 3%" },
  // };

  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
          // style={styleMap[location.pathname] || {}}
        />

        {location.pathname === "/" ? (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white font-bold text-center text-xl">
            <p>SCROLL</p>
            <p className="text-2xl">↓</p>
          </div>
        ) : (
          <div className="absolute inset-0 bg-white top-1/2 left-1/2 transform -translate-x-1/2 w-80 h-28 opacity-70 flex flex-col items-center justify-center text-black rounded-xl">
            <p className="text-4xl font-bold">{explainText[0]}</p>
            <p className="text-">{explainText[1]}</p>
          </div>
        )}
      </div>

      {isMobile ? (
        <>
          <div
            className={`h-14 sm:h-16 w-11/12 mt-6 rounded-full bg-white flex justify-center items-center z-10 ${
              open ? "fixed top-0" : "absolute"
            } ${location.pathname === "/about" ? "opacity-80" : ""}`}
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
                to="/about"
                className="w-2/3 h-[11vh] flex justify-center font-bold text-2xl border-y border-green-300 active:opacity-50 transition-opacity"
                onClick={clickMenu}
              >
                <p className="content-center">私たちについて</p>
              </Link>

              <Link
                to="/contact"
                className="w-2/3 h-[11vh] flex justify-center font-bold text-2xl border-b border-green-300 active:opacity-50 transition-opacity"
                onClick={clickMenu}
              >
                <p className="content-center">お問い合わせ</p>
              </Link>

              <Link
                to="/install"
                className="w-2/3 h-[11vh] flex justify-center font-bold text-2xl border-b border-green-300 active:opacity-50 transition-opacity"
                onClick={clickMenu}
              >
                <p className="content-center">設置場所</p>
              </Link>

              <Link
                to="/article"
                className="w-2/3 h-[11vh] flex justify-center font-bold text-2xl border-b border-green-300 active:opacity-50 transition-opacity"
                onClick={clickMenu}
              >
                <p className="content-center">記事</p>
              </Link>

              <Link
                to="/backnumber"
                className="w-2/3 h-[11vh] flex justify-center font-bold text-2xl border-b border-green-300 active:opacity-50 transition-opacity mb-[1vh]"
                onClick={clickMenu}
              >
                <p className="content-center">バックナンバー</p>
              </Link>
            </motion.nav>
          </div>
        </>
      ) : (
        <div
          className={`h-16 w-11/12 mt-6 rounded-full bg-white absolute flex items-center pl-10 ${
            location.pathname === "/about" ? "opacity-80" : ""
          }`}
        >
          <Link
            to="/"
            className="w-fit h-full flex items-center justify-center transition hover:opacity-40"
          >
            <img
              src={logo}
              alt="信州チャームロゴ"
              className="h-5/6 object-scale-down"
            />
          </Link>

          <ul className="flex justify-around font-bold ml-auto mr-6 lg:space-x-8 md:space-x-2.5 text-sm lg:text-base">
            <Link to="/about" className="transition hover:text-green-500">
              私たちについて
            </Link>
            <Link to="/contact" className="transition hover:text-green-500">
              お問い合わせ
            </Link>
            <Link to="/install" className="transition hover:text-green-500">
              設置場所
            </Link>
            <Link to="/article" className="transition hover:text-green-500">
              記事
            </Link>
            <Link to="/backnumber" className="transition hover:text-green-500">
              バックナンバー
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export { Header };
