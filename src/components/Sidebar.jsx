import React, { useContext } from "react";
// import components
import CartItem from "../components/CartItem";
// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import cart context
import { CategoryContext } from "../contexts/CategoryContext";
// import cart context
import { HeaderContext } from "../contexts/HeaderContext";

import { motion, AnimatePresence } from "motion/react";

const Sidebar = () => {
  // get category from category context
  const { setSelectedCategory } = useContext(CategoryContext);
  // get field search header from header context
  const { setSearchTerm } = useContext(HeaderContext);

  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, itemAmount, total } = useContext(CartContext);

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
  };

  const generarMensajeWhatsapp = (cart, total) => {
    let mensaje = "*📦 Nuevo pedido desde la tienda online*\n";
    mensaje += "*🛒 Detalle del carrito:*\n\n";

    cart.forEach((item, index) => {
      mensaje += `${index + 1}. *${item.title}*\n`;
      mensaje += `📸 Imagen: ${item.image}\n`;
      mensaje += `Cantidad: ${item.amount}\n`;
      mensaje += `Precio unitario: Bs. ${parseFloat(item.price).toFixed(2)}\n`;
      mensaje += `Subtotal: Bs. ${parseFloat(item.price * item.amount).toFixed(
        2
      )}\n\n`;
    });

    mensaje += `*🔢 Total del pedido: Bs. ${parseFloat(total).toFixed(2)}*\n\n`;
    mensaje +=
      "✅ Por favor, confirmar disponibilidad y forma de entrega. ¡Gracias!";

    return encodeURIComponent(mensaje); // encodeURIComponent para usar en un enlace de WhatsApp
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div>
          <motion.div
            onClick={() => handleClose()}
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="z-20 fixed w-full h-screen inset-0 bg-black transition duration-300"
          />
          <motion.div
            key="sidebar"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
              opacity: { ease: "spring" },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }} // limita el arrastre horizontal
            onDragEnd={(event, info) => {
              if (info.offset.x > 100) {
                // si se desliza lo suficiente hacia la derecha, cierra
                handleClose();
              }
            }}
            className="right-0 w-full h-full bg-white fixed top-0 shadow-2xl z-40 max-w-md"
          >
            <section className="relative flex h-full flex-col">
              <header className="fixed top-0 right-0 z-10 flex w-full max-w-md items-center justify-between border-b border-gray-200 border-opacity-75 bg-white px-6 py-4">
                <div className="flex font-semibold text-blue-500">
                  <svg
                    width="24"
                    height="22"
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
                  </svg>
                  <span className="flex ltr:ml-2 rtl:mr-2">
                    {itemAmount} Productos
                  </span>
                </div>
                <button
                  onClick={() => handleClose()}
                  className="cursor-pointer flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-0 ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2"
                >
                  <span className="sr-only">cerrar</span>
                  <svg
                    className="h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </header>

              <div className="grow pt-16 pb-20 overflow-y-auto">
                {cart.length > 0 ? (
                  cart.map((item) => {
                    return <CartItem item={item} key={item.id} />;
                  })
                ) : (
                  <div className="flex h-full flex-col items-center justify-center">
                    <svg
                      width="112"
                      height="112"
                      x="0"
                      y="0"
                      viewBox="0 0 504.5 504.5"
                    >
                      <g>
                        <g fill="#b5cdff">
                          <path
                            d="M125.842 135.75H479.1v15H125.842zM143.745 205.75h317.453v15H143.745z"
                            fill="#b5cdff"
                            opacity="1"
                            data-original="#b5cdff"
                          ></path>
                          <path
                            d="M408.357 290.75H323.5l-30 15H159.73v-30h248.627c17.144 0 32.084-11.601 36.33-28.209L487.341 80.75H106.02v-15H497a7.5 7.5 0 0 1 7.267 9.358l-45.046 176.148c-5.947 23.254-26.862 39.494-50.864 39.494z"
                            fill="#b5cdff"
                            opacity="1"
                            data-original="#b5cdff"
                          ></path>
                          <path
                            d="m386.83 282.294 32.294-209.907 14.82 2.28-32.293 209.907zM329.973 282.789l10.724-210.064 14.985.765-10.724 210.064zM262.447 73.684l14.985-.765 10.724 210.065-14.985.765zM184.095 74.295l14.82-2.28 32.294 209.908-14.82 2.28z"
                            fill="#b5cdff"
                            opacity="1"
                            data-original="#b5cdff"
                          ></path>
                        </g>
                        <path
                          fill="#234b72"
                          d="m165 440.75-15 30 15 30c16.569 0 30-13.431 30-30s-13.431-30-30-30z"
                          opacity="1"
                          data-original="#234b72"
                        ></path>
                        <path
                          fill="#375798"
                          d="M135 470.75c0 16.569 13.431 30 30 30v-60c-16.569 0-30 13.431-30 30z"
                          opacity="1"
                          data-original="#375798"
                        ></path>
                        <path
                          fill="#234b72"
                          d="m422 440.75-15 30 15 30c16.569 0 30-13.431 30-30s-13.431-30-30-30z"
                          opacity="1"
                          data-original="#234b72"
                        ></path>
                        <path
                          fill="#375798"
                          d="M392 470.75c0 16.569 13.431 30 30 30v-60c-16.569 0-30 13.431-30 30z"
                          opacity="1"
                          data-original="#375798"
                        ></path>
                        <circle
                          cx="165"
                          cy="470.75"
                          r="7.5"
                          fill="#0e3e4c"
                          opacity="1"
                          data-original="#0e3e4c"
                        ></circle>
                        <circle
                          cx="422"
                          cy="470.75"
                          r="7.5"
                          fill="#0e3e4c"
                          opacity="1"
                          data-original="#0e3e4c"
                        ></circle>
                        <path
                          fill="#a0b4de"
                          d="M452 380.75h-30v30h30c8.284 0 15-6.716 15-15s-6.716-15-15-15zM263.5 320.75h30c16.568 0 30-13.432 30-30h-30z"
                          opacity="1"
                          data-original="#a0b4de"
                        ></path>
                        <path
                          fill="#b5cdff"
                          d="M422 380.75H120c-8.271 0-15-6.729-15-15 0-5.393 2.926-10.398 7.646-13.07l56.314-31.93h94.54c16.568 0 30-13.432 30-30H176.649L117.67 60.15A74.744 74.744 0 0 0 98.05 25.7H76.834v21.216a44.83 44.83 0 0 1 11.77 20.662l59.025 230.779-49.771 28.22C83.759 334.56 75 349.569 75 365.75c0 24.813 20.187 45 45 45h302c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                          opacity="1"
                          data-original="#b5cdff"
                        ></path>
                        <path
                          fill="#ff4c3b"
                          d="M45 3.75H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h30a44.978 44.978 0 0 1 31.834 13.166L98.05 25.7C84.339 12 65.458 3.75 45 3.75z"
                          opacity="1"
                          data-original="#ff4c3b"
                        ></path>
                      </g>
                    </svg>
                    <h4 className="mt-6 text-base font-semibold">
                      Tu carrito de compras está vacio
                    </h4>
                    <button
                      onClick={() => {
                        handleResetFilters();
                        handleClose();
                      }}
                      className="mt-4 cursor-pointer inline-flex items-center justify-center shrink-0 leading-none rounded outline-none transition duration-300 ease-in-out bg-blue-500 focus:outline-0 focus:shadow focus:ring-1 focus:bg-blue-600 bg-accent text-white border border-transparent hover:bg-blue-600 px-3 py-0 text-sm h-9 font-semibold"
                    >
                      Ver Productos
                    </button>
                  </div>
                )}
              </div>

              <footer className="fixed bottom-0 z-10 w-full max-w-md bg-white px-6 py-5">
                <button
                  onClick={() => {
                    const mensaje = generarMensajeWhatsapp(cart, total);
                    window.open(
                      `https://api.whatsapp.com/send/?phone=59178249694&text=${mensaje}`,
                      "_blank"
                    );
                  }}
                  disabled={itemAmount === 0}
                  className={`${
                    itemAmount === 0
                      ? "disabled:bg-blue-300 disabled:cursor-not-allowed"
                      : ""
                  } cursor-pointer flex h-12 w-full justify-between rounded-full bg-blue-500 p-1 text-sm font-bold shadow-2xl transition-colors hover:bg-blue-600 focus:bg-blue-600 focus:outline-0 md:h-14`}
                >
                  <span className="flex h-full flex-1 items-center px-5 text-white text-sm">
                    Finalizar Pedido
                  </span>
                  <span className="flex h-full shrink-0 items-center rounded-full bg-white px-5 text-blue-500">
                    Bs. {parseFloat(total).toFixed(2)}
                  </span>
                </button>
              </footer>
            </section>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
