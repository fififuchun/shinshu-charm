import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { ClockIcon } from "@fififuchun/article-system";
import { articles } from "@/lib/articles";
import { useSidebar } from "@/components/SidebarContext";

const Articles = () => {
  const { open } = useSidebar();
  const sorted = [...articles].reverse();

  return (
    <>
      <div className="text-green-600 font-bold text-3xl border-b px-5 mx-3 mt-5">
        ARTICLE
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 m-10">
        {sorted.map((article) => {
          const [y, m, d] = article.latestUpdate.split("-").map(Number);
          return (
            <motion.div
              key={article.id}
              whileHover={{ scale: 0.8, opacity: 0.7 }}
              whileTap={{ scale: 0.8, opacity: 0.7 }}
              transition={{ duration: 0.2 }}
              className={open ? "pointer-events-none" : ""}
            >
              <Link to={`/article/${article.id}`}>
                <div className="relative w-full" style={{ paddingTop: "61.8%" }}>
                  <img
                    src={`/article_imgs/${article.thumbnail}`}
                    alt=""
                    className="absolute top-0 left-0 object-cover w-full h-full -z-10"
                  />
                </div>
                <div className="text-left mx-1">
                  <p className="font-bold text-xl my-4">{article.title}</p>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mx-1" />
                    <p className="text-sm">{y}年{m}月{d}日</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Articles;
