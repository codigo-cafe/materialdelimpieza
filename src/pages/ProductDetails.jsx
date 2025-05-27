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

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

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
        Loading...
      </motion.section>
    );
  }

  // destructure product
  const { title, price, description, image } = product;

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
          className="pt-32 pb-12 lg:py-32 h-auto flex items-center"
        >
          <div className="container mx-auto">
            {/* image & text wrapper */}
            <div className="flex flex-col lg:flex-row items-center">
              {/* image */}
              <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
                <img
                  src={image}
                  alt={title}
                  className="max-w-[200px] lg:max-w-sm"
                />
              </div>
              {/* text */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                  {title}
                </h1>
                {/* price */}
                <div className="text-xl text-blue-500 font-medium mb-6">
                  {`Bs. ${parseFloat(price).toFixed(2)}`}
                </div>
                {/* description */}
                <p className="mb-8">{description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(product, product.id)}
                    className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded transition duration-300"
                  >
                    Añadir al Carrito
                  </button>
                  <button
                    onClick={() => navigate(-1)}
                    className="cursor-pointer bg-gray-200 hover:bg-gray-300 py-4 px-8 rounded transition duration-300"
                  >
                    Volver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <Navbar />
      </AnimatePresence>
    </>
  );
};

export default ProductDetails;
