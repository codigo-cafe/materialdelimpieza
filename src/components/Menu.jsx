import React, { useContext } from "react";

// import menu context
import { MenuContext } from "../contexts/MenuContext";
import { motion, AnimatePresence } from "motion/react";

// import background Menu
import Background from "../assets/img/Background-3.jpg";
// import avatar Menu
import Avatar from "../assets/img/Avatar.jpg";
//import icons
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLink,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Menu = () => {
  const { isOpenMenu, handleCloseMenu } = useContext(MenuContext);

  return (
    <AnimatePresence>
      {isOpenMenu && (
        <div>
          <motion.div
            onClick={() => handleCloseMenu()}
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="z-20 fixed w-full h-screen inset-0 bg-black transition duration-300"
          />
          <motion.div
            key="menu"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
              opacity: { ease: "spring" },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }} // limita el arrastre horizontal
            onDragEnd={(event, info) => {
              if (info.offset.x < 100) {
                // si se desliza lo suficiente hacia la derecha, cierra
                handleCloseMenu();
              }
            }}
            className="left-0 w-full h-full bg-white fixed top-0 shadow-2xl z-40 max-w-md"
          >
            <section className="relative flex h-full flex-col">
              <header className="fixed top-0 z-10 flex w-full max-w-md items-center justify-end px-6 py-6">
                <button
                  onClick={() => handleCloseMenu()}
                  className="cursor-pointer flex h-7 w-7 items-center justify-center end-0 rounded-full bg-gray-100 text-gray-400 transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-0"
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

              <div className="grow pt-0 pb-20 overflow-y-auto">
                <div className="p-2 sm:p-3">
                  <img
                    className="w-full h-30 sm:h-40 object-cover rounded-3xl"
                    src={Background}
                    alt=""
                  />
                  <img
                    className="w-24 h-24 sm:w-30 sm:h-30 rounded-full -mt-12 sm:-mt-15 mx-auto border-4 sm:border-6 border-white relative"
                    src={Avatar}
                    alt=""
                  />
                  <h3 className="text-center font-semibold text-primary mb-1">
                    Nombre del Encargado de Ventas
                  </h3>
                  <p className="text-center text-gray-500 text-sm font-light">
                    Encargado de Ventas
                  </p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href="tel:+59178249694"
                      className="cursor-pointer border border-gray-300 hover:bg-blue-500 hover:text-white bg-white shadow-lg rounded-full p-2 transition duration-300"
                    >
                      <HiOutlinePhone />
                    </a>
                    <a
                      href="mailto:m.choque.ramirez@hotmail.com"
                      className="cursor-pointer border border-gray-300 hover:bg-blue-500 hover:text-white bg-white shadow-lg rounded-full p-2 transition duration-300"
                    >
                      <HiOutlineMail />
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(
                        "Mira este sitio web: https://tu-sitio.com"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer border border-gray-300 hover:bg-blue-500 hover:text-white bg-white shadow-lg rounded-full p-2 transition duration-300"
                    >
                      <HiOutlineLink />
                    </a>
                  </div>

                  <div className="flex justify-center mt-4">
                    <a
                      href="https://wa.link/m65jd9"
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer inline-flex items-center justify-center shadow-lg shrink-0 leading-none rounded-full outline-none transition duration-300 ease-in-out bg-blue-500 focus:outline-0 focus:shadow focus:ring-1 focus:bg-blue-600 text-white border border-transparent hover:bg-blue-600 px-10 py-0 text-sm h-9 font-semibold"
                    >
                      Contactar
                    </a>
                  </div>

                  <div className="flex gap-3 mt-8 justify-center">
                    <hr className="bg-gray-200 border-0 rounded-full w-10 h-1" />
                  </div>
                  <div className="flex gap-3 mt-4 justify-center">
                    <HiOutlinePhone className="text-gray-700" />
                    <p className="text-gray-500 text-sm">+591 78249694</p>
                  </div>

                  <div className="flex gap-3 mt-4 justify-center">
                    <HiOutlineLocationMarker className="text-gray-700" />
                    <p className="text-gray-500 text-sm">
                      Pablo Busch #350, Santa Cruz de la Sierra
                    </p>
                  </div>
                </div>
              </div>

              <footer className="fixed bottom-0 z-10 w-full max-w-md px-3 py-3">
                <a
                  href="https://wa.link/m65jd9"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer flex items-center gap-4 rounded-full bg-white p-3 shadow-md outline outline-black/5 dark:bg-gray-800"
                >
                  <span className="inline-flex shrink-0 rounded-full border border-blue-300 bg-blue-100 p-2 dark:border-blue-300/10 dark:bg-blue-400/10">
                    <HiOutlinePhone className="size-6 stroke-blue-700 dark:stroke-blue-500" />
                  </span>
                  <div>
                    <p className="text-gray-700 dark:text-gray-400">
                      <span className="font-medium text-gray-950 dark:text-white">
                        Solicita
                      </span>{" "}
                      tu propia tienda{" "}
                      <span className="font-medium text-gray-950 dark:text-white">
                        AHORA
                      </span>
                    </p>
                  </div>
                </a>
              </footer>
            </section>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
