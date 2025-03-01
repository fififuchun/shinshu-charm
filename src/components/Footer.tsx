// import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "@/assets/webp/logo/logo_shinshucharm.webp";
import logo_x from "@/assets/webp/logo/logo_black.webp";
import logo_insta from "@/assets/webp/logo/logo_Instagram.webp";
import logo_gmail from "@/assets/webp/logo/logo_gmail.webp";

const Footer = () => {
  return (
    <>
      <div className="bg-green-400 flex flex-col items-center mt-5">
        <img src={logo} alt="信州チャーム" className="w-96 py-5" />

        <div className="flex list-none space-x-8 font-bold text-sm py-5">
          <Link
            to="/"
            className="active:text-white md:hover:text-white duration-200"
          >
            サイトトップ
          </Link>
          <Link
            to="/contact"
            className="active:text-white md:hover:text-white duration-200"
          >
            お問い合わせ
          </Link>
          <Link
            to="/about"
            className="active:text-white md:hover:text-white duration-200"
          >
            私たちについて
          </Link>
        </div>

        <div className="flex items-center list-none space-x-8 pb-8">
          <motion.a
            className="bg-white h-16 w-16 rounded-full flex justify-center items-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            href="https://x.com/ShinshuCharm"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="w-8 h-8" src={logo_x} alt="公式X" />
          </motion.a>
          <motion.a
            className="bg-white h-16 w-16 rounded-full flex justify-center items-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            href="https://www.instagram.com/shinshucharm"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="w-10 h-10" src={logo_insta} alt="公式Instagram" />
          </motion.a>
          <Link to="/contact">
            <motion.button
              className="bg-white h-16 w-16 rounded-full flex justify-center items-center"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <img
                className="w-10 h-10"
                src={logo_gmail}
                alt="公式メールアドレス"
              />
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="bg-green-600 w-full h-10 text-white flex items-center justify-center font-bold text-sm">
        &copy;&ensp;2022-2025&ensp;信州チャーム, shinshucharm
      </div>
    </>
  );
};

export default Footer;
