// import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { ARTICLE_DATA } from "./datas/Article_data";
import { useSidebar } from "@/components/SidebarContext";

import latest from "@/assets/webp/latestUpdate.webp";

const Article = () => {
  const { open } = useSidebar();

  return (
    <>
      <div className="text-green-600 font-bold text-3xl border-b px-5 mx-3 mt-5">
        ARTICLE
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 m-10">
        {ARTICLE_DATA.map((data, index) => (
          <motion.div
            whileHover={{ scale: 0.8, opacity: 0.7 }}
            whileTap={{ scale: 0.8, opacity: 0.7 }}
            transition={{ duration: 0.2 }}
            className={open ? "pointer-events-none" : ""}
          >
            <Link to={`/article/${ARTICLE_DATA.length - index - 1}`}>
              <div
                className="relative w-full -z-"
                style={{ paddingTop: "61.8%" }}
              >
                <img
                  src={`/article_imgs/article_${
                    ARTICLE_DATA.length - index - 1
                  }_shinshucharm.webp`}
                  alt=""
                  className="absolute top-0 left-0 object-cover w-full h-full -z-10"
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
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Article;
