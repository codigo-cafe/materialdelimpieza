import React, { useContext } from "react";
// import useParams
import { useParams, useNavigate } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import product context
import { ProductContext } from "../contexts/ProductContext";
//import framer motion
import { motion, AnimatePresence } from "motion/react";

// import components
import Navbar from "../components/Navbar";

import { HiPlus, HiMinus, HiOutlineChevronLeft } from "react-icons/hi";

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { cart, addToCart, decreaseAmount } = useContext(CartContext);

  const navigate = useNavigate();

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="h-screen flex justify-center items-center"
      >
        Cargando...
      </motion.section>
    );
  }

  console.log(cart);

  const cartItem = cart.find((item) => {
    return item.id === parseInt(id);
  });

  // destructure product
  const { title, price, description, category, image } = product;

  return (
    <>
      <AnimatePresence>
        <motion.section
          key={id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="pt-22 pb-5 lg:pt-26 lg:pb-10 h-auto flex items-center"
        >
          <div className="container mx-auto">
            <article className="rounded-lg bg-white shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="flex items-center justify-center p-6 md:w-1/2 lg:p-14 xl:p-16">
                  <img src={image} alt={title} className="lg:max-w-sm" />
                </div>
                <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
                  <div className="w-full">
                    <div className="flex w-full items-start justify-between space-x-8 rtl:space-x-reverse">
                      <h1 className="text-lg font-semibold tracking-tight text-heading md:text-xl xl:text-2xl cursor-pointer transition-colors hover:text-accent">
                        {title}
                      </h1>
                    </div>
                    <div className="mt-3 text-sm leading-7 text-body md:mt-4 react-editor-description">
                      <div>{description}</div>
                    </div>
                    <span className="my-5 flex items-center md:my-10">
                      <ins className="text-2xl font-semibold text-blue-500 no-underline md:text-3xl">
                        {`Bs. ${parseFloat(price).toFixed(2)}`}
                      </ins>
                    </span>
                    <div className="mt-6 flex flex-col items-center md:mt-6 lg:flex-row gap-2">
                      <div className="w-full lg:mb-0 lg:max-w-[400px] h-full md:h-14">
                        {/* buttons */}
                        {cartItem ? (
                          <div className="overflow-hidden w-full h-14 rounded text-white bg-blue-500 inline-flex justify-between">
                            <button
                              onClick={() => decreaseAmount(parseInt(id))}
                              className="cursor-pointer p-2 transition-colors duration-200 hover:bg-blue-600 focus:outline-0 px-5"
                            >
                              <span className="sr-only">Reducir</span>
                              <HiMinus className="text-white w-3 h-3" />
                            </button>
                            <div className="flex flex-1 items-center justify-center px-3 text-sm font-semibold">
                              {cartItem.amount}
                            </div>
                            <button
                              onClick={() => addToCart(product, parseInt(id))}
                              className="cursor-pointer p-2 transition-colors duration-200 hover:bg-blue-600 focus:outline-0 px-5"
                              title=""
                            >
                              <span className="sr-only">Aumentar</span>
                              <HiPlus className="text-white w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <button
                              onClick={() => addToCart(product, product.id)}
                              className="cursor-pointer flex w-full items-center justify-center rounded bg-blue-500 py-4 px-5 text-sm font-light text-white transition-colors duration-300 hover:bg-blue-600 focus:bg-blue-600 focus:outline-0 lg:text-base"
                            >
                              <span>Añadir al Carrito</span>
                            </button>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => navigate(-1)}
                        className="cursor-pointer flex w-full items-center justify-center rounded border border-gray-200 bg-transparent py-4 px-5 text-sm font-light text-heading transition-colors duration-300 hover:border-blue-500 hover:text-blue-500 focus:border-blue-600 focus:text-blue-600 focus:outline-0 lg:text-base"
                      >
                        <HiOutlineChevronLeft className="pr-1 w-4 h-4"/>
                        <span>Volver</span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 flex w-full flex-row items-start pt-4 md:mt-6 md:pt-6">
                    <span className="py-1 text-sm font-semibold capitalize text-heading ltr:mr-6 rtl:ml-6">
                      Categoría
                    </span>
                    <div className="flex flex-row flex-wrap">
                      <button className="mb-2 whitespace-nowrap rounded border border-gray-200 bg-transparent py-1 px-2.5 text-sm tracking-wider text-heading transition-colors focus:outline-0 ltr:mr-2 rtl:ml-2">
                        {category}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </motion.section>

        <Navbar />
      </AnimatePresence>
    </>
  );
};

export default ProductDetails;
