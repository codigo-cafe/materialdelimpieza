import React, { useState, useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";
// import cart context
import { CategoryContext } from "../contexts/CategoryContext";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import header context
import { HeaderContext } from "../contexts/HeaderContext";
// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

import { motion } from "motion/react";

// import components
import Product from "../components/Product";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  // get category from category context
  const { selectedCategory } = useContext(CategoryContext);
  // get products from product context
  const { products } = useContext(ProductContext);
  // get info cart from cart context
  const { itemAmount, total } = useContext(CartContext);
  // get field search header from header context
  const { searchTerm } = useContext(HeaderContext);

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === null || item.category === selectedCategory;

    const normalize = (str) =>
      str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split(/\s+/);

    const searchableText = `${item.title} ${item.category}`;
    const productWords = normalize(searchableText);
    const searchWords = normalize(searchTerm);

    const matchesSearch = searchWords.every((word) =>
      productWords.some((productWord) => productWord.includes(word))
    );

    return matchesCategory && matchesSearch;
  });

  // header state
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [visibleCount, setVisibleCount] = useState(10);
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <>
      <Hero />
      <section className="pt-2 pb-8">
        <div className="container mx-auto">
          {visibleProducts.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-w-sm mx-auto md:max-w-none md:mx-0">
                {visibleProducts.map((product) => (
                  <Product product={product} key={product.id} />
                ))}
              </div>

              {visibleCount < filteredProducts.length && (
                <div className="flex justify-center mt-8 mb-4 sm:mb-6 lg:mb-2 lg:mt-12">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 10)}
                    className="cursor-pointer inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-blue-700 bg-blue-500 text-white border border-transparent hover:bg-blue-600 px-5 py-0 text-sm h-12 md:text-base"
                  >
                    Mostras más
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-4">
              No hay productos disponibles para esta categoría.
            </p>
          )}
        </div>
      </section>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer fixed top-1/2 z-40 -mt-12 hidden flex-col items-center justify-center rounded bg-blue-500 p-3 pt-3.5 text-sm font-semibold text-white shadow-900 transition-colors duration-200 hover:bg-blue-600 focus:outline-0 ltr:right-0 ltr:rounded-tr-none ltr:rounded-br-none rtl:left-0 rtl:rounded-tl-none rtl:rounded-bl-none lg:flex"
      >
        <span className="flex pb-0.5">
          {/* Contador con animación */}
          <motion.svg
            key={itemAmount} // esto fuerza la animación al cambiar el número
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.2 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            width="14"
            height="16"
            className="shrink-0"
            viewBox="0 0 12.686 16"
          >
            <g transform="translate(-27.023 -2)">
              <g transform="translate(27.023 5.156)">
                <g>
                  <path
                    d="M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z"
                    transform="translate(-53.023 -101.005)"
                    fill="currentColor"
                  ></path>
                </g>
              </g>
              <g transform="translate(30.274 2)">
                <g>
                  <path
                    d="M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z"
                    transform="translate(-157.039)"
                    fill="currentColor"
                  ></path>
                </g>
              </g>
            </g>
          </motion.svg>

          <span className="flex ltr:ml-2 rtl:mr-2 text-sm">
            {itemAmount} Productos
          </span>
        </span>
        <span className="w-full px-2 py-2 mt-3 rounded bg-white text-blue-500">
          Bs. {parseFloat(total).toFixed(2)}
        </span>
      </button>

      <Navbar />
    </>
  );
};

export default Home;
