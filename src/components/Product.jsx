import React, { useContext, useState } from "react";
// import link
import { Link } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";

import { motion, AnimatePresence } from "motion/react";

import { HiPlus, HiMinus } from "react-icons/hi";

const Product = ({ product }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { cart, addToCart, decreaseAmount } = useContext(CartContext);
  // destructure product
  const { id, title, price, category, image } = product;

  const cartItem = cart.find((item) => {
    return item.id === id;
  });

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded border border-[#e4e4e4]"
      >
        <div className="py-4 relative overflow-hidden group transition">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full min-h-[160px] mx-auto flex justify-center items-center">
              {/* Loader */}
              {isLoading && (
                <div className="max-h-[160px] absolute inset-0 bg-gray-300 animate-pulse" />
              )}
              <Link to={`/producto/${id}`}>
                <img
                  src={image}
                  alt={title}
                  onLoad={() => setIsLoading(false)}
                  className={`max-h-[160px] group-hover:scale-110 transition duration-300 ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                />
              </Link>
              <div className="absolute top-3 rounded-full bg-emerald-500 px-1.5 text-xs font-semibold leading-6 text-white ltr:right-3 rtl:left-3 sm:px-2 md:top-4 md:px-2.5 ltr:md:right-4 rtl:md:left-4">
                NUEVO
              </div>
            </div>
          </div>
        </div>
        {/* category & title & price */}
        <div className="relative p-3 md:p-5 md:py-6">
          <div className="text-sm capitalize text-gray-500 mb-1">
            {category}
          </div>
          <Link to={`/producto/${id}`}>
            <h2
              className={`${
                cartItem ? "mr-10 sm:mr-0" : ""
              } mb-2 text-sm font-semibold truncate text-heading`}
            >
              {title}
            </h2>
          </Link>
          <div className="relative flex items-center justify-between mt-4 min-h-10">
            <div className="relative">
              <span className="text-sm font-semibold text-blue-500 md:text-base">{`Bs. ${parseFloat(
                price
              ).toFixed(2)}`}</span>
            </div>
            {/* buttons */}
            {cartItem ? (
              <div className="flex overflow-hidden order-5 sm:order-4 w-9 sm:w-24 h-24 sm:h-10 bg-blue-500 text-white rounded-full flex-col-reverse sm:flex-row absolute sm:relative bottom-0 sm:bottom-auto ltr:right-0 rtl:left-0 ltr:sm:right-auto ltr:sm:left-auto">
                <button
                  className="grid place-content-center cursor-pointer p-2 transition-colors duration-200 hover:bg-blue-600 focus:outline-0 px-3 py-3 sm:px-2"
                  title=""
                  onClick={() => decreaseAmount(id)}
                >
                  <span className="sr-only">Reducir</span>
                  <HiMinus className="text-white w-3 h-3" />
                </button>

                <div className="flex flex-1 items-center justify-center px-3 text-sm font-semibold">
                  {cartItem.amount}
                </div>

                <button
                  className="grid place-content-center cursor-pointer p-2 transition-colors duration-200 hover:bg-blue-600 focus:outline-0 px-3 py-3 sm:px-2"
                  onClick={() => addToCart(product, id)}
                >
                  <span className="sr-only">Aumentar</span>
                  <HiPlus className="text-white w-3 h-3" />
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="cursor-pointer order-5 flex items-center justify-center rounded-full border-2 border-[#e4e4e4] bg-white px-3 py-2 text-sm font-semibold text-blue-500 transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white focus:border-blue-500 focus:bg-blue-500 focus:text-white focus:outline-0 sm:order-4 sm:justify-start sm:px-4"
                  onClick={() => addToCart(product, id)}
                >
                  <svg
                    className="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5"
                    viewBox="0 0 14.4 12"
                  >
                    <g transform="translate(-288 -413.89)">
                      <path
                        fill="currentColor"
                        d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
                      ></path>
                    </g>
                  </svg>
                  <span>Comprar</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Product;
