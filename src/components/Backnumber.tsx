// import React from "react";
import { BACKNUMBER_DATA } from "./datas/Backnumber_data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Backnumber = () => {
  return (
    <>
      <div className="text-green-600 font-bold text-3xl border-b px-5 mx-3 mt-5">
        Shinshu Charm
      </div>
      <div className="bg-green-600 w-fit rounded-full ml-10 mt-4 text-white text-lg font-bold px-6 py-0.5">
        バックナンバー
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 container_ mx-10 p-4 text-center">
        {BACKNUMBER_DATA.map((item, index) => (
          <motion.div
            whileHover={{ scale: 0.8, opacity: 0.7 }}
            whileTap={{ scale: 0.8, opacity: 0.7 }}
            transition={{ duration: 0.2 }}
            key={index}
            className="border p-4 rounded-lg shadow shadow-green-300"
          >
            <Link to={`/backnumber/${BACKNUMBER_DATA.length - index}`}>
              {item.index[0] === 0 ? (
                <img
                  src={`/covers/cover_0_${item.index[1]}_shinshucharm.webp`}
                  alt={`特別号表紙`}
                  className="h-96 w-full min-w-60 object-scale-down"
                />
              ) : (
                <img
                  src={`/covers/cover_${item.index[0]}_shinshucharm.webp`}
                  alt={`${item.index[0]}号目表紙`}
                  className="h-96 w-full min-w-60 object-scale-down"
                />
              )}

              <p className="font-bold text-lg my-3">
                {item.index[0] === 0 ? "特別号" : `${item.index[0]}号目`}&nbsp;
                {item.date}
              </p>
              <p>{item.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Backnumber;
