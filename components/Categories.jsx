/*import { AppContext } from "../context/AppContext";
import { useContext } from "react";
const Categories = () => {
  const colors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-purple-100 text-purple-800",
    "bg-indigo-100 text-indigo-800",
    "bg-teal-100 text-teal-800",

    "bg-pink-100 text-pink-800",
    "bg-red-100 text-red-800",
  ];
  const { categoriesData } = useContext(AppContext);
  return (
    <div className="py-16">
      <h1 className="text-2xl md:text-5xl font-semibold text-gray-800">
        PopularCategories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {categoriesData.map((item, index) => {
          const colorClass = colors[index % colors.length];
          return (
            <div
              key={index}
              className={`flex flex-col max-w-[250px]
          items-center justify-center gap-1 border border-gray-300 rounded-xl py-6 px-4 shadow ${colorClass} `}
            >
              <img src={item.icon} alt="" />
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold ">{item.name}</h3>
                <p className="text-sm">{item.positions} Open Positions</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;*/

import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const Categories = () => {
  const colors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-purple-100 text-purple-800",
    "bg-indigo-100 text-indigo-800",
    "bg-teal-100 text-teal-800",
    "bg-pink-100 text-pink-800",
    "bg-red-100 text-red-800",
  ];

  const { categoriesData } = useContext(AppContext);

  return (
    <div className="py-16">
      <h1 className="text-2xl md:text-5xl font-semibold text-gray-800 text-center">
        Popular Categories
      </h1>

      <div className="overflow-x-hidden relative mt-12">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...categoriesData, ...categoriesData].map((item, index) => {
            const colorClass = colors[index % colors.length];
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center gap-4 border border-gray-200 rounded-xl py-10 px-6 shadow-md ${colorClass} min-w-[220px]`}
              >
                <img src={item.icon} alt={item.name} className="w-14 h-14" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm opacity-80">
                    {item.positions} Open Positions
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
